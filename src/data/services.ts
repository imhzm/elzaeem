export interface Service {
  id: string;
  titleAr: string;
  titleEn: string;
  taglineAr?: string;
  descriptionAr: string;
  highlights: string[];
  specs?: { label: string; value: string }[];
  icon: string; // Icon name from react-icons
  image: string;
  category: "automotive" | "commercial" | "printing";
  badge?: string;
  featured?: boolean;
}

export interface ServiceCategoryMeta {
  id: "automotive" | "commercial";
  titleAr: string;
  titleEn: string;
  badgeAr: string;
  subtitleAr: string;
  descriptionAr: string;
  icon: string;
  countLabel: string;
}

export const serviceCategories: ServiceCategoryMeta[] = [
  {
    id: "automotive",
    titleAr: "حماية وتجهيز السيارات الفاخرة",
    titleEn: "Automotive Protection",
    badgeAr: "القطاع الهندسي للسيارات",
    subtitleAr: "أفلام حماية الطلاء PPF، نانو سيراميك، عزل حراري وتلميع تصحيحي",
    descriptionAr:
      "منظومة حماية استباقية متطورة مصممة لحفظ قيمة سيارتك الفاخرة، مقاومة العوامل الجوية القاسية، وترميل الطرق بأعلى المعايير العالمية.",
    icon: "MdShield",
    countLabel: "4 باقات حماية متخصصة",
  },
  {
    id: "commercial",
    titleAr: "الدعاية والإعلان والتجهيزات التجارية",
    titleEn: "Commercial Advertising & Signage",
    badgeAr: "قطاع الهوية المعمارية والتجارية",
    subtitleAr: "واجهات كلادينج، تجليد أساطيل، بنرات ولوحات مؤسسية",
    descriptionAr:
      "حلول متكاملة لبناء الهوية البصرية للشركات والمؤسسات، بدءاً من هندسة واجهات الكلادينج واللوحات المضيئة وحتى تجليد أساطيل النقل والطباعة الرقمية.",
    icon: "MdBusiness",
    countLabel: "6 تخصصات إعلانية ومعمارية",
  },
];

