import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./GlobalStyle";
import Favorites from "./components/Favorites";
import Navigation from "./components/Navigation";
import RecipeDetails from "./components/RecipeDetails";
import Home from "./pages/Home";
import { theme } from "./theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
