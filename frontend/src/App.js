import "./App.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Navbar from "./Components/Navbar";
import IngredientForm from "./Pages/IngredientForm.js";
import ProductForm from "./Pages/ProductForm.js";

export default function App() {

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/ingredient" element={<IngredientForm/>} />
        <Route path="/products" element={<ProductForm/>} />

      </Routes>
      </Router>
);
}
