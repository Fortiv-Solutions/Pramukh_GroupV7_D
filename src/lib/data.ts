/* ------------------------------------------------------------------ */
/*  Pramukh Group — central content model (sourced from pramukh.com)  */
/* ------------------------------------------------------------------ */

export type City = "Surat" | "Vapi" | "Silvassa";
export type ProjectStatus = "ongoing" | "completed";
export type ProjectKind = "residential" | "commercial";

export interface Project {
  slug: string;
  name: string;
  city: City;
  type: string;
  kind: ProjectKind;
  status: ProjectStatus;
  image: string;
  year?: string;
  blurb: string;
}

export const SITE = {
  name: "Pramukh Group",
  tagline: "Designed. Delivered. Trusted.",
  subTagline: "A Class of Its Own",
  description:
    "Pramukh Group delivers premium residential and commercial projects across Surat, Vapi, and Silvassa.",
  phones: ["+91 63597 78000", "+91 74062 58000", "+91 99789 86778"],
  email: "inquiry@pramukh.co.in",
  whatsapp: "916359778000",
  social: {
    facebook: "https://www.facebook.com/pramukhgroup",
    instagram: "https://www.instagram.com/pramukhgroup",
    linkedin: "https://in.linkedin.com/company/pramukh-group",
    youtube: "https://www.youtube.com/@pramukhgroup",
  },
};

export const STATS = [
  { value: 60, suffix: "+", label: "Projects Delivered" },
  { value: 17, suffix: "M+", label: "Sq. Ft. Developed" },
  { value: 13000, suffix: "+", label: "Homes Built" },
  { value: 20, suffix: "+", label: "Ongoing Projects" },
  { value: 2.7, suffix: "M+", label: "Sq. Ft. Under Dev.", decimals: 1 },
  { value: 6700, suffix: "+", label: "Homes Under Construction" },
];

