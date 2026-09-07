import Head from "next/head";
import Nav from "../components/Nav";
import MilwaukeePass from "../components/MilwaukeePass";

const SITE = "https://www.discover-milwaukee.com";
const PATH = "/pass";

export default function PassPage() {
  return (
    <>
      <Head>
        <title>Milwaukee Annual Pass — One pass, a whole city of perks | Discover Milwaukee</title>
        <meta
          name="description"
          content="The Milwaukee Annual Pass unlocks members-only discounts, free admissions, and BOGO deals at the city's best attractions, restaurants, and experiences — all year long. (Interactive demo.)"
        />
        <meta name="robots" content="noindex,nofollow" />
        <link rel="canonical" href={`${SITE}${PATH}`} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Milwaukee Annual Pass — One pass, a whole city of perks" />
        <meta
          property="og:description"
          content="Members-only discounts, free admissions, and BOGO deals across Milwaukee, all year long."
        />
        <meta property="og:url" content={`${SITE}${PATH}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </Head>
      <Nav />
      <MilwaukeePass />
    </>
  );
}
