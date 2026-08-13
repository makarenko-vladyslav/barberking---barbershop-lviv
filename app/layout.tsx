import { SmoothScroll } from "@/components/motion";
import type { Metadata } from "next";
import { LocaleProvider } from "@/lib/i18n";
import "./globals.css";

export const metadata: Metadata = {
  title: "Barberking — Королівський барбершоп у Львові | вул. Шевченка 31А",
  description: "Сучасний чоловічий барбершоп на вул. Шевченка 31А у Львові. Чоловічі стрижки, стрижка бороди, королівське гоління, власна Tattoo Room та безкоштовний паркінг. Запис онлайн!",
  keywords: ["барбершоп львів", "стрижка чоловіча львів", "стрижка бороди львів", "барбершоп шевченка львів", "тату салон львів", "королівське гоління львів"],
  openGraph: {
    title: "Barberking — Королівський барбершоп у Львові",
    description: "Класичний барберинг, королівське гоління, Tattoo Room та безкоштовний віскі-бар. Записуйтесь онлайн за 30 секунд!",
    type: "website",
    locale: "uk_UA",
    siteName: "Barberking Lviv",
  },
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BarberShop",
    "name": "Barberking Lviv",
    "image": "https://lviv.bking.com.ua/wp-content/themes/bking/images/price-banner.jpg",
    "@id": "https://lviv.bking.com.ua",
    "url": "https://lviv.bking.com.ua",
    "telephone": "+380662636339",
    "priceRange": "250 UAH - 950 UAH",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "вул. Шевченка, 31А",
      "addressLocality": "Львів",
      "postalCode": "79000",
      "addressCountry": "UA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 49.8452,
      "longitude": 24.0158
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "10:00",
        "closes": "21:00"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "674"
    }
  };

  return (
    <html lang="uk" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,500;0,600;0,700;0,800;1,600&family=Rubik:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-bg-dark text-text-main antialiased selection:bg-accent selection:text-bg-dark min-h-screen flex flex-col font-body">
        <LocaleProvider>{children}</LocaleProvider>
      <SmoothScroll /></body>
    </html>
  );
}