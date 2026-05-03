export interface Offer {
  id: string;
  titleAr: string;
  descriptionAr: string;
  discount: string;
  image: string;
  imageAlt: string;
  whatsappMessage: string;
  validUntil?: string;
  badge?: string;
}

export const offers: Offer[] = [
  {
    id: "offer-1",
    titleAr: "خصم 30% على أفلام الحماية PPF",
    descriptionAr: "عرض خاص على أفلام حماية السيارات الكاملة PPF الأمريكية الأصلية لفترة محدودة. احمي سيارتك الآن بأفضل سعر.",
    discount: "30%",
    image: "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?w=800&q=80",
    imageAlt: "سيارة محمية بفيلم حماية PPF مع عرض خصم 30%",
    whatsappMessage: "مرحبًا، أريد الاستفسار عن عرض أفلام الحماية PPF 30%",
    validUntil: "2024-12-31",
    badge: "الأكثر طلباً",
  },
  {
    id: "offer-2",
    titleAr: "باكدج شاشة أندرويد + ليدات",
    descriptionAr: "اشتري شاشة أندرويد أصلية مع ليدات أمامية وخلفية بسعر باكدج خاص جداً يشمل التركيب والضمان.",
    discount: "25%",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80",
    imageAlt: "شاشة أندرويد مع إضاءة LED باكدج عرض خاص",
    whatsappMessage: "مرحبًا، أريد الاستفسار عن عرض شاشات وليدات الباكدج 25%",
    validUntil: "2024-11-30",
    badge: "عرض محدود",
  },
  {
    id: "offer-3",
    titleAr: "واجهات المحلات بسعر 40% أقل",
    descriptionAr: "عرض خاص لواجهات الكلادينج والاستيكرات للمحلات والشركات الجديدة يشمل التصميم والتنفيذ.",
    discount: "40%",
    image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&q=80",
    imageAlt: "واجهة كلادينج احترافية مع عرض خصم 40%",
    whatsappMessage: "مرحبًا، أريد الاستفسار عن عرض طباعة واجهات المحلات 40%",
    validUntil: "2024-12-15",
    badge: "أفضل قيمة",
  },
  {
    id: "offer-4",
    titleAr: "خصم على البنرات والرول أب",
    descriptionAr: "خصم 35% على طباعة البنرات والرول أب للمعارض والحملات الترويجية بكميات كبيرة.",
    discount: "35%",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80",
    imageAlt: "بنرات ورول أب دعائية مع عرض خصم 35%",
    whatsappMessage: "مرحبًا، أريد الاستفسار عن عرض البنرات والرول أب 35%",
    validUntil: "2024-11-30",
    badge: "للشركات",
  },
];
