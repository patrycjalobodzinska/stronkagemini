import useEmblaCarousel, {
  EmblaOptionsType,
  EmblaPluginType,
} from 'embla-carousel-react';

import { useCallback, useEffect, useRef, useState } from 'react';

export const useCarousel = ({
  options,
  plugins,
  slidesLength,
  infiniteAutoScroll,
}: {
  options?: EmblaOptionsType;
  plugins?: EmblaPluginType[];
  slidesLength?: number;
  infiniteAutoScroll?: boolean;
}) => {
  const rafId = useRef<number>(0); // requestAnimationFrame ID
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options, plugins);
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: 'keepSnaps',
    dragFree: true,
  });

  const scrollPrev = useCallback(
    () => emblaMainApi && emblaMainApi.scrollPrev(),
    [emblaMainApi]
  );
  const scrollNext = useCallback(
    () => emblaMainApi && emblaMainApi.scrollNext(),
    [emblaMainApi]
  );
  const scrollTo = useCallback(
    (index: number) => emblaMainApi && emblaMainApi.scrollTo(index),
    [emblaMainApi]
  );

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaMainApi || !emblaThumbsApi) return;
      if (emblaThumbsApi.clickAllowed()) emblaMainApi.scrollTo(index);
    },
    [emblaMainApi, emblaThumbsApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaMainApi) return;
    setSelectedIndex(emblaMainApi.selectedScrollSnap());
    if (!emblaThumbsApi) return;
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap());
  }, [emblaMainApi, setSelectedIndex]);

  const onImageClick = useCallback(
    (index: number) => {
      if (!emblaMainApi) return;
      emblaMainApi.scrollTo(index);
    },
    [emblaMainApi]
  );

  const animate = useCallback(() => {
    if (!emblaMainApi || !rafId.current) return;

    const engine = emblaMainApi.internalEngine();

    engine.scrollBody.useSpeed(2);
    engine.location.add(-1);
    engine.target.set(engine.location);
    engine.scrollLooper.loop(-1);
    engine.slideLooper.loop();
    engine.translate.to(engine.location);
    rafId.current = requestAnimationFrame(animate);
  }, [emblaMainApi]);

  const startAutoScroll = useCallback(() => {
    rafId.current = requestAnimationFrame(animate);
  }, [animate]);

  const stopAutoScroll = useCallback(() => {
    cancelAnimationFrame(rafId.current);
  }, []);

  useEffect(() => {
    if (!emblaMainApi) return;
    onSelect();
    setScrollSnaps(emblaMainApi.scrollSnapList());
    emblaMainApi.on('select', onSelect);
    emblaMainApi.on('reInit', onSelect);

    if (infiniteAutoScroll) {
      emblaMainApi.on('pointerDown', stopAutoScroll);
      emblaMainApi.on('settle', startAutoScroll);

      startAutoScroll();
      return () => stopAutoScroll();
    }
  }, [emblaMainApi, onSelect, startAutoScroll, stopAutoScroll]);

  useEffect(() => {
    if (!emblaMainApi) return;
    emblaMainApi.reInit();
    onSelect();
    setScrollSnaps(emblaMainApi.scrollSnapList());
  }, [slidesLength, emblaMainApi]);

  return {
    emblaMainApi,
    emblaThumbsApi,
    scrollSnaps,
    selectedIndex,
    emblaMainRef,
    emblaThumbsRef,
    setSelectedIndex,
    scrollNext,
    scrollPrev,
    onSelect,
    scrollTo,
    onImageClick,
    onThumbClick,
  };
};
