import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./feature/Home/Home";
import Product from "./components/Products/Products";
import Contact from "./components/Contact/Contact";
import About from "./components/AboutUs/About";
import ContentLayout from "./components/layouts/ContentLayout/ContentLayout";
import AoQuan from "./components/Products/productchild/Aoquan";
import Vay from "./components/Products/productchild/Vay";
import PhuKien from "./components/Products/productchild/Phukien";
import Khac from "./components/Products/productchild/Khac";


function App() {
  return (
    <ContentLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />}>
            <Route path="/products" element={<AoQuan />} />
            <Route path="/products/vay" element={<Vay />} />
            <Route path="/products/phukien" element={<PhuKien />} />
            <Route path="/products/khac" element={<Khac />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </ContentLayout>
  );
}

export default App;
