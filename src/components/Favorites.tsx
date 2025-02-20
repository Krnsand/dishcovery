import { useEffect, useState } from "react";

const Favorites = () => {
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    const savedFavorites = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );
    setFavorites(savedFavorites);
  }, []);

  return (
    <div>
      <h1>⭐ My Favorites</h1>
      {favorites.length === 0 ? (
        <p>You have not saved any favorites</p>
      ) : (
        <ul>
          {favorites.map((title) => (
            <li key={title}>{title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Favorites;
