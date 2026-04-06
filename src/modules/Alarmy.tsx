import home from '@/public/house.png';
import Image from 'next/image';
import security from '@/public/security.png';
import Link from 'next/link';
import { useState } from 'react';
import { BsArrowRight } from 'react-icons/bs';
const Alarmy = () => {
  const [hover, setHover] = useState<boolean>(false);
  return (
    <div
      className="lg:mt-44  flex flex-col  gap-6 md:grid items-center md:grid-cols-2 w-full 
    "
    >
      <div className="relative xl:h-[25rem] xl:w-[37rem] md:h-[23rem] md:w-[23rem] h-[14rem] w-[15rem] mb-12 md:mb-0">
        <div className="absolute right-0 bg-[#f0f8fa] rounded-full bottom-4 h-[14rem] w-[14rem] xl:h-[27rem] xl:w-[27rem] md:h-[23rem] md:w-[23rem]"></div>
        <div className="absolute bottom-0 -left-4 xl:h-[25rem] xl:w-[25rem] md:h-[20rem] md:w-[20rem] h-[12rem] w-[12rem]">
          <Image src={home} alt="" />
        </div>{' '}
        <div className="absolute top-0 right-0  xl:h-[10rem] xl:w-[10rem]   md:h-[8rem] md:w-[8rem] h-[5rem] w-[5rem]">
          <Image src={security} alt="" />
        </div>{' '}
      </div>
      <div className="sm:px-8 px-4">
        <div className="text-3xl font-bold "> Alarmy </div>{' '}
        <div className="text-2xl font-semibold text-gray-500 mt-1 ">
          Skuteczna Ochrona Twojego Mienia
        </div>
        <div className="text-gray-500 mt-8 ">
          Oferowane przez nas zaawansowane systemy alarmowe zapewniają
          kompleksową ochronę Twojego majątku. Dzięki innowacyjnym rozwiązaniom
          i inteligentnym czujnikom, jesteś na bieżąco z każdym niepożądanym
          ruchem czy intruzją. W przypadku niebezpieczeństwa, alarmy reagują
          natychmiast, ostrzegając Cię oraz odpowiednie służby. To nie tylko
          ochrona przed włamaniami, ale również spokojny sen i pewność, że Twoje
          mienie jest zabezpieczone. Nasza oferta obejmuje różnorodne systemy
          alarmowe, dostosowane do Twoich potrzeb. Wybierz nasze rozwiązania i
          zyskaj poczucie bezpieczeństwa w każdej sytuacji.
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
export default Alarmy;
