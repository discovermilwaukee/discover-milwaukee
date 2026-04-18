import React from "react";
import Head from "next/head";
import Link from "next/link";

const c = {
  green1: "#1a3d34",
  green2: "#2d5a4a",
  cream: "#faf8f5",
  beige: "#e8e4dc",
  orange: "#f4a261",
  yellow: "#f4d03f",
};

const tacoSpots = {
  bestOverall: [
    {
      name: "Guanajuato",
      neighborhood: "Bay View",
      style: "Authentic Mexican",
      priceRange: "$",
      address: "2736 S Kinnickinnic Ave, Milwaukee, WI 53207",
      description: "Milwaukee's reader-voted best taco spot. This family-owned Bay View staple serves authentic dishes in a warm, welcoming atmosphere. The tacos are simple, traditional, and perfectly executed—exactly what you'd find at a great taqueria in Mexico.",
      mustTry: "Al Pastor tacos, Carnitas, Lengua",
      insiderTip: "Go early on weekends—it gets packed. The salsa bar is self-serve and excellent.",
      bestFor: "Authentic experience, families, takeout",
    },
    {
      name: "El Tlaxcalteca Restaurant",
      neighborhood: "South Side",
      style: "Traditional Mexican",
      priceRange: "$",
      address: "4463 S 27th St, Milwaukee, WI 53221",
      description: "A South Side institution known for generous portions and incredibly authentic flavors. The family recipes and homestyle cooking make this a local favorite that consistently tops Milwaukee taco lists.",
      mustTry: "Tacos de Barbacoa, Tortas, Tamales",
      insiderTip: "Try their weekend specials—they often have dishes not on the regular menu.",
      bestFor: "Authentic Mexican, value, family meals",
    },
  ],
  birria: [
    {
      name: "Chucho's Red Tacos",
      neighborhood: "Multiple Locations",
      style: "Birria Specialist",
      priceRange: "$-$$",
      address: "Various locations throughout Milwaukee",
      description: "The birria specialists of Milwaukee. Slow-cooked birria served with rich consomé for dipping has made this spot a cult favorite. The red-tinged tortillas and perfectly seasoned meat are worth seeking out.",
      mustTry: "Birria Tacos with Consomé, Quesabirria",
      insiderTip: "Follow them on social media for location updates. The consomé is essential—don't skip it.",
      bestFor: "Birria lovers, food truck fans, Instagram-worthy food",
    },
  ],
  upscale: [
    {
      name: "Paloma Taco and Tequila",
      neighborhood: "Third Ward",
      style: "Modern Mexican",
      priceRange: "$$-$$$",
      address: "611 N Broadway, Milwaukee, WI 53202",
      description: "Elevated tacos in a vibrant, stylish setting. Paloma brings a modern approach to Mexican cuisine with creative flavor combinations while respecting tradition. The tequila selection is impressive.",
      mustTry: "Short Rib Tacos, Crispy Fish Tacos, Margaritas",
      insiderTip: "The happy hour deals are solid. Ask about off-menu specials.",
      bestFor: "Date nights, groups, cocktail enthusiasts",
    },
    {
      name: "BelAir Cantina",
      neighborhood: "Multiple Locations",
      style: "California-Mexican",
      priceRange: "$$",
      address: "Water Street, Wauwatosa, Downer, Oak Creek, Brookfield",
      description: "Spacious patios and a California-Mexican vibe make BelAir a family favorite across Milwaukee. Consistent quality across multiple locations with a menu that pleases both traditionalists and adventurous eaters.",
      mustTry: "Street Tacos, Queso Fundido, House Margaritas",
      insiderTip: "The Water Street location has the best patio. Tuesday tacos specials are a great deal.",
      bestFor: "Families, large groups, patio dining",
    },
  ],
  streetStyle: [
    {
      name: "Lazo's Taco Shack",
      neighborhood: "South Side",
      style: "Street Tacos",
      priceRange: "$",
      address: "South Milwaukee Area",
      description: "No-frills street tacos done right. Lazo's keeps it simple with quality ingredients and authentic preparations. This is the kind of place where regulars know exactly what they want.",
      mustTry: "Carne Asada Tacos, Chorizo Tacos",
      insiderTip: "Cash preferred. Get extra limes and hot sauce on the side.",
      bestFor: "Quick lunch, authentic street food, late-night eats",
    },
    {
      name: "Al Pastor",
      neighborhood: "South Side",
      style: "Mexico City Style",
      priceRange: "$",
      address: "Milwaukee's South Side",
      description: "Named after the iconic taco style, this spot specializes in the vertical-spit roasted pork that defines Mexico City street food. The pineapple-topped al pastor is the star.",
      mustTry: "Al Pastor Tacos, Suadero",
      insiderTip: "Watch them slice the meat off the trompo—it's mesmerizing and delicious.",
      bestFor: "Al pastor lovers, street food authenticity",
    },
  ],
  creative: [
    {
      name: "Café Corazón",
      neighborhood: "Riverwest & Bay View",
      style: "Modern Mexican / Vegetarian-Friendly",
      priceRange: "$$",
      address: "3129 N Bremen St (Riverwest) & 2394 S Kinnickinnic Ave (Bay View)",
      description: "Vibrant decor meets locally-sourced ingredients at this beloved Milwaukee spot. Café Corazón has carved out a niche with its slew of vegan and vegetarian options without sacrificing flavor.",
      mustTry: "Vegan Tacos, Jackfruit Tacos, Fresh-squeezed Margaritas",
      insiderTip: "The Bay View location is usually less crowded. Their brunch is excellent too.",
      bestFor: "Vegetarians, vegans, brunch crowds, health-conscious diners",
    },
    {
      name: "Electric Lime Taqueria",
      neighborhood: "Bay View",
      style: "Modern Street Tacos",
      priceRange: "$-$$",
      address: "Bay View, Milwaukee",
      description: "A newer addition to Milwaukee's taco scene bringing energy and creativity to classic preparations. Bright, fresh flavors and a fun atmosphere.",
      mustTry: "Rotating specialty tacos, Fish Tacos",
      insiderTip: "Follow their Instagram for daily specials.",
      bestFor: "Adventurous eaters, quick bites",
    },
  ],
  taquerias: [
    {
      name: "La Casa De Alberto",
      neighborhood: "South Side",
      style: "Traditional Taqueria",
      priceRange: "$",
      address: "624 W National Ave, Milwaukee, WI 53204",
      description: "A narrow, low-key space that serves up big margaritas and even bigger flavors. La Casa De Alberto represents the best of Milwaukee's authentic taqueria culture.",
      mustTry: "Tacos al Carbon, House Margaritas",
      insiderTip: "It's small—expect a wait on weekends. Worth it.",
      bestFor: "Authentic experience, margarita lovers",
    },
    {
      name: "Tavo's Signature Cuisine",
      neighborhood: "Walker's Point",
      style: "Mexican Fusion",
      priceRange: "$$",
      address: "Walker's Point, Milwaukee",
      description: "Chef-driven Mexican cuisine that elevates traditional flavors with modern techniques. Tavo's brings creativity while respecting roots.",
      mustTry: "Chef's taco specials, Mole dishes",
      insiderTip: "Ask about the daily specials—that's where the creativity shines.",
      bestFor: "Foodies, special occasions",
    },
    {
      name: "Mazorca",
      neighborhood: "Walker's Point",
      style: "Oaxacan-Inspired",
      priceRange: "$$",
      address: "Walker's Point, Milwaukee",
      description: "Oaxacan-inspired Mexican cuisine featuring traditional moles and preparations not commonly found elsewhere in Milwaukee. The attention to regional authenticity sets Mazorca apart.",
      mustTry: "Mole Negro Tacos, Memelas, Tlayudas",
      insiderTip: "Try the mezcal selection—they know their stuff.",
      bestFor: "Adventurous eaters, Oaxacan cuisine fans, mezcal enthusiasts",
    },
  ],
};

