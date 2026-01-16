import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en" dir="ltr">
      <Head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://i.imgur.com" />
        
        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="https://docs.google.com" />
        <link rel="dns-prefetch" href="https://api.beehiiv.com" />
        
        {/* Preload critical fonts if using any */}
        
        {/* Fallback for older browsers */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      </Head>
      <body>
        {/* Google Tag Manager (noscript) - Add your GTM ID */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
