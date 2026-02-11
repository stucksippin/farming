import Contact from "./components/Contact";
import Header from "./components/Header";
import InfoBlock from "./components/InfoBlock";
import Product from "./components/Product";
import Reviews from "./components/Reviews";
import VisitBlock from "./components/VisitBlock";


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
