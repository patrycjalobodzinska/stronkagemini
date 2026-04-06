import { JsonLdLocalBusiness } from '@/components/JsonLdLocalBusiness';
import { PageSeo } from '@/components/PageSeo';
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
      <PageSeo
        title="Monitoring i zabezpieczenia domu – Rzeszów"
        description="Monitoring, kamery CCTV, drzwi Gerda i DRE, bramy Wiśniowski, alarmy, rolety – Rzeszów i okolice. Wycena z dojazdem. Ponad 20 lat na rynku."
        path="/"
      />
      <JsonLdLocalBusiness />
      <section className=" h-full -mt-2 mx-2 lg:mx-auto max-w-[1600px]">
        {' '}
        <main className="flex flex-col items-center  justify-between w-">
          <HomePage />

          <img
            src={'back.jpg'}
            alt=""
            className="fixed left-0 top-0 z-[-1] h-full w-full object-cover pt-16 opacity-[0.12]"
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
