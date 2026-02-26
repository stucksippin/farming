
import FlaxProductComp from "../components/products/FlaxProductComp";

export const metadata = {
    title: "Купить лен оптом с высокой масляничностью | Ростовская область",
    description:
        "Продажа семян льна масличного урожая 2025 года от фермерского хозяйства. Масличность 44-46%, влажность до 13%. Ростовская область, доставка по РФ, полный пакет документов.",
    keywords: [
        "купить семена льна оптом",
        "лен масличный цена",
        "семена льна от производителя",
        "лен высокой масличности",
        "купить лен для масла",
        "семена льна Ростовская область",
    ],
    alternates: {
        canonical: "https://velikanov-farming.ru/len",
    },
    openGraph: {
        title: "Купить лен масличный оптом 44–46%",
        description: "...",
        url: "https://velikanov-farming.ru/len",
        siteName: "Фермерское хозяйство Великанова",
        type: "website",
    },
};

export default function FlaxProductPage() {
    return <FlaxProductComp />
}