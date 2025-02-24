import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Favorites from "./components/Favorites";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import RecipePage from "./pages/RecipePage";
import { theme } from "./theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:id" element={<RecipePage />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
