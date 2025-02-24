import { Link } from "react-router-dom";
import styled from "styled-components";

const Card = styled.div`
  background: white;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;
  text-align: center;

  &:hover {
    transform: scale(1.05);
  }
`;

const RecipeImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 10px;
`;

const RecipeTitle = styled.h3`
  font-size: 1.2rem;
  margin-top: 10px;
  color: ${(props) => props.theme.colors.primary};
`;

interface RecipeCardProps {
  recipe: { id: number; title: string; image: string };
}

const RecipeCard = ({ recipe }: RecipeCardProps) => {
  return (
    <Card>
      <Link to={`/recipe/${recipe.id}`}>
        <RecipeImage src={recipe.image} alt={recipe.title} />
        <RecipeTitle>{recipe.title}</RecipeTitle>
      </Link>
    </Card>
  );
};

export default RecipeCard;
