import { NextPageWithLayout } from '@/layouts/NextPageWithLayout';
import { useRouter } from 'next/router';
import '../../styles/nprogress.css';
import type { AppProps } from 'next/app';
import { useEffect, useRef } from 'react';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import '../../styles/globals.css';

// @ts-ignore
import MessengerCustomerChat from 'react-messenger-customer-chat';
import nProgress from 'nprogress';
interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const router = useRouter();
  const getLayout = Component.getLayout || ((page) => page);
  const queryClient = useRef(new QueryClient());

  useEffect(() => {
    const handleRouteStart = () => nProgress.start();
    const handleRouteDone = () => nProgress.done();
    router.events.on('routeChangeStart', handleRouteStart);

    router.events.on('routeChangeComplete', handleRouteDone);

    router.events.on('routeChangeError', handleRouteDone);

    return () => {
      router.events.off('routeChangeStart', handleRouteStart);
      router.events.off('routeChangeComplete', handleRouteDone);
      router.events.off('routeChangeError', handleRouteDone);
    };
  }, [router.events]);

  return (
    <QueryClientProvider client={queryClient.current}>
      <ReactQueryDevtools initialIsOpen={false} />
      <Hydrate state={pageProps.dehydratedState}>
        <main className="">
          {getLayout(<Component {...pageProps} />)}{' '}
          {/* <MessengerCustomerChat
            language="pl_PL"
            version="17.0"
            // themeColor="#F8C777"
            pageId={'232925013483746'}
            appId={'539018551496712'}
          /> */}
        </main>
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
