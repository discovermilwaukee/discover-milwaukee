import Head from "next/head";
import { DiscoverMilwaukee } from "../components/DiscoverMilwaukee";

// SEO-only structured data for organic reach on advertising / brand-partnership
// intent in Milwaukee. Additive JSON-LD — no visible page copy is changed.
const SITE = "https://www.discover-milwaukee.com";

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Milwaukee Advertising & Brand Partnerships",
  "serviceType": "Advertising, influencer marketing and sponsored content",
  "url": `${SITE}/partner`,
  "description":
    "Advertising, sponsored content, influencer marketing, event promotion and brand partnerships for businesses that want to reach an engaged local Milwaukee audience.",
  "provider": {
    "@type": "Organization",
    "name": "Discover Milwaukee",
    "url": SITE,
    "logo": `${SITE}/logo.png`,
    "sameAs": [
      "https://instagram.com/discovermilwaukee",
      "https://tiktok.com/@discovermilwaukee",
      "https://www.facebook.com/p/discovermilwaukee-100069844392448/"
    ]
  },
  "areaServed": [
    { "@type": "City", "name": "Milwaukee", "containedInPlace": { "@type": "State", "name": "Wisconsin" } },
    { "@type": "State", "name": "Wisconsin" }
  ],
  "audience": { "@type": "BusinessAudience", "name": "Milwaukee businesses and brands" },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Partnership options",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "One-time feature" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Ongoing partnership" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Giveaway collaboration" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Event partnership" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Sponsorship (e.g. This Week in Milwaukee, Festival Guide)" } }
    ]
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How can I advertise my business in Milwaukee?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Partner with Discover Milwaukee. We offer sponsored content, event promotion, giveaways, and brand partnerships that reach over 37 million annual views across Instagram, TikTok, and Facebook. Submit the partner intake form to get tailored options."
      }
    },
    {
      "@type": "Question",
      "name": "What is Discover Milwaukee's audience reach?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Discover Milwaukee reached 37.1 million views in 2025 across Instagram, Facebook, and TikTok, with 79.2% of the audience aged 18-44 - local people deciding where to eat, drink, and spend money in Milwaukee."
      }
    },
    {
      "@type": "Question",
      "name": "What types of brand partnerships does Discover Milwaukee offer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "One-time features, ongoing partnerships, giveaway collaborations, event partnerships, and sponsorships such as This Week in Milwaukee and the Festival Guide."
      }
    },
    {
      "@type": "Question",
      "name": "How much does it cost to advertise with Discover Milwaukee?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Partnerships are tailored to your goals and budget, with options spanning entry-level promotions through larger ongoing campaigns. Share your budget range in the partner intake form for a custom recommendation."
      }
    },
    {
      "@type": "Question",
      "name": "Does Discover Milwaukee work with local Milwaukee businesses?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Discover Milwaukee partners with local Milwaukee brands and businesses, from neighborhood spots to established names, to reach engaged local audiences."
      }
    }
  ]
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": SITE },
    { "@type": "ListItem", "position": 2, "name": "Partner", "item": `${SITE}/partner` }
  ]
};

export default function PartnerPage() {
  return (
    <>
      <Head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      </Head>
      <DiscoverMilwaukee initialPage="partner" />
    </>
  );
}
