'use client';
import { SiElectron } from 'react-icons/si';
import { RxGear } from 'react-icons/rx';
import { LiaAwardSolid } from 'react-icons/lia';
import { BsShieldCheck } from 'react-icons/bs';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useMediaQuery, useWindowEvent, useWindowScroll } from '@mantine/hooks';

const Section = () => {
  const [highlightedIndex, setHighlightedIndex] = useState<number>(0);
  const size = useMediaQuery('(min-width:600px)');
  const [scroll] = useWindowScroll();
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  const isInCenter = (number: number, ref: any) => {
    return (
      scroll.y >
        ref?.current?.offsetTop / 2 -
          (ref?.current?.offsetParent?.clientHeight - ref?.current?.offsetTop) +
          number * 208 &&
      scroll.y <
        ref?.current?.offsetTop / 2 -
          (ref?.current?.offsetParent?.clientHeight - ref?.current?.offsetTop) +
          (number + 1) * 208
    );
  };
  const ref4 = useRef(null);

  const isInViewport1 = isInCenter(0, ref1);

  const isInViewport2 = isInCenter(1, ref1);
  const isInViewport3 = isInCenter(2, ref1);
  const isInViewport4 = isInCenter(3, ref1);
  useEffect(() => {
    const interval = setInterval(() => {
      setHighlightedIndex((prevIndex) => (prevIndex + 1) % 4);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const cardBase =
    'cursor-default flex h-52 flex-col items-center justify-center rounded-2xl border transition duration-500 ease-in-out';
  const cardInactive =
    'border-slate-200/80 bg-white text-slate-700 shadow-soft hover:border-slate-300';
  const cardActive =
    'scale-[1.03] border-transparent bg-brand-navy text-white shadow-lift';

  return (
    <div className="mt-12 grid w-full gap-4 rounded-3xl bg-gradient-to-b from-brand-100/80 to-brand-50/50 px-4 py-6 md:px-2 lg:grid-cols-2 lg:bg-brand-100/60 lg:shadow-soft">
      <div className="grid gap-4 md:grid-cols-2">
        <div
          ref={ref1}
          className={`${cardBase} ${
            (size && highlightedIndex === 0) || (isInViewport1 && !size)
              ? cardActive
              : `${cardInactive} lg:bg-white/80`
          }`}
        >
          <div
            className={`${
              highlightedIndex === 0 && ' '
            } flex  flex-col items-center  justify-center `}
          >
            <SiElectron
              className={
                (size && highlightedIndex === 0) || (isInViewport1 && !size)
                  ? 'text-primary'
                  : 'text-brand-navy'
              }
              style={{
                stroke: 'currentColor',
                strokeWidth: '0.5',
              }}
              size={40}
            />
            <div className="text-lg font-semibold mt-2">Innowacje</div>
            <div className=" text-center px-4 mt-2">
              Dzięki najnowszym technologiom oferujemy skuteczne rozwiązania w
              atrakcyjnej cenie.
            </div>
          </div>{' '}
        </div>
        <div
          ref={ref2}
          className={`${cardBase} ${
            (size && highlightedIndex === 1) || (isInViewport2 && !size)
              ? cardActive
              : `${cardInactive} lg:bg-white/80`
          }`}
        >
          {' '}
          <div
            className={`${
              highlightedIndex === 1 && ' '
            } flex  flex-col items-center  justify-center `}
          >
            {' '}
            <LiaAwardSolid
              className={
                (size && highlightedIndex === 1) || (isInViewport2 && !size)
                  ? 'text-primary'
                  : 'text-brand-navy'
              }
              style={{ margin: '-5px' }}
              size={45}
            />
            <div className={`text-lg font-semibold mt-2`}>
              Wysoka jakość
            </div>{' '}
            <div className=" text-center  px-4 mt-2">
              {/* Doskonała jakość - Nasza obietnica dla Ciebie. */}
              Wieloletnie doświadczenie oraz stale powiększające się grono
              zadowolonych klientów
            </div>
          </div>{' '}
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div
          ref={ref3}
          className={`${cardBase} ${
            (size && highlightedIndex === 2) || (isInViewport3 && !size)
              ? cardActive
              : `${cardInactive} lg:bg-white/80`
          }`}
        >
          {' '}
          <div
            className={`${
              highlightedIndex === 2 && ' '
            } flex  flex-col items-center  justify-center `}
          >
            <BsShieldCheck
              className={
                (size && highlightedIndex === 2) || (isInViewport3 && !size)
                  ? 'text-primary'
                  : 'text-brand-navy'
              }
              size={40}
            />
            <div className="text-lg font-semibold mt-2">
              Najlepsze produkty
            </div>{' '}
            <div className=" text-center  px-4 mt-2">
              Oferujemy wyłącznie sprawdzone przez nas produkty najwyższej
              jakości.
            </div>{' '}
          </div>
        </div>{' '}
        <div
          ref={ref4}
          className={`${cardBase} ${
            (size && highlightedIndex === 3) || (isInViewport4 && !size)
              ? cardActive
              : `${cardInactive} lg:bg-white/80`
          }`}
        >
          <div
            className={`${
              highlightedIndex === 3 && ' '
            } flex  flex-col items-center  justify-center `}
          >
            <RxGear
              className={
                (size && highlightedIndex === 3) || (isInViewport4 && !size)
                  ? 'text-primary'
                  : 'text-brand-navy'
              }
              size={40}
            />
            <div className="text-lg font-semibold mt-2">Topowe usługi</div>
            <div className=" text-center  px-4 mt-2">
              Nasze usłgugi realizowane są przez zespoł doświadczonych fachowców{' '}
            </div>{' '}
          </div>
        </div>
      </div>
      {/* <div className="bg-white w-full h-full rounded-lg shadow-md ">
        <div className="flex items-center justify-center">
          <div
            style={{
              width: "100px",
              height: "100px",
              clipPath:
                "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
              background: "#194569",
            }}
            className="relative  "
          >
            {" "}
            <div className="absolute top-0 w-full h-full flex items-center justify-center flex-col">
              <svg width="100%" height="100%">
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop stopColor="#fcdf2a" offset="40%" />
                  <stop stopColor="#edc62d" offset="100%" />
                </linearGradient>
                <FaAward
                  size={50}
                  style={{
                    fill: "url(#gradient)",
                  }}
                />
              </svg>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};
export default Section;

export const useMounted = () => {
  const [mounted, setMounted] = useState<boolean>(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return mounted;
};

//innowacje
// Dzięki dostępowi do najnowszych technologii, jesteśmy w stanie zapewnić najbardziej skuteczne rozwiązania w atrakcyjnej cenie.
//najlepsze produkty
// W ofercie znajduą sie tylko sprawdzone przez nas produkty

//wysoka jakość usług
// zatrudniamy najlepszych fachowców z długim doświadczeniem

//wysoka jakość
// Wieloletnie doświadczenie oraz wciąż rosnąca lista Klientów
// function useIsInViewport(ref: any, ok?: any) {
//   const [isIntersecting, setIsIntersecting] = useState(false);

//   const observer = useMemo(
//     () =>
//       new IntersectionObserver(([entry]) => {
//         setIsIntersecting(entry.isIntersecting);
//         ok ? console.log(entry) : null;
//       }),
//     []
//   );

//   useEffect(() => {
//     observer.observe(ref.current);

//     return () => {
//       observer.disconnect();
//     };
//   }, [ref, observer]);

//   return isIntersecting;
// }
