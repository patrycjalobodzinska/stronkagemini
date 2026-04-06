import { NextPageWithLayout } from '@/layouts/NextPageWithLayout';
import { absoluteUrl, siteConfig } from '@/lib/seo';
import { useRouter } from 'next/router';
import { DefaultSeo } from 'next-seo';
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
      <DefaultSeo
        titleTemplate="%s | GEMINI"
        defaultTitle="Monitoring, kamery, drzwi, bramy, alarmy – Rzeszów"
        description={siteConfig.defaultDescription}
        openGraph={{
          type: 'website',
          locale: siteConfig.locale,
          url: siteConfig.url,
          siteName: siteConfig.name,
          images: [
            {
              url: absoluteUrl(siteConfig.ogImage),
              width: 1200,
              height: 630,
              alt: `${siteConfig.name} – Rzeszów`,
            },
          ],
        }}
        twitter={{
          cardType: 'summary_large_image',
        }}
        additionalMetaTags={[
          { name: 'application-name', content: siteConfig.name },
          { name: 'apple-mobile-web-app-title', content: siteConfig.name },
          { name: 'theme-color', content: '#002c59' },
          { name: 'format-detection', content: 'telephone=yes' },
        ]}
        additionalLinkTags={[
          { rel: 'icon', href: '/logo.png', type: 'image/png' },
          { rel: 'apple-touch-icon', href: '/logo.png' },
          { rel: 'manifest', href: '/site.webmanifest' },
        ]}
      />
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
