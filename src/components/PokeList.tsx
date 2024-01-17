import { IndexedPokemon } from "../interfaces/pokemon.interface";
import PokeCard  from "./PokeCard";
import { Grid } from "@mui/material";

interface PokeListProps {
  pokemons: IndexedPokemon[];
}

function PokeList({ pokemons }: PokeListProps) {
  return (
    <Grid container spacing={2}>
      {pokemons.length > 0
        ? pokemons.map((i) => {
            return (
              <Grid item xs={4}>
                <PokeCard key={i.name} pokemon={i} />
              </Grid>
            );
          })
        : null}
    </Grid>
  );
};

export default PokeList;