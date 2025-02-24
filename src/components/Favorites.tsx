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

const Favorites = () => {
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    const savedFavorites = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );
    setFavorites(savedFavorites);
  }, []);

  return (
    <Container>
      <Title>⭐ My Favorites</Title>
      <ContentWrapper>
        {favorites.length === 0 ? (
          <p>You have not saved any favorites</p>
        ) : (
          <ul>
            {favorites.map((title) => (
              <li key={title}>{title}</li>
            ))}
          </ul>
        )}
      </ContentWrapper>
    </Container>
  );
};

export default Favorites;
