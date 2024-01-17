import { Container } from "@mui/material";
import PokemonList from "../components/PokeList";
import usePokemons from "../hooks/usePokemons";

function Accueil() {
  const { pokemons } = usePokemons();

  return (
    <Container>
      <PokemonList pokemons={pokemons}></PokemonList>
    </Container>
  );  
}

export default Accueil