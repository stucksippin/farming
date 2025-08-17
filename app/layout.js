import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Фермерское хозяйство «Великанов» — продажа пшеницы, льна и подсолнечника | Ростовская область",
  description: "Фермерское хозяйство «Великанов» в хуторе Новоросошанский, Тацинский район, Ростовская область. Прямые продажи пшеницы, льна и подсолнечника. Доставка в Белую Калитву и по всей России.",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
