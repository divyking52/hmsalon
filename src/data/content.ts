const hm = (path: string) =>
  `https://www.hmsalon.co.uk/wp-content/uploads/${path}`;

export const site = {
  name: "Hair Masters Luxury Salon",
  hours: "Monday - Sunday, 10:00am - 09:00pm",
  address: "45, NWA, Club Rd, West Punjabi Bagh, Delhi",
  addressFull: "45, N.W.A., Club Road, Punjabi Bagh, New Delhi – 110026",
  phones: ["+011-45511560", "+91 87966 70500"],
  phonesFooter: ["87966 70500", "+011-45511560"],
  whatsapp: "918796670500",
  whatsappUrl: "https://wa.me/918796670500",
  logo: hm("2022/06/hair_master_logo-removebg-preview-1.png"),
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Locations", href: "#", mega: "locations" as const },
  {
    label: "Services",
    href: "#services",
    children: [
      { label: "Women Services", href: "#women-services" },
      { label: "Men Services", href: "#men-services" },
    ],
  },
  { label: "Franchise", href: "#franchise" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
  { label: "HM News", href: "#news" },
];


export const hero = {
  eyebrow: "HAIR MASTERS LUXURY SALON — INDIA",
  headline: "Escape to a World of Beauty",
  subheadline:
    "Hair Masters is the perfect destination for those seeking a transformative beauty experience. Our team of highly skilled stylists are passionate about exceeding expectations and creating looks that empower you.",
  pills: [
    "Personalized Approach",
    "Wide Range of Services",
    "Top-Quality Products",
  ],
  primaryCta: "Book an Appointment",
  secondaryCta: "Explore Services",
};

export const whoWeAre = {
  tag: "WHO WE ARE",
  statement:
    "Hair Masters Luxury Salon is more than just a beauty establishment; it is a testament to the pursuit of excellence. With its unwavering commitment to luxury, quality, and customer satisfaction, Hair Masters Luxury Salon is set to continue reshaping the landscape of beauty and wellness in India, one exquisite makeover at a time.",
};

export const whatWeDo = {
  sectionHeader: "FEATURES — WHAT WE DO",
  headline: "Your Complete Beauty Journey Starts",
  pillars: [
    {
      title: "Makeup",
      copy: "Enhance your natural beauty with our artistry, creating a flawless look for any occasion.",
      image: hm("2026/06/Artboard-5-1.png"),
    },
    {
      title: "Hair Services",
      copy: "Expert cuts, colors, and styles tailored to flatter your features and reflect your personality.",
      image: hm("2026/06/Artboard-6-1.png"),
    },
    {
      title: "Regenerating Treatments",
      copy: "Rejuvenate your skin with our advanced treatments, promoting a healthy and radiant complexion.",
      image: hm("2026/06/Artboard-7-1.png"),
    },
    {
      title: "Personalized Styling",
      copy: "Discover your signature style with our expert guidance, creating a look that reflects your unique personality.",
      image: hm("2026/06/Artboard-8-1.png"),
    },
  ],
  portals: [
    {
      id: "women-services",
      title: "Women Salon Services",
      image: hm("2024/05/1-2.png"),
    },
    {
      id: "men-services",
      title: "Mens Salon Services",
      image: hm("2024/05/2-2.png"),
    },
  ],
};

export const signatureCategories = [
  {
    title: "Shellac Coating",
    copy: "Flawless, chip-resistant nails with vibrant colors that last.",
    cta: "Whatsapp Now",
    image: hm("2024/05/Untitled-design-2024-05-10T120026.114.jpg"),
  },
  {
    title: "Eyelash Extensions",
    copy: "Luxurious lashes for a natural or dramatic look.",
    cta: "Whatsapp Now",
    image: hm(
      "2022/05/Photo-by-HAIR-MASTERS-PUNJABI-BAGH-on-January-30-2024.-May-be-an-image-of-1-person.jpg",
    ),
  },
  {
    title: "Haircut & Styling",
    copy: "Expert cuts and personalized styles to flatter you.",
    cta: "Whatsapp Now",
    image: hm("2024/05/DSC07366.jpg"),
  },
  {
    title: "Painless Depilation",
    copy: "Achieve long-lasting smoothness comfortably.",
    cta: "Whatsapp Now",
    image: hm("2024/07/best-hair-salon-in-india.jpg"),
  },
  {
    title: "Professional Makeup",
    copy: "Flawless artistry for every occasion.",
    cta: "Whatsapp Now",
    image: hm(
      "2022/05/Photo-by-HAIR-MASTERS-PUNJABI-BAGH-on-February-08-2024.-May-be-an-image-of-1-person-henna-jewelry-and-wedding.jpg",
    ),
  },
];

export const portfolioFilters = [
  "Bridal Makeup",
  "Party Makeup",
  "Makeup",
  "Hair Highlighting",
  "Hair Colouring",
  "Hair Styling",
] as const;

export const portfolioItems = [
  {
    title: "Bridal Makeup",
    category: "Bridal Makeup",
    image: hm(
      "2022/05/Photo-by-HAIR-MASTERS-PUNJABI-BAGH-on-February-08-2024.-May-be-an-image-of-1-person-henna-jewelry-and-wedding.jpg",
    ),
  },
  {
    title: "Party Makeup",
    category: "Party Makeup",
    image: hm(
      "2022/05/Photo-by-HAIR-MASTERS-PUNJABI-BAGH-on-January-30-2024.-May-be-an-image-of-1-person.jpg",
    ),
  },
  {
    title: "Editorial Makeup",
    category: "Makeup",
    image: hm(
      "2022/05/Photo-by-HAIR-MASTERS-PUNJABI-BAGH-on-June-26-2023.jpg",
    ),
  },
  {
    title: "Hair Highlighting",
    category: "Hair Highlighting",
    image: hm(
      "2022/05/Photo-by-HAIR-MASTERS-PUNJABI-BAGH-on-January-13-2024.-May-be-an-image-of-1-person-blonde-hair-and-braids.jpg",
    ),
  },
  {
    title: "Hair Colouring",
    category: "Hair Colouring",
    image: hm("2022/05/Photo-by-HAIR-MASTERS-PUNJABI-BAGH-on-May-27-2023.jpg"),
  },
  {
    title: "Hair Styling",
    category: "Hair Styling",
    image: hm("2024/05/DSC07366.jpg"),
  },
  {
    title: "Salon Portrait",
    category: "Hair Styling",
    image: hm("2025/03/Hair-Master-Salon.jpg"),
  },
  {
    title: "Signature Colour",
    category: "Hair Colouring",
    image: hm("2024/07/hair-masters-india.jpg"),
  },
];


export const testimonials = [
  "Talented stylists, transformative haircut and styling, gorgeous eyelash extensions, and fabulous shellac coating. Friendly staff, highly recommended!",
  "I had my makeup done here for a wedding, and it was perfect. It lasted all night, and I received so many compliments. Highly recommend!",
  "Best haircut I've had in years! The stylist really listened to what I wanted and delivered a look that I love. I'll be a regular from now on.",
  "My eyelash extensions look so natural and beautiful. The application was comfortable, and they've lasted longer than I expected. Highly recommended!",
];

export const locations: Record<string, string[]> = {
  Delhi: [
    "Punjabi Bagh",
    "Ashok Vihar",
    "Rajouri Garden",
    "Pitam Pura",
    "Janakpuri",
    "Model Town",
    "Shalimar Bagh",
    "Karkardooma",
    "Tilak Nagar",
    "East Patel Nagar",
    "Madhu Vihar",
    "Rajender Nagar",
    "Dwarka",
    "Chhattarpur",
    "Sainik Farm",
    "Ramaprashtha Colony",
    "Greater Kailash 2",
  ],
  Gurugram: [
    "Galleria Market (Sector-28)",
    "South Point Mall (Sector-53)",
    "Vensej Mall (Sector-57)",
    "Miracle Mile (Sector-60)",
    "Sector 66",
    "Global Foyer Mall",
    "Avenue VLPL (Sector-83)",
    "Dwarka Expressway (Sector-12)",
    "Satya Mall (Sector-102)",
    "MGF Mall Gurugram",
  ],
  Noida: [
    "Central 50 Mall (Sector-50)",
    "Sector 63",
    "Hazipur (Sector-104)",
    "Indirapuram Habitat Centre",
    "Sector 122",
    "Blue Sapphire Mall",
    "PKS Town Central",
    "Sector 110",
  ],
  Punjab: [
    "Mohali",
    "Amritsar",
    "Bhathinda",
    "Hoshiarpur",
    "Jalandhar",
    "Ludhiana",
    "Patiala",
    "Moga",
    "Khanna",
    "Sangrur",
    "Barnala",
  ],
  Haryana: ["Panchkula", "Yamuna Nagar", "Rohtak", "Jhajjar", "Ambala"],
  Faridabad: ["Huda Market (Sector-14)", "NIT Market"],
  Chandigarh: ["Madhya Marg", "Sector-9C"],
  "Uttar Pradesh": [
    "Moradabad",
    "Bareilly",
    "Agra",
    "Ayodhya",
    "Gorakhpur",
    "Kanpur",
    "Prayagraj",
  ],
  Lucknow: [
    "Gomti Nagar",
    "Aashiyana",
    "Hazrat Ganj",
    "Aliganj",
    "Gomti Nagar Extn. (Emaar)",
  ],
  Karnataka: ["Bengaluru (HSR Layout, Koramangala)"],
  Maharashtra: ["Laxmi Industrial Estate, Andheri West"],
  Rajasthan: ["Jaipur", "Sri Ganga Nagar"],
  "Madhya Pradesh": ["Indore"],
  Bihar: ["Patna (Boring Road)"],
  "J&K": ["Channi Himat", "Udhampur"],
};

export const comingSoon = [
  "Haldwani (Uttarakhand)",
  "Rudrapur (Uttarakhand)",
  "Dehradun (Uttarakhand)",
  "Ahmedabad (Gujarat)",
  "Surat (Gujarat)",
  "Elan Epic (Gurugram)",
  "Gola Road (Patna)",
  "Panipat (Haryana)",
  "Purnea (Bihar)",
  "Ranchi (Jharkhand)",
  "Sonipat (Haryana)",
  "Vatica City Sector 49 (Gurugram)",
  "World Street Faridabad (Haryana)",
  "Chhatapur (Delhi)",
  "Saket (Delhi)",
  "Golf Course Road (Gurugram)",
  "Jharkhand - Lalpur",
  "Jharkhand - Kanke",
  "Sector 18 (Noida)",
];

export const franchise = {
  headline: "Franchise Enquiry",
  copy: "We offer exciting franchise opportunities for entrepreneurs who share our vision.",
  hours: "Mon to Sun: 11:00 am — 08:00 pm",
  cta: "Get Details",
};

export const bookAppointment = {
  headline: "Book Appointment",
  copy: "It's easy, convenient, and the first step to your most confident you!",
  location: "45, N.W.A., Club Road, Punjabi Bagh, New Delhi – 110026",
  hotline: "Call : +011-45511560",
  cta: "Get Appointment",
};

export const news = [
  {
    title: "Summer Skincare at the Salon: Facials That Work in Humid Weather",
    meta: "Hair Masters | No Comments",
    excerpt: "June is the month when most people either give up…",
    image: hm("2025/09/Best-skin-salon-in-noida.jpg"),
  },
  {
    title: "Best Salon Treatments to Fix Sun-Damaged Hair",
    meta: "Hair Masters | No Comments",
    excerpt: "If your hair came out of winter looking decent and…",
    image: hm("2024/07/hair-color-in-india.jpg"),
  },
  {
    title: "How to Keep Your Hair Healthy in the Indian Summer",
    meta: "Hair Masters | No Comments",
    excerpt: "June in North India is brutal on your hair. The…",
    image: hm("2024/07/premium-hair-salon-in-india.jpg"),
  },
];

export const footerLinks = [
  { label: "About Us", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "HM News", href: "#news" },
  { label: "Women Salon Services", href: "#women-services" },
  { label: "Mens Salon Services", href: "#men-services" },
  { label: "Book an Appointment", href: "#contact" },
  { label: "Franchise", href: "#franchise" },
];

/** Official HM Salon imagery — no stock photos */
export const images = {
  heroPrimary: hm("2026/01/new-slidshow-banner-2jpg.jpg-1.jpeg"),
  heroFloatA: hm("2024/05/DSC07366.jpg"),
  heroFloatB: hm(
    "2022/05/Photo-by-HAIR-MASTERS-PUNJABI-BAGH-on-February-08-2024.-May-be-an-image-of-1-person-henna-jewelry-and-wedding.jpg",
  ),
  aboutMain: hm("2025/03/Hair-Master-Salon.jpg"),
  aboutInset: hm("2024/07/best-hair-salon-in-india.jpg"),
  aboutAccent: hm("2024/07/hair-masters-india.jpg"),
};
