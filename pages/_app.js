import '../styles/globals.css';
import Head from 'next/head';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

// Track page views (placeholder for Google Analytics)
const usePageTracking = () => {
  const router = useRouter();
  
  useEffect(() => {
    const handleRouteChange = (url) => {
      // Google Analytics pageview tracking
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('config', 'G-XXXXXXXXXX', {
          page_path: url,
        });
      }
    };
    
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);
};

export default function App({ Component, pageProps }) {
  usePageTracking();
  
  return (
    <>
      <Head>
        {/* Default SEO - Can be overridden by individual pages */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#2C5235" />
        
        {/* Default Open Graph */}
        <meta property="og:site_name" content="Discover Milwaukee" />
        <meta property="og:locale" content="en_US" />
        
        {/* Favicon defaults */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
