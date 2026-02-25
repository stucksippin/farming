// app/layout.js
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Contact from "./components/Contact";
import FloatingContacts from "./components/FloatingContacts";
import YandexMetrika from "./components/YandexMetrikaInitializer";
import CookieBanner from "./components/CookieBanner";
import { SpeedInsights } from "@vercel/speed-insights/next"


const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  robots: {
    index: true,
    follow: true,
    nocache: false,
  }
};


export default function RootLayout({ children }) {
  return (
    <html lang="ru">

      <head>
        <link rel="icon" href="https://velikanov-farming.ru/favicon.ico" type="image/x-icon"></link>
      </head>

      <body className={inter.className}>
        <YandexMetrika />
        <SpeedInsights />
        <Header />
        <main> {children}</main>

        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Фермерское хозяйство Великанова",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "хутор Новороссошанский",
              "addressLocality": "Тацинский район",
              "addressRegion": "Ростовская область",
              "postalCode": "347083",
              "addressCountry": "RU"
            },
            "telephone": "+79281789282",
            "email": "velikanov_n@mail.ru",
            "url": "https://velikanov-farming.ru"
          })
        }} />
        <Contact />
        <CookieBanner />
        <FloatingContacts />
      </body>

    </html>
  );
}