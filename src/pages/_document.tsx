import getConfig from 'next/config';
import { Head, Html, Main, NextScript } from 'next/document';
import Script from 'next/script';

const { publicRuntimeConfig } = getConfig();

export default function Document() {
  return (
    <Html lang="pl">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.8.0/dist/leaflet.css"
          integrity="sha512-hoalWLoI8r4UszCkZ5kL8vayOGVae1oxXe/2A4AO6J9+580uKHDO3JdHb7NzwwzK5xr/Fs0W40kiNHxM9vyTtQ=="
          crossOrigin=""
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/react-leaflet-markercluster/dist/styles.min.css"
        />

        <script
          id="fb-pixel"
          dangerouslySetInnerHTML={{
            __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window,document,'script',
            'https://connect.facebook.net/pl_PL/fbevents.js');
            fbq('init', '${834529411348147}');
            fbq('track', 'PageView');
          `,
          }}
        />
      </Head>
      <body>
        {/* <!-- Messenger Chat plugin Code --> */}
        <div id="fb-root"></div>

        {/* <!-- Your Chat plugin code --> */}
        <div id="fb-customer-chat" className="fb-customerchat"></div>
        <Script
          id="messenger-tag"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `   var chatbox = document.getElementById('fb-customer-chat');
            chatbox.setAttribute("page_id", "232925013483746");
            chatbox.setAttribute("attribution", "biz_inbox");`,
          }}
        ></Script>
        <Script
          id="messenger-sdk"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: ` window.fbAsyncInit = function() {
              FB.init({
                xfbml            : true,
                version          : 'v17.0'
              });
            };
      
            (function(d, s, id) {
              var js, fjs = d.getElementsByTagName(s)[0];
              if (d.getElementById(id)) return;
              js = d.createElement(s); js.id = id;
              js.src = 'https://connect.facebook.net/pl_PL/sdk/xfbml.customerchat.js';
              fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));`,
          }}
        ></Script>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
