import React from 'react'
import { Form } from 'react-bootstrap';

export default function Ingredientlist({ ingredients }) {
  console.log(ingredients);
  return (
     <Form>
  <div className="d-flex flex-column align-items-center">
    {ingredients.length > 0 ? ingredients.map((ingredient, index) => (
      <div key={index} className="mb-3">
        <Form.Check
          type="checkbox"
          label={ingredient.name}
          id={`ingredient-${index}`}
        />
      </div>
    )) : (
      <p>No ingredients found.</p>
    )}
  </div>
</Form>

  )
}
