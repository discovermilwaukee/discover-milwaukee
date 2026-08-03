// Single source of truth for the guide taxonomy.
// Consumed by components/DiscoverMilwaukee.js (Explore directory) and components/Footer.js (site-wide crawlable footer).
export const GUIDE_CATEGORIES = [
  {
    id: "restaurants-cuisine",
    group: "Eat & Drink",
    title: "Restaurants & Cuisine",
    icon: "🍽️",
    color: "#e17055",
    description: "Top dining spots & cuisine roundups",
    guides: [
      { title: "Best Restaurants", href: "/best-restaurants-milwaukee", icon: "⭐", desc: "Top dining spots" },
      { title: "New Restaurants", href: "/new-restaurants-milwaukee", icon: "✨", desc: "Latest openings" },
      { title: "Best Tacos", href: "/best-tacos-milwaukee", icon: "🌮", desc: "Taco spots ranked" },
      { title: "Best Pizza", href: "/best-pizza-milwaukee", icon: "🍕", desc: "Pizza guide" },
      { title: "Best Burgers", href: "/best-burgers-milwaukee", icon: "🍔", desc: "Burger joints" },
      { title: "Best Sushi", href: "/best-sushi-milwaukee", icon: "🍣", desc: "Sushi & Japanese" },
      { title: "Best Mexican", href: "/best-mexican-milwaukee", icon: "🇲🇽", desc: "Mexican restaurants" },
      { title: "Best Thai", href: "/best-thai-milwaukee", icon: "🍜", desc: "Thai cuisine" },
      { title: "Best Chinese", href: "/best-chinese-milwaukee", icon: "🥡", desc: "Chinese food" },
      { title: "Best Indian", href: "/best-indian-milwaukee", icon: "🍛", desc: "Indian cuisine" },
      { title: "Best Vietnamese", href: "/best-vietnamese-milwaukee", icon: "🍲", desc: "Pho & more" },
      { title: "Best Ramen", href: "/best-ramen-milwaukee", icon: "🍜", desc: "Ramen bowls" },
      { title: "Best BBQ", href: "/best-bbq-milwaukee", icon: "🍖", desc: "Barbecue joints" },
      { title: "Best Steakhouses", href: "/best-steakhouses-milwaukee", icon: "🥩", desc: "Steak dinners" },
      { title: "Best Supper Clubs", href: "/best-supper-clubs-milwaukee", icon: "🍸", desc: "Wisconsin classic" },
      { title: "Best Fish Fry", href: "/best-fish-fry-milwaukee", icon: "🐟", desc: "Friday tradition" },
      { title: "Best Wings", href: "/best-wings-milwaukee", icon: "🍗", desc: "Wing spots" },
      { title: "Cheap Eats", href: "/cheap-eats-milwaukee", icon: "💵", desc: "Budget bites" },
    ]
  },
  {
    id: "cafes-sweets",
    group: "Eat & Drink",
    title: "Cafés, Sweets & Casual Eats",
    icon: "🥐",
    color: "#e84393",
    description: "Brunch, bakeries, coffee & treats",
    guides: [
      { title: "Best Brunch", href: "/best-brunch-milwaukee", icon: "🥞", desc: "Weekend brunch" },
      { title: "Best Breakfast", href: "/best-breakfast-milwaukee", icon: "🍳", desc: "Morning eats" },
      { title: "Best Bakeries", href: "/best-bakeries-milwaukee", icon: "🥐", desc: "Bakeries & pastries" },
      { title: "Best Doughnuts", href: "/best-doughnuts-milwaukee", icon: "🍩", desc: "Doughnut shops" },
      { title: "Best Ice Cream", href: "/best-ice-cream-milwaukee", icon: "🍦", desc: "Frozen treats" },
      { title: "Best Frozen Custard", href: "/best-frozen-custard-milwaukee", icon: "🍨", desc: "MKE custard" },
      { title: "Best Cheese Curds", href: "/best-cheese-curds-milwaukee", icon: "🧀", desc: "Fried curds" },
      { title: "Best Coffee", href: "/best-coffee-milwaukee", icon: "☕", desc: "Coffee roasters" },
      { title: "Coffee Shops", href: "/milwaukee-coffee-shops", icon: "☕", desc: "Cafés to work" },
      { title: "Best Matcha", href: "/best-matcha-milwaukee", icon: "🍵", desc: "Matcha spots" },
      { title: "Food Trucks", href: "/food-trucks-milwaukee", icon: "🚚", desc: "Mobile eats" },
      { title: "Late Night Food", href: "/late-night-food-milwaukee", icon: "🌃", desc: "After hours" },
    ]
  },
  {
    id: "bars-nightlife",
    group: "Eat & Drink",
    title: "Bars & Nightlife",
    icon: "🍸",
    color: "#6c5ce7",
    description: "Cocktail bars, breweries, live music & late night",
    guides: [
      { title: "Milwaukee Nightlife", href: "/milwaukee-nightlife", icon: "🌙", desc: "Night out guide" },
      { title: "Milwaukee Bars", href: "/milwaukee-bars", icon: "🍺", desc: "Bar guide" },
      { title: "Best Cocktail Bars", href: "/best-cocktail-bars-milwaukee", icon: "🍹", desc: "Craft cocktails" },
      { title: "Best Dive Bars", href: "/best-dive-bars-milwaukee", icon: "🍺", desc: "Classic dives" },
      { title: "Rooftop Bars", href: "/rooftop-bars-milwaukee", icon: "🏙️", desc: "Views & drinks" },
      { title: "Best Happy Hour", href: "/best-happy-hour-milwaukee", icon: "🍻", desc: "Deals & specials" },
      { title: "Speakeasies", href: "/milwaukee-speakeasies", icon: "🚪", desc: "Hidden bars" },
      { title: "Karaoke Bars", href: "/milwaukee-karaoke-bars", icon: "🎤", desc: "Sing all night" },
      { title: "Sports Bars", href: "/milwaukee-sports-bars", icon: "📺", desc: "Watch the game" },
      { title: "Packers Bars", href: "/packers-bars-milwaukee", icon: "🏈", desc: "Game day spots" },
      { title: "Milwaukee Breweries", href: "/milwaukee-breweries", icon: "🍺", desc: "Craft beer guide" },
      { title: "Brewery Tours", href: "/best-brewery-tours-milwaukee", icon: "🏭", desc: "Tour & taste" },
      { title: "Live Music Venues", href: "/live-music-milwaukee", icon: "🎵", desc: "Where to see shows" },
      { title: "Comedy Clubs", href: "/milwaukee-comedy-clubs", icon: "🎭", desc: "Stand-up & laughs" },
    ]
  },
  {
    id: "activities-outdoors",
    group: "Things to Do",
    title: "Things to Do & Outdoors",
    icon: "🎯",
    color: "#00b894",
    description: "Activities, hidden gems & the outdoors",
    guides: [
      { title: "Things to Do", href: "/things-to-do-milwaukee", icon: "🎯", desc: "Complete guide" },
      { title: "Things to Do with Kids", href: "/things-to-do-with-kids-milwaukee", icon: "👨‍👩‍👧", desc: "Family fun" },
      { title: "Hidden Gems", href: "/hidden-gems-milwaukee", icon: "💎", desc: "Secret spots" },
      { title: "Rainy Day Activities", href: "/rainy-day-milwaukee", icon: "🌧️", desc: "Indoor fun" },
      { title: "Dog Friendly", href: "/dog-friendly-milwaukee", icon: "🐕", desc: "Pet-friendly spots" },
      { title: "Day Trips", href: "/day-trips-milwaukee", icon: "🚗", desc: "Nearby escapes" },
      { title: "Date Ideas", href: "/milwaukee-date-ideas", icon: "💕", desc: "Romantic spots" },
      { title: "Free Things to Do", href: "/free-things-milwaukee", icon: "🆓", desc: "Budget-friendly" },
      { title: "Best Patios", href: "/best-patios-milwaukee", icon: "☀️", desc: "Outdoor spots" },
      { title: "Hiking Trails", href: "/milwaukee-hiking-trails", icon: "🥾", desc: "Trails & nature" },
      { title: "Shopping", href: "/milwaukee-shopping", icon: "🛍️", desc: "Where to shop" },
      { title: "Farmers Markets", href: "/milwaukee-farmers-markets", icon: "🥕", desc: "Fresh & local" },
      { title: "Best Golf", href: "/best-golf-milwaukee", icon: "⛳", desc: "Golf courses" },
    ]
  },
  {
    id: "attractions-museums",
    group: "Things to Do",
    title: "Attractions & Museums",
    icon: "🏛️",
    color: "#00cec9",
    description: "Landmarks, museums & the waterfront",
    guides: [
      { title: "Art Museum", href: "/milwaukee-art-museum", icon: "🎨", desc: "MAM guide" },
      { title: "County Zoo", href: "/milwaukee-county-zoo", icon: "🦁", desc: "Zoo visit" },
      { title: "Harley-Davidson Museum", href: "/harley-davidson-museum-milwaukee", icon: "🏍️", desc: "H-D history" },
      { title: "Public Market", href: "/milwaukee-public-market", icon: "🛒", desc: "Food hall" },
      { title: "Museums", href: "/milwaukee-museums", icon: "🏛️", desc: "All museums" },
      { title: "Waterfront", href: "/milwaukee-waterfront", icon: "⚓", desc: "Lakefront guide" },
    ]
  },
  {
    id: "sports-game-days",
    group: "Things to Do",
    title: "Sports & Game Days",
    icon: "🏟️",
    color: "#d63031",
    description: "Brewers, Bucks & big games",
    guides: [
      { title: "Brewers Game Guide", href: "/brewers-game-guide-milwaukee", icon: "⚾", desc: "Baseball day" },
      { title: "Bucks Game Guide", href: "/bucks-game-guide-milwaukee", icon: "🏀", desc: "Bucks night" },
      { title: "World Cup 2026", href: "/world-cup-2026-milwaukee", icon: "⚽", desc: "MKE & the Cup" },
    ]
  },
  {
    id: "events-seasonal",
    group: "Things to Do",
    title: "Events & Seasonal",
    icon: "🎉",
    color: "#fdcb6e",
    description: "Festivals, holidays & what's happening",
    guides: [
      { title: "Milwaukee Festivals", href: "/milwaukee-festivals", icon: "🎉", desc: "Festival calendar" },
      { title: "This Weekend", href: "/this-weekend-milwaukee", icon: "🗓️", desc: "What's happening" },
      { title: "Summerfest", href: "/summerfest-milwaukee", icon: "🎸", desc: "Big Gig guide" },
      { title: "Wisconsin State Fair", href: "/wisconsin-state-fair-milwaukee", icon: "🎡", desc: "Fair guide" },
      { title: "State Fair Sporkies 2026", href: "/wisconsin-state-fair-sporkies-2026", icon: "🍢", desc: "New fair foods" },
      { title: "Juneteenth", href: "/juneteenth-milwaukee", icon: "✊", desc: "Celebration guide" },
      { title: "Memorial Day Weekend", href: "/memorial-day-weekend-milwaukee", icon: "🇺🇸", desc: "Long weekend" },
      { title: "Summer Live Music", href: "/summer-live-music-milwaukee", icon: "🎶", desc: "Outdoor concerts" },
    ]
  },
  {
    id: "neighborhoods",
    group: "Neighborhoods",
    title: "Neighborhoods",
    icon: "🏘️",
    color: "#0984e3",
    description: "Explore Milwaukee's distinct neighborhoods",
    guides: [
      { title: "Third Ward", href: "/third-ward-milwaukee", icon: "🎨", desc: "Arts & dining hub" },
      { title: "Bay View", href: "/bay-view-milwaukee", icon: "🌊", desc: "Hip & artsy" },
      { title: "Walker's Point", href: "/walkers-point-milwaukee", icon: "🌈", desc: "Breweries & nightlife" },
      { title: "East Side", href: "/east-side-milwaukee", icon: "🎸", desc: "College vibe" },
      { title: "Downtown", href: "/downtown-milwaukee", icon: "🏢", desc: "Urban core" },
      { title: "Riverwest", href: "/riverwest-milwaukee", icon: "🎪", desc: "Eclectic & creative" },
      { title: "Brady Street", href: "/brady-street-milwaukee", icon: "🍝", desc: "Historic strip" },
      { title: "Bronzeville", href: "/bronzeville-milwaukee", icon: "🎺", desc: "Cultural district" },
      { title: "Sherman Park", href: "/sherman-park-milwaukee", icon: "🌳", desc: "Historic homes" },
      { title: "South Side", href: "/south-side-milwaukee", icon: "🇲🇽", desc: "Authentic eats" },
      { title: "Harbor District", href: "/harbor-district-milwaukee", icon: "⚓", desc: "Waterfront revival" },
      { title: "Washington Heights", href: "/washington-heights-milwaukee", icon: "🏠", desc: "Classic Milwaukee" },
    ]
  },
  {
    id: "plan-your-visit",
    group: "Plan Your Visit",
    title: "Plan Your Visit",
    icon: "📅",
    color: "#d35400",
    description: "Itineraries, hotels & trip planning",
    guides: [
      { title: "First Time in Milwaukee", href: "/first-time-milwaukee", icon: "🎯", desc: "Essential guide" },
      { title: "Weekend in Milwaukee", href: "/weekend-in-milwaukee", icon: "📅", desc: "3-day itinerary" },
      { title: "Romantic Getaway", href: "/romantic-weekend-milwaukee", icon: "💕", desc: "Couples weekend" },
      { title: "Family Weekend", href: "/family-weekend-milwaukee", icon: "👨‍👩‍👧‍👦", desc: "Kid-friendly" },
      { title: "Outdoor Adventure", href: "/outdoor-weekend-milwaukee", icon: "🚴", desc: "Parks & trails" },
      { title: "Foodie Weekend", href: "/foodie-weekend-milwaukee", icon: "🍽️", desc: "Culinary tour" },
      { title: "Beer Lover's Guide", href: "/beer-lovers-milwaukee", icon: "🍺", desc: "Brewery tours" },
      { title: "Arts & Culture", href: "/arts-culture-milwaukee", icon: "🎭", desc: "Museums & theater" },
      { title: "Milwaukee Hotels", href: "/milwaukee-hotels", icon: "🏨", desc: "Where to stay" },
      { title: "Bachelor Party", href: "/bachelor-party-milwaukee", icon: "🎉", desc: "Guys' weekend" },
      { title: "Bachelorette Party", href: "/bachelorette-party-milwaukee", icon: "💃", desc: "Girls' weekend" },
    ]
  },
  {
    id: "milwaukee-stories",
    group: "Plan Your Visit",
    title: "Milwaukee Stories & Local",
    icon: "📖",
    color: "#636e72",
    description: "Local voices & city stories",
    guides: [
      { title: "Milwaukee Influencers", href: "/milwaukee-influencers", icon: "📸", desc: "Local voices" },
      { title: "The I-794 Debate", href: "/i-794-milwaukee", icon: "🛣️", desc: "City's future" },
    ]
  }
];

// Resolve a page route (e.g. "/best-tacos-milwaukee") to its guide entry + owning category.
export function findGuideByHref(href) {
  for (const category of GUIDE_CATEGORIES) {
    const guide = category.guides.find((g) => g.href === href);
    if (guide) return { guide, category };
  }
  return null;
}

// Sibling guides in the same category (current one excluded), capped at `limit`.
export function getRelatedGuides(href, limit = 6) {
  const found = findGuideByHref(href);
  if (!found) return { category: null, guide: null, related: [] };
  const related = found.category.guides.filter((g) => g.href !== href).slice(0, limit);
  return { category: found.category, guide: found.guide, related };
}
