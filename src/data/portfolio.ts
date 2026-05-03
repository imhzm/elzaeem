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
    image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&q=80",
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
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80",
    imageAlt: "شاشة أندرويد حديثة في سيارة فارهة",
    year: "2024",
  },
  {
    id: "port-3",
    titleAr: "حماية كاملة لسيارة مرسيدس",
    titleEn: "Full Protection for Mercedes",
    descriptionAr: "تطبيق فيلم حماية PPF لكامل هيكل السيارة ضد الخدوش والتراب والشمس.",
    category: "protection-films",
    image: "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?w=800&q=80",
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
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80",
    imageAlt: "بنرات دعائية كبيرة لمعرض سيارات",
    year: "2024",
  },
  {
    id: "port-5",
    titleAr: "استيكرات واجهة شركة تقنية",
    titleEn: "Tech Company Facade Stickers",
    descriptionAr: "قص وتنفيذ استيكرات لوجو واجهة شركة تقنية مع إضاءة خلفية مدمجة.",
    category: "facade-stickers",
    image: "https://images.unsplash.com/photo-1521791055366-0d553872125f?w=800&q=80",
    imageAlt: "استيكرات لوجو احترافية لواجهة شركة",
    year: "2023",
  },
  {
    id: "port-6",
    titleAr: "فاميه زجاج مكتب إداري",
    titleEn: "Office Glass Tinting",
    descriptionAr: "تطبيق فيلم فاميه عالي الجودة على زجاج مكتب إداري لخصوصية الموظفين وتقليل الحرارة.",
    category: "tinted-glass",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    imageAlt: "زجاج فاميه لمكتب إداري حديث",
    year: "2024",
  },
  {
    id: "port-7",
    titleAr: "تركيب ليدات لسيارة بورش",
    titleEn: "LED Lights for Porsche",
    descriptionAr: "تركيب ليدات أمامية وخلفية متطورة لسيارة بورش مع إضاءة داخلية ملونة.",
    category: "screens-leds",
    image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&q=80",
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
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&q=80",
    imageAlt: "رول أب احترافي لمهرجان تسوق",
    year: "2024",
  },
  {
    id: "port-9",
    titleAr: "نظام صوتي احترافي لسيارة",
    titleEn: "Professional Car Sound System",
    descriptionAr: "تركيب نظام صوتي متكامل مع سماعات احترافية وجي إم وضبط صوتي دقيق.",
    category: "car-accessories",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    imageAlt: "نظام صوتي احترافي للسيارات",
    year: "2023",
  },
  {
    id: "port-10",
    titleAr: "فاميه سيارة لكسوس",
    titleEn: "Lexus Car Tinting",
    descriptionAr: "تطبيق أفلام فاميه عالية الجودة على سيارة لكسus مع ضمان لمدة 5 سنوات.",
    category: "tinted-glass",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80",
    imageAlt: "سيارة لكسus بفاميه زجاج عالية الجودة",
    year: "2024",
  },
  {
    id: "port-11",
    titleAr: "واجهة مطعم بكلادينج",
    titleEn: "Restaurant Cladding Facade",
    descriptionAr: "تصميم واجهة مطعم بخامات كلادينج مع إضاءة ونوافذ كبيرة.",
    category: "cladding-facades",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
    imageAlt: "واجهة مطعم بتصميم كلادينج عصري",
    year: "2023",
  },
  {
    id: "port-12",
    titleAr: "فرش جلد لسيارة",
    titleEn: "Leather Car Upholstery",
    descriptionAr: "تفصيل وتركيب فرش جلد طبيعي لسيارة بألوان مخصصة وتصميم فاخر.",
    category: "car-accessories",
    image: "https://images.unsplash.com/photo-1503376763036-066120622c74?w=800&q=80",
    imageAlt: "فرش جلد احترافي لسيارة فاخرة",
    year: "2024",
  },
];
