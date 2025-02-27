import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { fetchRecipesByIngredients } from "../api/recipeApi";
import RecipeList from "../components/RecipeList";
import SearchBar from "../components/SearchBar";

interface Recipe {
  id: number;
  title: string;
  image: string;
  extendedIngredients?: { name: string }[];
  instructions?: string;
}

const Home = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
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
      <Title>🍽️ DISHcovery 🍽️</Title>
      <SubText>Discover your food at home</SubText>
      <ContentWrapper>
        <SearchBar onSearch={() => {}} />
        <RecipeList recipes={recipes} hasSearched={hasSearched} />
      </ContentWrapper>
      {!hasSearched && (
        <HomeText>
          Got ingredients but no idea what to cook? Let DISHcovery do the work!
          Simply enter what you have in your kitchen, and we'll find delicious
          recipes that match.
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
  min-height: 100vh;
  background: ${(props) => props.theme.colors.gradient};
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: ${(props) => props.theme.colors.primary};
  text-align: center;
  margin-bottom: 0;
  font-family: Borel;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SubText = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.primary};
  text-align: center;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;

  @media (max-width: 768px) {
    height: 50px;
  }
`;

const HomeText = styled.p`
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.primary};
  text-align: center;
  margin-bottom: 20px;
  width: 60%;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    width: 90%;
  }
`;
