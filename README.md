# DISHcovery!

### The app that lets you discover the food you have at home!

### Krav för Godkänt

- [x] Projektet innehåller och använder minst 6 stycken komponenter varav minst 2 stycken är “statefulla"-komponenter.
- [x] React Router har använts för att dynamiskt uppdatera URL’en.
- [x] Git & GitHub har använts.
- [x] Projektmappen innehåller en README.md fil - (läs ovan för mer info)
- [] Uppgiften lämnas in i tid!
- [] Muntlig presentation är genomförd

_Gjorda krav ska kryssas för._

### Krav för Väl Godkänt

- [ ] Alla punkter för godkänt är uppfyllda
- [x] Ett “CSS i JS“ lib skall användas för att skriva CSS (ex JSS, Styled-Components, mm).
- [x] Data från ett web-API hämtas och visas på sidan.

_Gjorda krav ska kryssas för._

---

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from "eslint-plugin-react";

export default tseslint.config({
  // Set the react version
  settings: { react: { version: "18.3" } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs["jsx-runtime"].rules,
  },
});
```
