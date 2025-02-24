import { Link } from "react-router-dom";
import styled from "styled-components";

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  width: 100%;
  max-width: 800px;
`;

const RecipeCard = styled.div`
  text-align: center;
  background: white;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const RecipeImage = styled.img`
  width: 100%;
  border-radius: 10px;
`;

interface RecipeListProps {
  recipes: { id: number; title: string; image: string }[];
}

const RecipeList = ({ recipes }: RecipeListProps) => {
  return (
    <ListContainer>
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id}>
          <Link to={`/recipe/${recipe.id}`}>
            <RecipeImage src={recipe.image} alt={recipe.title} />
            <p>{recipe.title}</p>
          </Link>
        </RecipeCard>
      ))}
    </ListContainer>
  );
};

export default RecipeList;
