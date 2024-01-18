import { useParams } from "react-router-dom"
import usePokemonD from "../hooks/usePokemonD";
import { Box, Container, Grid } from "@mui/material";
import PokeAvatar from "./PokeAvatar";

function PokeDetail() {
    let {pokemonName} = useParams();

    const {pokemon, isLoaded} = usePokemonD({ pokemonName });

  return (
    <Container>
        <Grid 
            container 
            flexDirection="column"
            alignItems="center" 
            justifyContent="center"
            spacing={2} 
            mt={2}>
                <Grid 
                    item 
                    container 
                    alignItems="center" 
                    justifyContent="center" 
                    spacing={1}>
                        {isLoaded ? (
                            <Box>Chargement en cours...</Box>
                        ) : pokemon ? (
                            <>
                                <Grid item xs={12} sm={6}>
                                    <PokeAvatar pokemon={pokemon}/>
                                </Grid>
                            </>
                        ) : (
                        <Box>Aucun pokemon trouvé !</Box>
                    )}
                </Grid>
        </Grid>
    </Container>
  );
}

export default PokeDetail;