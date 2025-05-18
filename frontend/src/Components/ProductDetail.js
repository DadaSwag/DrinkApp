import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ProductDetail({ product, show, onHide }) {
  return (
    <Modal scrollable data-bs-theme="dark" show={show} onHide={onHide} dialogClassName="modal-80w">
      <Modal.Header closeButton>
        <Modal.Title>{product.name}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p><strong>Cena:</strong> {product.price} Kč</p>
        <p><strong>Složení:</strong></p>
        <ul>
          {product.ingredients.map((item, index) => (
            <li key={index}>
              {item.ingredient?.name || "Neznámá surovina"} – {item.quantity}
              {typeof item.quantity === "number" && item.quantity > 10 ? " ml" : " ks"}
            </li>
          ))}
        </ul>
        <img src={product.image} alt={product.name} style={{ width: "100%", borderRadius: "10px", marginTop: "10px" }} />
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>Zavřít</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ProductDetail;