export const PROJECTS: Project[] = [
  {
    slug: "orbit-5",
    name: "Orbit 5",
    city: "Surat",
    type: "Showrooms & Offices",
    kind: "commercial",
    status: "ongoing",
    image: "/images/projects/orbit-5.jpg",
    blurb:
      "The next landmark of the Orbit commercial district — premium showrooms and offices on the Vesu corridor.",
  },
  {
    slug: "agastya",
    name: "Agastya",
    city: "Surat",
    type: "4 BHK Apartments",
    kind: "residential",
    status: "ongoing",
    image: "/images/projects/agastya.jpg",
    blurb:
      "Expansive 4 BHK residences designed for families who measure life in light, air and uncompromised space.",
  },
  {
    slug: "revanta",
    name: "Revanta",
    city: "Surat",
    type: "3 BHK Apartments",
    kind: "residential",
    status: "ongoing",
    image: "/images/projects/revanta.jpg",
    blurb:
      "A new generation of 3 BHK living — refined planning, generous decks and a name that carries our legacy.",
  },
  {
    slug: "one-tapi",
    name: "One Tapi",
    city: "Surat",
    type: "Exclusive Riverside 5 BHK Residences & Penthouses",
    kind: "residential",
    status: "ongoing",
    image: "/images/projects/one-tapi.jpg",
    blurb:
      "Exclusive riverside 5 BHK residences and penthouses on the Tapi — the most coveted address in Surat.",
  },
  {
    slug: "aranya-iii",
    name: "Aranya III",
    city: "Surat",
    type: "Exclusive 3 BHK Apartments",
    kind: "residential",
    status: "ongoing",
    image: "/images/projects/aranya-3.jpg",
    blurb:
      "The third chapter of the Aranya story — exclusive 3 BHK apartments wrapped in green, calm and community.",
  },
  {
    slug: "aristo",
    name: "Aristo",
    city: "Vapi",
    type: "3-4-5 BHK Apartments",
    kind: "residential",
    status: "ongoing",
    image: "/images/projects/aristo.jpg",
    blurb:
      "Vapi's most aspirational address — 3, 4 and 5 BHK residences with an amenity core built for every generation.",
  },
  {
    slug: "vedanta",
    name: "Vedanta",
    city: "Vapi",
    type: "3–4 BHK Apartments",
    kind: "residential",
    status: "ongoing",
    image: "/images/projects/vedanta.jpg",
    blurb:
      "Considered 3–4 BHK homes where contemporary architecture meets the ease of established Chala.",
  },
  {
    slug: "green-county",
    name: "Green County",
    city: "Vapi",
    type: "3 & 4 BHK Apartments",
    kind: "residential",
    status: "ongoing",
    image: "/images/projects/green-county.jpg",
    blurb:
      "3 & 4 BHK apartments set in one of Vapi's largest green community developments.",
  },
  {
    slug: "shivanta",
    name: "Shivanta",
    city: "Silvassa",
    type: "2–3 BHK Apartments",
    kind: "residential",
    status: "ongoing",
    image: "/images/projects/shivanta.webp",
    blurb:
      "2–3 BHK apartments in the heart of Silvassa — where our journey began, and where it keeps rising.",
  },
  {
    slug: "yogi-woods",
    name: "Yogi Woods",
    city: "Silvassa",
    type: "2–3 BHK Apartments",
    kind: "residential",
    status: "ongoing",
    image: "/images/projects/yogi-wood.jpg",
    blurb:
      "Homes held by trees — 2–3 BHK apartments designed around Silvassa's natural calm.",
  },
  {
    slug: "swagat",
    name: "Swagat",
    city: "Silvassa",
    type: "1.5-2 BHK Apartments",
    kind: "residential",
    status: "ongoing",
    image: "/images/projects/swagat.jpg",
    blurb:
      "A warm welcome to ownership — smartly planned 1.5 and 2 BHK apartments for first-time homebuyers.",
  },
  /* ----------------------------- completed ----------------------------- */
  {
    slug: "central-park",
    name: "Central Park",
    city: "Surat",
    type: "Community Development",
    kind: "residential",
    status: "completed",
    year: "2021",
    image: "/images/projects/central-park.jpg",
    blurb:
      "A landmark community development that set the standard for large-scale living in the region.",
  },
  {
    slug: "vivanta-surat",
    name: "Vivanta — Surat",
    city: "Surat",
    type: "Residential Towers",
    kind: "residential",
    status: "completed",
    year: "2022",
    image: "/images/timeline/vivanta-surat.jpg",
    blurb: "Bringing the Vivanta standard of multifamily living to Surat.",
  },
  {
    slug: "aranya-2-surat",
    name: "Aranya 2 — Surat",
    city: "Surat",
    type: "Residential Community",
    kind: "residential",
    status: "completed",
    year: "2023",
    image: "/images/timeline/aranya-2-surat.jpg",
    blurb:
      "The legacy continues — Aranya's community-first philosophy delivered in Surat.",
  },
  {
    slug: "orbit-plaza",
    name: "Orbit Plaza",
    city: "Surat",
    type: "Commercial Landmark",
    kind: "commercial",
    status: "completed",
    year: "2020",
    image: "/images/surat.jpg",
    blurb: "A legacy commercial project that anchors the Orbit district.",
  },
  {
    slug: "orbit-1",
    name: "Orbit 1",
    city: "Surat",
    type: "Showrooms & Offices",
    kind: "commercial",
    status: "completed",
    year: "2021",
    image: "/images/marina-bay.jpg",
    blurb: "Expanding the Orbit commercial district with premium retail and offices.",
  },
  {
    slug: "paras-palace",
    name: "Paras Palace",
    city: "Silvassa",
    type: "Residential",
    kind: "residential",
    status: "completed",
    year: "1993",
    image: "/images/silvassa.jpg",
    blurb: "The first stone — where the Pramukh journey began in 1993.",
  },
  {
    slug: "parth-complex",
    name: "Parth Complex",
    city: "Silvassa",
    type: "Mixed Use",
    kind: "commercial",
    status: "completed",
    year: "1994",
    image: "/images/vapi.jpg",
    blurb: "First steps, first office — the foundation on which everything grew.",
  },
];

