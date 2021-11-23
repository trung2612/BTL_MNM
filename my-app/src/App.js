import './App.css';
import Navbar from "./components/layouts/Navbar/Navbar";
import Home from "./components/Home/Home";
import Product from "./components/Products/Products";
import Contact from "./components/Contact/Contact";
import About from "./components/AboutUs/About"
import { useState } from 'react';

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
  }
  const productHandler = () => {
    setIsHome(false);
    setIsProduct(true);
    setIsContact(false);
    setIsAbout(false);
  }
  const contactHandler = () => {
    setIsHome(false);
    setIsProduct(false);
    setIsContact(true);
    setIsAbout(false);
  }
  const aboutHandler = () => {
    setIsHome(false);
    setIsProduct(false);
    setIsContact(false);
    setIsAbout(true);
  }
  return (
    <>
<<<<<<< HEAD
    <Navbar/>
    <Home/>
    <About/>  
    <Products/>
=======
    <Navbar onHome={homeHandler} onProduct={productHandler} onContact={contactHandler} onAbout={aboutHandler}/>
    {isHome && <Home/>}
    {isProduct && <Product/>}
    {isContact && <Contact/>}
    {isAbout && <About/>}
>>>>>>> 722f7de67fd019794ece43d7983c06141fe539c9
    </>
  );
}

export default App;
