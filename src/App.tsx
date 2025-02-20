import { Route, Routes } from "react-router-dom";
import Favorites from "./components/Favorites";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import RecipePage from "./pages/RecipePage";

const App = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:id" element={<RecipePage />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
};

export default App;
