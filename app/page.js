import InfoBlock from "./components/sections/InfoBlock";
import Product from "./components/sections/Product";
import Reviews from "./components/sections/Reviews";
import VisitBlock from "./components/sections/VisitBlock";

export const metadata = {
  title: "Купить пшеницу, лен, подсолнечник оптом от фермера | ФХ Великанова",
  description:
    "Прямые поставки зерновых и масличных культур от фермерского хозяйства Великанова. Пшеница 3-4 класс, лен масличный 44-46%, подсолнечник. Урожай 2025, Ростовская область. Без посредников, с документами.",
  keywords: [
    "купить пшеницу от фермера",
    "лен масличный оптом",
    "подсолнечник от производителя",
    "зерно Ростовская область",
    "фуражная пшеница цена",
    "купить зерно без посредников",
    "сельхозпродукция оптом Тацинский район",
  ],
  alternates: {
    canonical: "https://velikanov-farming.ru",
  },

};

export default function MainPage() {
  return (
    <div className="mx-auto container">
      <VisitBlock />
      <Product />
      <Reviews />
      <InfoBlock />
    </div>
  );
}
