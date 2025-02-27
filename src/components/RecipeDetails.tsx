import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { fetchRecipeDetails } from "../api/recipeApi";

interface Ingredient {
  id: number;
  name: string;
}

interface Recipe {
  id: number;
  title: string;
  image: string;
  instructions?: string;
  extendedIngredients?: Ingredient[];
}

const RecipeDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    if (!id) {
      setError("Recipe-ID missing.");
      setLoading(false);
      return;
    }

    fetchRecipeDetails(Number(id))
      .then((data) => {
        if (data && !data.code) {
          setRecipe(data);

          const savedFavorites: Recipe[] = JSON.parse(
            localStorage.getItem("favorites") || "[]"
          );
          setIsFavorite(savedFavorites.some((fav) => fav.id === data.id));
        } else {
          setError("Recipe could not be fetched.");
        }
      })
      .catch(() => {
        setError("An error occurred when fetching recipe details.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  const handleFavoriteToggle = () => {
    if (!recipe) return;
    let savedFavorites: Recipe[] = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );

    if (isFavorite) {
      savedFavorites = savedFavorites.filter((fav) => fav.id !== recipe.id);
    } else {
      savedFavorites.push({
        id: recipe.id,
        title: recipe.title,
        image: recipe.image,
      });
    }

    localStorage.setItem("favorites", JSON.stringify(savedFavorites));
    setIsFavorite(!isFavorite);
  };

  if (loading) return <p>🔄 Loading recipe...</p>;
  if (error) return <p>❌ {error}</p>;
  if (!recipe) return <p>❌ No recipe data found.</p>;

  return (
    <Container>
      <Button onClick={() => navigate(-1)}>⬅ Go Back</Button>{" "}
      <RecipeContainer>
        <RecipeTitle>{recipe.title}</RecipeTitle>
        <RecipeImage src={recipe.image} alt={recipe.title} />
        <Button onClick={handleFavoriteToggle}>
          {isFavorite ? "⭐ Remove from favorites" : "⭐ Add to favorites"}
        </Button>
        <IngHeader>Ingredients:</IngHeader>
        <ul>
          {recipe.extendedIngredients?.map((ingredient, index) => (
            <IngredientItem key={index}>{ingredient.name}</IngredientItem>
          )) ?? <p>❌ Ingredients missing.</p>}
        </ul>
        <IngHeader>Instructions:</IngHeader>
        <Instructions>
          {recipe.instructions
            ? recipe.instructions
            : "No instructions available."}
        </Instructions>
      </RecipeContainer>
    </Container>
  );
};

export default RecipeDetails;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  min-height: 100vh;
`;

const RecipeContainer = styled.div`
  background: ${(props) => props.theme.colors.background};
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 0 3rem;
  border-radius: 10px;
`;

const RecipeTitle = styled.h1`
  font-size: 2.5rem;
  color: ${(props) => props.theme.colors.primary};
  text-align: center;
  font-family: Borel;
`;

const RecipeImage = styled.img`
  width: 100%;
  max-width: 600px;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const IngHeader = styled.h2`
  font-size: 30px;
  text-decoration: underline;
`;

const IngredientItem = styled.li`
  padding: 3px 0;
  font-weight: 600;
  font-size: 20px;
`;

const Instructions = styled.p`
  font-weight: 900;
  font-size: 20px;
  margin-bottom: 6rem;
  max-width: 700px;
`;

const Button = styled.button`
  padding: 10px 15px;
  font-size: 16px;
  cursor: pointer;
  background-color: ${(props) => props.theme.colors.primary};
  color: white;
  border: none;
  border-radius: 5px;
  margin: 10px 0;
`;
