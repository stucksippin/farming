import Contact from "./components/Contact";
import Header from "./components/Header";
import InfoBlock from "./components/InfoBlock";
import Product from "./components/Product";
import VisitBlock from "./components/VisitBlock";


export default function MainPage() {
  return (
    <div className="mx-auto container">
      <Header />
      <VisitBlock />
      <Product />
      <InfoBlock />
      <Contact />

    </div>
  );
}
