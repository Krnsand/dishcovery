import { useState } from "react";
import styled from "styled-components";
import { fetchRecipesByIngredients } from "../api/recipeApi";
import RecipeList from "../components/RecipeList";
import SearchBar from "../components/SearchBar";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background: ${(props) => props.theme.colors.background};
  min-height: 100vh;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: ${(props) => props.theme.colors.primary};
  text-align: center;
  margin-bottom: 0;
  font-family: Jacques Francois Shadow;
`;

const SubText = styled.h2`
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.primary};
  text-align: center;
  margin-bottom: 20px;
`;

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Home = () => {
  const [recipes, setRecipes] = useState<any[]>([]);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = async (ingredients: string) => {
    if (!ingredients.trim()) return;
    setHasSearched(true);

    const results = await fetchRecipesByIngredients(ingredients);
    setRecipes(results);
  };

  return (
    <Container>
      <Title>🍽️ DISHcovery 🍽️ </Title>
      <SubText>Discover your food at home</SubText>
      <ContentWrapper>
        <SearchBar onSearch={handleSearch} />
        <RecipeList recipes={recipes} hasSearched={hasSearched} />
      </ContentWrapper>
    </Container>
  );
};

export default Home;
