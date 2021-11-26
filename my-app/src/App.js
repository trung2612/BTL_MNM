import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./feature/Home/Home";
import Product from "./feature/Products/Products";
import Contact from "./components/Contact/Contact";
import About from "./components/AboutUs/About";
import ProductDetail from "./feature/ProductDetail/ProductDetail";
import ContentLayout from "./components/layouts/ContentLayout/ContentLayout";

function App() {
  return (
    <ContentLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/product-detail" element={<ProductDetail />} />
      </Routes>
    </ContentLayout>
  );
}

export default App;