export const automotiveServices: Service[] = [
  {
    id: "protection-films",
    titleAr: "أفلام حماية الطلاء PPF الفائقة",
    titleEn: "Ultra PPF Paint Protection Film",
    taglineAr: "تقنية المعالجة الذاتية (Self-Healing) بسماكة 8.5 ميل",
    descriptionAr:
      "أفلام حماية شفافة أصلية بتقنية المعالجة الذاتية التلقائية لحماية طلاء السيارة بالكامل من الحصى، الترميل، الخدوش السطحية، والبهتان الناتج عن أشعة الشمس فوق البنفسجية.",
    highlights: [
      "معالجة ذاتية فورية للخدوش بالحرارة",
      "طبقة نانو هيدروفوبيك كارهة للماء والأوساخ",
      "مقاومة تامة للاصفرار وتغير اللون بفعل الحرارة",
      "قص كمبيوتري دقيق لكافة حواف ومقاسات السيارة",
    ],
    specs: [
      { label: "السماكة", value: "8.5 Mil TPU" },
      { label: "الضمان", value: "ضمان حتى 10 سنوات" },
      { label: "المعالجة", value: "Hydrophobic Self-Heal" },
    ],
    icon: "MdShield",
    image: "/images/es_hero_ppf_installation.jpg",
    category: "automotive",
    badge: "الأكثر طلباً",
    featured: true,
  },
  {
    id: "nano-ceramic",
    titleAr: "طلاء النانو سيراميك 9H الماسي",
    titleEn: "9H Diamond Nano-Ceramic Coating",
    taglineAr: "صلابة فائقة مع عمق ولمعان زجاجي ممتد",
    descriptionAr:
      "تطبيق متعدد الطبقات لمركبات النانو سيراميك 9H الأصلية لتكوين درع حماية كيميائي دائم ضد الأكسدة، مخلفات الطيور، والمطر الحمضي مع مضاعفة لمعان وعمق لون الوكالة.",
    highlights: [
      "درجة صلابة 9H المعتمدة لمقاومة الخدوش الدقيقة",
      "تأثير لوتس فائق النعومة لسهولة الغسيل والتنظيف",
      "حماية عميقة ضد بهتان الطلاء والأشعة الضارة",
      "لمعان كريستالي زجاجي لا يتأثر بالغسيل المتكرر",
    ],
    specs: [
      { label: "الصلابة", value: "9H Hardness" },
      { label: "الطبقات", value: "تصل إلى 4 طبقات حماية" },
      { label: "اللمعان", value: "Ultra Mirror Gloss" },
    ],
    icon: "MdAutoAwesome",
    image: "/images/hero-1.jpg",
    category: "automotive",
    badge: "باقة النخبة",
    featured: true,
  },
  {
    id: "car-tint",
    titleAr: "العزل الحراري وتظليل النانو سيراميك",
    titleEn: "Advanced Ceramic Thermal Tinting",
    taglineAr: "عزل يتجاوز 98% للأشعة تحت الحمراء وراحة حرارية تامة",
    descriptionAr:
      "أفلام عزل حراري متعددة الكثافة مدعمة بجزيئات النانو كربون والسيراميك لحجب حرارة الشمس الحارقة والأشعة فوق البنفسجية دون حجب أو تشويش إشارات الاتصال والـ GPS.",
    highlights: [
      "عزل يصل إلى 98% من الأشعة تحت الحمراء المسببة للحرارة",
      "حجب 99.9% من الأشعة فوق البنفسجية الضارة بالجلد والمقصورة",
      "وضوح بصري استثنائي فائق الشفافية أثناء القيادة الليلية",
      "حماية داخلية للمقاعد والجلد من الجفاف والتشقق",
    ],
    specs: [
      { label: "عزل الأشعة (IR)", value: "98% عزل حراري" },
      { label: "حماية الأشعة (UV)", value: "99.9% حماية" },
      { label: "الإشارة", value: "100% متوافق مع الاتصالات" },
    ],
    icon: "MdOpacity",
    image: "/images/hero-1.png",
    category: "automotive",
    badge: "ضروري للمقصورة",
    featured: true,
  },
  {
    id: "luxury-detailing",
    titleAr: "التلميع الاحترافي والتصحيح الماسي للبوية",
    titleEn: "Luxury Detailing & Paint Correction",
    taglineAr: "إزالة دوائر الغسيل واستعادة بريق الوكالة الأصلي",
    descriptionAr:
      "برنامج متقدم لتصحيح الطلاء متعدد المراحل بأحدث المركبات والمعدات الألمانية لمعالجة دوائر الغسيل، بهتان البوية، والخدوش الدقيقة، يتبعه تعقيم وتغذية مقصورة الجلد الطبيعي.",
    highlights: [
      "تصحيح طلاء على 3 مراحل ميكانيكية دقيقة",
      "إزالة دوائر الغسيل (Swirl Marks) والتكلسات المائية",
      "تلميع وتطهير الجنوط والمصابيح والمقابض",
      "تنظيف عميق وترطيب الجلود وتطهير فتحات التكييف",
    ],
    specs: [
      { label: "مراحل التصحيح", value: "3 مراحل احترافية" },
      { label: "المواد", value: "مركبات ألمانية معتمدة" },
      { label: "المقصورة", value: "تنظيف وتعقيم أوزون" },
    ],
    icon: "MdDirectionsCar",
    image: "/images/2.jpg",
    category: "automotive",
    badge: "تجديد شامل",
    featured: false,
  },
];

