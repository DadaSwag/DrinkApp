import useFetch from '../Hook/useFetch';
import Ingredientlist from '../Components/Ingredientlist';

function IngredientForm() {

  const {data: ingredients, error, loading} = useFetch("http://localhost:4000/ingredient")



  return (
    <>
    {loading && <p>loading</p>}
    {error && <p>`Chyba: ${error}`</p>}
    {ingredients && <Ingredientlist ingredients={ingredients}/>}
    </>
  );
}

export default IngredientForm;