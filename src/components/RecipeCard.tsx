import { Link } from "react-router-dom";

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
