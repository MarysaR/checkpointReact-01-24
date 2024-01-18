import { Button, Container } from "@mui/material";
import PokemonList from "../components/PokeList";
import usePokemons from "../hooks/usePokemons";

function Accueil() {
  const { pokemons, hasMorePokemon, fetchNextPage } = usePokemons();

  return (
    <Container>
      <PokemonList pokemons={pokemons}></PokemonList>
      {
        hasMorePokemon ? (
          <Button className="mb-2" variant="contained" onClick={fetchNextPage}>
            Voir plus de Pokemons ?
          </Button>
        ) : null
      }
    </Container>
  );  
}

export default Accueil