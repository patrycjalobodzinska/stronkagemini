import { NextPageWithLayout } from '@/layouts/NextPageWithLayout';
import PublicLayout from '@/layouts/PublicLayout';
import Alarmy from '@/modules/Alarmy';
import Cameras from '@/modules/Cameras';
import Doors from '@/modules/Doors';
import GarageDoors from '@/modules/GarageDoors';
import HomePage from '@/modules/Homepgae';
import Location from '@/modules/Location';
import Realization from '@/modules/Realization';
import Section from '@/modules/Section';
import { PartnershipCarousel } from '@/modules/SectionCompanies';

import { dehydrate, QueryClient, useQuery } from 'react-query';

const Home: NextPageWithLayout = () => {
  return (
    <>
      <section className=" h-full -mt-2 mx-2 lg:mx-auto max-w-[1600px]">
        {' '}
        <main className="flex flex-col items-center  justify-between w-">
          <HomePage />

          <img
            src={'back.jpg'}
            alt=""
            className="fixed top-0 left-0 w-full h-full z-[-1] h-full w-full object-cover pt-16  opacity-20"
          />
          <div className=" flex-col gap-24 h-full  w-full -mt-14 flex items-center justify-center md:px-8 lg:px-12 ">
            <Section /> <PartnershipCarousel />
            <Cameras />
            <Alarmy />
            <GarageDoors />
            <Doors /> <Realization />
            <Location />
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
