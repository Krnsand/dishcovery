import { useState } from "react";
import { fetchRecipesByIngredients } from "../api/recipeApi";
import RecipeList from "../components/RecipeList";
import SearchBar from "../components/SearchBar";

const Home = () => {
  const [recipes, setRecipes] = useState([]);

  const handleSearch = async (ingredients: string) => {
    const results = await fetchRecipesByIngredients(ingredients);
    setRecipes(results);
  };

  return (
    <div>
      <h1>🥘 Receptgenerator</h1>
      <SearchBar onSearch={handleSearch} />
      <RecipeList recipes={recipes} />
    </div>
  );
};

export default Home;
