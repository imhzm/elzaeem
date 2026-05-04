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
    image: "/images/3.jpg",
    imageAlt: "سيارة محمية بفيلم حماية PPF مع عرض خصم 30%",
    whatsappMessage: "مرحبًا، أريد الاستفسار عن عرض أفلام الحماية PPF 30%",
    validUntil: "2024-12-31",
    badge: "الأكثر طلباً",
  },
  {
    id: "offer-2",
    titleAr: "باكج شاشة أندرويد + ليدات",
    descriptionAr: "اشتري شاشة أندرويد أصلية مع ليدات أمامية وخلفية بسعر باكج خاص جداً يشمل التركيب والضمان.",
    discount: "25%",
    image: "/images/2.jpg",
    imageAlt: "شاشة أندرويد مع إضاءة LED بباكج عرض خاص",
    whatsappMessage: "مرحبًا، أريد الاستفسار عن عرض شاشات وليدات الباكج 25%",
    validUntil: "2024-11-30",
    badge: "عرض محدود",
  },
  {
    id: "offer-3",
    titleAr: "واجهات المحلات بسعر 40% أقل",
    descriptionAr: "عرض خاص لواجهات الكلادينج والاستيكرات للمحلات والشركات الجديدة يشمل التصميم والتنفيذ.",
    discount: "40%",
    image: "/images/1.jpg",
    imageAlt: "واجهة كلادينج احترافية مع عرض خصم 40%",
    whatsappMessage: "مرحبًا، أريد الاستفسار عن عرض طباعة واجهات المحلات 40%",
    validUntil: "2024-12-15",
    badge: "أفضل قيمة",
  },
  {
    id: "offer-4",
    titleAr: "خصم على البنرات والرول أب",
    descriptionAr: "خصم 35% على طباعة البنرات والرول أب للمعارض والشركات والمولات التجارية بأحجام كبيرة.",
    discount: "35%",
    image: "/images/4.jpg",
    imageAlt: "بنرات دعائية كبيرة مع عرض خصم 35%",
    whatsappMessage: "مرحبًا، أريد الاستفسار عن عرض البنرات والرول أب 35%",
    validUntil: "2024-11-30",
    badge: "للشركات",
  },
];
