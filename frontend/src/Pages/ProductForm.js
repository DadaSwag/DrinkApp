import useFetch from '../Hook/useFetch';
import Productlist from '../Components/Productlist';

function ProductForm() {

  const {data: products, error, loading} = useFetch("http://localhost:4000/products")



  return (
    <>
    {loading && <p>loading</p>}
    {error && <p>`Chyba: ${error}`</p>}
    {products && <Productlist products={products}/>}
    </>
  );
}

export default ProductForm;