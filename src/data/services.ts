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
    id: "car-screens",
    titleAr: "شاشات سيارات",
    titleEn: "Car Screens",
    descriptionAr:
      "شاشات أندرويد، Apple CarPlay، Bluetooth، GPS، دعم كاميرات، وتجربة قيادة أذكى لسيارتك.",
    icon: "MdScreenShare",
    image:
      "https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=800&q=80",
    category: "automotive",
  },
  {
    id: "led-lights",
    titleAr: "ليدات سيارات",
    titleEn: "LED Lights",
    descriptionAr:
      "إضاءة أقوى، رؤية أوضح، مظهر أحدث، وتركيب مناسب لموديلات مختلفة من السيارات.",
    icon: "MdLightbulb",
    image:
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80",
    category: "automotive",
  },
  {
    id: "protection-films",
    titleAr: "أفلام حماية السيارات",
    titleEn: "Protection Films",
    descriptionAr:
      "حماية للبوية من الخدوش، التراب، الشمس، وآثار الاستخدام اليومي لسيارتك.",
    icon: "MdShield",
    image:
      "https://images.pexels.com/photos/36021355/pexels-photo-36021355.jpeg?auto=compress&w=800&q=80",
    category: "automotive",
  },
  {
    id: "car-tint",
    titleAr: "فاميه سيارات",
    titleEn: "Car Tint",
    descriptionAr:
      "خصوصية، تقليل حرارة، مظهر أنيق، وتحسين تجربة القيادة مع أفلام فاميه عالية الجودة.",
    icon: "MdOpacity",
    image:
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80",
    category: "automotive",
  },
  {
    id: "sound-systems",
    titleAr: "أنظمة صوتية",
    titleEn: "Sound Systems",
    descriptionAr:
      "سماعات، صب، جي إم، وتجهيزات صوت بجودة مناسبة لتجربة صوتية متميزة في سيارتك.",
    icon: "MdSpeaker",
    image:
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&q=80",
    category: "automotive",
  },
  {
    id: "car-upholstery",
    titleAr: "فرش سيارات",
    titleEn: "Car Upholstery",
    descriptionAr:
      "فرش جلد، تفصيل، حماية داخلية، وتنسيق حسب شكل العربية لراحة وجمال الداخلية.",
    icon: "MdAirlineSeatReclineNormal",
    image:
      "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?w=800&q=80",
    category: "automotive",
  },
];

export const printingServices: Service[] = [
  {
    id: "cladding-facades",
    titleAr: "واجهات كلادينج",
    titleEn: "Cladding Facades",
    descriptionAr:
      "تصميم وتنفيذ واجهات للمحلات، الشركات، المولات، والمعارض بخامات مقاومة ومظهر عصري.",
    icon: "MdBusiness",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    category: "printing",
  },
  {
    id: "tinted-frosted-glass",
    titleAr: "زجاج فاميه ومسنفر",
    titleEn: "Tinted & Frosted Glass",
    descriptionAr:
      "حلول زجاج للمكاتب والشركات والمدارس تعطي خصوصية ومظهر منظم لبيئة العمل.",
    icon: "MdBlurOn",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
    category: "printing",
  },
  {
    id: "facade-stickers",
    titleAr: "استيكرات واجهات",
    titleEn: "Facade Stickers",
    descriptionAr:
      "لوجوهات، عروض، تغطية زجاج كاملة أو جزئية، وقص احترافي لواجهات المحلات والشركات.",
    icon: "MdLabel",
    image:
      "https://images.pexels.com/photos/28726705/pexels-photo-28726705.jpeg?auto=compress&w=800&q=80",
    category: "printing",
  },
  {
    id: "banners-rollups",
    titleAr: "بنرات ورول أب",
    titleEn: "Banners & Roll-ups",
    descriptionAr:
      "تصميم وطباعة للمعارض، الشركات، المولات، والحملات الترويجية بجودة عالية وألوان زاهية.",
    icon: "MdPhotoSizeSelectLarge",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
    category: "printing",
  },
  {
    id: "indoor-outdoor-signs",
    titleAr: "لوحات داخلية وخارجية",
    titleEn: "Indoor & Outdoor Signs",
    descriptionAr:
      "لوحات إرشادية، لوحات محلات، لوحات شركات، ولافتات دعائية بتصاميم جذابة ومتينة.",
    icon: "MdSignpost",
    image:
      "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&q=80",
    category: "printing",
  },
  {
    id: "posters-promo",
    titleAr: "بوسترات ومواد دعائية",
    titleEn: "Posters & Promo Materials",
    descriptionAr:
      "طباعة مواد تسويقية للبراندات والمناسبات والعروض بأحدث تكنولوجيا الطباعة.",
    icon: "MdPrint",
    image:
      "https://images.pexels.com/photos/35066322/pexels-photo-35066322.jpeg?auto=compress&w=800&q=80",
    category: "printing",
  },
];

export const allServices = [...automotiveServices, ...printingServices];
