
const API_KEY = "5bd5c3c84e1647889dedde41889f5bc3"; 
const BASE_URL = "https://api.spoonacular.com/recipes";

export const fetchRecipesByIngredients = async (ingredients: string) => {
  const response = await fetch(
    `${BASE_URL}/findByIngredients?ingredients=${ingredients}&number=10&apiKey=${API_KEY}`
  );
  const data = await response.json();
  return data || [];
};

export const fetchRecipeDetails = async (id: number) => {
  const response = await fetch(
    `${BASE_URL}/${id}/information?apiKey=${API_KEY}`
  );
  const data = await response.json();
  return data;
};
