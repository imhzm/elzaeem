import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import ScrollProgress from "@/components/ScrollProgress";
import BackgroundAnimations from "@/components/BackgroundAnimations";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const baseUrl = "https://elzaeem-international.skywaveads.com";
const ogImage = `${baseUrl}/images/logo.png`;
const favicon = `${baseUrl}/favicon.ico`;
const appleIcon = `${baseUrl}/images/logo.png`;

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "مركز الزعيم الدولي | كماليات سيارات وطباعة ودعاية",
    template: "%s | مركز الزعيم الدولي",
  },
  description:
    "مركز الزعيم الدولي - الحلول المتكاملة لكماليات السيارات والطباعة والدعاية والإعلان. شاشات أندرويد، ليدات، أفلام حماية، واجهات كلادينج، بنرات، ورول أب بأعلى جودة في مصر.",
  keywords: [
    "كماليات سيارات",
    "شاشات سيارات",
    "ليدات سيارات",
    "أفلام حماية",
    "واجهات كلادينج",
    "طباعة دعاية وإعلان",
    "بنرات ورول أب",
    "استيكرات واجهات",
    "مركز الزعيم الدولي",
    "Elzaeem International",
  ],
  authors: [{ name: "ELZAEEM INTERNATIONAL", url: baseUrl }],
  creator: "ELZAEEM INTERNATIONAL",
  publisher: "ELZAEEM INTERNATIONAL",
  alternates: {
    canonical: baseUrl,
  },
  icons: {
    icon: [
      { url: favicon, sizes: "32x32", type: "image/png" },
      { url: favicon, sizes: "16x16", type: "image/png" },
      { url: favicon, sizes: "192x192", type: "image/png" },
      { url: favicon, sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: appleIcon, sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/manifest.webmanifest",
  themeColor: "#D4AF37",
  openGraph: {
    type: "website",
    locale: "ar_EG",
    alternateLocale: ["en_US"],
    url: baseUrl,
    title: "مركز الزعيم الدولي | كماليات سيارات وطباعة ودعاية",
    description:
      "الحلول المتكاملة لكماليات السيارات والطباعة والدعاية والإعلان بأعلى جودة في مصر.",
    siteName: "ELZAEEM INTERNATIONAL",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "ELZAEEM INTERNATIONAL - كماليات سيارات وطباعة",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "مركز الزعيم الدولي | كماليات سيارات وطباعة ودعاية",
    description:
      "الحلول المتكاملة لكماليات السيارات والطباعة والدعاية والإعلان بأعلى جودة في مصر.",
    images: [ogImage],
    creator: "@elzaeem",
  },
  robots: {
    index: true,
    follow: true,
  },
};

// Enhanced Structured Data for SEO
export const structuredData = {
  "@context": "https://schema.org",
  "@type": "AutomotiveBusiness",
  name: "مركز الزعيم الدولي | ELZAEEM INTERNATIONAL",
  alternateName: ["ELZAEEM INTERNATIONAL", "الزعيم الدولي"],
  description:
    "مركز الزعيم الدولي لكماليات السيارات والطباعة والدعاية والإعلان. نقدم شاشات أندرويد، ليدات، أفلام حماية، واجهات كلادينج، بنرات، ورول أب بأعلى جودة.",
  url: baseUrl,
  telephone: "+201067894321",
  email: "admin@skywaveads.com",
  taxID: "271-810-343",
  address: {
    "@type": "PostalAddress",
    streetAddress: "شارع الفيوم، دار السلام",
    addressLocality: "القاهرة",
    addressRegion: "القاهرة",
    postalCode: "11744",
    addressCountry: "EG",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "29.961994",
    longitude: "31.281203",
  },
  areaServed: {
    "@type": "Country",
    name: "مصر",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Saturday",
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
      ],
      opens: "09:00",
      closes: "22:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Friday",
      opens: "14:00",
      closes: "21:00",
    },
  ],
  priceRange: "$$",
  currenciesAccepted: "EGP",
  paymentAccepted: ["Cash", "Credit Card", "Bank Transfer"],
  image: ogImage,
  logo: `${baseUrl}/images/logo.png`,
  sameAs: [
    "https://www.facebook.com/elzaeeminternational",
    "https://www.instagram.com/elzaeeminternational",
    "https://twitter.com/elzaeem",
    "https://wa.me/201234567890",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "250",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${cairo.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-transparent text-foreground overflow-x-hidden">
        <BackgroundAnimations />
        <ScrollProgress />
        <Navigation logo="/images/logo.png" />
        <main className="relative z-10 flex-1">{children}</main>
      </body>
    </html>
  );
}
