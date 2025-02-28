import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface Recipe {
  id: number;
  title: string;
  image: string;
}

const Favorites = () => {
  const [favorites, setFavorites] = useState<Recipe[]>([]);

  useEffect(() => {
    const savedFavorites: Recipe[] = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );
    setFavorites(savedFavorites);
  }, []);

  const handleRemoveFavorite = (id: number) => {
    const updatedFavorites = favorites.filter((recipe) => recipe.id !== id);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <Container>
      <Title>⭐ My Favorites ⭐</Title>
      <ContentWrapper>
        {favorites.length === 0 ? (
          <p>❌ You have not saved any favorites</p>
        ) : (
          <RecipeList>
            {favorites.map((recipe) => (
              <RecipeItem key={recipe.id}>
                <RecipeImage src={recipe.image} alt={recipe.title} />
                <RecipeTitle to={`/recipe/${recipe.id}`}>
                  {recipe.title}
                </RecipeTitle>

                <RemoveButton onClick={() => handleRemoveFavorite(recipe.id)}>
                  ❌
                </RemoveButton>
              </RecipeItem>
            ))}
          </RecipeList>
        )}
      </ContentWrapper>
    </Container>
  );
};

export default Favorites;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 20px 6rem 20px;
  min-height: 100vh;
  background: ${(props) => props.theme.colors.gradient};

  @media (max-width: 768px) {
    padding-right: 40px;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: ${(props) => props.theme.colors.primary};
  text-align: center;
  margin-bottom: 20px;
  font-family: Borel;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RecipeList = styled.ul`
  list-style: none;
  padding: 0;
`;

const RecipeItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  background: white;
  padding: 10px;
  border-radius: 8px;
  width: 100%;
  max-width: 600px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const RecipeImage = styled.img`
  width: 130px;
  height: auto;
  border-radius: 8px;
  margin-right: 10px;

  @media (max-width: 768px) {
    width: 100px;
  }
`;

const RecipeTitle = styled(Link)`
  flex-grow: 1;
  color: ${(props) => props.theme.colors.primary};
  text-decoration: none;
  font-weight: bold;
  font-size: 25px;

  &:hover {
    text-decoration: underline;
  }
`;

const RemoveButton = styled.button`
  background-color: #a80303;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme.colors.secondary};
    color: ${(props) => props.theme.colors.primary};
  }
`;
