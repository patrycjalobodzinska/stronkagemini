import { PageSeo } from '@/components/PageSeo';
import { NextPageWithLayout } from '@/layouts/NextPageWithLayout';
import PublicLayout from '@/layouts/PublicLayout';
import Image from 'next/image';
import { dehydrate, QueryClient } from 'react-query';

import { useState } from 'react';

const Home: NextPageWithLayout = () => {
  return (
    <>
      <PageSeo
        title="O nas"
        description="Firma GEMINI z Rzeszowa – ponad 20 lat w monitoringu, kamerach, drzwiach i bramach. Profesjonalna obsługa, wyceny z dojazdem."
        path="/about"
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
              className="fixed top-0 left-0 w-full h-full  z-[-1] h-full w-full object-cover  opacity-20"
            />
            <div className="relative xl:min-h-screen   xl:h-[40rem] h-[20rem] xl:mb-[26rem]  w-full">
              <div className="xl:h-[68rem] md:block hidden absolute md:h-[40rem] h-[30rem] xl:-top-[27rem] -top-[13rem] -right-2 md:-top-[15rem] md:-right-[5rem]  xl:-right-[10.5rem]">
                <svg
                  id="10015.io"
                  width={'100%'}
                  height={'100%'}
                  viewBox="0 0 480 480"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <defs>
                    <clipPath id="blob">
                      <path
                        fill="#474bff"
                        d="M426,316.5Q422,393,348,412Q274,431,229.5,383.5Q185,336,138,315Q91,294,56.5,227.5Q22,161,91.5,132.5Q161,104,216.5,80.5Q272,57,323.5,92Q375,127,402.5,183.5Q430,240,426,316.5Z"
                      />{' '}
                    </clipPath>{' '}
                  </defs>
                  <image
                    x="46"
                    y="80"
                    width="80%"
                    height="80%"
                    style={{ objectFit: 'cover', objectPosition: 'left' }}
                    clipPath="url(#blob)"
                    xlinkHref="cam.jpg"
                    preserveAspectRatio="xMidYMid slice"
                  ></image>
                </svg>
              </div>{' '}
              <div className="md:hidden">
                <img
                  src="cam.jpg"
                  style={{
                    borderBottomLeftRadius: '250px',
                    borderBottomRightRadius: '0px',
                  }}
                  className="rounded-b-"
                />
              </div>
              <div className="absolute grid  lg:grid-cols-2 inset-0 lg:mt-32 mt-24 md:pl-12 md:pr-28 px-4 xl:px-44   ">
                <div className="hidden md:flex md:pl-12  mt-8 flex-col md:w-[30rem] md:justify-start md:items-start ">
                  <div
                    style={{ mixBlendMode: 'difference', color: 'white' }}
                    className=" lg:text-5xl md:text-4xl  text-3xl font-bold text-gray-800"
                  >
                    Ekspert z 20-letnim doświadczeniem
                  </div>
                  <div className="text-2xl  font-semibold mb-4 text-gray-500">
                    w montażu drzwi, kamer, alarmów i więcej!
                  </div>
                </div>
              </div>
              <div className="xl:w-[70rem] xl:block hidden absolute  top-[8rem]  -left-[rem]">
                <div className="relative">
                  {' '}
                  <svg
                    viewBox="0 0 1000 1000"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <clipPath id="a">
                        <path
                          fill="currentColor"
                          d="M769.5 627Q702 754 551 847t-285-38.5Q132 677 125.5 496.5T280 279q161-37 319-69t198 129q40 161-27.5 288Z"
                        />
                      </clipPath>
                    </defs>
                    <g clipPath="url(#a)">
                      <path
                        fill="rgba(47, 73, 94, 1)"
                        d="M769.5 627Q702 754 551 847t-285-38.5Q132 677 125.5 496.5T280 279q161-37 319-69t198 129q40 161-27.5 288Z"
                      />
                    </g>
                  </svg>{' '}
                  <div className="absolute top-0 inset-x-0 w-full h-full flex  justify-center items-center ">
                    {' '}
                    <div className="flex justify-center items-center text-white text-2xl z-10 h-full w-[35rem]">
                      Witaj na stronie naszej renomowanej firmy, która przez
                      ponad 20 lat z pasją i zaangażowaniem świadczy usługi w
                      dziedzinie montażu drzwi, kamer, alarmów, bram, rolet
                      zewnętrznych, automatyki domowej oraz odkurzaczy
                      centralnych. Jesteśmy dumni z naszego długotrwałego
                      doświadczenia oraz wysokiej jakości usług, które oferujemy
                      naszym klientom.
                    </div>
                  </div>
                </div>
              </div>
            </div>{' '}
            <div className="md:hidden px-4  text-center  flex flex-col justify-end items-end ">
              {' '}
              <div
                style={{ color: 'black' }}
                className=" lg:text-5xl  text-3xl font-bold text-gray-800"
              >
                Ekspert z 20-letnim doświadczeniem
              </div>
              <div className="text-2xl  font-semibold mb-4 text-gray-500">
                w montażu drzwi, kamer, alarmów i więcej!
              </div>
            </div>
            <div className="xl:hidden  md:mt-12 lg:mt-16 text-justify px-4 md:px-24 flex items-center justify-center ">
              <div>
                {' '}
                Witaj na stronie naszej renomowanej firmy, która przez ponad 20
                lat z pasją i zaangażowaniem świadczy usługi w dziedzinie
                montażu drzwi, kamer, alarmów, bram, rolet zewnętrznych,
                automatyki domowej oraz odkurzaczy centralnych. Jesteśmy dumni z
                naszego długotrwałego doświadczenia oraz wysokiej jakości usług,
                które oferujemy naszym klientom.
              </div>{' '}
            </div>
            <div className="h-full flex flex-col items-center xl:mt-32 px-2 md:px-24">
              <div className="grid md:grid-cols-2 mt-8 ">
                <div className="h-full flex items- justify-center flex-col">
                  <div className="text-4xl font-semibold mb-1">
                    Nasza Historia
                  </div>
                  <div className="text-xl font-semibold text-gray-600">
                    Współtwórcy Bezpieczeństwa i Wygody
                  </div>{' '}
                  <div className="mt-6 text-justify">
                    {' '}
                    Od momentu naszego powstania ponad 20 lat temu, byliśmy
                    pionierami w dziedzinie montażu rozmaitych systemów
                    poprawiających bezpieczeństwo i komfort w domach i firmach.
                    Nasza droga na rynku była pełna wyzwań i osiągnięć, dzięki
                    którym zdobyliśmy cenne doświadczenie i wiedzę na temat
                    najnowszych trendów oraz technologii w branży.
                  </div>
                </div>{' '}
                <div className=" lg:w-[45rem] md:w-[26rem] w-full h-full  ">
                  <svg
                    width={'100%'}
                    height={'100%'}
                    id="10015.io"
                    viewBox="0 0 480 480"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <defs>
                      <clipPath id="blob2">
                        <path
                          fill="#474bff"
                          d="M353.5,288Q336,336,288,355.5Q240,375,156.5,391Q73,407,90.5,323.5Q108,240,105.5,171.5Q103,103,171.5,57Q240,11,316,49.5Q392,88,381.5,164Q371,240,353.5,288Z"
                        />
                      </clipPath>
                    </defs>
                    <image
                      x="50"
                      y="32"
                      width="75%"
                      height="75%"
                      clipPath="url(#blob2)"
                      xlinkHref="technology.jpg"
                      preserveAspectRatio="xMidYMid slice"
                    ></image>
                  </svg>
                </div>
              </div>
              {/* <div className="grid md:grid-cols-2 ">
                {' '}
                <div className="text-xl text-gray-600 font-semibold ">
                  <Image
                    className=" h-full  object-cover w-full my-2 rounded-md"
                    src={about1}
                    alt=""
                  />
                </div>
                <div className="mx-12">
                  <div>
                    Nasza Misja: Twoje Bezpieczeństwo i Komfort to Nasz
                    Priorytet
                  </div>
                  <div>
                    {' '}
                    Nasza firma powstała z pasji do tworzenia przestrzeni, w
                    których nasi klienci czują się bezpiecznie i komfortowo.
                    Nasze usługi obejmują szeroki zakres rozwiązań, od montażu
                    solidnych drzwi, po zaawansowane systemy monitoringu, które
                    dają poczucie kontroli nad otoczeniem. Nasze bramy, rolety
                    zewnętrzne oraz automatyka domowa przyczyniają się do
                    wygodnego i funkcjonalnego życia.
                  </div>
                </div>{' '}
              </div> */}
              {/* <div className="grid md:grid-cols-2 ">
                {' '}
                <div className="text-xl text-gray-600 font-semibold ">
                  <Image
                    className=" h-full  object-cover w-full my-2 rounded-md"
                    src={about1}
                    alt=""
                  />
                </div>
                <div>
                  <div>Dlaczego My? Nasze Wartości i Zaangażowanie</div>
                  <div>
                    Doświadczenie: Z ponad dwie dekady na rynku, nasi eksperci
                    zdobyli nieocenione doświadczenie w projektowaniu i montażu
                    rozwiązań spełniających najwyższe standardy. Jakość: Nasze
                    produkty i usługi to gwarancja jakości. Stawiamy na solidne
                    materiały i najnowsze technologie, aby zapewnić trwałe i
                    efektywne rozwiązania. Innowacje: Jesteśmy na bieżąco z
                    najnowszymi trendami i innowacjami w branży. Stale rozwijamy
                    naszą ofertę, by dostarczać klientom najnowocześniejsze
                    rozwiązania. Wsparcie Klienta: Nasz zespół służy fachowym
                    doradztwem i kompleksowym wsparciem od pierwszego kontaktu
                    aż po zakończenie projektu.
                  </div>
                </div>
              </div> */}
              {/* <div className="grid md:grid-cols-2 ">
                {' '}
                <div className="text-xl text-gray-600 font-semibold ">
                  <Image
                    className=" h-full  object-cover w-full my-2 rounded-md"
                    src={about1}
                    alt=""
                  />
                </div>
                <div>
                  <div>
                    Nasza Oferta: Tworzymy Lepsze Domowe i Biznesowe Środowiska
                  </div>
                  <div>
                    Oferujemy szeroką gamę usług, obejmującą: Montaż różnego
                    rodzaju drzwi, od tradycyjnych po nowoczesne i designerskie.
                    Projektowanie i instalację zaawansowanych systemów
                    monitoringu oraz alarmów. Bramy o różnych stylach i
                    funkcjonalnościach, zapewniające bezpieczeństwo i wygodę.
                    Rolety zewnętrzne, doskonałe do regulacji światła i
                    prywatności. Automatykę domową, umożliwiającą zarządzanie
                    oświetleniem, klimatyzacją i innymi urządzeniami. Odkurzacze
                    centralne, które upraszczają utrzymanie czystości w domu.{' '}
                  </div>
                </div>
              </div>
              <div>
                <div>
                  Skontaktuj się z nami już dziś, aby zrealizować swoje projekty
                  z nami!
                </div>
                Dziękujemy za odwiedzenie naszej strony i zapraszamy do kontaktu
                z naszym zespołem. Jesteśmy gotowi pomóc Ci w tworzeniu
                bezpiecznych, funkcjonalnych i nowoczesnych przestrzeni, zarówno
                w domu, jak i w biznesie.
              </div> */}
            </div>{' '}
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
