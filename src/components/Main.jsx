import { useState } from "react";
import ClaudeRecipe from "./ClaudeRecipe";
import IngredientsList from "./IngredientsList";

export default function Main() {
  const [ingredients, setIngredients] = useState([]);
  const [recipeShown, setRecipeShown] = useState(false);

  console.log(ingredients.length);

  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient");
    console.log(formData);

    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  }

  function toggleRecipeShown() {
    setRecipeShown((prevShown) => !prevShown);
  }

  return (
    <main>
      <form className="add-ingredient-form" action={addIngredient}>
        <input
          aria-label="Add ingredient"
          placeholder="e.g. oregano"
          type="text"
          name="ingredient"
        />
        <button>Add ingredient</button>
      </form>
      {ingredients.length ? (
        <IngredientsList
          ingredients={ingredients}
          toggleRecipeShown={toggleRecipeShown}
        />
      ) : null}
      {recipeShown ? <ClaudeRecipe /> : null}
    </main>
  );
}
