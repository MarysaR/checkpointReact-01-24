import { useParams, Link } from "react-router-dom"
import usePokemonD from "../hooks/usePokemonD";
import { Box, Container, Grid, Button } from "@mui/material";
import PokeAvatar from "./PokeAvatar";
import PokeInfo from "./PokeInfo";
import PokeStat from "./PokeStats";

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
                            <Grid item xs={12} sm={6}>
                                <PokeInfo pokemon={pokemon}/>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <PokeStat pokemon={pokemon}/>
                            </Grid>
                        </>
                    ) : (
                    <Box>Aucun Pokémon trouvé !</Box>
                )}
            </Grid>
            <Grid item>
                <Button component={Link} to={"/"} variant="contained">
                    Retourner à la liste des Pokémons
                </Button>
            </Grid>
        </Grid>
</Container>
  );
}

export default PokeDetail;