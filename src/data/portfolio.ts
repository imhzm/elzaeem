export interface PortfolioItem {
  id: string;
  titleAr: string;
  titleEn: string;
  descriptionAr: string;
  category: string;
  image: string;
  imageAlt: string;
  featured?: boolean;
  year?: string;
}

export const portfolioCategories = [
  { id: "all", titleAr: "Ø§Ù„ÙƒÙ„", titleEn: "All" },
  { id: "car-accessories", titleAr: "ÙƒÙ…Ø§Ù„ÙŠØ§Øª Ø³ÙŠØ§Ø±Ø§Øª", titleEn: "Car Accessories" },
  { id: "protection-films", titleAr: "Ø£ÙÙ„Ø§Ù… Ø­Ù…Ø§ÙŠØ©", titleEn: "Protection Films" },
  { id: "screens-leds", titleAr: "Ø´Ø§Ø´Ø§Øª ÙˆÙ„ÙŠØ¯Ø§Øª", titleEn: "Screens & LEDs" },
  { id: "cladding-facades", titleAr: "ÙˆØ§Ø¬Ù‡Ø§Øª ÙƒÙ„Ø§Ø¯ÙŠÙ†Ø¬", titleEn: "Cladding Facades" },
  { id: "facade-stickers", titleAr: "Ø§Ø³ØªÙŠÙƒØ±Ø§Øª ÙˆØ§Ø¬Ù‡Ø§Øª", titleEn: "Facade Stickers" },
  { id: "banners-rollups", titleAr: "Ø¨Ù†Ø±Ø§Øª ÙˆØ±ÙˆÙ„ Ø£Ø¨", titleEn: "Banners & Roll-ups" },
  { id: "tinted-glass", titleAr: "Ø²Ø¬Ø§Ø¬ ÙØ§Ù…ÙŠÙ‡", titleEn: "Tinted Glass" },
];

