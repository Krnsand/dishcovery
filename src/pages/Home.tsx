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
  background-color: ${(props) => props.theme.colors.background};
  min-height: 100vh;
`;

const Title = styled.h1`
  font-size: 2.5rem;
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
  const [recipes, setRecipes] = useState([]);

  const handleSearch = async (ingredients: string) => {
    const results = await fetchRecipesByIngredients(ingredients);
    setRecipes(results);
  };

  return (
    <Container>
      <Title>🍽️ DISHcovery</Title>
      <ContentWrapper>
        <SearchBar onSearch={handleSearch} />
        <RecipeList recipes={recipes} />
      </ContentWrapper>
    </Container>
  );
};

export default Home;
