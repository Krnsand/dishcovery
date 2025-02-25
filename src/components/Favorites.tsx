import { useEffect, useState } from "react";
import styled from "styled-components";

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

const RecipeList = styled.ul`
  list-style: none;
  padding: 0;
`;

const RecipeItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  background: white;
  padding: 10px;
  border-radius: 8px;
  width: 100%;
  max-width: 600px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const RecipeImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 8px;
  margin-right: 10px;
`;

const RecipeTitle = styled.p`
  flex-grow: 1;
`;

const RemoveButton = styled.button`
  background: red;
  color: white;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Favorites = () => {
  const [favorites, setFavorites] = useState<any[]>([]);

  useEffect(() => {
    const savedFavorites = JSON.parse(
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
      <Title>⭐ My Favorites</Title>
      <ContentWrapper>
        {favorites.length === 0 ? (
          <p>❌ You have not saved any favorites</p>
        ) : (
          <RecipeList>
            {favorites.map((recipe) => (
              <RecipeItem key={recipe.id}>
                <RecipeImage src={recipe.image} alt={recipe.title} />
                <RecipeTitle>{recipe.title}</RecipeTitle>
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
