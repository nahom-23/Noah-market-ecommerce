import "./App.css";
import Homepage from "./pages/homepage";
import About from "./pages/about/about";
import Product from "./pages/product";
import Navbar from "./component/Navbar/navbar";
import Login from "./pages/loginregistour/login";
import Cartpage from "./pages/cart/cartpage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cartpage" element={<Cartpage />} />
      </Routes>
    </div>
  );
}

export default App;
