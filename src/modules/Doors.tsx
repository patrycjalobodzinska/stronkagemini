import Link from 'next/link';
import { useState } from 'react';
import { BsArrowRight } from 'react-icons/bs';
const Doors = () => {
  const [hover, setHover] = useState<boolean>(false);
  return (
    <div
      className="lg:mt-44  flex flex-col md:grid md:grid-cols-2 w-full  gap-6 items-center
    "
    >
      <div className="relative xl:h-[25rem] xl:w-[37rem] md:h-[23rem] md:w-[23rem] h-[14rem] w-[15rem] mb-12 md:mb-0">
        <div className="absolute right-0 bg-[#f0f8fa] rounded-full bottom-4 h-[14rem] w-[14rem] xl:h-[27rem] xl:w-[27rem] md:h-[23rem] md:w-[23rem]"></div>
        <div className="absolute bottom-0 left-10  md:h-[15rem] md:w-[15rem] xl:h-[20rem] xl:w-[20rem]  h-[11rem] w-[11rem]">
          <DoorsIcon />
        </div>{' '}
      </div>
      <div className="sm:px-8 px-4">
        <div className="text-3xl font-bold ">
          {' '}
          Drzwi wewnętrzne i zewnętrzne
        </div>{' '}
        <div className="text-2xl font-semibold text-gray-500 mt-1 ">
          Wyrazisty Design i Bezpieczeństwo
        </div>
        <div className="text-gray-500 mt-8">
          Drzwi zewnętrzne kluczowe dla charakteru budynku, powinny harmonizować
          z elewacją i zapewnić bezpieczeństwo mieszkańcom.
        </div>{' '}
        <div className="text-gray-500 ">
          Drzwi wewnętrzne definiują przestrzenie, oddzielając pomieszczenia i
          tworząc prywatność; design, kolorystyka i materiały wpływają na spójną
          atmosferę wnętrza.
        </div>
        <div className="flex items-start justify-start mt-8">
          <Link href={`/doors`}>
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
export default Doors;

const DoorsIcon = () => {
  return (
    <svg
      version="1.1"
      id="fi_923634"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 512 512"
      xmlSpace="preserve"
    >
      <polygon
        style={{ fill: '#C0C0C0' }}
        points="256,0 205.5,91 406.5,451 451.5,451 451.5,0 "
      ></polygon>
      <polygon
        style={{ fill: '#E4E4E4' }}
        points="256,61 256,0 60.5,0 60.5,451 120.5,451 "
      ></polygon>
      <polygon
        style={{ fill: '#434343' }}
        points="256,46 155.5,451 406.5,451 406.5,46 "
      ></polygon>
      <polygon
        style={{ fill: '#636363' }}
        points="105.5,46 150.5,317 256,317 256,46 "
      ></polygon>
      <polygon
        style={{ fill: '#0F9AF0' }}
        points="331.5,107 256,86.622 196,289.122 256,491.622 331.5,512 "
      ></polygon>
      <polygon
        style={{ fill: '#13BDF7' }}
        points="105.5,46 105.5,451 256,491.622 256,86.622 "
      ></polygon>
      <circle
        style={{ fill: '#FFFFFF' }}
        cx="293.75"
        cy="299.35"
        r="15"
      ></circle>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
    </svg>
  );
};
