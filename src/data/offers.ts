export interface Offer {
  id: string;
  titleAr: string;
  descriptionAr: string;
  image: string;
  whatsappMessage: string;
}

export const offers: Offer[] = [
  {
    id: "offer-1",
    titleAr: "خصم 20% على أفلام الحماية PPF",
    descriptionAr:
      "خصم خاص على باقات حماية السيارات الكاملة بأفلام المعالجة الذاتية 8.5 Mil مع ضمان ممتد.",
    image: "/images/hero-4.jpg",
    whatsappMessage: "مرحبًا، أريد الاستفسار عن عرض أفلام الحماية PPF بخصم 20%",
  },
  {
    id: "offer-2",
    titleAr: "باقة النانو سيراميك 9H والعزل الحراري",
    descriptionAr:
      "طلاء نانو سيراميك 9H متعدد الطبقات مع تظليل نانو سيراميك عازل للحرارة بنسبة 98% بسعر باكدج حصري.",
    image: "/images/hero-1.jpg",
    whatsappMessage: "مرحبًا، أريد الاستفسار عن باقة النانو سيراميك والعزل الحراري الحصرية",
  },
  {
    id: "offer-3",
    titleAr: "باقات واجهات الكلادينج وتجهيز المقرات",
    descriptionAr:
      "تصميم وتنفيذ واجهات كلادينج ألمنيوم مقاومة مع حروف 3D بارزة واستيكرات واجهات للمحلات والشركات بخصم خاص.",
    image: "/images/hero-3.jpg",
    whatsappMessage: "مرحبًا، أريد الاستفسار عن عروض واجهات الكلادينج واللوحات المضيئة",
  },
  {
    id: "offer-4",
    titleAr: "عروض تجليد أساطيل الشركات والبنرات",
    descriptionAr:
      "تجليد احترافي لأساطيل السيارات التجارية وطباعة بنرات ورول أب المعارض بجودة ألوان فائقة وأسعار تفضيلية للمؤسسات.",
    image: "/images/hero-5.jpg",
    whatsappMessage: "مرحبًا، أريد الاستفسار عن عروض تجليد أساطيل الشركات وبنرات المعارض",
  },
];
