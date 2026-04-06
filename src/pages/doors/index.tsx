import { PageSeo } from '@/components/PageSeo';
import { NextPageWithLayout } from '@/layouts/NextPageWithLayout';
import PublicLayout from '@/layouts/PublicLayout';
import door from '@/public/door.png';
import Image from 'next/image';
import { dehydrate, QueryClient } from 'react-query';
import erkadoDoors from '@/public/erkadoDoors.jpg';
import erkado from '@/public/erkado.png';
import gerda from '@/public/doorsGerda.jpeg';
import logoGerda from '@/public/gerda.jpg';
import dreDoors from '@/public/dreDoors.jpg';
import dreDoors2 from '@/public/dreDoors2.jpg';
import dreLogo from '@/public/dre.jpg';

const Home: NextPageWithLayout = () => {
  return (
    <>
      <PageSeo
        title="Drzwi zewnętrzne i wewnętrzne"
        description="Sprzedaż i montaż drzwi Gerda, DRE, Erkado w Rzeszowie. Drzwi wejściowe do mieszkań i domów jednorodzinnych. Katalogi, fachowy montaż."
        path="/doors"
      />
      <section className=" h-full -mt-2 mx-2 lg:mx-auto max-w-[1600px]">
        {' '}
        <main className="flex flex-col items-center  justify-between w-">
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
            <div className="absolute md:top-16 top-6 inset-x-0  md:mx-24 lg:mx-44 text-center flex items-center justify-center md:justify-between">
              <div className="md:px-12  flex flex-col h-[25rem] justify-center items-center  ">
                <div className="text-5xl font-bold text-gray-800">DRZWI</div>{' '}
                <div className="text-2xl text-gray-600 font-semibold">
                  wewnętrzne i zewnętrzne
                </div>
              </div>
              <div className="relative sm:block hidden rounded-full border-[6px]  shadow-lg border-gray-100  w-[20rem] h-[23rem] ">
                <Image
                  src={door}
                  alt=""
                  className="rounded-full w-full h-full object-cover  "
                />
              </div>{' '}
            </div>
          </div>
          <div className="h-full flex flex-col items-center mt-32 text-center md:text-justify px-6 md:x-12">
            <div className="text-4xl font-semibold mb-4">
              Doskonały wybór drzwi dla Twojego domu
            </div>{' '}
            <div className="text-xl text-gray-600 font-semibold px-6 text-justify md:px-12 lg:px-24">
              Przez ponad dwie dekady, nasza firma jest z pasją zaangażowana w
              montaż i sprzedaż drzwi, tworząc przestrzenie, które zachwycają i
              spełniają Twoje oczekiwania. Ciesz się pięknem i trwałością
              oferowanych przez nas produktów, które podkreślą każde wnętrze.
            </div>{' '}
            <div className="mt-4 grid md:grid-cols-2 gap-4 lg:mx-12">
              {' '}
              <div>
                <div className="mt-12 flex flex-col items-center justify-center gap-3 text-3xl font-semibold text-slate-800">
                  Drzwi zewnętrzne
                  <div className="h-1 w-14 rounded-full bg-gradient-to-r from-primary to-amber-300" />
                </div>
                {/* <div className="mt-16 text-4xl font-semibold ">
                NADZWYCZAJNE TECHNOLOGIE
              </div> */}
                <div className="my-12  gap-y-16 gap-4 grid sm:grid-cols-2">
                  <Card
                    img={gerda}
                    imgLogo={logoGerda}
                    // desc={
                    //   ' Firma Gerda i jej konstruktorzy od wielu lat doskonalą swoje produkty. Celem jest dostarczenie klientom znakomitych drzwi do mieszkania w bloku wielorodzinnym. '
                    // }
                    link={`https://gerda.pl/wp-content/uploads/2021/07/Drzwi-zewnetrzne-04-2023.pdf`}
                    txt={'Gerda'}
                  />
                  <Card
                    img={dreDoors}
                    imgLogo={dreLogo}
                    link={`https://dre.pl/wp-content/uploads/2023/04/Katalog-DRE-2023-edycja-2.pdf`}
                    txt={'DRE'}
                  />{' '}
                </div>{' '}
              </div>
              <div>
                {' '}
                <div className="mt-12 flex flex-col items-center justify-center gap-3 text-3xl font-semibold text-slate-800">
                  Drzwi wewnętrzne
                  <div className="h-1 w-14 rounded-full bg-gradient-to-r from-primary to-amber-300" />
                </div>
                <div className="my-12  gap-y-16 gap-4 grid sm:grid-cols-2">
                  <Card
                    img={dreDoors2}
                    imgLogo={dreLogo}
                    link={`https://dre.pl/wp-content/uploads/2023/04/Katalog-DRE-2023-edycja-2.pdf`}
                    txt={'DRE'}
                  />{' '}
                  <Card
                    img={erkadoDoors}
                    imgLogo={erkado}
                    link={`https://erkado.pl/wp-content/uploads/2023/06/erkado-katalog-dw-2023.b-www-08.08.2023.pdf`}
                    txt={'Erkado'}
                  />
                </div>{' '}
              </div>{' '}
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
  imgLogo,
  desc,
  txt,
  link,
  center,
}: {
  img: any;
  imgLogo?: any;
  desc?: string;
  txt: string;
  link?: string;
  center?: boolean;
}) => {
  return (
    <div className="h-full  bg-white rounded-md shadow-md">
      <div className="relative   ">
        <Image
          src={img}
          height={500}
          width={500}
          alt=""
          className={` rounded-t-md object-contain hover:scale-110 transition duration-500 cursor-pointer`}
        />
        <div className="absolute bottom-0  h-full left-4">
          <div className="relative flex items-end  w-28 justify-end  h-full">
            <Image
              src={imgLogo}
              alt=""
              className={` h-12 rounded-t-md object-contain  cursor-pointer`}
            />
          </div>{' '}
        </div>
      </div>{' '}
      <div className="text-xl  flex flex-col font-semibold px-4 text-left py-4">
        {txt}
        <div className="text-sm font-normal">{desc}</div>

        <a
          className="flex"
          rel="noopener noreferrer"
          target="_blank"
          href={link}
        >
          <div className="cursor-pointer text-base py-1 px-2 my-2 hover:bg-primary/80 bg-primary text-white rounded-md">
            Pobierz katalog
          </div>
        </a>
      </div>
    </div>
  );
};
