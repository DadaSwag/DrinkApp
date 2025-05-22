import { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function IngredientForm() {
  const [ingredients, setIngredients] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:4000/ingredient")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Chyba při načítání ingrediencí");
        }
        return res.json();
      })
      .then((data) => {
      
        if (Array.isArray(data)) {
          setIngredients(data);
        } else {
          setIngredients([]);
        }
      })
      .catch((err) => {
        console.error(err);
        setIngredients([]); 
      });
  }, []);

  return (
    <div className="container mt-4">
      <h2>Ingredience</h2>
      <Button
        variant="primary"
        className="mb-3"
        onClick={() => navigate("/ingredient/create")}
      >
        Přidat novou ingredienci
      </Button>

      <Form>
        {ingredients.length > 0 ? (
          ingredients.map((ingredient, index) => (
            <Form.Check
              key={index}
              type="checkbox"
              label={ingredient.name}
              id={`ingredient-${index}`}
              className="mb-2"
            />
          ))
        ) : (
          <p>Žádné ingredience nenalezeny.</p>
        )}
      </Form>
    </div>
  );
}