// Central content source — all figures and facts derived from markpotentia.in
// (Mark Potentia Pvt. Ltd.), reorganized for an enterprise presentation.

export const company = {
  name: 'Mark Potentia',
  legalName: 'Mark Potentia Pvt. Ltd.',
  tagline: 'Unwavering Power Solutions',
  positioning: 'Power Infrastructure & Energy Solutions',
  foundedExperience: 30,
  phone: '+91 93840 90781',
  phoneHref: 'tel:+919384090781',
  emails: ['sales@markpotentia.in', 'contactus@markpotentia.in'],
  hours: 'Monday – Saturday · 09:00 – 19:00 IST',
  address: 'Coimbatore, Tamil Nadu, India',
};

export const nav = [
  { label: 'Company', href: '#about' },
  { label: 'Solutions', href: '#products' },
  { label: 'OEM', href: '#oem' },
  { label: 'Industries', href: '#industries' },
  { label: 'Projects', href: '#projects' },
  { label: 'Leadership', href: '#leadership' },
];

export const heroStats = [
  { value: 30, suffix: '+', label: 'Years of engineering' },
  { value: 70, suffix: '+', label: 'Engineers & specialists' },
  { text: '15–250', suffix: ' KVA', label: 'Power range' },
];

export const trustStats = [
  { value: 30, suffix: '+', label: 'Years in operation', sub: 'Continuous power engineering since 1996' },
  { value: 3000, suffix: '+', label: 'Sites powered', sub: 'Across manufacturing, healthcare & infrastructure' },
  { value: 70, suffix: '+', label: 'Engineers & specialists', sub: 'In-house design, build and service teams' },
  { value: 15, suffix: '–250 KVA', label: 'Power range', sub: 'Single-source across the full genset capacity band' },
];

export const clients = [
  { name: 'Larsen & Toubro', file: 'lt.png' },
  { name: 'British Gas', file: 'britishgas.png' },
  { name: 'Mahindra', file: 'mahindra.png' },
  { name: 'BMW India', file: 'bmw.png' },
  { name: 'PepsiCo', file: 'pepsico.png' },
  { name: 'Biocon', file: 'biocon.png' },
  { name: 'Marico', file: 'marico.png' },
  { name: 'ELGi', file: 'elgi.png' },
  { name: 'Texmo', file: 'texmo.png' },
  { name: 'LuLu Group', file: 'lulu.png' },
  { name: 'Perfetti Van Melle', file: 'perfetti.png' },
  { name: 'KSB', file: 'ksb.png' },
  { name: 'Sapura Energy', file: 'sapura.png' },
  { name: 'V.V. Mineral', file: 'vvmineral.png' },
  { name: 'TSK', file: 'tsk.png' },
];

export const timeline = [
  {
    year: '1996',
    title: 'Founded in Coimbatore',
    body: 'Established as a light engineering company focused on dependable, precision-built power generation equipment.',
  },
  {
    year: '2004',
    title: 'In-house manufacturing scale-up',
    body: 'Expanded fabrication, acoustic enclosure and control-panel capability to manufacture complete gensets under one roof.',
  },
  {
    year: '2015',
    title: 'Authorised Ashok Leyland OEM',
    body: 'Appointed an authorised OEM manufacturer for Ashok Leyland diesel engines for the first time — building gensets to original-equipment specification.',
  },
  {
    year: '2018',
    title: 'Multinational client base',
    body: 'Began supplying multinational manufacturers, energy majors and healthcare groups, deepening long-term enterprise relationships.',
  },
  {
    year: '2025',
    title: '3,000+ installations delivered',
    body: 'Operating from a Coimbatore manufacturing base with a 70+ strong engineering and service organisation.',
  },
];

export const products = [
  {
    id: 'gensets',
    name: 'Diesel Generator Sets',
    range: '15 KVA – 250 KVA',
    image: 'products/silent-genset.png',
    summary:
      'Prime and standby power from 15 to 250 KVA, built on Ashok Leyland engines to original-equipment standard. Supplied, installed and serviced across Tamil Nadu and Kerala.',
    highlights: ['15–250 KVA range', 'Ashok Leyland OEM', 'Prime & standby duty', 'Factory load-tested'],
    applications: ['Manufacturing', 'Healthcare', 'Commercial estates', 'Education'],
  },
  {
    id: 'enclosures',
    name: 'Acoustic Enclosures',
    range: 'CPCB-grade attenuation',
    image: 'products/enclosure-grey.png',
    summary:
      'Weatherproof, sound-attenuated canopies engineered and fabricated in-house for low-noise operation in occupied and noise-sensitive environments.',
    highlights: ['Sound-attenuated', 'Weatherproof', 'Corrosion-resistant', 'Serviceable access'],
    applications: ['Hospitality', 'Healthcare', 'Urban sites', 'Education'],
  },
  {
    id: 'panels',
    name: 'Control & Synchronising Panels',
    range: 'Manual & automatic',
    image: 'products/control-panels.jpg',
    summary:
      'AMF, synchronising and load-sharing panels for single-set and multi-set installations, designed and assembled in-house with manual and automatic control.',
    highlights: ['AMF / Auto-start', 'Synchronising', 'Load sharing', 'Protection & metering'],
    applications: ['Multi-set plants', 'Critical loads', 'Campuses', 'Infrastructure'],
  },
  {
    id: 'fabrication',
    name: 'Sheet Metal Fabrication',
    range: 'India & beyond',
    image: 'manufacturing/fabrication.jpg',
    summary:
      'Precision sheet-metal cutting, forming and welding for enclosures, canopies and custom assemblies — our fabrication unit supplies clients across India and beyond.',
    highlights: ['CNC cutting', 'Forming & welding', 'Custom assemblies', 'Volume capable'],
    applications: ['Industrial', 'Energy', 'Infrastructure', 'OEM supply'],
  },
];

