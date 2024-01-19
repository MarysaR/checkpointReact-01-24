# Checkpoint - Pokedex 
#### React/Typescript/Api (PokeApi)

## Available Scripts
In the project directory, you can run:
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Dependencies 
- #### "@emotion/react": "^11.11.3"
- #### "@emotion/styled": "^11.11.0"
- #### "@mui/icons-material": "^5.14.5"
- #### "@mui/material": "^5.15.5"
- #### "react-router-dom": "^6.21.2",
- #### "axios": "^1.6.5",
- #### "typescript": "^4.9.5",
- #### "fast-average-color": "^9.4.0"

## Components / Functionnalities
- PokeList - Affiche la liste des Pokémons
- PokeCard - Affiche une Carte du Pokémons
- PokeAvatar - Affiche l'avatar du Pokémon dans la carte
- PokeDetail - Affiche les détails des Pokémons et PokeInfo
- PokeStats - Affiche les stats des pokemons (Abilities, Height, Weight, 
- Filtre par Type de Pokémons

## Paths
### react-router-dom
- import { RouterProvider, createBrowserRouter } from 'react-router-dom';
  const router = createBrowserRouter([
  {
    path: "/",
    element: <Accueil />,
  },
  {
    path: "pokemon/:pokemonName",
    element: <PokeDetail />,
  },
]);

## Packages 
- ### Fast Average Color
  #### Beugue sur certaines photos !! - ERROR - FastAverageColor: Error loading image (Fermer la fenêtre d'erreur)
  Une bibliothèque qui calcule la couleur moyenne de toutes les images pour Node.js

- ### Mui/material 
  Material UI est une bibliothèque de composants React open source qui implémente le Material Design de Google
