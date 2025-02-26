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
  font-family: Borel;
`;

const SubText = styled.h2`
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.primary};
  text-align: center;
  margin-bottom: 20px;
  margin-top: 0;
`;

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HomeText = styled.p`
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.primary};
  text-align: center;
  margin-bottom: 20px;
  width: 60%;
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
      <HomeText>
        Got ingredients but no idea what to cook? Let DISHcovery do the work!
        Simply enter what you have in your kitchen, and we'll find delicious
        recipes that match. No more food waste, no more last-minute grocery
        runs—just easy, tasty meals made with what you already own.
        <br />
        <br />
        Start discovering now and turn your pantry into endless possibilities!
      </HomeText>
    </Container>
  );
};

export default Home;