export const differentiators = [
  {
    k: '01',
    title: 'Single-source engineering',
    body: 'Engine integration, acoustic enclosures, control panels and commissioning delivered by one accountable team — no split responsibility.',
  },
  {
    k: '02',
    title: 'OEM build discipline',
    body: 'Manufactured to original-equipment specification as an authorised Ashok Leyland engine OEM, not assembled from mixed sourcing.',
  },
  {
    k: '03',
    title: 'Factory-tested reliability',
    body: 'Every set is load-bank tested and protection-verified before despatch, so site commissioning is predictable.',
  },
  {
    k: '04',
    title: 'Lifecycle support',
    body: 'A 70+ strong service organisation backs every installation through its operating life — spares, AMC and field response.',
  },
];

export const oemPoints = [
  { title: 'Authorised engine OEM', body: 'Built to Ashok Leyland original-equipment specification and quality gates.' },
  { title: 'Controlled fabrication', body: 'In-house cutting, forming and welding under one quality system.' },
  { title: 'Verified before despatch', body: 'Load-bank testing, protection checks and documented sign-off.' },
  { title: 'Traceable build', body: 'Component traceability from procurement through final commissioning.' },
];

export const industries = [
  { name: 'Manufacturing', detail: 'Continuous-process plants & production lines' },
  { name: 'Healthcare', detail: 'Hospitals & life-critical environments' },
  { name: 'Data Centers', detail: 'Mission-critical standby & redundancy' },
  { name: 'Construction', detail: 'Site power, dewatering & lighting' },
  { name: 'Hospitality', detail: 'Hotels & low-noise estates' },
  { name: 'Education', detail: 'Campuses & research facilities' },
  { name: 'Telecom', detail: 'Tower & network backup power' },
  { name: 'Infrastructure', detail: 'Utilities, transport & public works' },
  { name: 'Commercial', detail: 'Retail, offices & mixed-use estates' },
];

export const projects = [
  { image: 'installations/genset-row.jpeg', title: 'Industrial Standby Bank', meta: 'Manufacturing · Multi-set' },
  { image: 'manufacturing/production-line.jpg', title: 'In-House Production Line', meta: 'Facility · Assembly' },
  { image: 'installations/outdoor-genset.jpeg', title: 'Outdoor Enclosed Set', meta: 'Commercial · CPCB-grade' },
  { image: 'products/control-panels.jpg', title: 'Synchronising Control Room', meta: 'Critical Load · AMF' },
  { image: 'installations/container.jpg', title: 'Containerised Power Unit', meta: 'Infrastructure · Mobile' },
  { image: 'manufacturing/cutting-sparks.jpg', title: 'Precision Fabrication', meta: 'Manufacturing · Sheet metal' },
  { image: 'installations/genset-bank.png', title: 'Campus Power Backup', meta: 'Education · Estate' },
  { image: 'manufacturing/cnc.jpeg', title: 'CNC Machining Cell', meta: 'Facility · Components' },
];

export const leadership = [
  {
    name: 'T. Balasubramaniyan',
    role: 'Managing Director',
    image: 'leadership/balasubramaniyan.jpg',
    bio: 'Leads sales, marketing and enterprise client relationships, directing the company’s growth and OEM partnerships across the power-equipment industry.',
    focus: 'Growth · Partnerships · Market',
  },
  {
    name: 'Mallika Raveendran',
    role: 'Managing Director',
    image: 'leadership/mallika.png',
    bio: 'Oversees finance, accounts and procurement, governing financial discipline and operational controls across the company.',
    focus: 'Finance · Governance · Operations',
  },
];

export const process = [
  { k: '01', title: 'Consultation', body: 'Load study, site survey and capacity planning with your facilities team.' },
  { k: '02', title: 'Engineering', body: 'Set sizing, enclosure design and control-panel specification to your duty profile.' },
  { k: '03', title: 'Manufacturing', body: 'Fabrication, engine integration and assembly to OEM specification.' },
  { k: '04', title: 'Testing', body: 'Load-bank testing, protection verification and documented sign-off.' },
  { k: '05', title: 'Installation', body: 'Delivery, positioning, electrical integration and on-site commissioning.' },
  { k: '06', title: 'Support', body: 'AMC, spares and field service across the full operating life of the asset.' },
];
