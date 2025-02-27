# DISHcovery!

### The app that lets you discover the food you have at home!

![Responsive Mockup](https://github.com/Krnsand/dishcovery/blob/main/src/assets/images/am-i-responsive.png)

[Click to View Live Website](https://dishcovery-ten.vercel.app/)

### Beskriving

Det här projektet gick up på att bygga en valfri app och använda sig av ett api och ett “CSS i JS“ lib för Väl Godkänt.\
Jag har byggt en sorts"receptgenerator" för att man ska kunna få inspiration av den mat man har hemma! Jag har använt mig av Styled Components för styling, samt api:et "Spoonacular" för att hämta recept utifrån ingredienserna man kan söka på.

Appen har byggs från grunden genom att i terminalen köra

- npm init vite@latest
- React och Typescript
- npm install
- npm run dev

och sedan grotta sig ner i React.

### Krav för Godkänt

- [x] Projektet innehåller och använder minst 6 stycken komponenter varav minst 2 stycken är “statefulla"-komponenter.
- [x] React Router har använts för att dynamiskt uppdatera URL’en.
- [x] Git & GitHub har använts.
- [x] Projektmappen innehåller en README.md fil - (läs ovan för mer info)
- [] Uppgiften lämnas in i tid!
- [] Muntlig presentation är genomförd

### Krav för Väl Godkänt

- [ ] Alla punkter för godkänt är uppfyllda
- [x] Ett “CSS i JS“ lib skall användas för att skriva CSS (ex JSS, Styled-Components, mm).
- [x] Data från ett web-API hämtas och visas på sidan.

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
