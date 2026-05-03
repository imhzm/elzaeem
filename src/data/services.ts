export interface Service {
  id: string;
  titleAr: string;
  titleEn: string;
  descriptionAr: string;
  icon: string;
  image: string;
  imageAlt: string;
  category: "automotive" | "printing";
  features?: string[];
}

export const automotiveServices: Service[] = [
  {
    id: "car-screens",
    titleAr: "شاشات سيارات",
    titleEn: "Car Screens",
    descriptionAr:
      "شاشات أندرويد حديثة، دعم Apple CarPlay و Android Auto، Bluetooth، GPS، دعم كاميرات أمامية وخلفية، وتجربة قيادة أذكى لسيارتك.",
    icon: "MdScreenShare",
    image: "/images/1.jpg",
    imageAlt: "شاشة أندرويد حديثة لسيارة مع نظام ملاحة",
    category: "automotive",
    features: ["شاشات أندرويد أصلية", "Apple CarPlay و Android Auto", "كاميرا خلفية", "GPS مدمج", "Bluetooth"],
  },
  {
    id: "led-lights",
    titleAr: "ليدات سيارات",
    titleEn: "LED Lights",
    descriptionAr:
      "إضاءة LED احترافية للسيارات، أقوى وأوضح رؤية، مظهر عصري، وتركيب متوافق مع جميع موديلات السيارات.",
    icon: "MdLightbulb",
    image: "/images/2.jpg",
    imageAlt: "إضاءة LED احترافية لسيارة",
    category: "automotive",
    features: ["LED أمامية وخلفية", "إضاءة داخلية ملونة", "أضواء DRL", "رياض LEDs", "تثبيت احترافي"],
  },
  {
    id: "protection-films",
    titleAr: "أفلام حماية السيارات",
    titleEn: "Protection Films",
    descriptionAr:
      "أفلام حماية عالية الجودة تحمي البوية من الخدوش، التراب، الشمس، وآثار الاستخدام اليومي لسيارتك.",
    icon: "MdShield",
    image: "/images/3.jpg",
    imageAlt: "سيارة محمية بفيلم حماية احترافي",
    category: "automotive",
    features: ["حماية كاملة للسيارة", "مقاومة الخدوش", "حماية من الشمس", "شفافية عالية", "ضمان حقيقي"],
  },
  {
    id: "car-tint",
    titleAr: "فاميه سيارات",
    titleEn: "Car Tint",
    descriptionAr:
      "أفلام فاميه عالية الجودة توفر خصوصية، تقلل الحرارة، تمنح مظهراً أنيقاً، وتحسن تجربة القيادة.",
    icon: "MdOpacity",
    image: "/images/4.jpg",
    imageAlt: "سيارة بفاميه زجاج عالية الجودة",
    category: "automotive",
    features: ["خصوصية عالية", "تقليل الحرارة 80%", "حماية من الأشعة UV", "أنواع متعددة", "تركيب احترافي"],
  },
  {
    id: "sound-systems",
    titleAr: "أنظمة صوتية",
    titleEn: "Sound Systems",
    descriptionAr:
      "تركيب أنظمة صوتية احترافية للسيارات، سماعات، صب، جي إم، وتجهيزات صوتية بجودة عالية لتجربة صوتية متميزة.",
    icon: "MdSpeaker",
    image: "/images/5.jpg",
    imageAlt: "نظام صوتي احترافي للسيارات",
    category: "automotive",
    features: ["سماعات احترافية", "صب وتسليف", "جي إم أصلية", "ضبط صوتي احترافي", "ضمان على التركيب"],
  },
  {
    id: "car-upholstery",
    titleAr: "فرش سيارات",
    titleEn: "Car Upholstery",
    descriptionAr:
      "فرش جلد عالي الجودة، تفصيل حسب الطلب، حماية داخلية، وتنسيق حسب شكل السيارة لراحة وجمال الداخلية.",
    icon: "MdAirlineSeatReclineNormal",
    image: "/images/6.jpg",
    imageAlt: "فرش جلد احترافي لسيارة",
    category: "automotive",
    features: ["جلد طبيعي وصناعي", "تفصيل حسب الطلب", "ألوان متعددة", "تركيب احترافي", "ضمان الجودة"],
  },
];

