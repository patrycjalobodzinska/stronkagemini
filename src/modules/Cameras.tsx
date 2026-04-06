import home from '@/public/house.png';
import Image from 'next/image';
import camera from '@/public/cctv-camera.png';
import camera2 from '@/public/cctv.png';
import Link from 'next/link';
import { BsArrowBarRight, BsArrowRight } from 'react-icons/bs';
import { useState } from 'react';

const Cameras = () => {
  const [hover, setHover] = useState<boolean>(false);
  return (
    <div
      className="lg:mt-44 flex gap-6  items-center flex-col  md:grid md:grid-cols-2 w-full   
    "
    >
      <div className="relative xl:h-[25rem] xl:w-[37rem] md:h-[23rem] md:w-[23rem] h-[14rem] w-[15rem] md:mb-0 mb-12">
        <div className="absolute right-0 bg-[#f0f8fa] rounded-full bottom-4 h-[14rem] w-[14rem] xl:h-[27rem] xl:w-[27rem] md:h-[23rem] md:w-[23rem]"></div>
        <div className="absolute bottom-2 left-2  xl:h-[15rem] xl:w-[15rem] md:h-[13rem] md:w-[13rem] h-[6rem] w-[6rem]">
          <Image src={camera2} alt="" />
        </div>{' '}
        <div className="absolute top-0 right-0 xl:h-[15rem] xl:w-[15rem]   md:h-[13rem] md:w-[13rem] h-[6rem] w-[6rem]">
          <Image src={camera} alt="" />
        </div>{' '}
      </div>
      <div className="sm:px-8 px-4">
        <div className="text-3xl font-bold "> Kamery CCTV</div>{' '}
        <div className="text-2xl font-semibold text-gray-500 mt-1 ">
          {' '}
          Nieustanne Monitorowanie Twojej Przestrzeni
        </div>
        <div className="text-gray-500 sm:mt-8 mt-4  ">
          Nasze zaawansowane systemy kamer CCTV to pewność, że Twój dom czy
          firma są pod stałą ochroną. Dzięki nowoczesnej technologii i wysokiej
          jakości obrazu, możesz śledzić i nagrywać wydarzenia w czasie
          rzeczywistym. Bezpieczeństwo Twoje oraz Twoich bliskich jest naszym
          priorytetem. Nasze kamery doskonale sprawdzają się zarówno w
          pomieszczeniach, jak i na zewnątrz budynków, zapewniając pełną
          kontrolę nad każdym zakątkiem. Kamery CCTV to gwarancja spokoju i
          zwiększonego bezpieczeństwa.
        </div>
        <div className="flex items-start justify-start mt-8">
          <Link href={`/cameras`}>
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
export default Cameras;
