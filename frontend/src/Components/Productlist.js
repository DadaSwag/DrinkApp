import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ProductDetail from './ProductDetail';

function Productlist({ products }) {
  
  const [show, setShow] = useState(false)

  const [selectedProduct, setSelectedProduct] = useState()
  return (
    <>
      {products.length > 0 ? (
  <div className="d-flex flex-wrap justify-content-center">
    {products.map((product) => (
      <Card key={product._id} style={{ width: '18rem', margin: '10px' }}>
        <Card.Img variant="top" src={product.image || "https://placehold.co/180x100"} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>Cena: {product.price} Kč</Card.Text>
          <Button onClick={() => {
            setSelectedProduct(product);
            setShow(true);
          }} variant="primary">Detail</Button>
        </Card.Body>
      </Card>
    ))}
  </div>
) : (
  <p>No products found.</p>
)}

      {selectedProduct && <ProductDetail product={selectedProduct} show={show} onHide={() => setShow(false)} />}
    </>
  );
}

export default Productlist;