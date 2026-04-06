import { PageSeo } from '@/components/PageSeo';
import { NextPageWithLayout } from '@/layouts/NextPageWithLayout';
import PublicLayout from '@/layouts/PublicLayout';
import cam1 from '@/public/cam1.png';
import Image from 'next/image';
import quality from '@/public/quality.jpg';
import thermo from '@/public/thermo.png';
import house from '@/public/house.jpg';
import open from '@/public/open.jpg';
import motion from '@/public/motion.jpg';
import online from '@/public/online1.jpg';

const Home: NextPageWithLayout = () => {
  return (
    <>
      <PageSeo
        title="Monitoring i kamery CCTV"
        description="Kamery analogowe, IP i Wi-Fi, Hikvision – projektowanie, montaż i konfiguracja monitoringu w Rzeszowie i okolicach."
        path="/cameras"
      />
      <section className="h-full w-full -mt-2 ">
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
          </div>
          <div className="relative h-96   w-full">
            <div
              className=" h-[250px] md:h-[350px]"
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
            <div className="absolute top-16 px-1 inset-x-0   lg:mx-24 md:mx-12 mx-1  flex items-center justify-center md:justify-between">
              <div className="md:px-12 text-center md:text-left flex h-[25rem]   justify-center flex-col">
                <div className="md:text-5xl text-4xl font-bold text-gray-800">
                  MONITORING KAMER{' '}
                </div>{' '}
                <div className="text-2xl text-gray-600 font-semibold">
                  mobilny i stacjonarny
                </div>
              </div>
              <div className="sm:block hidden relative w-[25rem] h-[25rem] ">
                <Image src={cam1} alt="" />
              </div>{' '}
            </div>
          </div>
          <div className="h-full flex flex-col items-center md:mt-24 px-4 sm:px-12">
            <div className="text-4xl font-semibold mb-4 text-center">
              Innowacyjne Technologie
            </div>{' '}
            <div className="text-xl text-gray-600 font-semibold text-center ">
              Budujące Bezpieczny i Inteligentny Świat
            </div>
            {/* <div className="mt-16 text-4xl font-semibold ">
                NADZWYCZAJNE TECHNOLOGIE
              </div> */}
            <div className="my-12 md:mx-12 gap-y-16 gap-4 grid md:grid-cols-3 sm:grid-cols-2">
              <Card
                img={quality}
                txt={'Rejestracja światła w słabym oświetleniu'}
              />{' '}
              <Card img={house} txt={'Wysoka rozdzielczość'} />{' '}
              <Card img={thermo} txt={'Technologia termowizyjna'} />{' '}
              <Card img={open} txt={'Monitoring otwartej przestrzeni'} />
              <Card img={motion} txt={'Detekcja ruchu'} />{' '}
              <Card img={online} center={true} txt={'Zdalny podgląd'} />
            </div>
            <div className="flex flex-col">
              <div className="lg:px-36 text-center px-2 sm:px-12 md:px-24 flex flex-col gap-1 text-2xl font-bold">
                Odkryj świat pełen bezpieczeństwa
                <div className="text-lg font-medium mt-2 text-center px-2">
                  Nie ważne, czy jesteś osobą prywatną, reprezentujesz firmę czy
                  instytucję - mamy rozwiązania dopasowane do Twoich potrzeb.{' '}
                </div>
                <div className="text-lg font-medium ">
                  Montujemy kamery monitoringu oparte na zaawansowanych
                  systemach analogowych o wysokiej rozdzielczości oraz
                  innowacyjnych systemach IP.
                </div>
                <div className="text-lg font-medium">
                  {' '}
                  Bezpieczeństwo to nasza pasja, a Twój spokój umysłu naszym
                  celem. Daj nam szansę, a pokażemy Ci, jak możesz czuć się
                  pewnie i komfortowo w każdym środowisku.
                </div>
              </div>
            </div>
          </div>
          <div className="absolute flex-col top-0 w-full mt-10 flex items-center justify-center px-12 prose"></div>{' '}
          <div></div>
        </main>
      </section>
    </>
  );
};

export default Home;

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
