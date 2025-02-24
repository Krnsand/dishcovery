
const API_KEY = "5bd5c3c84e1647889dedde41889f5bc3"; 
const BASE_URL = "https://api.spoonacular.com/recipes";

export const fetchRecipeById = async (id: string) => {
  try {
    console.log("Hämtar recept med ID:", id); // 👀 Se om vi ens anropar API:et
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    
    if (!response.ok) {
      throw new Error(`API-anrop misslyckades: ${response.statusText}`);
    }

    const data = await response.json();
    console.log("API-svar:", data); // 👀 Se exakt vad API:et returnerar

    return data.meals ? data.meals[0] : null;
  } catch (error) {
    console.error("Fel vid hämtning av recept:", error);
    return null;
  }
};