// Optimized CDN images for better performance
export const portfolioItems: PortfolioItem[] = [
  {
    id: "port-1",
    titleAr: "ÙˆØ§Ø¬Ù‡Ø© ÙƒÙ„Ø§Ø¯ÙŠÙ†Ø¬ Ù„Ù…Ø­Ù„ ØªØ¬Ø§Ø±ÙŠ ÙØ§Ø®Ø±",
    titleEn: "Luxury Commercial Storefront Cladding",
    descriptionAr: "ØªØµÙ…ÙŠÙ… ÙˆØªÙ†ÙÙŠØ° ÙˆØ§Ø¬Ù‡Ø© Ø®Ø§Ø±Ø¬ÙŠØ© Ø¨Ø®Ø§Ù…Ø§Øª ÙƒÙ„Ø§Ø¯ÙŠÙ†Ø¬ Ø¹Ø§Ù„ÙŠØ© Ø§Ù„Ø¬ÙˆØ¯Ø© Ù…Ø¹ Ø¥Ø¶Ø§Ø¡Ø© LED Ù…Ø¯Ù…Ø¬Ø©.",
    category: "cladding-facades",
    image: "/images/1.jpg",
    imageAlt: "ÙˆØ§Ø¬Ù‡Ø© ÙƒÙ„Ø§Ø¯ÙŠÙ†Ø¬ Ø§Ø­ØªØ±Ø§ÙÙŠØ© Ù„Ù…Ø­Ù„ ØªØ¬Ø§Ø±ÙŠ",
    featured: true,
    year: "2024",
  },
  {
    id: "port-2",
    titleAr: "ØªØ±ÙƒÙŠØ¨ Ø´Ø§Ø´Ø© Ø£Ù†Ø¯Ø±ÙˆÙŠØ¯ Ù„Ø³ÙŠØ§Ø±Ø© BMW",
    titleEn: "Android Screen Installation for BMW",
    descriptionAr: "ØªØ±ÙƒÙŠØ¨ Ø´Ø§Ø´Ø© Ø£Ù†Ø¯Ø±ÙˆÙŠØ¯ Ù…ÙˆØ¯ÙŠÙ„ 2024 Ù…Ø¹ Ø¯Ø¹Ù… Apple CarPlay ÙˆÙƒØ§Ù…ÙŠØ±Ø§ 360 Ø¯Ø±Ø¬Ø©.",
    category: "screens-leds",
    image: "/images/2.jpg",
    imageAlt: "Ø´Ø§Ø´Ø© Ø£Ù†Ø¯Ø±ÙˆÙŠØ¯ Ø­Ø¯ÙŠØ«Ø© ÙÙŠ Ø³ÙŠØ§Ø±Ø© ÙØ§Ø±Ù‡Ø©",
    year: "2024",
  },
  {
    id: "port-3",
    titleAr: "Ø­Ù…Ø§ÙŠØ© ÙƒØ§Ù…Ù„Ø© Ù„Ø³ÙŠØ§Ø±Ø© Ù…Ø±Ø³ÙŠØ¯Ø³",
    titleEn: "Full Protection for Mercedes",
    descriptionAr: "ØªØ·Ø¨ÙŠÙ‚ ÙÙŠÙ„Ù… Ø­Ù…Ø§ÙŠØ© PPF Ù„ÙƒØ§Ù…Ù„ Ù‡ÙŠÙƒÙ„ Ø§Ù„Ø³ÙŠØ§Ø±Ø© Ø¶Ø¯ Ø§Ù„Ø®Ø¯ÙˆØ´ ÙˆØ§Ù„ØªØ±Ø§Ø¨ ÙˆØ§Ù„Ø´Ù…Ø³.",
    category: "protection-films",
    image: "/images/3.jpg",
    imageAlt: "Ø³ÙŠØ§Ø±Ø© Ù…Ø±Ø³ÙŠØ¯Ø³ Ù…Ø­Ù…ÙŠØ© Ø¨ÙÙŠÙ„Ù… Ø­Ù…Ø§ÙŠØ© Ø´ÙØ§Ù",
    featured: true,
    year: "2024",
  },
  {
    id: "port-4",
    titleAr: "Ø¨Ù†Ø±Ø§Øª Ù„Ù…Ø¹Ø±Ø¶ Ø³ÙŠØ§Ø±Ø§Øª Ø¯ÙˆÙ„ÙŠ",
    titleEn: "International Car Show Banners",
    descriptionAr: "ØªØµÙ…ÙŠÙ… ÙˆØ·Ø¨Ø§Ø¹Ø© Ø¨Ù†Ø±Ø§Øª Ø¶Ø®Ù…Ø© Ù„Ù…Ø¹Ø±Ø¶ Ø³ÙŠØ§Ø±Ø§Øª Ø¯ÙˆÙ„ÙŠ Ø¨Ø£Ù„ÙˆØ§Ù† Ø²Ø§Ù‡ÙŠØ© ÙˆØ¬ÙˆØ¯Ø© Ø¹Ø§Ù„ÙŠØ©.",
    category: "banners-rollups",
    image: "/images/4.jpg",
    imageAlt: "Ø¨Ù†Ø±Ø§Øª Ø¯Ø¹Ø§Ø¦ÙŠØ© ÙƒØ¨ÙŠØ±Ø© Ù„Ù…Ø¹Ø±Ø¶ Ø³ÙŠØ§Ø±Ø§Øª",
    year: "2024",
  },
  {
    id: "port-5",
    titleAr: "Ø§Ø³ØªÙŠÙƒØ±Ø§Øª ÙˆØ§Ø¬Ù‡Ø© Ø´Ø±ÙƒØ© ØªÙ‚Ù†ÙŠØ©",
    titleEn: "Tech Company Facade Stickers",
    descriptionAr: "Ù‚Øµ ÙˆØªÙ†ÙÙŠØ° Ø§Ø³ØªÙŠÙƒØ±Ø§Øª Ù„ÙˆØ¬Ùˆ ÙˆØ§Ø¬Ù‡Ø© Ø´Ø±ÙƒØ© ØªÙ‚Ù†ÙŠØ© Ù…Ø¹ Ø¥Ø¶Ø§Ø¡Ø© Ø®Ù„ÙÙŠØ© Ù…Ø¯Ù…Ø¬Ø©.",
    category: "facade-stickers",
    image: "/images/5.jpg",
    imageAlt: "Ø§Ø³ØªÙŠÙƒØ±Ø§Øª Ù„ÙˆØ¬Ùˆ Ø§Ø­ØªØ±Ø§ÙÙŠØ© Ù„ÙˆØ§Ø¬Ù‡Ø© Ø´Ø±ÙƒØ©",
    year: "2023",
  },
  {
    id: "port-6",
    titleAr: "ÙØ§Ù…ÙŠÙ‡ Ø²Ø¬Ø§Ø¬ Ù…ÙƒØªØ¨ Ø¥Ø¯Ø§Ø±ÙŠ",
    titleEn: "Office Glass Tinting",
    descriptionAr: "ØªØ·Ø¨ÙŠÙ‚ ÙÙŠÙ„Ù… ÙØ§Ù…ÙŠÙ‡ Ø¹Ø§Ù„ÙŠ Ø§Ù„Ø¬ÙˆØ¯Ø© Ø¹Ù„Ù‰ Ø²Ø¬Ø§Ø¬ Ù…ÙƒØªØ¨ Ø¥Ø¯Ø§Ø±ÙŠ Ù„Ø®ØµÙˆØµÙŠØ© Ø§Ù„Ù…ÙˆØ¸ÙÙŠÙ† ÙˆØªÙ‚Ù„ÙŠÙ„ Ø§Ù„Ø­Ø±Ø§Ø±Ø©.",
    category: "tinted-glass",
    image: "/images/6.jpg",
    imageAlt: "Ø²Ø¬Ø§Ø¬ ÙØ§Ù…ÙŠÙ‡ Ù„Ù…ÙƒØªØ¨ Ø¥Ø¯Ø§Ø±ÙŠ Ø­Ø¯ÙŠØ«",
    year: "2024",
  },
  {
    id: "port-7",
    titleAr: "ØªØ±ÙƒÙŠØ¨ Ù„ÙŠØ¯Ø§Øª Ù„Ø³ÙŠØ§Ø±Ø© Ø¨ÙˆØ±Ø´",
    titleEn: "LED Lights for Porsche",
    descriptionAr: "ØªØ±ÙƒÙŠØ¨ Ù„ÙŠØ¯Ø§Øª Ø£Ù…Ø§Ù…ÙŠØ© ÙˆØ®Ù„ÙÙŠØ© Ù…ØªØ·ÙˆØ±Ø© Ù„Ø³ÙŠØ§Ø±Ø© Ø¨ÙˆØ±Ø´ Ù…Ø¹ Ø¥Ø¶Ø§Ø¡Ø© Ø¯Ø§Ø®Ù„ÙŠØ© Ù…Ù„ÙˆÙ†Ø©.",
    category: "screens-leds",
    image: "/images/7.jpg",
    imageAlt: "Ø¥Ø¶Ø§Ø¡Ø© LED Ø§Ø­ØªØ±Ø§ÙÙŠØ© Ù„Ø³ÙŠØ§Ø±Ø© Ø±ÙŠØ§Ø¶ÙŠØ©",
    featured: true,
    year: "2024",
  },
  {
    id: "port-8",
    titleAr: "Ø±ÙˆÙ„ Ø£Ø¨ Ù„Ù…Ù‡Ø±Ø¬Ø§Ù† ØªØ³ÙˆÙ‚",
    titleEn: "Roll-up Banner for Shopping Festival",
    descriptionAr: "ØªØµÙ…ÙŠÙ… ÙˆØ·Ø¨Ø§Ø¹Ø© Ø±ÙˆÙ„ Ø£Ø¨ Ù„Ù…Ù‡Ø±Ø¬Ø§Ù† Ø§Ù„ØªØ³ÙˆÙ‚ÙŠ Ø¨Ø£Ø¨Ø¹Ø§Ø¯ 85x200 Ø³Ù… ÙˆØ®Ø§Ù…Ø© Ù…Ù‚Ø§ÙˆÙ…Ø©.",
    category: "banners-rollups",
    image: "/images/8.jpg",
    imageAlt: "Ø±ÙˆÙ„ Ø£Ø¨ Ø§Ø­ØªØ±Ø§ÙÙŠ Ù„Ù…Ù‡Ø±Ø¬Ø§Ù† ØªØ³ÙˆÙ‚",
    year: "2024",
  },
  {
    id: "port-9",
    titleAr: "Ù†Ø¸Ø§Ù… ØµÙˆØªÙŠ Ø§Ø­ØªØ±Ø§ÙÙŠ Ù„Ø³ÙŠØ§Ø±Ø©",
    titleEn: "Professional Car Sound System",
    descriptionAr: "ØªØ±ÙƒÙŠØ¨ Ù†Ø¸Ø§Ù… ØµÙˆØªÙŠ Ù…ØªÙƒØ§Ù…Ù„ Ù…Ø¹ Ø³Ù…Ø§Ø¹Ø§Øª Ø§Ø­ØªØ±Ø§ÙÙŠØ© ÙˆØ¬ÙŠ Ø£Ù…Ø¨Ø± ÙˆØ¶Ø¨Ø· ØµÙˆØªÙŠ Ø¯Ù‚ÙŠÙ‚.",
    category: "car-accessories",
    image: "/images/9.jpg",
    imageAlt: "Ù†Ø¸Ø§Ù… ØµÙˆØªÙŠ Ø§Ø­ØªØ±Ø§ÙÙŠ Ù„Ù„Ø³ÙŠØ§Ø±Ø§Øª",
    year: "2023",
  },
  {
    id: "port-10",
    titleAr: "ÙØ§Ù…ÙŠÙ‡ Ø³ÙŠØ§Ø±Ø© Ù„ÙƒØ³ÙˆØ³",
    titleEn: "Lexus Car Tinting",
    descriptionAr: "ØªØ·Ø¨ÙŠÙ‚ Ø£ÙÙ„Ø§Ù… ÙØ§Ù…ÙŠÙ‡ Ø¹Ø§Ù„ÙŠØ© Ø§Ù„Ø¬ÙˆØ¯Ø© Ø¹Ù„Ù‰ Ø³ÙŠØ§Ø±Ø© Ù„ÙƒØ³ÙˆØ³ Ù…Ø¹ Ø¶Ù…Ø§Ù† Ù„Ù…Ø¯Ø© 5 Ø³Ù†ÙˆØ§Øª.",
    category: "tinted-glass",
    image: "/images/10.jpg",
    imageAlt: "Ø³ÙŠØ§Ø±Ø© Ù„ÙƒØ³ÙˆØ³ Ø¨ÙØ§Ù…ÙŠÙ‡ Ø²Ø¬Ø§Ø¬ Ø¹Ø§Ù„ÙŠØ© Ø§Ù„Ø¬ÙˆØ¯Ø©",
    year: "2024",
  },
  {
    id: "port-11",
    titleAr: "ÙˆØ§Ø¬Ù‡Ø© Ù…Ø·Ø¹Ù… Ø¨ÙƒÙ„Ø§Ø¯ÙŠÙ†Ø¬",
    titleEn: "Restaurant Cladding Facade",
    descriptionAr: "ØªØµÙ…ÙŠÙ… ÙˆØ§Ø¬Ù‡Ø© Ù…Ø·Ø¹Ù… Ø¨Ø®Ø§Ù…Ø§Øª ÙƒÙ„Ø§Ø¯ÙŠÙ†Ø¬ Ù…Ø¹ Ø¥Ø¶Ø§Ø¡Ø© ÙˆÙ†ÙˆØ§ÙØ° ÙƒØ¨ÙŠØ±Ø©.",
    category: "cladding-facades",
    image: "/images/11.jpg",
    imageAlt: "ÙˆØ§Ø¬Ù‡Ø© Ù…Ø·Ø¹Ù… Ø¨ØªØµÙ…ÙŠÙ… ÙƒÙ„Ø§Ø¯ÙŠÙ†Ø¬ Ø¹ØµØ±ÙŠ",
    year: "2023",
  },
  {
    id: "port-12",
    titleAr: "ÙØ±Ø´ Ø¬Ù„Ø¯ Ù„Ø³ÙŠØ§Ø±Ø©",
    titleEn: "Leather Car Upholstery",
    descriptionAr: "ØªÙØµÙŠÙ„ ÙˆØªØ±ÙƒÙŠØ¨ ÙØ±Ø´ Ø¬Ù„Ø¯ Ø·Ø¨ÙŠØ¹ÙŠ Ù„Ø³ÙŠØ§Ø±Ø© Ø¨Ø£Ù„ÙˆØ§Ù† Ù…Ø®ØµØµØ© ÙˆØªØµÙ…ÙŠÙ… ÙØ§Ø®Ø±.",
    category: "car-accessories",
    image: "/images/12.jpg",
    imageAlt: "ÙØ±Ø´ Ø¬Ù„Ø¯ Ø§Ø­ØªØ±Ø§ÙÙŠ Ù„Ø³ÙŠØ§Ø±Ø© ÙØ§Ø®Ø±Ø©",
    year: "2024",
  },
];

