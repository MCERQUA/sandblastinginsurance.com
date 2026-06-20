// Centralized site data — used across nav, footer, schema, CTAs
// Sandblasting Insurance — commercial insurance for sandblasting & abrasive blasting contractors

export const SITE = {
  name: "Sandblasting Insurance",
  legalName: "Sandblasting Insurance (by Contractors Choice Agency)",
  domain: "sandblastinginsurance.com",
  url: "https://sandblastinginsurance.com",
  tagline: "Commercial Insurance for Sandblasting & Abrasive Blasting Contractors",
  description:
    "Commercial insurance for sandblasting and abrasive blasting contractors — general liability, contractor pollution liability, tools & equipment, workers' comp, commercial auto, umbrella, inland marine, and surety bonds. A-rated carriers. 15-minute quotes. NPN #8608479.",
  phone: "844-967-5247",
  phoneAlt: "855-336-7189",
  phoneHref: "tel:+18449675247",
  phoneAltHref: "tel:+18553367189",
  email: "josh@contractorschoiceagency.com",
  founded: 2005,
  npn: "8608479",
  address: {
    street: "12220 E Riggs Road, Suite #105",
    city: "Chandler",
    state: "AZ",
    zip: "85249",
    country: "US",
  },
  hours: "Mon–Fri 8am–5pm (MST)",
  claimsSla: "2-hour claims response",
  quoteSla: "15-minute quote turnaround",
  statesLicensed: "All 50 states",
} as const;

export const BRAND = {
  brandShort: "Sandblasting Insurance",
  brandSub: "Abrasive Blasting Coverage",
  nicheShort: "sandblasting contractor",
  nicheShortCap: "Sandblasting Contractor",
  nichePlural: "sandblasting contractors",
  nichePluralCap: "Sandblasting Contractors",
  operator: "blasting contractor",
  operatorCap: "Blasting Contractor",
  industry: "abrasive blasting",
  industryCap: "Abrasive Blasting",
  audience: "sandblasting and abrasive blasting contractors",
  audienceCap: "Sandblasting and Abrasive Blasting Contractors",
  ownerTitle: "blasting contractor",
  regionPill: "National · All 50 States · Industrial & Commercial",
  serviceSuffix: "Sandblasting Contractors",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Coverage", href: "/coverage" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export const SERVICES = [
  {
    slug: "general-liability",
    title: "General Liability Insurance",
    short: "Core GL for sandblasting operations",
    description:
      "General liability insurance for sandblasting contractors covers bodily injury, property damage, and personal injury claims arising from your blasting operations. Whether you're working on bridges, tanks, or commercial structures, GL is the foundation of your insurance program.",
    icon: "ShieldCheck",
    keywords: ["sandblasting general liability insurance", "abrasive blasting liability", "sandblasting contractor insurance", "blasting operations general liability"],
  },
  {
    slug: "tools-equipment",
    title: "Tools & Equipment Insurance",
    short: "Protect your blasting rigs and equipment",
    description:
      "Sandblasting equipment — blast pots, hoses, compressors, nozzles, and portable rigs — represents significant capital investment. Tools and equipment coverage protects your gear against theft, damage, and breakdown whether it's at the job site, in transit, or in storage.",
    icon: "Wrench",
    keywords: ["sandblasting tools and equipment insurance", "blasting equipment coverage", "blast pot insurance", "compressor coverage sandblasting"],
  },
  {
    slug: "contractor-pollution-liability",
    title: "Contractor Pollution Liability",
    short: "CPL for abrasive media and dust exposure",
    description:
      "Sandblasting generates fine abrasive media, lead-containing paint dust, silica, and other pollutants that can harm workers, bystanders, and property. Contractor pollution liability covers third-party bodily injury and property damage claims from blasting dust, media release, and airborne contamination that standard GL excludes.",
    icon: "Wind",
    keywords: ["contractor pollution liability sandblasting", "CPL abrasive blasting", "sandblasting pollution insurance", "silica dust liability coverage"],
  },
  {
    slug: "workers-comp",
    title: "Workers' Compensation",
    short: "WC built for high-hazard blasting crews",
    description:
      "Sandblasting is classified as a high-hazard trade due to silica dust inhalation risk, equipment pressure hazards, and exposure to toxic coatings. We place workers' compensation with the right class codes for abrasive blasting — not a generic contractor code — so your rates reflect your actual risk.",
    icon: "HardHat",
    keywords: ["sandblasting workers compensation", "blasting WC insurance", "abrasive blasting workers comp", "sandblasting OSHA class codes"],
  },
  {
    slug: "commercial-auto",
    title: "Commercial Auto Insurance",
    short: "Coverage for blast rigs and haul trucks",
    description:
      "Sandblasting contractors haul blast pots, air compressors, scaffolding, and equipment to job sites. Commercial auto insurance covers your trucks, trailers, and towed equipment on the road — liability, physical damage, and cargo for your blasting operation vehicles.",
    icon: "Truck",
    keywords: ["sandblasting commercial auto insurance", "blasting contractor truck insurance", "blast equipment trailer coverage", "abrasive blasting vehicle insurance"],
  },
  {
    slug: "umbrella",
    title: "Umbrella / Excess Liability",
    short: "Additional limits above GL and auto",
    description:
      "A single serious blasting accident — structural damage, a contamination claim, or a worker injury — can exhaust standard GL limits quickly. Umbrella insurance provides additional liability limits above your GL and commercial auto policies, protecting your business against catastrophic loss.",
    icon: "Umbrella",
    keywords: ["sandblasting umbrella insurance", "blasting contractor excess liability", "abrasive blasting umbrella coverage", "contractor umbrella policy"],
  },
  {
    slug: "inland-marine",
    title: "Inland Marine Insurance",
    short: "Equipment and materials in transit",
    description:
      "Inland marine insurance covers sandblasting equipment, abrasive media, and materials while they're being transported between job sites. Standard commercial auto covers the vehicle; inland marine fills the gap for the high-value equipment you're hauling and the materials you're delivering.",
    icon: "Package",
    keywords: ["inland marine sandblasting", "blasting equipment transport insurance", "abrasive media coverage in transit", "contractor inland marine insurance"],
  },
  {
    slug: "surety-bonds",
    title: "Surety Bonds",
    short: "License and performance bonds for blasters",
    description:
      "Many government, industrial, and commercial blasting contracts require surety bonds — contractor license bonds, performance bonds, or payment bonds. We place surety bonds for sandblasting contractors through A-rated surety markets so you can bid on bonded projects.",
    icon: "FileCheck",
    keywords: ["sandblasting surety bond", "blasting contractor bond", "performance bond abrasive blasting", "contractor license bond sandblasting"],
  },
] as const;

