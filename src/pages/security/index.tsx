import { PageSeo } from '@/components/PageSeo';
import { NextPageWithLayout } from '@/layouts/NextPageWithLayout';
import PublicLayout from '@/layouts/PublicLayout';

import security from '@/public/cyber-security.svg';
import Image from 'next/image';
import { dehydrate, QueryClient } from 'react-query';
import dom from '@/public/dom.jpg';
import mieszkania from '@/public/mieszkania.jpg';
import sklep from '@/public/sklep.jpg';
import biuro from '@/public/biuro.jpg';
import openSpace from '@/public/openSpace.jpg';

import { SiSecurityscorecard } from 'react-icons/si';
import alarm1 from '@/public/alarm1.jpg';
import alarm2 from '@/public/alarm2.jpg';
import alarm3 from '@/public/alarm3.jpg';
import alarm4 from '@/public/alarm4.jpg';
import alarm5 from '@/public/alarm5.jpg';
import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { Carousel } from '@mantine/carousel';

const Home: NextPageWithLayout = () => {
  const autoplay = useRef(Autoplay({ delay: 5000 }));

  const gallery = [
    { img: alarm1, id: 1 },
    { img: alarm2, id: 2 },
    { img: alarm3, id: 3 },
    { img: alarm4, id: 4 },
    { img: alarm5, id: 5 },
  ];
  const slides = gallery?.map((item) => (
    <Carousel.Slide key={item?.id}>
      <div className="bg-white border overflow-hidden  w-full h-72 min-h-72   rounded-md shadow-md flex items-center justify-center">
        <div className=" relative h-full flex items-center  justify-center   ">
          <Image
            src={item?.img}
            alt=""
            width={1000}
            height={500}
            className="object-center object-contain transition "
          />
        </div>
      </div>
    </Carousel.Slide>
  ));
  return (
    <>
      <PageSeo
        title="Alarmy i systemy alarmowe"
        description="Alarmy dla domu, mieszkania, biura i sklepu – czujki, centrale, gotowe zestawy. Montaż i konfiguracja GEMINI Rzeszów."
        path="/security"
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
              <div style={{ height: '350px', overflow: 'hidden' }}>
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
              <div className="absolute top-16 inset-x-0  md:mx-24  flex items-center justify-between">
                <div className="px-12 flex flex-col  h-[25rem] justify-center">
                  <div className="text-5xl font-bold text-gray-800">ALARMY</div>{' '}
                  <div className="text-2xl text-gray-600 font-semibold">
                    montaż systemów alarmowych
                  </div>
                </div>
                <div className="relative sm:block hidden w-[22rem] h-[22rem] ">
                  <Image src={security} alt="" />
                </div>{' '}
              </div>
            </div>
            <div className="h-full flex flex-col items-center mt-24 px-2 md:px-12">
              <div className="text-4xl font-semibold mb-4">Nasza oferta</div>{' '}
              <div className="text-xl text-gray-600 text-center font-semibold ">
                Produkty alarmowe są idealnymi rozwiązaniami dla wielu
                scenariuszy:
              </div>
              {/* <div className="mt-16 text-4xl font-semibold ">
                NADZWYCZAJNE TECHNOLOGIE
              </div> */}
              <div className="my-6 mx-12 gap-y-16 gap-6  md:grid hidden grid-cols-3">
                <Card img={dom} txt={'Domy'} center={true} />
                <Card img={mieszkania} txt={'Mieszkania'} />{' '}
                <Card img={sklep} txt={'Sklepy'} center={true} />
              </div>{' '}
              <div className="hidden md:grid grid-cols-6 gap-6 mb-12">
                <div></div>
                <div className="col-span-2">
                  <Card img={biuro} txt={'Biura'} center={true} />
                </div>
                <div className="col-span-2">
                  <Card img={openSpace} txt={'Magazyny'} center={true} />
                </div>
              </div>
              <div className="my-6 mx-2 gap-y-6 gap-6  md:hidden grid  sm:grid-cols-2">
                <Card img={dom} txt={'Domy'} center={true} />
                <Card img={mieszkania} txt={'Mieszkania'} />{' '}
                <Card img={sklep} txt={'Sklepy'} center={true} />
                <Card img={biuro} txt={'Biura'} center={true} />
              </div>{' '}
              <div className="flex flex-col">
                {' '}
                <div className="lg:px-36 text-center px-4 sm:px-12 md:px-24 flex flex-col gap-2 text-xl font-semibold">
                  Montaż systemu alarmowego to proces, który składa się z kilku
                  istotnych elementów
                  <div className="text-base font-normal text-justify mt-2">
                    Pierwszym i kluczowym elementem montażu jest centrala
                    alarmowa. To właśnie ona pełni rolę mózgu całego systemu,
                    kontrolując jego działanie oraz nadzorując każdy aspekt.
                    Centrala jest odpowiedzialna za natychmiastowe powiadamianie
                    użytkowników i osób uprawnionych w przypadku zaistnienia
                    alarmu. Co ciekawe, niektóre modele central alarmowych
                    pozwalają na zdalne monitorowanie systemu, nawet kiedy
                    jesteśmy poza chronionym obiektem. Ta funkcjonalność jest
                    niezwykle praktyczna, umożliwiając błyskawiczne reakcje na
                    wszelkie zdarzenia czy alarmy. Warto podkreślić, że oprócz
                    centrali, w skład systemu wchodzą również inne elementy,
                    takie jak czujki, manipulatory czy sygnalizatory. Dzięki
                    zintegrowanym składnikom, montowany alarm antywłamaniowy
                    staje się nie tylko efektywnym narzędziem ochrony, ale także
                    zapewnia spokój i pewność, że nasze mienie jest w pełni
                    bezpieczne.
                  </div>{' '}
                </div>
                <div className="grid mt-12 md:px-12 sm:grid-cols-2">
                  <div className="px-12 flex w-full h-full items-start justify-center  ">
                    <div className="md:px-12  flex sm:w-[28rem] w-full  items-start justify-center   items-cenetr justify-cenetr">
                      <svg
                        id="fi_2564736"
                        enableBackground="new 0 0 512 512"
                        height="100%"
                        viewBox="0 0 512 512"
                        width="100%"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g>
                          <path
                            d="m512 302.106h-512v-260.267c0-5.69 4.612-10.302 10.302-10.302h491.396c5.69 0 10.302 4.612 10.302 10.302z"
                            fill="#cbcbcb"
                          ></path>
                          <path
                            d="m491.187 31.537v270.569h20.813v-260.267c0-5.69-4.612-10.302-10.302-10.302z"
                            fill="#ababab"
                          ></path>
                          <path
                            d="m31.22 260.585v-187.527c0-5.69 4.612-10.302 10.302-10.302h191.688c5.69 0 10.302 4.612 10.302 10.302v187.526c0 5.69-4.612 10.302-10.302 10.302h-191.689c-5.689.001-10.301-4.612-10.301-10.301z"
                            fill="#9dc6fb"
                          ></path>
                          <path
                            d="m501.698 385.358h-491.396c-5.69 0-10.302-4.612-10.302-10.302v-72.95h512v72.95c0 5.69-4.612 10.302-10.302 10.302z"
                            fill="#595959"
                          ></path>
                          <path
                            d="m491.187 302.106v83.252h10.511c5.69 0 10.302-4.612 10.302-10.302v-72.95z"
                            fill="#434343"
                          ></path>
                          <g>
                            <g fill="#595959">
                              <g>
                                <circle
                                  cx="348.618"
                                  cy="78.366"
                                  r="15.61"
                                ></circle>
                                <circle
                                  cx="290.341"
                                  cy="78.366"
                                  r="15.61"
                                ></circle>
                                <circle
                                  cx="406.894"
                                  cy="78.366"
                                  r="15.61"
                                ></circle>
                              </g>
                              <g>
                                <circle
                                  cx="348.618"
                                  cy="136.643"
                                  r="15.61"
                                ></circle>
                                <circle
                                  cx="290.341"
                                  cy="136.643"
                                  r="15.61"
                                ></circle>
                                <circle
                                  cx="406.894"
                                  cy="136.643"
                                  r="15.61"
                                ></circle>
                              </g>
                              <g>
                                <circle
                                  cx="348.618"
                                  cy="194.919"
                                  r="15.61"
                                ></circle>
                                <circle
                                  cx="290.341"
                                  cy="194.919"
                                  r="15.61"
                                ></circle>
                                <circle
                                  cx="406.894"
                                  cy="194.919"
                                  r="15.61"
                                ></circle>
                              </g>
                              <g>
                                <circle
                                  cx="348.618"
                                  cy="253.196"
                                  r="15.61"
                                ></circle>
                                <circle
                                  cx="290.341"
                                  cy="253.196"
                                  r="15.61"
                                ></circle>
                                <circle
                                  cx="406.894"
                                  cy="253.196"
                                  r="15.61"
                                ></circle>
                              </g>
                            </g>
                            <circle
                              cx="465.171"
                              cy="78.366"
                              fill="#7fd061"
                              r="15.61"
                            ></circle>
                            <circle
                              cx="465.171"
                              cy="136.643"
                              fill="#9dc6fb"
                              r="15.61"
                            ></circle>
                            <circle
                              cx="465.171"
                              cy="194.919"
                              fill="#9dc6fb"
                              r="15.61"
                            ></circle>
                            <circle
                              cx="465.171"
                              cy="253.196"
                              fill="#f17b7b"
                              r="15.61"
                            ></circle>
                          </g>
                          <g>
                            <path
                              d="m140.217 110.367 62.59 59.982c2.681 2.569.862 7.096-2.851 7.096h-9.906c-2.276 0-4.121 1.845-4.121 4.121v38.262c0 3.414-2.767 6.181-6.181 6.181h-42.383-42.382c-3.414 0-6.181-2.767-6.181-6.181v-38.262c0-2.276-1.845-4.121-4.121-4.121h-9.906c-3.714 0-5.532-4.526-2.851-7.096l62.59-59.982c1.595-1.527 4.109-1.527 5.703 0z"
                              fill="#faf388"
                            ></path>
                          </g>
                          <path
                            d="m137.366 191.573c-4.268 0-7.726 3.459-7.726 7.726v26.71h7.726 7.727v-26.71c0-4.268-3.459-7.726-7.727-7.726z"
                            fill="#fcdd2e"
                          ></path>
                          <g fill="#434343">
                            <circle cx="74.927" cy="329.163" r="7.285"></circle>
                            <circle
                              cx="106.146"
                              cy="329.163"
                              r="7.285"
                            ></circle>
                            <circle
                              cx="137.366"
                              cy="329.163"
                              r="7.285"
                            ></circle>
                            <circle
                              cx="168.585"
                              cy="329.163"
                              r="7.285"
                            ></circle>
                            <circle
                              cx="199.805"
                              cy="329.163"
                              r="7.285"
                            ></circle>
                            <circle cx="74.927" cy="358.301" r="7.285"></circle>
                            <circle
                              cx="106.146"
                              cy="358.301"
                              r="7.285"
                            ></circle>
                            <circle
                              cx="137.366"
                              cy="358.301"
                              r="7.285"
                            ></circle>
                            <circle
                              cx="168.585"
                              cy="358.301"
                              r="7.285"
                            ></circle>
                            <circle
                              cx="199.805"
                              cy="358.301"
                              r="7.285"
                            ></circle>
                          </g>
                          <g>
                            <g>
                              <path
                                d="m137.366 426.385c-6.233 0-12.094-2.428-16.502-6.835-3.017-3.018-3.017-7.909 0-10.928 3.018-3.016 7.909-3.016 10.928 0 1.489 1.49 3.469 2.31 5.574 2.31s4.085-.82 5.573-2.309c3.016-3.018 7.908-3.019 10.927-.001 3.018 3.017 3.018 7.909.001 10.927-4.407 4.409-10.267 6.836-16.501 6.836z"
                                fill="#9dc6fb"
                              ></path>
                            </g>
                            <g>
                              <path
                                d="m137.366 453.419c-12.906 0-25.808-4.91-35.634-14.735-3.017-3.018-3.017-7.909 0-10.928 3.018-3.016 7.909-3.016 10.928 0 13.622 13.624 35.79 13.624 49.413 0 3.016-3.017 7.908-3.016 10.927.001 3.017 3.017 3.017 7.909-.001 10.927-9.823 9.821-22.73 14.735-35.633 14.735z"
                                fill="#9dc6fb"
                              ></path>
                            </g>
                            <g>
                              <path
                                d="m137.366 480.463c-19.834 0-39.667-7.549-54.767-22.648-3.017-3.018-3.017-7.909 0-10.928 3.018-3.016 7.909-3.016 10.928 0 24.173 24.173 63.506 24.173 87.677 0 3.018-3.016 7.909-3.016 10.928 0 3.017 3.018 3.017 7.909 0 10.928-15.1 15.099-34.933 22.648-54.766 22.648z"
                                fill="#9dc6fb"
                              ></path>
                            </g>
                          </g>
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 px-4 mt-2">
                    {' '}
                    <div className="text-xl mb-4  font-medium flex items-center gap-2">
                      Stosujemy różnorodne czujniki jako elementy detekcyjne:
                    </div>
                    <div className="text-base font-medium text-[#2f495e] flex items-center gap-2">
                      <SiSecurityscorecard fill="#fcdf2a" />
                      czujki ruchu
                    </div>
                    <div className="text-base font-medium text-[#2f495e] flex items-center gap-2">
                      <SiSecurityscorecard fill="#fcdf2a" />
                      czujki zbicia szkła
                    </div>
                    <div className="text-base font-medium text-[#2f495e] flex items-center gap-2">
                      <SiSecurityscorecard fill="#fcdf2a" />
                      czujki otwarcia
                    </div>
                    <div className="text-base font-medium text-[#2f495e] flex items-center gap-2">
                      <SiSecurityscorecard fill="#fcdf2a" />
                      czujniki dymu
                    </div>
                    <div className="text-base font-medium text-[#2f495e] flex items-center gap-2">
                      <SiSecurityscorecard fill="#fcdf2a" />
                      czujniki gazu
                    </div>
                    <div className="text-base font-medium text-[#2f495e] flex items-center gap-2">
                      <SiSecurityscorecard fill="#fcdf2a" />
                      sejsmiczne
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute flex-col top-0 w-full mt-10 flex items-center justify-center px-12 prose"></div>{' '}
            <div>
              {' '}
              <div className="mt-12 mb-4 md:px-12 px-2">
                <Carousel
                  withIndicators
                  height={350}
                  controlsOffset="xs"
                  controlSize={25}
                  slideSize="25%"
                  slideGap="sm"
                  loop
                  align={'center'}
                  slidesToScroll={1}
                  breakpoints={[
                    {
                      maxWidth: 'lg',
                      slideSize: '33.33%',
                      slideGap: 'sm',
                    },
                    { maxWidth: 'sm', slideSize: '100%', slideGap: 'md' },
                  ]}
                  plugins={[autoplay.current]}
                  onMouseEnter={autoplay.current.stop}
                  onMouseLeave={autoplay.current.reset}
                >
                  {slides}
                </Carousel>
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
