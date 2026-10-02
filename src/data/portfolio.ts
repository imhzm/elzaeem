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
    image: "/images/hero-3.jpg",
    featured: true,
  },
  {
    id: "port-2",
    titleAr: "تركيب شاشة أندرويد لسيارة SUV",
    titleEn: "Android Screen Installation for SUV",
    descriptionAr:
      "تركيب شاشة أندرويد موديل حديث مع دعم Apple CarPlay وكاميرا خلفية.",
    category: "screens-leds",
    image: "/images/hero-2.jpg",
  },
  {
    id: "port-3",
    titleAr: "أفلام حماية لسيارة سيدان فاخرة",
    titleEn: "Protection Film for Sedan",
    descriptionAr:
      "تطبيق فيلم حماية PPF كامل للهيكل ضد الخدوش والترميل وحرارة الشمس.",
    category: "protection-films",
    image: "/images/hero-4.jpg",
  },
  {
    id: "port-4",
    titleAr: "بنرات لمعرض سيارات",
    titleEn: "Car Exhibition Banners",
    descriptionAr:
      "تصميم وطباعة بنرات كبيرة لمعرض سيارات بألوان زاهية وجودة طباعة عالية.",
    category: "banners-rollups",
    image: "/images/hero-5.jpg",
  },
  {
    id: "port-5",
    titleAr: "استيكرات واجهة شركة",
    titleEn: "Company Facade Stickers",
    descriptionAr:
      "قص وتنفيذ استيكرات فينيل دقيقة لواجهة شركة مع مظهر أنيق وعصري.",
    category: "facade-stickers",
    image: "/images/4.jpg",
  },
  {
    id: "port-6",
    titleAr: "فاميه زجاج مكتب إداري",
    titleEn: "Office Glass Tinting",
    descriptionAr:
      "تطبيق فيلم فاميه على زجاج مكتب إداري لخصوصية الموظفين وتقليل الحرارة.",
    category: "tinted-glass",
    image: "/images/3.jpg",
  },
  {
    id: "port-7",
    titleAr: "تركيب ليدات وإضاءة محيطية",
    titleEn: "LED Lights & Ambient",
    descriptionAr:
      "تركيب ليدات أمامية وخلفية وإضاءة محيطية داخلية بأعلى درجات الدقة.",
    category: "screens-leds",
    image: "/images/1.jpg",
  },
  {
    id: "port-8",
    titleAr: "رول أب لمهرجان تسوق",
    titleEn: "Roll-up Banner for Shopping Festival",
    descriptionAr:
      "تصميم وطباعة رول أب متين عالي الجودة وسهل التنقل للمعارض.",
    category: "banners-rollups",
    image: "/images/5.jpg",
  },
];
