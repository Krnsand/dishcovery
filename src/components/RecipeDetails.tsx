import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { fetchRecipeDetails } from "../api/recipeApi";

const Container = styled.div`
  max-width: 800px;
  margin: auto;
  padding: 20px;
  text-align: center;
  background: ${(props) => props.theme.colors.background};
`;

const RecipeImage = styled.img`
  width: 100%;
  border-radius: 10px;
`;

const RecipeTitle = styled.h1`
  color: ${(props) => props.theme.colors.primary};
  font-family: Borel;
`;

const IngHeader = styled.h2`
  font-size: 30px;
  text-decoration: underline;
`;

const IngredientsList = styled.ul`
  list-style: none;
  padding: 0;
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
`;

const Button = styled.button`
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.background};
  padding: 10px 15px;
  font-size: 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background: ${(props) => props.theme.colors.secondary};
    color: ${(props) => props.theme.colors.primary};
  }
`;

const RecipeDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [recipe, setRecipe] = useState<any>(null);
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

          const savedFavorites = JSON.parse(
            localStorage.getItem("favorites") || "[]"
          );
          setIsFavorite(savedFavorites.some((fav: any) => fav.id === data.id));
        } else {
          setError("Recipe could not be fetched.");
        }
      })
      .catch((error) => {
        setError("An error occurred when fetching recipe details.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  const handleFavoriteToggle = () => {
    if (!recipe) return;
    let savedFavorites = JSON.parse(localStorage.getItem("favorites") || "[]");

    if (isFavorite) {
      savedFavorites = savedFavorites.filter((fav: any) => fav.id != recipe.id);
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
      <RecipeTitle>{recipe.title}</RecipeTitle>
      <RecipeImage src={recipe.image} alt={recipe.title} />
      <Button onClick={handleFavoriteToggle}>
        {isFavorite ? "⭐ Remove from favorites" : "⭐ Add to favorites"}
      </Button>

      <IngHeader>Ingredients</IngHeader>
      <IngredientsList>
        {recipe.extendedIngredients?.map((ingredient: any, index: number) => (
          <IngredientItem key={index}>{ingredient.name}</IngredientItem>
        )) ?? <p>❌ Ingredients missing.</p>}
      </IngredientsList>

      <IngHeader>Instructions:</IngHeader>
      <Instructions>
        {recipe.instructions
          ? recipe.instructions
          : "No instructions available."}
      </Instructions>
    </Container>
  );
};

export default RecipeDetails;
