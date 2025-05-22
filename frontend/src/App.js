import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Navbar from "./Components/Navbar";
import IngredientForm from "./Pages/IngredientForm";
import ProductListPage from "./Pages/ProductForm";
import ProductCreateForm from "./Pages/ProductCreateForm";
import IngredientCreateForm from "./Pages/IngredientCreateForm";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/ingredient" element={<IngredientForm />} />
        <Route path="/ingredient/create" element={<IngredientCreateForm />} />
        <Route path="/products" element={<ProductListPage />} />
        <Route path="/products/create" element={<ProductCreateForm />} />
      </Routes>
    </Router>
  );
}