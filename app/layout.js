// app/layout.js
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Фермерское хозяйство Великанова — пшеница, лен, подсолнечник оптом в Тацинском районе, Ростовская область",
  description:
    "Фермерское хозяйство Великанова, хутор Новоросошанский, Тацинский район, Ростовская область. Прямые поставки пшеницы, льна и подсолнечника оптом для мельниц, хлебопекарен и фермеров Ростовской области.",
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
