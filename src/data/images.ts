export interface ImageMetadata {
  url: string;
  width: number;
  height: number;
  alt: string;
}

// High-quality local images for hero section
export const heroImages: ImageMetadata[] = [
  {
    url: "/images/1.png",
    width: 1920,
    height: 1080,
    alt: "سيارة حديثة مع تجهيزات كماليات احترافية",
  },
  {
    url: "/images/2.png",
    width: 1920,
    height: 1080,
    alt: "واجهة كلادينج احترافية لمحل تجاري",
  },
  {
    url: "/images/3.png",
    width: 1920,
    height: 1080,
    alt: "شاشة سيارة أندرويد مع إضاءة LED",
  },
  {
    url: "/images/4.png",
    width: 1920,
    height: 1080,
    alt: "استيكرات احترافية للواجهات",
  },
];

export const aboutImage: ImageMetadata = {
  url: "/images/5.png",
  width: 800,
  height: 600,
  alt: "فريق عمل مركز الزعيم الدولي",
};

// Additional section images
export const sectionImages = {
  services: {
    background: "/images/6.png",
    overlay: "/images/7.jpg",
  },
  portfolio: {
    background: "/images/8.jpg",
  },
  testimonials: {
    background: "/images/9.jpg",
  },
  contact: {
    background: "/images/10.jpg",
  },
};
