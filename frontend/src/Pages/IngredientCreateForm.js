import { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function IngredientCreateForm() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newIngredient = { name, description };

    try {
      const res = await fetch("http://localhost:4000/ingredient/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newIngredient),
      });

      if (!res.ok) {
        throw new Error("Chyba při přidávání ingredience");
      }

      alert("Ingredience přidána!");
      navigate("/ingredient"); 
    } catch (err) {
      alert("Chyba: " + err.message);
    }
  };

  return (
    <Container className="mt-4">
      <h2>Přidat ingredienci</h2>

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
          <Form.Label>Popis</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </Form.Group>

        <Button type="submit">Přidat</Button>
      </Form>
    </Container>
  );
}

export default IngredientCreateForm;