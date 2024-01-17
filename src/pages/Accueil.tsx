import PokemonList from "../components/PokemonList";
import usePokemons from "../hooks/usePokemons";

function Accueil() {
  const { pokemons } = usePokemons();

  return <PokemonList pokemons={pokemons}></PokemonList>;
}

export default Accueil