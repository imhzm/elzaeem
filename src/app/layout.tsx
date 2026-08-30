import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import ScrollProgress from "@/components/ScrollProgress";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "ELITE SHIELD | إيليت شيلد لكماليات السيارات",
    template: "%s | ELITE SHIELD",
  },
  description:
    "إيليت شيلد لكماليات السيارات والطباعة والدعاية والإعلان. حلول متكاملة لكماليات السيارات، واجهات كلادينج، استيكرات، بنرات، ورول أب بأعلى جودة.",
  keywords: [
    "كماليات سيارات",
    "شاشات سيارات",
    "ليدات سيارات",
    "أفلام حماية",
    "واجهات كلادينج",
    "طباعة دعاية وإعلان",
    "بنرات ورول أب",
    "استيكرات واجهات",
    "إيليت شيلد",
    "Elite Shield",
  ],
  openGraph: {
    title: "ELITE SHIELD | إيليت شيلد لكماليات السيارات",
    description:
      "حلول متكاملة لكماليات السيارات والطباعة والدعاية والإعلان بأعلى جودة وخامات مختارة.",
    url: "https://eliteshield.com",
    siteName: "ELITE SHIELD",
    locale: "ar_EG",
    alternateLocale: "en_US",
    type: "website",
    images: [
      {
        url: "https://eliteshield.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ELITE SHIELD",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: "/logo.png",
  },
};

export const structuredData = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: "ELITE SHIELD",
  alternateName: "إيليت شيلد",
  description:
    "إيليت شيلد لكماليات السيارات والطباعة والدعاية والإعلان",
  url: "https://eliteshield.com",
  telephone: "+201067894321",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Dar El Salam, Al Fayoum Street",
    addressLocality: "Cairo",
    addressCountry: "EG",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "29.961994",
    longitude: "31.281203",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "09:00",
      closes: "21:00",
    },
  ],
  priceRange: "$$",
  image: "https://eliteshield.com/og-image.jpg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={`${cairo.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-dark-bg text-foreground">
        <ScrollProgress />
        <Navigation />
        {children}
      </body>
    </html>
  );
}
