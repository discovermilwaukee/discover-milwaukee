import '../styles/globals.css';
import Head from 'next/head';
import Script from 'next/script';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

// =============================================================================
// ANALYTICS CONFIGURATION
// TODO: Replace with your actual Google Analytics 4 Measurement ID
// Get yours at: https://analytics.google.com/ -> Admin -> Data Streams -> Web
// =============================================================================
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || '';

// =============================================================================
// GLOBAL SEO STRUCTURED DATA
// Organization and WebSite schemas for Google Knowledge Panel & Sitelinks
// =============================================================================
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Discover Milwaukee",
  "alternateName": "DiscoverMKE",
  "url": "https://www.discover-milwaukee.com",
  "logo": "https://www.discover-milwaukee.com/favicon.png",
  "description": "Your insider's guide to Milwaukee, Wisconsin. Events, restaurants, breweries, neighborhoods, and things to do in MKE.",
  "foundingDate": "2024",
  "areaServed": {
    "@type": "City",
    "name": "Milwaukee",
    "containedInPlace": {
      "@type": "State",
      "name": "Wisconsin"
    }
  },
  "sameAs": []
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Discover Milwaukee",
  "alternateName": "DiscoverMKE",
  "url": "https://www.discover-milwaukee.com",
  "description": "Milwaukee events, restaurants, breweries, and local guides",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://www.discover-milwaukee.com/?s={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Discover Milwaukee",
  "@id": "https://www.discover-milwaukee.com",
  "url": "https://www.discover-milwaukee.com",
  "image": "https://www.discover-milwaukee.com/favicon.png",
  "description": "Milwaukee's local guide to events, restaurants, breweries, and things to do.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Milwaukee",
    "addressRegion": "WI",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 43.0389,
    "longitude": -87.9065
  },
  "areaServed": {
    "@type": "City",
    "name": "Milwaukee"
  },
  "priceRange": "Free"
};

// Track page views for Google Analytics
const usePageTracking = () => {
  const router = useRouter();

  useEffect(() => {
    if (!GA_MEASUREMENT_ID) return;

    const handleRouteChange = (url) => {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('config', GA_MEASUREMENT_ID, {
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
        <meta name="theme-color" content="#1a3d34" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />

        {/* Geographic targeting for local SEO */}
        <meta name="geo.region" content="US-WI" />
        <meta name="geo.placename" content="Milwaukee" />
        <meta name="geo.position" content="43.0389;-87.9065" />
        <meta name="ICBM" content="43.0389, -87.9065" />

        {/* Default Open Graph */}
        <meta property="og:site_name" content="Discover Milwaukee" key="og:site_name" />
        <meta property="og:locale" content="en_US" key="og:locale" />
        <meta property="og:type" content="website" key="og:type" />

        {/* Twitter Card defaults */}
        <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
        <meta name="twitter:site" content="@discovermke" key="twitter:site" />

        {/* Default OG Image - Pages can override by re-using the same `key` */}
        <meta property="og:image" content="https://www.discover-milwaukee.com/android-chrome-512x512.png" key="og:image" />
        <meta property="og:image:width" content="512" key="og:image:width" />
        <meta property="og:image:height" content="512" key="og:image:height" />
        <meta property="og:image:alt" content="Discover Milwaukee - Your Guide to MKE" key="og:image:alt" />

        {/* Favicon defaults */}
        <link rel="icon" href="/favicon.ico" />

        {/* Global Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </Head>

      {/* Google Analytics 4 */}
      {GA_MEASUREMENT_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}', {
                page_path: window.location.pathname,
              });
            `}
          </Script>
        </>
      )}

      <Component {...pageProps} />
    </>
  );
}