const faqs = [
  {
    question: "What are the best tacos in Milwaukee?",
    answer: "The best tacos in Milwaukee include Guanajuato in Bay View (reader favorite), El Tlaxcalteca on the South Side (authentic traditional), Chucho's Red Tacos (best birria), and Paloma Taco and Tequila in Third Ward (upscale). Milwaukee's South Side has the highest concentration of authentic taquerias."
  },
  {
    question: "Where can I find authentic Mexican tacos in Milwaukee?",
    answer: "For the most authentic Mexican tacos, head to Milwaukee's South Side neighborhoods, particularly along 27th Street. El Tlaxcalteca, La Casa De Alberto, and the many family-run taquerias offer traditional preparations that rival anything you'd find in Mexico."
  },
  {
    question: "What is the best birria in Milwaukee?",
    answer: "Chucho's Red Tacos is widely considered to have the best birria in Milwaukee. Their slow-cooked birria with consomé for dipping has developed a cult following. Follow them on social media for current locations."
  },
  {
    question: "Are there good vegetarian tacos in Milwaukee?",
    answer: "Yes! Café Corazón (Riverwest and Bay View locations) is known for excellent vegan and vegetarian options including jackfruit tacos. Many traditional taquerias also offer great mushroom, potato, and bean tacos."
  },
  {
    question: "Where are the best cheap tacos in Milwaukee?",
    answer: "The best cheap tacos are found on Milwaukee's South Side. Spots like Guanajuato, El Tlaxcalteca, Lazo's Taco Shack, and La Casa De Alberto offer authentic tacos for $2-4 each. Street taco prices are hard to beat."
  },
  {
    question: "What neighborhoods have the best tacos in Milwaukee?",
    answer: "The South Side has the most authentic taquerias and best concentration of great tacos. Bay View has excellent options like Guanajuato and Café Corazón. Walker's Point features creative spots like Mazorca. Third Ward has upscale options like Paloma."
  },
];

