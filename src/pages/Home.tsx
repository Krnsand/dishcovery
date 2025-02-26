import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { fetchRecipesByIngredients } from "../api/recipeApi";
import RecipeList from "../components/RecipeList";
import SearchBar from "../components/SearchBar";

const Home = () => {
  const [recipes, setRecipes] = useState<any[]>([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const query = searchParams.get("search");
    if (query) {
      setHasSearched(true);
      fetchRecipesByIngredients(query).then((results) => setRecipes(results));
    }
  }, [searchParams]);

  return (
    <Container>
      <Title>🍽️ DISHcovery 🍽️ </Title>
      <SubText>Discover your food at home</SubText>
      <ContentWrapper>
        <SearchBar onSearch={() => {}} />
        <RecipeList recipes={recipes} hasSearched={hasSearched} />
      </ContentWrapper>
      {!hasSearched && (
        <HomeText>
          Got ingredients but no idea what to cook? Let DISHcovery do the work!
          Simply enter what you have in your kitchen, and we'll find delicious
          recipes that match. No more food waste, no more last-minute grocery
          runs—just easy, tasty meals made with what you already own.
          <br />
          <br />
          Start discovering now and turn your pantry into endless possibilities!
        </HomeText>
      )}
    </Container>
  );
};

export default Home;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background: ${(props) => props.theme.colors.gradient};
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
  font-weight: 900px;
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
