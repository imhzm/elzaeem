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
  { id: "all", titleAr: "الكل", titleEn: "All" },
  { id: "car-accessories", titleAr: "كماليات سيارات", titleEn: "Car Accessories" },
  { id: "protection-films", titleAr: "أفلام حماية", titleEn: "Protection Films" },
  { id: "screens-leds", titleAr: "شاشات وليدات", titleEn: "Screens & LEDs" },
  { id: "cladding-facades", titleAr: "واجهات كلادينج", titleEn: "Cladding Facades" },
  { id: "facade-stickers", titleAr: "استيكرات واجهات", titleEn: "Facade Stickers" },
  { id: "banners-rollups", titleAr: "بنرات ورول أب", titleEn: "Banners & Roll-ups" },
  { id: "tinted-glass", titleAr: "زجاج فاميه", titleEn: "Tinted Glass" },
];

export const portfolioItems: PortfolioItem[] = [
  {
    id: "port-1",
    titleAr: "واجهة كلادينج لمحل تجاري فاخر",
    titleEn: "Luxury Commercial Storefront Cladding",
    descriptionAr: "تصميم وتنفيذ واجهة خارجية بخامات كلادينج عالية الجودة مع إضاءة LED مدمجة.",
    category: "cladding-facades",
    image: "/images/1 (2).png",
    imageAlt: "واجهة كلادينج احترافية لمحل تجاري",
    featured: true,
    year: "2024",
  },
  {
    id: "port-2",
    titleAr: "تركيب شاشة أندرويد لسيارة BMW",
    titleEn: "Android Screen Installation for BMW",
    descriptionAr: "تركيب شاشة أندرويد موديل 2024 مع دعم Apple CarPlay وكاميرا 360 درجة.",
    category: "screens-leds",
    image: "/images/1.png",
    imageAlt: "شاشة أندرويد حديثة في سيارة فارهة",
    year: "2024",
  },
  {
    id: "port-3",
    titleAr: "حماية كاملة لسيارة مرسيدس",
    titleEn: "Full Protection for Mercedes",
    descriptionAr: "تطبيق فيلم حماية PPF لكامل هيكل السيارة ضد الخدوش والتراب والشمس.",
    category: "protection-films",
    image: "/images/2 (2).png",
    imageAlt: "سيارة مرسيدس محمية بفيلم حماية شفاف",
    featured: true,
    year: "2024",
  },
  {
    id: "port-4",
    titleAr: "بنرات لمعرض سيارات دولي",
    titleEn: "International Car Show Banners",
    descriptionAr: "تصميم وطباعة بنرات ضخمة لمعرض سيارات دولي بألوان زاهية وجودة عالية.",
    category: "banners-rollups",
    image: "/images/2 (3).png",
    imageAlt: "بنرات دعائية كبيرة لمعرض سيارات",
    year: "2024",
  },
  {
    id: "port-5",
    titleAr: "استيكرات واجهة شركة تقنية",
    titleEn: "Tech Company Facade Stickers",
    descriptionAr: "قص وتنفيذ استيكرات لوجو واجهة شركة تقنية مع إضاءة خلفية مدمجة.",
    category: "facade-stickers",
    image: "/images/3 (2).png",
    imageAlt: "استيكرات لوجو احترافية لواجهة شركة",
    year: "2023",
  },
  {
    id: "port-6",
    titleAr: "فاميه زجاج مكتب إداري",
    titleEn: "Office Glass Tinting",
    descriptionAr: "تطبيق فيلم فاميه عالي الجودة على زجاج مكتب إداري لخصوصية الموظفين وتقليل الحرارة.",
    category: "tinted-glass",
    image: "/images/13.jpg",
    imageAlt: "زجاج فاميه لمكتب إداري حديث",
    year: "2024",
  },
  {
    id: "port-7",
    titleAr: "تركيب ليدات لسيارة بورش",
    titleEn: "LED Lights for Porsche",
    descriptionAr: "تركيب ليدات أمامية وخلفية متطورة لسيارة بورش مع إضاءة داخلية ملونة.",
    category: "screens-leds",
    image: "/images/14.jpg",
    imageAlt: "إضاءة LED احترافية لسيارة رياضية",
    featured: true,
    year: "2024",
  },
  {
    id: "port-8",
    titleAr: "رول أب لمهرجان تسوق",
    titleEn: "Roll-up Banner for Shopping Festival",
    descriptionAr: "تصميم وطباعة رول أب للمهرجان التسوقي بأبعاد 85x200 سم وخامة مقاومة.",
    category: "banners-rollups",
    image: "/images/15.jpg",
    imageAlt: "رول أب احترافي لمهرجان تسوق",
    year: "2024",
  },
  {
    id: "port-9",
    titleAr: "نظام صوتي احترافي لسيارة",
    titleEn: "Professional Car Sound System",
    descriptionAr: "تركيب نظام صوتي متكامل مع سماعات احترافية وجي إم وضبط صوتي دقيق.",
    category: "car-accessories",
    image: "/images/16.jpg",
    imageAlt: "نظام صوتي احترافي للسيارات",
    year: "2023",
  },
  {
    id: "port-10",
    titleAr: "فاميه سيارة لكسوس",
    titleEn: "Lexus Car Tinting",
    descriptionAr: "تطبيق أفلام فاميه عالية الجودة على سيارة لكسوس مع ضمان لمدة 5 سنوات.",
    category: "tinted-glass",
    image: "/images/17.jpg",
    imageAlt: "سيارة لكسوس بفاميه زجاج عالية الجودة",
    year: "2024",
  },
  {
    id: "port-11",
    titleAr: "واجهة مطعم بكلادينج",
    titleEn: "Restaurant Cladding Facade",
    descriptionAr: "تصميم واجهة مطعم بخامات كلادينج مع إضاءة ونوافذ كبيرة.",
    category: "cladding-facades",
    image: "/images/18.jpg",
    imageAlt: "واجهة مطعم بتصميم كلادينج عصري",
    year: "2023",
  },
  {
    id: "port-12",
    titleAr: "فرش جلد لسيارة",
    titleEn: "Leather Car Upholstery",
    descriptionAr: "تفصيل وتركيب فرش جلد طبيعي لسيارة بألوان مخصصة وتصميم فاخر.",
    category: "car-accessories",
    image: "/images/19.jpg",
    imageAlt: "فرش جلد احترافي لسيارة فاخرة",
    year: "2024",
  },
];
