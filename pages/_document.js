import { Html, Head, Main, NextScript } from 'next/document';

// =============================================================================
// GTM CONFIGURATION
// TODO: Set NEXT_PUBLIC_GTM_ID in your .env.local file
// Get your GTM ID at: https://tagmanager.google.com/
// =============================================================================
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || '';

export default function Document() {
  return (
    <Html lang="en" dir="ltr">
      <Head>
        {/* Favicon */}
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" href="/favicon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#1a3d34" />

        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://i.imgur.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />

        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="https://docs.google.com" />
        <link rel="dns-prefetch" href="https://api.beehiiv.com" />

        {/* Fallback for older browsers */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

        {/* Google Tag Manager - Head Script */}
        {GTM_ID && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${GTM_ID}');
              `,
            }}
          />
        )}
      </Head>
      <body>
        {/* Google Tag Manager (noscript) - Fallback for users with JS disabled */}
        {GTM_ID && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        )}

        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
