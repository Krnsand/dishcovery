import { Link } from "react-router-dom";
import styled from "styled-components";

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
`;

const RecipeCard = styled.div`
  text-align: center;
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