export const printingServices: Service[] = [
  {
    id: "cladding-facades",
    titleAr: "واجهات كلادينج",
    titleEn: "Cladding Facades",
    descriptionAr:
      "تصميم وتنفيذ واجهات احترافية للمحلات والشركات والمولات والمعارض بخامات مقاومة ومظهر عصري.",
    icon: "MdBusiness",
    image: "/images/7.jpg",
    imageAlt: "واجهة كلادينج احترافية لمحل تجاري",
    category: "printing",
    features: ["كلادينج ACP", "تصميم 3D", "خامات مقاومة", "ألوان متعددة", "تنفيذ سريع"],
  },
  {
    id: "tinted-frosted-glass",
    titleAr: "زجاج فاميه ومسنفر",
    titleEn: "Tinted & Frosted Glass",
    descriptionAr:
      "حلول زجاج للمكاتب والشركات والمدارس تعطي خصوصية ومظهر منظم لبيئة العمل بتصاميم متنوعة.",
    icon: "MdBlurOn",
    image: "/images/8.jpg",
    imageAlt: "زجاج سنفر لمكتب إداري",
    category: "printing",
    features: ["زجاج فاميه", "زجاج مسنفر", "تصاميم مخصصة", "خصوصية تامة", "سهولة التركيب"],
  },
  {
    id: "facade-stickers",
    titleAr: "استيكرات واجهات",
    titleEn: "Facade Stickers",
    descriptionAr:
      "لوجوهات احترافية، عروض، تغطية زجاج كاملة أو جزئية، وقص احترافي لواجهات المحلات والشركات.",
    icon: "MdLabel",
    image: "/images/9.jpg",
    imageAlt: "استيكرات احترافية لواجهة محل",
    category: "printing",
    features: ["فينيل عالي الجودة", "قص ليزر", "تصاميم مخصصة", "ألوان ثابتة", "مقاوم للعوامل الجوية"],
  },
  {
    id: "banners-rollups",
    titleAr: "بنرات ورول أب",
    titleEn: "Banners & Roll-ups",
    descriptionAr:
      "تصميم وطباعة للمعارض والشركات والمولات والحملات الترويجية بجودة عالية وألوان زاهية.",
    icon: "MdPhotoSizeSelectLarge",
    image: "/images/10.jpg",
    imageAlt: "بانر دعائي احترافي",
    category: "printing",
    features: ["بنرات كبيرة", "رول أب خفيفة", "أقمشة متعددة", "طباعة عالية الجودة", "ألوان ثابتة"],
  },
  {
    id: "indoor-outdoor-signs",
    titleAr: "لوحات داخلية وخارجية",
    titleEn: "Indoor & Outdoor Signs",
    descriptionAr:
      "لوحات إرشادية، لوحات محلات، لوحات شركات، ولافتات دعائية بتصاميم جذابة ومتينة.",
    icon: "MdSignpost",
    image: "/images/11.jpg",
    imageAlt: "لوحة إرشادية احترافية",
    category: "printing",
    features: ["لوحات نيون", "لوحات LED", "ألومنيوم", "أكريليك", "خامات متعددة"],
  },
  {
    id: "posters-promo",
    titleAr: "بوسترات ومواد دعائية",
    titleEn: "Posters & Promo Materials",
    descriptionAr:
      "طباعة مواد تسويقية للبراندات والمناسبات والعروض بأحدث تكنولوجيا الطباعة وأعلى جودة.",
    icon: "MdPrint",
    image: "/images/12.jpg",
    imageAlt: "بوستر دعائي احترافي",
    category: "printing",
    features: ["بوسترات كبيرة", "كروت دعوية", "فلايرات", "بروشورات", "طباعة دقيقة"],
  },
];

export const allServices = [...automotiveServices, ...printingServices];
