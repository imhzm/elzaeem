export interface PortfolioItem {
  id: string;
  titleAr: string;
  titleEn: string;
  descriptionAr: string;
  category: string;
  image: string;
  featured?: boolean;
}

export const portfolioCategories = [
  { id: "all", titleAr: "الكل", titleEn: "All" },
  { id: "car-accessories", titleAr: "كماليات سيارات", titleEn: "Car Accessories" },
  {
    id: "protection-films",
    titleAr: "أفلام حماية",
    titleEn: "Protection Films",
  },
  { id: "screens-leds", titleAr: "شاشات وليدات", titleEn: "Screens & LEDs" },
  {
    id: "cladding-facades",
    titleAr: "واجهات كلادينج",
    titleEn: "Cladding Facades",
  },
  {
    id: "facade-stickers",
    titleAr: "استيكرات واجهات",
    titleEn: "Facade Stickers",
  },
  {
    id: "banners-rollups",
    titleAr: "بنرات ورول أب",
    titleEn: "Banners & Roll-ups",
  },
  {
    id: "tinted-glass",
    titleAr: "زجاج فاميه ومسنفر",
    titleEn: "Tinted & Frosted Glass",
  },
];

export const portfolioItems: PortfolioItem[] = [
  {
    id: "port-1",
    titleAr: "واجهة كلادينج لمحل تجاري",
    titleEn: "Commercial Storefront Cladding",
    descriptionAr:
      "تصميم وتنفيذ واجهة خارجية بخامات مقاومة ومظهر عصري لمحل تجاري.",
    category: "cladding-facades",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    featured: true,
  },
  {
    id: "port-2",
    titleAr: "تركيب شاشة أندرويد لسيارة SUV",
    titleEn: "Android Screen Installation for SUV",
    descriptionAr:
      "تركيب شاشة أندرويد موديل 2024 مع دعم Apple CarPlay وكاميرا خلفية.",
    category: "screens-leds",
    image:
      "https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=800&q=80",
  },
  {
    id: "port-3",
    titleAr: "أفلام حماية لسيارة سيدان",
    titleEn: "Protection Film for Sedan",
    descriptionAr:
      "تطبيق فيلم حماية لكامل هيكل السيارة ضد الخدوش والتراب والشمس.",
    category: "protection-films",
    image:
      "https://images.pexels.com/photos/36021355/pexels-photo-36021355.jpeg?auto=compress&w=800&q=80",
  },
  {
    id: "port-4",
    titleAr: "بنرات لمعرض سيارات",
    titleEn: "Car Exhibition Banners",
    descriptionAr:
      "تصميم وطباعة بنرات كبيرة لمعرض سيارات دولي بألوان زاهية وجودة عالية.",
    category: "banners-rollups",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
  },
  {
    id: "port-5",
    titleAr: "استيكرات واجهة شركة",
    titleEn: "Company Facade Stickers",
    descriptionAr:
      "قص وتنفيذ استيكرات لوجو واجهة شركة تقنية مع إضاءة خلفية.",
    category: "facade-stickers",
    image:
      "https://images.pexels.com/photos/28726705/pexels-photo-28726705.jpeg?auto=compress&w=800&q=80",
  },
  {
    id: "port-6",
    titleAr: "فاميه زجاج مكتب إداري",
    titleEn: "Office Glass Tinting",
    descriptionAr:
      "تطبيق فيلم فاميه على زجاج مكتب إداري لخصوصية الموظفين وتقليل الحرارة.",
    category: "tinted-glass",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
  },
  {
    id: "port-7",
    titleAr: "تركيب ليدات لسيارة رياضية",
    titleEn: "LED Lights for Sports Car",
    descriptionAr:
      "تركيب ليدات أمامية وخلفية لسيارة رياضية مع إضاءة داخلية ملونة.",
    category: "screens-leds",
    image:
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80",
  },
  {
    id: "port-8",
    titleAr: "رول أب لمهرجان تسوق",
    titleEn: "Roll-up Banner for Shopping Festival",
    descriptionAr:
      "تصميم وطباعة رول أب للمهرجان تسوق بأبعاد 80x200 سم وخامة مقاومة.",
    category: "banners-rollups",
    image:
      "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=80",
  },
];
