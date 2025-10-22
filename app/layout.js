// app/layout.js
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Купить пшеницу и лен от фермера | Ростовская область | Фермерское хозяйство Великанова",
  description:
    "Пшеница, лен масличный и подсолнечник от фермерского хозяйства Великанова в Ростовской области. Новый урожай 2025, фуражная пшеница 3-4 класса. Цены напрямую от фермера, купить зерно с доставкой. Тел: +7 928 178-92-82",
  keywords: [
    "купить пшеницу Тацинский район",
    "лен масличный Ростовская область",
    "подсолнечник оптом",
    "фермерское хозяйство Великанова",
    "зерно для мельниц",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AgriculturalBusiness",
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
            "url": "https://velikanova-dev.vercel.app"
          })
        }} />
      </body>
    </html>
  );
}
