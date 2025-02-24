import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { fetchRecipeDetails } from "../api/recipeApi";

const Container = styled.div`
  max-width: 800px;
  margin: auto;
  padding: 20px;
  text-align: center;
`;

const RecipeImage = styled.img`
  width: 100%;
  border-radius: 10px;
`;

const RecipeTitle = styled.h1`
  color: ${(props) => props.theme.colors.primary};
`;

const IngredientsList = styled.ul`
  list-style: none;
  padding: 0;
`;

const IngredientItem = styled.li`
  padding: 5px 0;
`;

const RecipeDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [recipe, setRecipe] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  console.log("🔍 RecipeDetails laddades! ID:", id);

  useEffect(() => {
    if (!id) {
      setError("Recept-ID saknas.");
      setLoading(false);
      return;
    }

    fetchRecipeDetails(Number(id))
      .then((data) => {
        if (data && !data.code) {
          console.log("✅ Hämtade receptdetaljer:", data);
          setRecipe(data);
        } else {
          setError("Receptet kunde inte hämtas.");
        }
      })
      .catch((error) => {
        console.error("❌ Fel vid hämtning av receptdetaljer:", error);
        setError("Ett fel uppstod vid hämtning av receptdetaljer.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>🔄 Laddar recept...</p>;
  if (error) return <p>❌ {error}</p>;
  if (!recipe) return <p>❌ Ingen receptdata hittades.</p>;

  return (
    <Container>
      <RecipeTitle>{recipe.title}</RecipeTitle>
      <RecipeImage src={recipe.image} alt={recipe.title} />

      <h2>Ingredients</h2>
      <IngredientsList>
        {recipe.extendedIngredients?.map((ingredient: any, index: number) => (
          <IngredientItem key={index}>{ingredient.name}</IngredientItem>
        )) ?? <p>❌ Ingredienser saknas.</p>}
      </IngredientsList>

      <h2>Instructions:</h2>
      <p>
        {recipe.instructions
          ? recipe.instructions
          : "Ingen instruktion tillgänglig."}
      </p>
    </Container>
  );
};

export default RecipeDetails;
