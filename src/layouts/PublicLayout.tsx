import { useRouter } from 'next/router';
import { useState } from 'react';
import Header from './Header';
import Footer from './Footer';

export interface IPrimaryLayout {
  children: React.ReactNode;
}

const PublicLayout: React.FC<IPrimaryLayout> = ({ children }) => {
  return (
    <>
      {' '}
      <Header />
      <main className={`min-h-[calc(100vh-382px)] h-full w-full`}>
        {children}
      </main>
      <div className="flex items-end mt-12 justify-end ">
        <Footer />{' '}
      </div>
    </>
  );
};

export default PublicLayout;
