import { SmoothScroll } from "@/components/smooth-scroll";
import type { Metadata } from "next";
import { LocaleProvider } from "@/lib/i18n";
import "./globals.css";

export const metadata: Metadata = {
  title: "Barberking — Сучасний чоловічий барбершоп у Львові | Вул. Шевченка 31А",
  description: "Преміум барбершоп у Львові з власним безкоштовним паркінгом та баром. Стильні чоловічі стрижки, моделювання бороди, королівське гоління та власна тату-студія Tattoo Room.",
  keywords: ["барбершоп львів", "стрижка чоловіча львів", "борода львів", "barberking львів", "барбер шевченка львів", "королівське гоління львів", "тату салон львів"],
  openGraph: {
    title: "Barberking — Барбершоп Львів | Власний паркінг та віскі-бар",
    description: "Чоловічий барбершоп на вул. Шевченка 31А. Рейтинг 4.9/5 на основі 674+ відгуків. Записуйтесь онлайн зараз!",
    type: "website",
    locale: "uk_UA",
    url: "https://lviv.bking.com.ua/",
  },
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uk">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,600&family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
              <script type="application/ld+json">{"[{\"@context\":\"https://schema.org\",\"@type\":\"HairSalon\",\"name\":\"Barberking - Барбершоп Львів\",\"description\":\"Барбершоп BarberKing у Львові: чоловіча стрижка, борода, гоління небезпечною бритвою. Зручний онлайн-запис, підбір стилю та чіткі контури. Адреса: вул. Шевченка 31. ☎️ 066-263-63-39.\",\"url\":\"https://lviv.bking.com.ua/\",\"telephone\":[\"+380 66 263 6339\"],\"email\":\"barberking.lv@gmail.com\",\"address\":{\"@type\":\"PostalAddress\",\"streetAddress\":\"Shevchenka St, 31, Lviv, Lviv Oblast, Ukraine, 79000\",\"addressLocality\":\"Львів\",\"addressCountry\":\"UA\"},\"sameAs\":[\"https://www.facebook.com/BarberKingkh/\",\"https://www.instagram.com/barberking_kh/\"],\"employee\":[{\"@type\":\"Person\",\"name\":\"МАТЛАБ\",\"jobTitle\":\"GRAND BARBER\"},{\"@type\":\"Person\",\"name\":\"КИРИЛО\",\"jobTitle\":\"AMBASSADOR\"},{\"@type\":\"Person\",\"name\":\"СЕРГІЙ\",\"jobTitle\":\"GRAND BARBER\"},{\"@type\":\"Person\",\"name\":\"ЄГОР\"}],\"makesOffer\":[{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Професійна чоловіча стрижка\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Стрижка бороди та вусів\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Комплекс: чоловіча стрижка + стрижка бороди\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Стрижка машинкою з фадом (Fade)\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Дитяча стрижка (до 12 років)\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Королівське гоління небезпечною бритвою\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Комплекс «Батько + Син»\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Камуфлювання сивини волосся\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Камуфляж сивини бороди\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Укладка та стайлінг волосся\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Моделювання та окантовка бороди\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Гоління голови небезпечною бритвою або шейвером\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Воскова корекція (вуха, ніс, брови)\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Очищаюча маска для обличчя (Black Mask)\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Преміум-догляд за шкірою обличчя та бородою\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Художній тату-сеанс у Tattoo Room\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Подарункові сертифікати на послуги барбера\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Професійна стрижка + стрижка бороди\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Стрижка машинкою\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Королівське гоління\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Укладка волосся\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Стрижка бороди\"}}]},{\"@context\":\"https://schema.org\",\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"СКІЛЬКИ РАЗІВ ПОТРІБНО ХОДИТИ В БАРБЕРШОП?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Кількість візитів до барбершопу залежить від вашого стилю, типу стрижки та швидкості росту волосся. Зазвичай чоловіки відвідують барбершоп кожні: 2–4 тижні, якщо потрібна коротка стрижка або підтримання чіткого стилю. 4–6 тижнів, якщо волосся довше або ви не потребуєте частого підрівнювання. Також, регулярні візити допомагають доглядати за бородою, якщо ви її носите. Обговоріть з вашим барбером оптимальний графік для підтримки вашого стилю.\"}}]}]"}</script>
      </head>
      <body className="bg-bg-dark text-text-main antialiased selection:bg-accent selection:text-black">
        <LocaleProvider>{children}</LocaleProvider>
      <SmoothScroll /></body>
    </html>
  );
}