export const TIMELINE = [
  { year: "1993", title: "Paras Palace — Silvassa", text: "The first stone. Our journey begins in Silvassa." },
  { year: "1994", title: "Parth Complex — Silvassa", text: "First steps, first office — the foundation grows." },
  { year: "2003", title: "An Airport Conversation", text: "A chance meeting sets a bigger ambition in motion." },
  { year: "2004", title: "Revanta", text: "Breaking ground on a new generation of residences." },
  { year: "2006", title: "Ananta", text: "Raising the bar for community living." },
  { year: "2008", title: "A Penthouse & a Partner", text: "New partnerships open new horizons." },
  { year: "2013–15", title: "Vivanta", text: "Jumping back in with renewed ambition." },
  { year: "2016–17", title: "Aranya 2", text: "Going multifamily at community scale." },
  { year: "2018–20", title: "Orbit Plaza", text: "A legacy commercial landmark rises." },
  { year: "2020–21", title: "Orbit 1", text: "Expanding the Orbit commercial district." },
  { year: "2022", title: "Vivanta — Surat", text: "Bringing the Vivanta standard to Surat." },
  { year: "2023", title: "Aranya 2 — Surat", text: "The legacy continues — and the skyline keeps changing." },
];

export const PRINCIPLES = [
  {
    num: "01",
    title: "All-In Ownership™",
    text: "We stand by All-in Ownership™ — owning every detail of every project, without compromise, and delivering with total commitment from start to finish.",
  },
  {
    num: "02",
    title: "Premium Within Reach",
    text: "Premium housing and commercial spaces with high-quality standards and a contemporary lifestyle — at the best affordable prices.",
  },
  {
    num: "03",
    title: "Transparency That Performs",
    text: "Clear communication, real-time site updates and honest timelines — so every stakeholder always knows exactly where their investment stands.",
  },
];

export const PHILOSOPHY = [
  "At Pramukh Group, ownership defines how we operate. We approach every project with a developer's foresight, a manager's discipline, and a stakeholder's long-term commitment. This enables proactive planning, early attention to detail, and fast team alignment — all to protect value and eliminate surprises.",
  "By integrating development, construction, and operations, we remove silos and strengthen execution. We don't pass the buck — we take it forward. From concept to completion and beyond, All-In Ownership™ ensures every project is sharper, smoother, and built to last.",
];

export const APPROACH = [
  {
    title: "Finding Smart Opportunities",
    text: "We focus on overlooked and undervalued sites, especially in urban infill and emerging neighborhoods. We go where the energy is building — places that are on the path to becoming the destinations of tomorrow.",
  },
  {
    title: "Partnerships That Last",
    text: "Every project starts with collaboration. We believe clear expectations, honest communication, and aligned goals set the stage for success. That's why so many of our partners choose to work with us again and again.",
  },
  {
    title: "Hands-on Execution",
    text: "By integrating development, construction, and operations, we remove silos and strengthen execution. From concept to completion and beyond, every project is sharper, smoother, and built to last.",
  },
];

export const FUNDAMENTALS = [
  "Commitment, Quality and Timely Delivery",
  "Trust, Transparency, Teamwork",
  "Equality, Ethics, Excellence",
];

export const VISION =
  "To be the leader in providing the best infrastructure and eventually change the skyline of Gujarat.";
export const MISSION =
  "To provide premium housing and commercial spaces with high-quality standards and a contemporary lifestyle at the best affordable prices.";

export const LEADERSHIP = [
  { name: "Virambhai R. Bhatu", role: "Founder & Chairman", image: "/images/team/virambhai-r-bhatu.jpg" },
  { name: "Devshibhai L. Bhatu", role: "Co-Founder", image: "/images/team/devshibhai-l-bhatu.jpg" },
  { name: "Nathubhai Bhatu", role: "Director", image: "/images/team/nathu-bhai.jpg" },
  { name: "Ajitbhai Bhatu", role: "Director", image: "/images/team/ajitbhai.png" },
  { name: "Prashant Bhatu", role: "Director", image: "/images/team/prashant-bhatu.webp" },
  { name: "Raj Bhatu", role: "Director", image: "/images/team/raj-bhatu.png" },
];

