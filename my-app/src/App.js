import './App.css';
import Navbar from "./components/layouts/Navbar/Navbar";
import Home from "./components/Home/Home";
import Products from "./components/Products/Products";
import About from "./components/AboutUs/About";


function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <Products/>
    <About/>
    </>
  );
}

export default App;