const structuredData = {
  article: {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Best Tacos in Milwaukee 2026: Complete Taco Guide",
    "description": "Discover the best tacos in Milwaukee, from authentic South Side taquerias to modern upscale spots. Birria, al pastor, street tacos, and more.",
    "author": { "@type": "Organization", "name": "Discover Milwaukee", "url": "https://www.discover-milwaukee.com" },
    "publisher": { "@type": "Organization", "name": "Discover Milwaukee" },
    "datePublished": "2026-01-15",
    "dateModified": "2026-04-18",
    "mainEntityOfPage": "https://www.discover-milwaukee.com/best-tacos-milwaukee"
  },
  faqPage: {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
    }))
  },
  breadcrumb: {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.discover-milwaukee.com" },
      { "@type": "ListItem", "position": 2, "name": "Best Tacos in Milwaukee", "item": "https://www.discover-milwaukee.com/best-tacos-milwaukee" }
    ]
  }
};

export default function BestTacosMilwaukee() {
  const TacoCard = ({ spot }) => (
    <div style={{
      backgroundColor: c.cream,
      borderRadius: "16px",
      padding: "24px",
      marginBottom: "20px",
      border: `1px solid ${c.beige}`,
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "8px", marginBottom: "12px" }}>
        <h3 style={{ color: c.green1, fontSize: "22px", fontWeight: "800", margin: 0 }}>{spot.name}</h3>
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          <span style={{ backgroundColor: c.orange, color: "white", padding: "4px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: "600" }}>{spot.priceRange}</span>
          <span style={{ backgroundColor: c.green2, color: "white", padding: "4px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: "600" }}>{spot.neighborhood}</span>
        </div>
      </div>
      <p style={{ color: c.green2, fontSize: "14px", fontWeight: "600", marginBottom: "8px" }}>{spot.style}</p>
      <p style={{ color: "#555", fontSize: "15px", lineHeight: 1.7, marginBottom: "16px" }}>{spot.description}</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}>
        <div style={{ backgroundColor: "rgba(244,162,97,0.1)", padding: "12px", borderRadius: "8px" }}>
          <p style={{ fontSize: "12px", fontWeight: "700", color: c.orange, marginBottom: "4px" }}>MUST TRY</p>
          <p style={{ fontSize: "14px", color: c.green1, margin: 0 }}>{spot.mustTry}</p>
        </div>
        <div style={{ backgroundColor: "rgba(45,90,74,0.1)", padding: "12px", borderRadius: "8px" }}>
          <p style={{ fontSize: "12px", fontWeight: "700", color: c.green2, marginBottom: "4px" }}>INSIDER TIP</p>
          <p style={{ fontSize: "14px", color: c.green1, margin: 0 }}>{spot.insiderTip}</p>
        </div>
      </div>
      {spot.address && (
        <p style={{ fontSize: "13px", color: "#777", marginTop: "12px", marginBottom: 0 }}>{spot.address}</p>
      )}
    </div>
  );

  return (
    <>
      <Head>
        <title>Best Tacos in Milwaukee 2026 | Top Taco Spots & Taquerias</title>
        <meta name="description" content="Find the best tacos in Milwaukee, WI. From authentic South Side taquerias to birria specialists and upscale modern Mexican. Complete 2026 guide with insider tips." />
        <meta name="keywords" content="best tacos milwaukee, tacos milwaukee, mexican food milwaukee, birria milwaukee, taquerias milwaukee, street tacos milwaukee" />
        <link rel="canonical" href="https://www.discover-milwaukee.com/best-tacos-milwaukee" />

        <meta property="og:title" content="Best Tacos in Milwaukee 2026 | Complete Taco Guide" />
        <meta property="og:description" content="Milwaukee's definitive taco guide. Authentic taquerias, birria specialists, and modern Mexican across every neighborhood." />
        <meta property="og:url" content="https://www.discover-milwaukee.com/best-tacos-milwaukee" />
        <meta property="og:type" content="article" />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.article) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.faqPage) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.breadcrumb) }} />
      </Head>

      <div style={{ backgroundColor: c.cream, minHeight: "100vh" }}>
        <nav style={{ backgroundColor: c.green1, padding: "16px 24px", position: "sticky", top: 0, zIndex: 100 }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Link href="/" style={{ color: c.yellow, fontSize: "20px", fontWeight: "900", textDecoration: "none" }}>DISCOVER MILWAUKEE</Link>
            <div style={{ display: "flex", gap: "24px" }}>
              <Link href="/explore" style={{ color: c.cream, textDecoration: "none", fontSize: "14px", fontWeight: "600" }}>Explore</Link>
              <Link href="/events" style={{ color: c.cream, textDecoration: "none", fontSize: "14px", fontWeight: "600" }}>Events</Link>
            </div>
          </div>
        </nav>

        <header style={{ background: `linear-gradient(135deg, ${c.green1} 0%, ${c.green2} 100%)`, padding: "60px 24px", textAlign: "center" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <p style={{ color: c.orange, fontSize: "14px", fontWeight: "700", letterSpacing: "3px", marginBottom: "12px" }}>UPDATED APRIL 2026</p>
            <h1 style={{ color: c.cream, fontSize: "clamp(32px, 5vw, 48px)", fontWeight: "900", marginBottom: "16px", lineHeight: 1.2 }}>
              Best Tacos in Milwaukee
            </h1>
            <p style={{ color: c.beige, fontSize: "18px", lineHeight: 1.6, maxWidth: "600px", margin: "0 auto" }}>
              From authentic South Side taquerias to modern Mexican hotspots—Milwaukee's taco scene rivals any city. Here's where to find the best.
            </p>
          </div>
        </header>

        <div style={{ backgroundColor: "white", borderBottom: `1px solid ${c.beige}`, padding: "20px 24px" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <p style={{ fontSize: "14px", fontWeight: "700", color: c.green1, marginBottom: "12px" }}>QUICK NAVIGATION</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
              <a href="#best-overall" style={{ color: c.green2, fontSize: "14px" }}>Best Overall</a>
              <span style={{ color: c.beige }}>|</span>
              <a href="#birria" style={{ color: c.green2, fontSize: "14px" }}>Best Birria</a>
              <span style={{ color: c.beige }}>|</span>
              <a href="#upscale" style={{ color: c.green2, fontSize: "14px" }}>Upscale</a>
              <span style={{ color: c.beige }}>|</span>
              <a href="#street-style" style={{ color: c.green2, fontSize: "14px" }}>Street Style</a>
              <span style={{ color: c.beige }}>|</span>
              <a href="#faq" style={{ color: c.green2, fontSize: "14px" }}>FAQ</a>
            </div>
          </div>
        </div>

        <main style={{ maxWidth: "800px", margin: "0 auto", padding: "48px 24px" }}>

          <section id="best-overall" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Best Overall Tacos in Milwaukee</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              These are the spots that consistently deliver excellent tacos—the places locals recommend without hesitation.
            </p>
            {tacoSpots.bestOverall.map((spot, i) => <TacoCard key={i} spot={spot} />)}
          </section>

          <section id="birria" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Best Birria Tacos</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              The birria craze hit Milwaukee hard—and these spots do it right with slow-cooked beef, consomé for dipping, and those signature red-tinged tortillas.
            </p>
            {tacoSpots.birria.map((spot, i) => <TacoCard key={i} spot={spot} />)}
          </section>

          <section id="upscale" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Upscale & Modern Mexican</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              When you want great tacos with craft cocktails and a date-night atmosphere.
            </p>
            {tacoSpots.upscale.map((spot, i) => <TacoCard key={i} spot={spot} />)}
          </section>

          <section id="street-style" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Street-Style Tacos</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              No-frills, maximum flavor. These spots focus on what matters: quality meat, fresh tortillas, and authentic preparations.
            </p>
            {tacoSpots.streetStyle.map((spot, i) => <TacoCard key={i} spot={spot} />)}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Creative & Vegetarian-Friendly</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Modern twists, plant-based options, and creative flavor combinations.
            </p>
            {tacoSpots.creative.map((spot, i) => <TacoCard key={i} spot={spot} />)}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "8px" }}>Authentic Taquerias</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Traditional spots with family recipes and regional specialties.
            </p>
            {tacoSpots.taquerias.map((spot, i) => <TacoCard key={i} spot={spot} />)}
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "24px", fontWeight: "900", marginBottom: "16px" }}>More Milwaukee Food Guides</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "12px" }}>
              <Link href="/best-mexican-milwaukee" style={{ display: "block", backgroundColor: c.green1, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Best Mexican Food</Link>
              <Link href="/best-restaurants-milwaukee" style={{ display: "block", backgroundColor: c.green2, color: c.cream, padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Best Restaurants</Link>
              <Link href="/best-happy-hour-milwaukee" style={{ display: "block", backgroundColor: c.orange, color: "white", padding: "16px", borderRadius: "10px", textDecoration: "none", fontWeight: "600", textAlign: "center" }}>Happy Hour Guide</Link>
            </div>
          </section>

          <section id="faq" style={{ marginBottom: "48px" }}>
            <h2 style={{ color: c.green1, fontSize: "28px", fontWeight: "900", marginBottom: "24px" }}>Frequently Asked Questions</h2>
            {faqs.map((faq, i) => (
              <div key={i} style={{ marginBottom: "20px", backgroundColor: "white", padding: "20px", borderRadius: "12px", border: `1px solid ${c.beige}` }}>
                <h3 style={{ color: c.green1, fontSize: "17px", fontWeight: "700", marginBottom: "8px" }}>{faq.question}</h3>
                <p style={{ color: "#555", fontSize: "15px", lineHeight: 1.7, margin: 0 }}>{faq.answer}</p>
              </div>
            ))}
          </section>

          <section style={{ backgroundColor: c.green1, padding: "32px", borderRadius: "16px", textAlign: "center" }}>
            <h2 style={{ color: c.yellow, fontSize: "24px", fontWeight: "900", marginBottom: "12px" }}>Get Weekly Milwaukee Updates</h2>
            <p style={{ color: c.cream, fontSize: "16px", marginBottom: "20px" }}>New restaurants, events, and insider tips every Wednesday.</p>
            <Link href="/newsletter" style={{ display: "inline-block", backgroundColor: c.yellow, color: c.green1, padding: "14px 32px", borderRadius: "30px", fontWeight: "700", textDecoration: "none" }}>
              Subscribe Free
            </Link>
          </section>
        </main>

        <footer style={{ backgroundColor: c.green1, padding: "40px 24px", textAlign: "center" }}>
          <p style={{ color: c.beige, fontSize: "14px" }}>© 2026 Discover Milwaukee. Your insider's guide to MKE.</p>
        </footer>
      </div>
    </>
  );
}
