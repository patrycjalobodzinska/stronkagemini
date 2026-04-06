import { useCarousel } from './useCarousel';

export const PartnershipCarousel = () => {
  const data = [
    {
      photo: 'dre.jpg',
    },
    {
      photo: 'husky.png',
    },
    {
      photo: 'gerda.jpg',
    },
    {
      photo: 'wisniowski.png',
    },
    {
      photo: 'hikvision.png',
    },
  ];

  const slides = data?.map((item) => item);

  const { emblaMainRef } = useCarousel({
    options: {
      align: 'start',
      containScroll: 'trimSnaps',
      loop: true,
      dragFree: true,
    },
    infiniteAutoScroll: slides?.length > 4,
  });

  return (
    <section className="relative w-full h-[200px] lg:h-[100px] sm:mx-auto md:my-16 ">
      <div className="mb-6 flex flex-col items-center justify-center gap-3 md:mb-16">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800 sm:text-4xl">
          Nasi partnerzy
        </h2>
        <div className="h-1 w-14 rounded-full bg-gradient-to-r from-primary to-amber-300" />
      </div>
      <div className="h-[100px] lg:h-[100px] mt-8 lg:mt-0">
        <div className="relative p-0 max-w-[100vw]">
          <div className="relative overflow-hidden" ref={emblaMainRef}>
            <div className="flex h-auto -ml-8 sm:-ml-12 lg:-ml-16">
              {slides.map((item, index) => (
                <div
                  className={`relative flex-[0_0_50%] sm:flex-[0_0_33.333%] lg:flex-[0_0_25%] w-full min-w-0 pl-8 sm:pl-12 lg:pl-16`}
                  key={index}
                >
                  <img
                    className={`block w-full object-contain transition-all max-h-[100px] h-full`}
                    src={item?.photo}
                    alt=""
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
