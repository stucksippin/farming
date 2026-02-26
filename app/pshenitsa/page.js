import WheatProductComp from "../components/products/WheatProductComp";

export const metadata = {
    title: "Купить пшеницу 3-4 класса оптом | Ростовская область",
    description:
        "Продажа продовольственной и фуражной пшеницы 3-4 класса от фермерского хозяйства. Новый урожай, Ростовская область, доставка по РФ.",
    keywords: [
        "купить пшеницу 3 класс",
        "фуражная пшеница цена",
        "пшеница от фермера",
    ],
    alternates: {
        canonical: "https://velikanov-farming.ru/pshenitsa",
    },

};


export default function WheatProductPage() {
    return <WheatProductComp />

}