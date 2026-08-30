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
    titleAr: "خصم 20% على أفلام الحماية",
    descriptionAr:
      "خصم خاص على أفلام حماية السيارات الكاملة لفترة محدودة. احمي سيارتك الآن بأفضل سعر.",
    image:
      "https://images.pexels.com/photos/36021355/pexels-photo-36021355.jpeg?auto=compress&w=800&q=80",
    whatsappMessage: "مرحبًا، أريد الاستفسار عن عرض أفلام الحماية 20%",
  },
  {
    id: "offer-2",
    titleAr: "عرض شاشات وليدات",
    descriptionAr:
      "اشتري شاشة أندرويد مع ليدات أمامية وخلفية بسعر باكدج خاص جداً.",
    image:
      "https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=800&q=80",
    whatsappMessage: "مرحبًا، أريد الاستفسار عن عرض شاشات وليدات الباكدج",
  },
  {
    id: "offer-3",
    titleAr: "طباعة واجهات المحلات بسعر 30% أقل",
    descriptionAr:
      "عرض خاص لواجهات الكلادينج والاستيكرات للمحلات والشركات الجديدة.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    whatsappMessage: "مرحبًا، أريد الاستفسار عن عرض طباعة واجهات المحلات",
  },
  {
    id: "offer-4",
    titleAr: "خصم على البنرات والرول أب",
    descriptionAr:
      "خصم 25% على طباعة البنرات والرول أب للمعارض والحملات الترويجية.",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
    whatsappMessage: "مرحبًا، أريد الاستفسار عن عرض البنرات والرول أب 25%",
  },
];
