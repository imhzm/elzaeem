export interface Service {
  id: string;
  titleAr: string;
  titleEn: string;
  descriptionAr: string;
  icon: string; // Icon name from react-icons
  image: string; // Unsplash image URL
  category: "automotive" | "printing";
}

export const automotiveServices: Service[] = [
  {
    id: "protection-films",
    titleAr: "أفلام حماية السيارات PPF",
    titleEn: "PPF Protection Films",
    descriptionAr:
      "أفلام حماية أصلية بتقنية المعالجة الذاتية لحماية البوية من الخدوش والترميل والشمس وعوامل الجو.",
    icon: "MdShield",
    image: "/images/hero-4.jpg",
    category: "automotive",
  },
  {
    id: "car-tint",
    titleAr: "عزل حراري وفاميه متطور",
    titleEn: "Thermal Insulation & Tint",
    descriptionAr:
      "أفلام نانو كربوني وسيراميك تعزل 99% من الأشعة فوق البنفسجية وتوفر خصوصية وتبريد فائق للمقصورة.",
    icon: "MdOpacity",
    image: "/images/hero-1.jpg",
    category: "automotive",
  },
  {
    id: "car-screens",
    titleAr: "شاشات سيارات ذكية",
    titleEn: "Smart Car Screens",
    descriptionAr:
      "شاشات أندرويد فائقة الوضوح تدعم Apple CarPlay وAndroid Auto ونظام الملاحة GPS وكاميرات 360.",
    icon: "MdScreenShare",
    image: "/images/hero-2.jpg",
    category: "automotive",
  },
  {
    id: "led-lights",
    titleAr: "إضاءات وليدات سيارات",
    titleEn: "LED Automotive Lighting",
    descriptionAr:
      "ليدات أمامية وإضاءات داخلية محيطية Ambient Light بأعلى كفاءة ضوئية وعمر افتراضي طويل.",
    icon: "MdLightbulb",
    image: "/images/hero-2.jpg",
    category: "automotive",
  },
  {
    id: "car-upholstery",
    titleAr: "فرش وتجهيز مقصورة السيارات",
    titleEn: "Car Upholstery & Interior",
    descriptionAr:
      "فرش جلد طبيعي وصناعي فاخر، تفصيل دقيق وحماية متكاملة للأرضيات والكراسي بأحدث التصاميم.",
    icon: "MdAirlineSeatReclineNormal",
    image: "/images/2.jpg",
    category: "automotive",
  },
  {
    id: "sound-systems",
    titleAr: "أنظمة صوتية احترافية",
    titleEn: "Professional Sound Systems",
    descriptionAr:
      "سماعات ومضخمات صوت Subwoofer وAmplifiers نقية لتجربة سمعية استثنائية داخل السيارة.",
    icon: "MdSpeaker",
    image: "/images/1.jpg",
    category: "automotive",
  },
];

export const printingServices: Service[] = [
  {
    id: "cladding-facades",
    titleAr: "واجهات كلادينج وحروف بارزة",
    titleEn: "Cladding Facades",
    descriptionAr:
      "تصميم وتنفيذ واجهات كلادينج مقاومة للعوامل الجوية للمحلات والشركات مع إضاءة ليد احترافية.",
    icon: "MdBusiness",
    image: "/images/hero-3.jpg",
    category: "printing",
  },
  {
    id: "tinted-frosted-glass",
    titleAr: "زجاج فاميه ومسنفر للمباني",
    titleEn: "Tinted & Frosted Glass",
    descriptionAr:
      "حلول عزل وفاميه وتسنفير زجاجي للشركات والمكاتب يمنح الخصوصية والشكل الجمالي العصري.",
    icon: "MdBlurOn",
    image: "/images/3.jpg",
    category: "printing",
  },
  {
    id: "facade-stickers",
    titleAr: "استيكرات واجهات وفينيل",
    titleEn: "Facade Stickers & Vinyl",
    descriptionAr:
      "طباعة وقص استيكرات فينيل عالية الدقة لمقرات الشركات والواجهات الزجاجية والمعارض.",
    icon: "MdLabel",
    image: "/images/4.jpg",
    category: "printing",
  },
  {
    id: "banners-rollups",
    titleAr: "بنرات ورول أب معارض",
    titleEn: "Banners & Roll-ups",
    descriptionAr:
      "تصميم وطباعة بنرات ومجسمات رول أب إعلانية بجودة ألوان استثنائية للمؤتمرات والفعاليات.",
    icon: "MdPhotoSizeSelectLarge",
    image: "/images/hero-5.jpg",
    category: "printing",
  },
  {
    id: "indoor-outdoor-signs",
    titleAr: "لوحات إرشادية ودعائية",
    titleEn: "Indoor & Outdoor Signs",
    descriptionAr:
      "تصنيع لوحات إرشادية وتجارية متينة بخامات أكرليك واستانلس وإضاءات نيون وليد.",
    icon: "MdSignpost",
    image: "/images/5.jpg",
    category: "printing",
  },
  {
    id: "posters-promo",
    titleAr: "بوسترات ومواد دعائية",
    titleEn: "Posters & Promo Materials",
    descriptionAr:
      "طباعة مواد تسويقية وتوزيعات دعائية بأحدث مكائن الطباعة الرقمية وسرعة تسليم قياسية.",
    icon: "MdPrint",
    image: "/images/6.jpg",
    category: "printing",
  },
];

export const allServices = [...automotiveServices, ...printingServices];
