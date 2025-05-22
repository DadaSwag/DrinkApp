import { Link } from "react-router-dom";
import useFetch from "../Hook/useFetch";
import Productlist from "../Components/Productlist";

function ProductListPage() {
  const { data: products, error, loading,} = useFetch("http://localhost:4000/products");

  return (
    <div className="container mt-4">
      <h2>Seznam produktů</h2>
      <Link to="/products/create" className="btn btn-primary mb-3">Přidat produkt</Link>
      {loading && <p>Načítání...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {products && <Productlist products={products} />}
    </div>
  );
}

export default ProductListPage;