export const CITIES: {
  name: City;
  image: string;
  text: string;
  mapQuery: string;
}[] = [
  {
    name: "Surat",
    image: "/images/surat.jpg",
    text: "Where commerce, the Tapi riverfront and modern living converge. Home to our flagship residences and landmark commercial spaces.",
    mapQuery: "Orbit-2, Vesu Canal Road, Vesu, Surat",
  },
  {
    name: "Vapi",
    image: "/images/vapi.jpg",
    text: "Gujarat's thriving industrial gateway, reimagined with premium community living and green open spaces.",
    mapQuery: "Pramukh House, Vapi Daman Main Rd, Chala, Vapi",
  },
  {
    name: "Silvassa",
    image: "/images/silvassa.jpg",
    text: "Where our journey began in 1993 — nature, calm and community in the heart of Dadra & Nagar Haveli.",
    mapQuery: "Pramukh Silvassa Head Office, Silvassa",
  },
];

export const OFFICES = [
  {
    city: "Surat",
    address: "10th Floor, Orbit-2, Beside Celestial Dreams, Vesu Canal Road, Vesu, Surat — 395007",
    phone: "+91 63597 78000",
  },
  {
    city: "Vapi",
    address: "Pramukh House, Vapi – Daman Main Rd, Chala, Vapi — 396191",
    phone: "+91 74062 58000",
  },
  {
    city: "Silvassa",
    address: "Pramukh Realty, Shop 1-4, Building A, Yogi Milan, Silvassa, Dadra & Nagar Haveli",
    phone: "+91 99789 86778",
  },
];

export const NAV = [
  { label: "About", href: "/about" },
  {
    label: "Projects",
    href: "/projects",
    children: [
      { label: "All Projects", href: "/projects" },
      { label: "Ongoing", href: "/projects/ongoing" },
      { label: "Completed", href: "/projects/completed" },
      { label: "Residential", href: "/projects/residential" },
      { label: "Commercial", href: "/projects/commercial" },
    ],
  },
  { label: "Investors", href: "/investors" },
  { label: "Media", href: "/media" },
  { label: "CSR", href: "/csr" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact", href: "/contact" },
];

/* Articles grounded in real Pramukh milestones & projects */
export const ARTICLES = [
  {
    slug: "one-tapi-riverside-living",
    category: "Blog",
    date: "May 2026",
    title: "One Tapi: What Riverside Living Means for Surat",
    excerpt:
      "Exclusive 5 BHK residences and penthouses on the Tapi riverfront — a look at how One Tapi is redefining the city's most coveted address.",
    image: "/images/projects/one-tapi.jpg",
  },
  {
    slug: "orbit-district-story",
    category: "Press",
    date: "March 2026",
    title: "From Orbit Plaza to Orbit 5: Building Surat's Commercial District",
    excerpt:
      "How a legacy commercial landmark grew into a thriving district of showrooms and offices on the Vesu corridor.",
    image: "/images/projects/orbit-5.jpg",
  },
  {
    slug: "three-decades-of-pramukh",
    category: "Blog",
    date: "January 2026",
    title: "Three Decades in the Making: The Pramukh Story",
    excerpt:
      "From Paras Palace in Silvassa, 1993, to 17 million sq. ft. developed — the milestones that shaped Pramukh Group.",
    image: "/images/timeline/timeline.jpg",
  },
  {
    slug: "aranya-community-living",
    category: "Blog",
    date: "November 2025",
    title: "The Aranya Philosophy: Community-First Development",
    excerpt:
      "Why Aranya III continues a community-scale approach to living that began with Aranya 2 — green, calm and connected.",
    image: "/images/projects/aranya-3.jpg",
  },
  {
    slug: "vapi-premium-living",
    category: "Press",
    date: "September 2025",
    title: "Vapi Rising: Premium Community Living in Gujarat's Industrial Gateway",
    excerpt:
      "Aristo, Vedanta and Green County — three developments bringing a new standard of living to Vapi.",
    image: "/images/projects/aristo.jpg",
  },
  {
    slug: "silvassa-where-it-began",
    category: "Blog",
    date: "July 2025",
    title: "Silvassa: Where It All Began",
    excerpt:
      "Shivanta, Yogi Woods and Swagat carry forward a 30-year relationship with the city where Pramukh laid its first stone.",
    image: "/images/projects/shivanta.webp",
  },
];
