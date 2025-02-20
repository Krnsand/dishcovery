import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchRecipeDetails } from "../api/recipeApi";

const RecipePage = () => {
  const { id } = useParams<{ id: string }>();
  const [recipe, setRecipe] = useState<any>(null);

  useEffect(() => {
    if (id) {
      fetchRecipeDetails(parseInt(id)).then(setRecipe);
    }
  }, [id]);

  if (!recipe) return <p>Loading recipe...</p>;

  return (
    <div>
      <h1>{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} />
      <p>{recipe.instructions || "Instructions not available..."}</p>
    </div>
  );
};

export default RecipePage;
