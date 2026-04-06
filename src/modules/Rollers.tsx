import home from '@/public/house.png';
import Image from 'next/image';
import garage from '@/public/garage.png';
import Link from 'next/link';
import { BsArrowRight } from 'react-icons/bs';
import { useState } from 'react';
const GarageDoors = () => {
  const [hover, setHover] = useState<boolean>(false);
  return (
    <div
      className="lg:mt-44 flex flex-col md:grid md:grid-cols-2 w-full gap-6  items-center
    "
    >
      <div className="relative xl:h-[25rem] xl:w-[37rem] md:h-[23rem] md:w-[23rem] h-[17rem] w-[17rem]">
        <div className="absolute right-0 bg-[#f0f8fa] rounded-full bottom-4 h-[14rem] w-[14rem] xl:h-[27rem] xl:w-[27rem] md:h-[23rem] md:w-[23rem]"></div>
        <div className="absolute bottom-0 -left-2  xl:h-[25rem] xl:w-[25rem] md:h-[16rem] md:w-[16rem] h-[12rem] w-[12rem] ">
          <Image src={home} alt="" />
        </div>{' '}
        <div className="absolute -bottom-4 right-0 xl:h-[15rem] h-[7rem] xl:w-[15rem] md:h-[9rem] md:w-[9rem] w-[7rem]">
          <Image src={garage} alt="" />
        </div>{' '}
      </div>
      <div className="px-4 sm:px-8">
        <div className="text-3xl font-bold mt-6 sm:mt-0">
          {' '}
          Bramy Garażowe i Wjazdowe
        </div>{' '}
        <div className="text-2xl font-semibold text-gray-500 mt-1 ">
          {' '}
          Elegancja i Bezpieczeństwo w Jednym
        </div>
        <div className="text-gray-500 mt-8 ">
          W naszej ofercie znajdziesz doskonałe rozwiązania bram garażowych i
          wjazdowych, które harmonijnie łączą estetykę z funkcjonalnością. Nasze
          bramy nie tylko zabezpieczają Twój dom, ale również dodają mu
          wyjątkowego charakteru. Wybierając spośród różnorodnych wzorów,
          kształtów i kolorów, możesz dopasować bramę do stylu Twojego budynku.
          Nowoczesne systemy zamykania oraz wygoda obsługi sprawiają, że
          korzystanie z bram staje się codzienną przyjemnością. Zapewniamy
          trwałe, odporne na warunki atmosferyczne rozwiązania, które cieszą oko
          i gwarantują spokój
        </div>{' '}
        <div className="flex items-start justify-start md:mt-8 mt-4">
          <Link href={`/security`}>
            <div
              style={{
                backgroundImage:
                  ' linear-gradient(270deg, rgba(255,197,36,1) 0%, rgba(252,223,42,1) 74%)',
                transition: 'all 0.5s ease',
                opacity: !hover ? '100%' : '70%',
                // backgroundColor: '#fcdf2a',
              }}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              className=" pl-3 h-10 font-semibold bg-primary shadow-md items-center text-lg gap-4 flex justify-between text-white rounded-full py-1.5 px-1.5  transition-all cursor-pointer"
            >
              Zobacz
              <div className="border-2 w-[1.9rem]  h-[1.9rem] flex items-center justify-center border-white rounded-full">
                <BsArrowRight />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default GarageDoors;
