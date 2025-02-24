import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { fetchRecipeById } from "../api/recipeApi";

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

  useEffect(() => {
    console.log("Fetching recipe with ID:", id);
    const loadRecipe = async () => {
      const data = await fetchRecipeById(id);
      console.log("Receptdata:", data);
      setRecipe(data);
    };
    loadRecipe();
  }, [id]);

  if (!recipe) return <p>Loading Recipe...</p>;

  return (
    <Container>
      <RecipeTitle>{recipe.title}</RecipeTitle>
      <RecipeImage src={recipe.image} alt={recipe.title} />
      <h2>Ingredients</h2>
      <IngredientsList>
        {recipe.ingredients.map((ingredient: string, index: number) => (
          <IngredientItem key={index}>{ingredient}</IngredientItem>
        ))}
      </IngredientsList>
      <h2>Instructions</h2>
      <p>{recipe.instructions}</p>
    </Container>
  );
};

export default RecipeDetails;
