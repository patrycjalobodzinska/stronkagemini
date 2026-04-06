import { PageSeo } from '@/components/PageSeo';
import { NextPageWithLayout } from '@/layouts/NextPageWithLayout';
import PublicLayout from '@/layouts/PublicLayout';

import wiLogo from '@/public/wisniowski.png';
import security from '@/public/garageDoors.png';
import Image from 'next/image';
import { dehydrate, QueryClient } from 'react-query';
import garageDoors from '@/public/wisniowskiGarageDoors.png';

const Home: NextPageWithLayout = () => {
  return (
    <>
      <PageSeo
        title="Bramy garażowe i wjazdowe"
        description="Bramy segmentowe Wiśniowski – sprzedaż, montaż i serwis w Rzeszowie. Bramy garażowe dopasowane do architektury budynku."
        path="/garage-doors"
      />
      <section className="max-w-screen h-full  -mt-2 mx-2 lg:mx-auto">
        {' '}
        <main className="flex flex-col items-center  justify-between ">
          <div
            style={{
              backgroundSize: 'cover',
              backgroundRepeat: 'repeat',
            }}
            className="   w-screen  relative "
          >
            <img
              src={'back.jpg'}
              alt=""
              className="fixed top-0 left-0 w-full h-full z-[-1] h-full w-full object-cover  opacity-20"
            />{' '}
            <div className="relative   w-full">
              <div
                className="h-[200px] md:h-[350px]"
                style={{ overflow: 'hidden' }}
              >
                <svg
                  viewBox="0 0 500 150"
                  preserveAspectRatio="none"
                  style={{
                    height: '100%',
                    width: '100%',
                    transform: 'scaleY(-1)',
                  }}
                >
                  <path
                    d="M-10.94,79.09 C418.43,176.08 385.94,-49.90 545.94,28.09 L500.00,150.00 L0.00,150.00 Z"
                    style={{ stroke: 'none', fill: 'rgba(47, 73, 94, 1)' }}
                  ></path>
                </svg>
              </div>{' '}
              <div className="sm:px-8 px-1 absolute md:top-16 top-3 inset-x-0  md:mx-24  flex items-center justify-center sm:justify-between">
                <div className="md:px-12 flex flex-col  h-[25rem] justify-center">
                  <div className="text-5xl font-bold text-gray-800">Bramy</div>{' '}
                  <div className="text-2xl text-gray-600 font-semibold">
                    garażowe i wjazdowe
                  </div>
                </div>
                <div className="relative sm:block hidden lg:w-[30rem] w-[20rem] h-[20rem] pt-12">
                  <Image
                    style={{ transform: 'scaleX(-1)' }}
                    src={security}
                    alt=""
                  />
                </div>{' '}
              </div>
            </div>
            <div className="h-full flex flex-col items-center mt-32 md:mt-24 px-2 md:px-12">
              <div className="text-4xl font-semibold mb-4">Nasza oferta</div>{' '}
              {/* <div className="text-xl text-gray-600 font-semibold ">
                Produkty alarmowe są idealnymi rozwiązaniami dla wielu
                scenariuszy:
              </div> */}
              {/* <div className="mt-16 text-4xl font-semibold ">
                NADZWYCZAJNE TECHNOLOGIE
              </div> */}
            </div>
            <div className="grid md:grid-cols-2 mt-8">
              <div className="flex items-center  justify-center">
                <div className="relative sm:block w-[20rem] md:w-[30rem] h-[20rem] pt-12">
                  <Image
                    style={{ transform: 'scaleX(-1)' }}
                    src={garageDoors}
                    alt=""
                  />
                  <div className="absolute bottom-24 left-8 w-16  h-12 flex items-center justify-center">
                    <Image src={wiLogo} />
                  </div>
                </div>
              </div>
              <div className="flex flex-col  px-4 md:pr-12 justify-center md:items-start items-center">
                <div className="text-2xl font-semibold text-center md:text-left">
                  Bramy garażowe WIŚNIOWSKI
                </div>
                <div className="text-gray-700 my-4 text-justify md:px-1 px-6">
                  Przedstaw sobie innowacyjną bramę garażową nowej generacji. To
                  nie tylko przekształcenie istniejących rozwiązań, lecz owoc
                  kreatywnego dążenia do osiągnięcia harmonii pomiędzy
                  zaawansowaną technologią, doskonałą jakością, nienagannym
                  bezpieczeństwem oraz wyjątkowym designem.
                </div>
                <div className=" flex  px-1 md:mt-4 text-xl">
                  <div className="cursor-pointer hover:bg-primary/80 transition-all  px-2 py-1 bg-primary flex justify-center items-center text-white rounded-md">
                    <a
                      rel="noreferrer"
                      target="_blank"
                      href={
                        'https://www.wisniowski.pl/images/foldery-online/pl/f13-pl-bramy-garazowe-segmentowe-wisniowski/#page=9'
                      }
                    >
                      Zobacz więcej
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default Home;

export async function getStaticProps() {
  const queryClient = new QueryClient();

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

Home.getLayout = (page) => {
  return <PublicLayout>{page}</PublicLayout>;
};

const Card = ({
  img,
  txt,
  center,
}: {
  img: any;
  txt: string;
  center?: boolean;
}) => {
  return (
    <div className="relative w-full max-w-[25rem] h-full bg-white rounded-md shadow-md   ">
      <Image
        src={img}
        height={1200}
        width={1700}
        alt=""
        className={`${
          center ? ' object-center  ' : 'object-bottom'
        } rounded-t-md object-cover hover:scale-110 transition duration-500 cursor-pointer`}
      />
      <div className="text-lg font-semibold px-4 text-center py-4">{txt}</div>
    </div>
  );
};
