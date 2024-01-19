import { Button, Container, Grid } from '@mui/material';
import PokemonList from "../components/PokeList";
import usePokemons from "../hooks/usePokemons";
import { IndeType } from '../interfaces/pokemon.interface';

function Accueil() {
  const { pokemons, hasMorePokemon, fetchNextPage, pokemonTypes, 
      setSelectedType, setPokemons } = usePokemons();

  const handleSelectType = (type: IndeType | null) => {
    if (type) {
      setSelectedType(type);
    } else {
      setPokemons([]);
      setSelectedType(null);
    }
  };
  return (
    <Container>
      <Grid 
        container 
        spacing={2} 
        mt={1}>
          <Grid 
            container 
            item 
            xs={12} 
            sx={{display: "flex", justifyContent:"center"}}>
              {pokemonTypes.map((type) => (
                <Button 
                  variant="contained"
                  sx={{"&.MuiButton-contained": {
                      background: type.color,
                  },
                  m: 1,
                  }}
                  onClick={() => handleSelectType(type)}
                >
                {type.name}
              </Button>
            ))}
              <Button 
                sx={{
                m: 1
                }}
                onClick={() => handleSelectType(null)}
                >
              </Button>
          </Grid>
        <Grid container item xs={12} sx={{display: "flex", justifyContent:"center"}}>
          <PokemonList pokemons={pokemons}></PokemonList>
          {
            hasMorePokemon ? (
              <Button className="mb-2" variant="contained" onClick={fetchNextPage}>
                Voir plus de Pokemons ?
              </Button>
            ) : null
          }
        </Grid>
      </Grid>
    </Container>
  );  
}

export default Accueil;