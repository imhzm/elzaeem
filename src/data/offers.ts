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
      "خصم خاص على باقات حماية السيارات الكاملة بأفلام المعالجة الذاتية لفترة محدودة.",
    image: "/images/hero-4.jpg",
    whatsappMessage: "مرحبًا، أريد الاستفسار عن عرض أفلام الحماية 20%",
  },
  {
    id: "offer-2",
    titleAr: "باكدج شاشات وليدات السيارات",
    descriptionAr:
      "شاشة أندرويد ذكية مع طقم ليدات أمامية وإضاءة داخلية محيطية بسعر باكدج حصري.",
    image: "/images/hero-2.jpg",
    whatsappMessage: "مرحبًا، أريد الاستفسار عن باكدج الشاشات والليدات",
  },
  {
    id: "offer-3",
    titleAr: "باقات واجهات الكلادينج للمقرات",
    descriptionAr:
      "تصميم وتنفيذ واجهات كلادينج واستيكرات واجهات للمحلات والشركات بخصم خاص.",
    image: "/images/hero-3.jpg",
    whatsappMessage: "مرحبًا، أريد الاستفسار عن عروض واجهات الكلادينج",
  },
  {
    id: "offer-4",
    titleAr: "خصم 25% على البنرات والرول أب",
    descriptionAr:
      "طباعة رقمية فائقة الوضوح لبنرات ومجسمات رول أب للمعارض والمؤتمرات.",
    image: "/images/hero-5.jpg",
    whatsappMessage: "مرحبًا، أريد الاستفسار عن عرض البنرات والرول أب 25%",
  },
];
