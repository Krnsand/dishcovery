
const API_KEY = "5bd5c3c84e1647889dedde41889f5bc3"; 
const BASE_URL = "https://api.spoonacular.com/recipes";

export const fetchRecipesByIngredients = async (ingredients: string) => {
  console.log(`📡 Hämtar recept baserat på ingredienser: ${ingredients}`);
  const response = await fetch(
    `${BASE_URL}/findByIngredients?ingredients=${ingredients}&number=10&apiKey=${API_KEY}`
  );
  const data = await response.json();
  console.log("📊 API Response:", data);
  return data;
};

export const fetchRecipeDetails = async (id: number) => {
  try {
    const response = await fetch(
      `${BASE_URL}/${id}/information?apiKey=${API_KEY}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching recipe details:", error);
    return null;
  }
};
