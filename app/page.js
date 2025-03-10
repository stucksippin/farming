import Contact from "./components/Contact";
import Header from "./components/Header";
import Product from "./components/Product";
import VisitBlock from "./components/VisitBlock";


export default function MainPage() {
  return (
    <div className="mx-auto">
      <Header />
      <VisitBlock />
      <Product />
      <Contact />
    </div>
  );
}
