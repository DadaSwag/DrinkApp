import { useEffect, useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import useFetch from "../Hook/useFetch";

export default function ProductCreateForm() {
  const { refetch } = useFetch("http://localhost:4000/products");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [ingredients, setIngredients] = useState([{ ingredient: "", quantity: "" }]);
  const [ingredientsList, setIngredientsList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/ingredient")
      .then((res) => res.json())
      .then((data) => setIngredientsList(data))
      .catch((err) => console.error("Chyba při načítání ingrediencí", err));
  }, []);

  const handleIngredientChange = (index, field, value) => {
    const newIngredients = [...ingredients];
    newIngredients[index][field] = value;
    setIngredients(newIngredients);
  };

  const addIngredientField = () => {
    setIngredients([...ingredients, { ingredient: "", quantity: "" }]);
  };

  const removeIngredientField = (index) => {
    setIngredients(ingredients.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newProduct = {
      name,
      price: parseFloat(price),
      image,
      ingredients: ingredients
        .filter((i) => i.ingredient && i.quantity)
        .map((i) => ({
          ingredient: i.ingredient,
          quantity: Number(i.quantity),
        })),
    };

    try {
      const res = await fetch("http://localhost:4000/products/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newProduct),
      });

      if (!res.ok) {
        throw new Error("Chyba při přidávání produktu");
      }

      refetch();

      setName("");
      setPrice("");
      setImage("");
      setIngredients([{ ingredient: "", quantity: "" }]);
    } catch (err) {
      alert("Chyba: " + err.message);
    }
  };

  return (
    <Container className="mt-4">
      <h2>Přidat produkt</h2>

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Název</Form.Label>
          <Form.Control
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Cena</Form.Label>
          <Form.Control
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>URL obrázku</Form.Label>
          <Form.Control
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </Form.Group>

        <Form.Label>Ingredience</Form.Label>
        {ingredients.map((item, index) => (
          <Row key={index} className="mb-2">
            <Col>
              <Form.Select
                value={item.ingredient}
                onChange={(e) => handleIngredientChange(index, "ingredient", e.target.value)}
                required
              >
                <option value="">Vyber ingredienci</option>
                {ingredientsList.map((i) => (
                  <option key={i._id} value={i._id}>{i.name}</option>
                ))}
              </Form.Select>
            </Col>
            <Col>
              <Form.Control
                type="number"
                placeholder="Množství"
                value={item.quantity}
                onChange={(e) => handleIngredientChange(index, "quantity", e.target.value)}
                required
                min="0"
              />
            </Col>
            <Col xs="auto">
              <Button variant="danger" onClick={() => removeIngredientField(index)} disabled={ingredients.length === 1}>
                X
              </Button>
            </Col>
          </Row>
        ))}

        <Button variant="secondary" onClick={addIngredientField} className="mb-3">
          Přidat ingredienci
        </Button>

        <Button type="submit">Přidat</Button>
      </Form>
    </Container>
  );
}
