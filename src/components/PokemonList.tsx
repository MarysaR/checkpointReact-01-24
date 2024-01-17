import { IndexedPokemon } from "../interfaces/pokemon.interface";

interface PokemonListProps {
  pokemons: IndexedPokemon[];
}

function PokemonList({ pokemons }: PokemonListProps) {
  return (
  <>
  {pokemons.length > 0
    ? pokemons.map((i) => {
        return <div key={i.name}>{i.name}</div>;
      })
    : null}
  </>
  );
};

export default PokemonList