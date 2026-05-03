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
const ogImage = "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1200&q=80";

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
  publisher: {
    name: "ELZAEEM INTERNATIONAL",
    url: baseUrl,
  },
  alternates: {
    canonical: baseUrl,
  },
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
        type: "image/jpeg",
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
  telephone: "+201234567890",
  email: "info@elzaeem-international.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "شارع فيصل، دار السلام",
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
  logo: `${baseUrl}/logo.png`,
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
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="apple-touch-icon"
          href="/apple-icon.png"
          sizes="180x180"
        />
        <link rel="manifest" href="/manifest.webmanifest" />
        <meta name="theme-color" content="#D4AF37" />
        <meta name="msapplication-TileColor" content="#D4AF37" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-transparent text-foreground overflow-x-hidden">
        <BackgroundAnimations />
        <ScrollProgress />
        <Navigation />
        <main className="relative z-10 flex-1">{children}</main>
      </body>
    </html>
  );
}