export const LOCATIONS = [
  { slug: "texas", name: "Texas", region: "Oil & Gas / Industrial", blurb: "Texas's petrochemical corridor, refineries, and industrial facilities generate massive demand for sandblasting and surface preparation contractors. We write insurance for Texas sandblasting contractors — tank coating, pipeline prep, structural steel, and industrial facility maintenance." },
  { slug: "louisiana", name: "Louisiana", region: "Gulf Coast / Marine", blurb: "Louisiana's offshore platforms, refineries, and marine structures require specialized surface preparation contractors. We place insurance for Louisiana sandblasting contractors working marine, offshore, and industrial facilities on the Gulf Coast." },
  { slug: "california", name: "California", region: "Infrastructure / Bridges", blurb: "California's bridges, highway infrastructure, and commercial structures are a major market for sandblasting contractors. We write coverage for California blasting contractors navigating the state's strict environmental and OSHA requirements." },
  { slug: "pennsylvania", name: "Pennsylvania", region: "Industrial / Structural", blurb: "Pennsylvania's steel industry legacy and active industrial maintenance market keep sandblasting contractors busy. We place insurance for PA contractors doing structural steel prep, tank coating, and industrial facility surface restoration." },
  { slug: "florida", name: "Florida", region: "Marine / Coastal", blurb: "Florida's coastal environment and marine construction market creates steady demand for sandblasting and corrosion control contractors. We write insurance for Florida blasting contractors working marine structures, bridges, and commercial buildings." },
  { slug: "ohio", name: "Ohio", region: "Industrial / Manufacturing", blurb: "Ohio's manufacturing base and industrial facilities create ongoing surface preparation work. We place insurance for Ohio sandblasting contractors doing industrial maintenance, tank coating, and structural steel restoration." },
  { slug: "illinois", name: "Illinois", region: "Infrastructure / Commercial", blurb: "Illinois's infrastructure, commercial construction, and industrial maintenance market support a strong sandblasting contracting industry. We write coverage for Illinois blasting contractors in the Chicago metro and downstate industrial markets." },
  { slug: "nationwide", name: "Nationwide", region: "All 50 States", blurb: "Sandblasting and abrasive blasting contractors operate across the country — refineries, pipelines, bridges, ships, water towers, and commercial structures in every state. We write sandblasting insurance for contractors in all 50 states through A-rated admitted and surplus lines markets." },
] as const;

export const CREDENTIALS = [
  { label: "Licensed in all 50 states", icon: "MapPin" },
  { label: "Founded 2005 — 20+ years", icon: "CalendarCheck" },
  { label: "High-hazard blasting specialists", icon: "ShieldCheck" },
  { label: "15-minute quote turnaround", icon: "Timer" },
  { label: "2-hour claims response", icon: "Zap" },
  { label: "A.M. Best A+ carrier partners", icon: "Award" },
] as const;

export const STATS = [
  { value: 800, suffix: "+", label: "Sandblasting contractors insured", prefix: "" },
  { value: 20, suffix: "+", label: "Years insuring blasting contractors", prefix: "" },
  { value: 15, suffix: " min", label: "Average quote turnaround", prefix: "" },
  { value: 50, suffix: "", label: "States — fully licensed nationwide", prefix: "" },
] as const;

export const TESTIMONIALS = [
  { quote: "We do tank coating and surface prep for refineries in Texas and Louisiana. Getting CPL alongside GL from one agent who actually understood what we do was huge. No more explaining silica risk to someone who's never heard of it.", name: "Ray D.", role: "Sandblasting Contractor", location: "Beaumont, TX" },
  { quote: "My old agent kept putting us in a general contractor bucket. The class codes were wrong, the audit was a mess every year. These guys got us in the right abrasive blasting code from the start. First clean audit in four years.", name: "Sandra M.", role: "Abrasive Blasting Owner", location: "Pittsburgh, PA" },
  { quote: "We needed a performance bond for a bridge project in under a week. Got it done. The GL and CPL were already in place, so everything came from one source. Fast, clean, no confusion.", name: "Derek W.", role: "Blasting Contractor", location: "Jacksonville, FL" },
] as const;
