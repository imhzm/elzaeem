export interface ImageMetadata {
  url: string;
  width: number;
  height: number;
  alt: string;
}

// High-quality working images for hero section
export const heroImages: ImageMetadata[] = [
  {
    url: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920&q=80",
    width: 1920,
    height: 1080,
    alt: "سيارة فارهة مع تجهيزات حديثة وكماليات احترافية",
  },
  {
    url: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=1920&q=80",
    width: 1920,
    height: 1080,
    alt: "واجهة كلادينج احترافية لمحل تجاري بتصميم عصري",
  },
  {
    url: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=1920&q=80",
    width: 1920,
    height: 1080,
    alt: "شاشة سيارة أندرويد مع إضاءة LED حديثة",
  },
  {
    url: "https://images.unsplash.com/photo-1521791055366-0d553872125f?w=1920&q=80",
    width: 1920,
    height: 1080,
    alt: "استيكرات وفينيلات احترافية للواجهات",
  },
];

export const aboutImage: ImageMetadata = {
  url: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=1200&q=80",
  width: 800,
  height: 600,
  alt: "فريق عمل مركز الزعيم الدولي في ورشة العمل",
};

// Additional section images
export const sectionImages = {
  services: {
    background: "https://images.unsplash.com/photo-1503376763036-066120622c74?w=1920&q=80",
    overlay: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80",
  },
  portfolio: {
    background: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80",
  },
  testimonials: {
    background: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&q=80",
  },
  contact: {
    background: "https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&q=80",
  },
};
