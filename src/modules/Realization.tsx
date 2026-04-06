import Image from 'next/image';
import budowa from '@/public/budowa.jpg';
import step2 from '@/public/step2.jpg';
import step3 from '@/public/step3.jpg';

const Realization = () => {
  return (
    <>
      <div className="flex flex-col">
        <div className="lg:px-36 px-2 sm:px-12 md:px-24 flex flex-col gap-2">
          <div className="mt-16 flex items-center justify-center flex-col gap-4 text-4xl text-gray-700 font-semibold">
            Realizacja usług
            <div className="border-2 rounded-full w-12 border-primary"></div>
          </div>
          <div className="md:mb-24 mt-12 flex ">
            <div className="flex flex-col ">
              {' '}
              <div className=" grid md:grid-cols-2 grid-cols-5 text-5xl w-full  text-center">
                <div className="-mr-0.5  w-full col-span-2 md:col-span-1">
                  <Ikon />{' '}
                </div>
                <div className="text-base text-justify   col-span-3 md:col-span-1  flex md:ml-12 ml-8 items-start justify-center flex-col">
                  <div className="text-2xl font-bold text-left mb-2">
                    Projekt{' '}
                  </div>{' '}
                  Realizację naszych usług zaczynamy od rozmowy z Tobą, aby
                  zrozumieć Twoje potrzeby i wymagania dotyczące systemu.
                  Umawiamy się na dogodny dla Ciebie termin, aby przeprowadzić
                  wizję lokalną.
                </div>
              </div>{' '}
              <div className=" grid md:grid-cols-2 grid-cols-5 text-5xl w-full text-center">
                <div className="col-span-3  text-justify md:col-span-1 text-base  flex items-start md:mr-12 mr-8  justify-center flex-col">
                  <div className="text-2xl font-bold text-left mb-2">
                    Realizacja usługi{' '}
                  </div>{' '}
                  Kiedy ustalimy dogodny termin rozpoczęcia prac, nasza wysoko
                  wykwalifikowana ekipa przystępuje do montażu. Dzięki ich
                  doświadczeniu i precyzji, możesz być pewien, że każdy detal
                  zostanie perfekcyjnie zrealizowany.
                  <div></div>
                </div>{' '}
                <div className="col-span-2 md:col-span-1">
                  {' '}
                  <Step2 />
                </div>
              </div>{' '}
              <div className=" grid md:grid-cols-2 grid-cols-5  text-5xl w-full  text-center">
                <div className="-mr-0.5 col-span-2 md:col-span-1">
                  <Step4 />{' '}
                </div>
                <div className="text-base text-left col-span-3 md:col-span-1 flex ml-12 items-start justify-center flex-col">
                  <div className="text-2xl font-bold text-left mb-2">
                    Konserwacja
                  </div>{' '}
                  Zapewniamy możliwość przeprowadzania regularnych konserwacji
                  zainstalowanego systemu. Dzięki temu będziecie Państwo mogli
                  cieszyć się bezawaryjnym funkcjonowaniem systemu przez długi
                  okres czasu. Nasza troska o nieprzerwane działanie systemu to
                  nasz wkład w Państwa spokój i bezpieczeństwo.
                  <div></div>
                </div>
              </div>{' '}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Realization;

const Step4 = () => {
  return (
    <div className="flex   h-[25rem]   items-end justify-end gap-12">
      <div className="md:w-[30rem] w-full  h-full  flex items-start  md:items-center  relative">
        <svg
          className="hidden md:block"
          id="fi_2907789"
          height="100%"
          viewBox="0 0 24 24"
          width="100%"
          style={{
            strokeWidth: '1.2px',
            stroke: 'white',
            margin: '2px',

            transform: 'rotate(270deg)',
          }}
          xmlns="http://www.w3.org/2000/svg"
          data-name="Layer 1"
        >
          <path
            fill="rgba(47, 73, 94, 1)"
            d="m12 22.72a.74.74 0 0 1 -.53-.22l-5.76-5.76a8.9 8.9 0 1 1 12.58 0l-5.76 5.76a.74.74 0 0 1 -.53.22zm0-19.67a7.4 7.4 0 0 0 -5.23 12.63l5.23 5.23 5.23-5.23a7.4 7.4 0 0 0 -5.23-12.63z"
          ></path>
          <path d="m12 13.75a3.75 3.75 0 1 1 3.75-3.75 3.75 3.75 0 0 1 -3.75 3.75zm0-6a2.25 2.25 0 1 0 2.25 2.25 2.25 2.25 0 0 0 -2.25-2.25z"></path>
        </svg>

        <div className="absolute  md:mt-0 flex md:items-center items-start justify-center xl:-ml-7 md:-ml-5  inset-y-0  h-full w-full">
          <div className="rounded-full  flex items-center justify-center lg:m-16 md:m-[3.8rem]  ">
            <Ikon2 img={step3} zoom="125" />
          </div>
        </div>
      </div>
      <div className="  items-center justify-center hidden md:flex h-full relative">
        <div className="h-full border "></div>
        <div className="absolute h-full flex justify-center items-center">
          {' '}
          <div className="rounded-full bg-white shadow-md inset-0 w-5 h-5 border border-gray-300"></div>
        </div>
      </div>
    </div>
  );
};

const Ikon = () => {
  return (
    <div className="flex  h-[25rem]  -mr-0.5 items-end justify-end gap-12">
      <div className="md:w-[30rem] w-full  h-full  flex items-start  md:items-center  relative">
        <svg
          className="hidden md:block"
          id="fi_2907789"
          height="100%"
          viewBox="0 0 24 24"
          width="100%"
          style={{
            strokeWidth: '1.2px',
            stroke: 'white',
            margin: '2px',

            transform: 'rotate(270deg)',
          }}
          xmlns="http://www.w3.org/2000/svg"
          data-name="Layer 1"
        >
          <path
            fill="rgba(47, 73, 94, 1)"
            d="m12 22.72a.74.74 0 0 1 -.53-.22l-5.76-5.76a8.9 8.9 0 1 1 12.58 0l-5.76 5.76a.74.74 0 0 1 -.53.22zm0-19.67a7.4 7.4 0 0 0 -5.23 12.63l5.23 5.23 5.23-5.23a7.4 7.4 0 0 0 -5.23-12.63z"
          ></path>
          <path d="m12 13.75a3.75 3.75 0 1 1 3.75-3.75 3.75 3.75 0 0 1 -3.75 3.75zm0-6a2.25 2.25 0 1 0 2.25 2.25 2.25 2.25 0 0 0 -2.25-2.25z"></path>
        </svg>

        <div className="absolute mt-12 md:mt-0 flex md:items-center items-start justify-center xl:-ml-7 md:-ml-5  inset-y-0  h-full w-full">
          <div className="rounded-full  flex items-center justify-center lg:m-16 md:m-[3.8rem]  ">
            <Ikon2 img={budowa} zoom="125" />
          </div>
        </div>
      </div>
      <div className="  items-center justify-center hidden md:flex h-full relative">
        <div className="h-full border "></div>
        <div className="absolute h-full flex justify-center items-center">
          {' '}
          <div className="rounded-full bg-white shadow-md inset-0 w-5 h-5 border border-gray-300"></div>
        </div>
      </div>
    </div>
  );
};

const Ikon2 = ({ img, zoom }: { img: any; zoom?: string }) => {
  return (
    <div className="relative h-full max-w-[14rem]  w-full overflow-hidden  rounded-full   ">
      <Image
        src={img}
        height={1200}
        width={1200}
        alt=""
        className={` object-center rounded-full  object-cover scale-${zoom} `}
      />
    </div>
  );
};

const Step2 = () => {
  return (
    <div className="flex  h-[25rem]   items-start justify-start gap-12">
      <div className="  items-center  justify-center hidden md:flex h-full relative">
        <div className="h-full border "></div>
        <div className="absolute h-full flex justify-center items-center">
          {' '}
          <div className="rounded-full bg-white shadow-md inset-0 w-5 h-5 border border-gray-300"></div>
        </div>
      </div>

      <div className="md:w-[30rem] w-full  h-full  flex items-start  md:items-center  relative">
        <svg
          className="hidden md:block"
          id="fi_2907789"
          height="100%"
          viewBox="0 0 24 24"
          width="100%"
          style={{
            strokeWidth: '1.2px',
            stroke: 'white',
            margin: '2px',

            transform: 'rotate(90deg)',
          }}
          xmlns="http://www.w3.org/2000/svg"
          data-name="Layer 1"
        >
          <path
            fill="rgba(47, 73, 94, 1)"
            d="m12 22.72a.74.74 0 0 1 -.53-.22l-5.76-5.76a8.9 8.9 0 1 1 12.58 0l-5.76 5.76a.74.74 0 0 1 -.53.22zm0-19.67a7.4 7.4 0 0 0 -5.23 12.63l5.23 5.23 5.23-5.23a7.4 7.4 0 0 0 -5.23-12.63z"
          ></path>
          <path d="m12 13.75a3.75 3.75 0 1 1 3.75-3.75 3.75 3.75 0 0 1 -3.75 3.75zm0-6a2.25 2.25 0 1 0 2.25 2.25 2.25 2.25 0 0 0 -2.25-2.25z"></path>
        </svg>

        <div className="absolute  md:mt-0 flex md:items-center items-start justify-center xl:-mr-7 md:-mr-5 right-0 inset-y-0  h-full w-full">
          <div className="rounded-full  flex items-center justify-center lg:m-16 md:m-[3.8rem]  ">
            <Ikon2 img={step2} zoom="125" />
          </div>
        </div>
      </div>
    </div>
  );
};
