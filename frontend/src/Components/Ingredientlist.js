import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function IngredientList({ ingredients }) {
  const navigate = useNavigate();

  return (
    <Form>
      <div className="d-flex flex-column align-items-center">
        <Button
          className="mb-3"
          variant="primary"
          onClick={() => navigate("/ingredient/create")}
        >
          Přidat ingredienci
        </Button>

        {ingredients && ingredients.length > 0 ? (
          ingredients.map((ingredient, index) => (
            <div key={index} className="mb-2">
              <Form.Check
                type="checkbox"
                label={ingredient.name}
                id={`ingredient-${index}`}
              />
            </div>
          ))
        ) : (
          <p>Žádné ingredience nebyly nalezeny.</p>
        )}
      </div>
    </Form>
  );
}