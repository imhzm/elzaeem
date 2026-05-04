export interface ImageMetadata {
  url: string;
  width: number;
  height: number;
  alt: string;
}

// High-quality local images for hero section (optimized for performance)
export const heroImages: ImageMetadata[] = [
  {
    url: "https://images.unsplash.com/photo-1549399542-7e3f8b79c43?w=1920&q=80&auto=format",
    width: 1920,
    height: 1080,
    alt: "سيارة حديثة مع تجهيزات كماليات احترافية",
  },
  {
    url: "https://images.unsplash.com/photo-1503376763036-0166297225d0?w=1920&q=80&auto=format",
    width: 1920,
    height: 1080,
    alt: "واجهة كلادينج احترافية لمحل تجاري",
  },
  {
    url: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920&q=80&auto=format",
    width: 1920,
    height: 1080,
    alt: "شاشة سيارة أندرويد مع إضاءة LED",
  },
  {
    url: "https://images.unsplash.com/photo-1486262725636-cc5a01b91ae3?w=1920&q=80&auto=format",
    width: 1920,
    height: 1080,
    alt: "استيكرات احترافية للواجهات",
  },
];

export const aboutImage: ImageMetadata = {
  url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80&auto=format",
  width: 800,
  height: 600,
  alt: "فريق عمل مركز الزعيم الدولي",
};

// Additional section images (optimized CDN)
export const sectionImages = {
  services: {
    background: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&q=80&auto=format",
    overlay: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=1200&q=80&auto=format",
  },
  portfolio: {
    background: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80&auto=format",
  },
  testimonials: {
    background: "https://images.unsplash.com/photo-1600880292203-757bb62b7b85?w=1200&q=80&auto=format",
  },
  contact: {
    background: "https://images.unsplash.com/photo-1497366216548-37526070297c7?w=1200&q=80&auto=format",
  },
};
