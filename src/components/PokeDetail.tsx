import { useState } from "react";
import { useParams } from "react-router-dom"
import usePokemonD from "../hooks/usePokemonD";
import { Box, Container, Grid } from "@mui/material";


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
            spacing={2}>
                <Grid 
                    item 
                    container 
                    alignItems="center" 
                    justifyContent="center" 
                    spacing={2}>
                        {isLoaded ? (
                            <Box>Chargement en cours...</Box>
                        ): pokemon ? (
                            <>
                                {pokemon.name}
                            </>
                        ) : (<Box>Aucun pokemon trouvé ! </Box>)}
                </Grid>
        </Grid>
    </Container>
  );
}

export default PokeDetail;