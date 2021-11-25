import "./App.css";
import Navbar from "./components/layouts/Navbar/Navbar";
import Home from "./feature/Home/Home";
import Product from "./components/Products/Products";
import Contact from "./components/Contact/Contact";
import About from "./components/AboutUs/About";
import ContentLayout from "./components/layouts/ContentLayout/ContentLayout";
import Banner from "./components/molecules/Banner/Banner";
import { useState } from "react";

function App() {
  const [isHome, setIsHome] = useState(true);
  const [isProduct, setIsProduct] = useState(false);
  const [isContact, setIsContact] = useState(false);
  const [isAbout, setIsAbout] = useState(false);
  const homeHandler = () => {
    setIsHome(true);
    setIsProduct(false);
    setIsContact(false);
    setIsAbout(false);
  };
  const productHandler = () => {
    setIsHome(false);
    setIsProduct(true);
    setIsContact(false);
    setIsAbout(false);
  };
  const contactHandler = () => {
    setIsHome(false);
    setIsProduct(false);
    setIsContact(true);
    setIsAbout(false);
  };
  const aboutHandler = () => {
    setIsHome(false);
    setIsProduct(false);
    setIsContact(false);
    setIsAbout(true);
  };
  return (
    <ContentLayout>
      <Navbar
        onHome={homeHandler}
        onProduct={productHandler}
        onContact={contactHandler}
        onAbout={aboutHandler}
      />
      <Banner/>
      {isHome && <Home />}
      {isProduct && <Product />}
      {isContact && <Contact />}
      {isAbout && <About />}
    </ContentLayout>
  );
}

export default App;