export const printingServices: Service[] = [
  {
    id: "cladding-facades",
    titleAr: "واجهات الكلادينج والحروف البارزة المضيئة",
    titleEn: "Architectural Cladding & 3D Letters",
    taglineAr: "واجهات ألمنيوم معمارية مع حروف ثلاثية الأبعاد 3D",
    descriptionAr:
      "تصميم وهندسة واجهات كلادينج ألمنيوم مقاومة للعوامل الجوية والحرائق للمحلات والشركات الكبرى، مدمجة بحروف بارزة إستانلس ستيل وأكرليك مضاءة بأنظمة LED كورية فائقة السطوع.",
    highlights: [
      "ألواح كلادينج معتمدة ومقاومة لتقلبات الطقس والحرارة",
      "حروف بارزة 3D إستانلس وأكرليك بقطع ليزري فائق الدقة",
      "أنظمة إضاءة LED موفرة ومعزولة ضد تسرب المياه",
      "فريق هندسي لتصميم المخططات والمطابقة البلدية",
    ],
    specs: [
      { label: "المعدن", value: "ألمنيوم كلادينج مقاوم" },
      { label: "الحروف", value: "ستانلس 304 / أكرليك نقي" },
      { label: "الإضاءة", value: "LED Modules مضادة للماء" },
    ],
    icon: "MdBusiness",
    image: "/images/hero-3.jpg",
    category: "commercial",
    badge: "مشاريع كبرى",
    featured: true,
  },
  {
    id: "commercial-vehicle-wrap",
    titleAr: "تغليف وتجليد أساطيل السيارات التجارية",
    titleEn: "Commercial Fleet Vinyl Wrapping",
    taglineAr: "تحويل أسطولك التجاري إلى منصة إعلانية متنقلة عالية الجاذبية",
    descriptionAr:
      "تجليد احترافي كامل وجزئي لسيارات الشركات والشاحنات وفانات التوزيع بأفلام فينيل متينة وطباعة عازلة ومقاومة للغسيل والخدوش، مع تصميم جرافيكي متقن يبرز هوية علامتك التجارية.",
    highlights: [
      "أفلام فينيل مخصصة للمركبات سهلة الإزالة دون الإضرار بالبوية",
      "طباعة رقمية عالية الدقة مغلفة بطبقة حماية ضد الأشعة فوق البنفسجية",
      "تنفيذ سريع لأساطيل الشركات مع الحفاظ على توحيد المعايير",
      "ثبات ألوان معتمد لسنوات تحت أشعة الشمس المباشرة",
    ],
    specs: [
      { label: "نوع الفينيل", value: "Cast Vinyl عالي الجودة" },
      { label: "الحماية", value: "طبقة UV Lamination واقية" },
      { label: "التغطية", value: "تغليف كامل أو جزئي للمركبة" },
    ],
    icon: "MdLocalShipping",
    image: "/images/hero-4.jpg",
    category: "commercial",
    badge: "للشركات والأساطيل",
    featured: true,
  },
  {
    id: "outdoor-indoor-banners",
    titleAr: "بنرات ورول أب المعارض والفعاليات",
    titleEn: "Exhibition Banners & Roll-Ups",
    taglineAr: "طباعة فائقة الدقة للمؤتمرات والمنصات الترويجية",
    descriptionAr:
      "تصميم وطباعة بنرات فليكس، بانرات قماشية، رول أب، وهياكل بوب أب إعلانية متينة للمعارض والمؤتمرات والفعاليات الكبرى مع سرعة تسليم قياسية ودقة لونية مطابقة لهوية الشركة.",
    highlights: [
      "طباعة رقمية بجودة 1440 DPI لأقصى وضوح للتفاصيل والنصوص",
      "هياكل ألمنيوم متينة وسهلة النقل والتركيب في دقائق",
      "خامات بنر وفليكس مضادة للتمزق وللانعكاسات الضوئية",
      "حلول مخصصة للملتقيات والافتتاحات والفعاليات التسويقية",
    ],
    specs: [
      { label: "دقة الطباعة", value: "1440 DPI High-Res" },
      { label: "الهيكل", value: "ألومنيوم خفيف الوزن ومتين" },
      { label: "التسليم", value: "متاح تنفيذ سريع للمعارض" },
    ],
    icon: "MdPhotoSizeSelectLarge",
    image: "/images/hero-5.jpg",
    category: "commercial",
    badge: "معارض ومؤتمرات",
    featured: false,
  },
  {
    id: "corporate-signage",
    titleAr: "اللوحات الإرشادية والتجهيزات المؤسسية",
    titleEn: "Corporate Signs & Wayfinding Systems",
    taglineAr: "منظومة إرشادية وتجارية متكاملة للمباني والمقرات",
    descriptionAr:
      "تصنيع وتركيب اللوحات الإرشادية الداخلية والخارجية للمستشفيات، المراكز التجارية، والشركات بخامات فاخرة كالأكرليك، الخشب المعالج، والإستانلس ستيل، ولوحات السلامة والأمان.",
    highlights: [
      "أنظمة إرشادية للمباني والممرات والمكاتب بتشطيب عصري",
      "لوحات نيون فليكس حديثة لإضفاء طابع شبابي وجذاب",
      "مطابقة كاملة لاشتراطات السلامة والدفاع المدني",
      "تثبيت هندسي آمن ومقاوم للظروف البيئية",
    ],
    specs: [
      { label: "الخامات", value: "أكرليك، إستانلس، نيون، ألومنيوم" },
      { label: "التطبيق", value: "داخلي وخارجي للمقرات" },
      { label: "المعايير", value: "مطابقة لمواصفات الهوية المؤسسية" },
    ],
    icon: "MdSignpost",
    image: "/images/5.jpg",
    category: "commercial",
    badge: "تجهيزات مقرات",
    featured: false,
  },
  {
    id: "tinted-frosted-glass",
    titleAr: "زجاج فاميه ومسنفر هندسي للمباني",
    titleEn: "Architectural Frosted & Solar Film",
    taglineAr: "عزل حراري وخصوصية راقية للواجهات وقاعات الاجتماعات",
    descriptionAr:
      "حلول عزل حراري معماري وفاميه وتسنفير زجاجي دقيق لمكاتب الشركات، البنوك، والمباني التجارية، يمنح خصوصية بصرية راقية مع إمكانية تفريغ شعارات الشركة والزخارف الهندسية.",
    highlights: [
      "عزل حراري لأشعة الشمس لتقليل استهلاك تكييف المباني",
      "تسنفير زجاجي ديكوري بقطع كمبيوتري لرموز وشعار المنشأة",
      "حماية الزجاج من التناثر في حالات الكسر العرضي",
      "مظهر مكتبي احترافي يعزز راحة الموظفين والعملاء",
    ],
    specs: [
      { label: "النوع", value: "أفلام معمارية وسولار كنترول" },
      { label: "القطع", value: "Plotter Cut للشعارات والرسومات" },
      { label: "الخصوصية", value: "حجب رؤية مع نفاذية ضوء متوازنة" },
    ],
    icon: "MdBlurOn",
    image: "/images/3.jpg",
    category: "commercial",
    badge: "مباني ومكاتب",
    featured: false,
  },
  {
    id: "posters-promo",
    titleAr: "الطباعة الرقمية الترويجية واستيكرات الواجهات",
    titleEn: "Promotional Digital Printing & Window Graphics",
    taglineAr: "استيكرات واجهات ومطبوعات تسويقية متكاملة",
    descriptionAr:
      "طباعة وقص استيكرات الواجهات الزجاجية (One Way Vision / Vinyl)، بوسترات الحملات التسويقية، والمواد الترويجية الداعمة للمبيعات بأعلى كثافة لونية وسرعة تنفيذ تناسب وتيرة الأعمال.",
    highlights: [
      "استيكرات One Way Vision تتيح الرؤية من الداخل وتحجب من الخارج",
      "قص كونتور رقمي للملصقات والعلامات التجارية بدقة متناهية",
      "أحبار بيئية مقاومة للبهتان وتغير درجات الألوان",
      "حلول دعائية سريعة للافتتاحيات والتخفيضات الموسمية",
    ],
    specs: [
      { label: "الخامات", value: "One Way Vision / Vinyl / Paper" },
      { label: "التقنية", value: "Eco-Solvent & UV Digital Print" },
      { label: "الاستخدام", value: "واجهات زجاجية وحملات ترويجية" },
    ],
    icon: "MdPrint",
    image: "/images/6.jpg",
    category: "commercial",
    badge: "حملات تسويقية",
    featured: false,
  },
];

// Alias for commercial services
export const commercialServices = printingServices;

// All services combined for booking and selection forms
export const allServices: Service[] = [...automotiveServices, ...printingServices];
