import { DetailPokemon } from "../interfaces/pokemon.interface";
import { Card, CardContent, CardMedia, Box, Typography } from '@mui/material';

interface PokemonAvatarProps {
    pokemon: DetailPokemon;
}

function PokeAvatar({pokemon}: PokemonAvatarProps) {
    
  return (
    <Card sx={{backgroundColor: pokemon.color}}>
        <CardMedia 
                component="img"
                sx={{height: 100, objectFit: "contain"}}
                image={pokemon.sprites.other["official-artwork"].front_default}
                title={pokemon.name}>
            </CardMedia>
        <CardContent>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
            }}>
                <Typography sx={{textTransform: "capitalize", color: "white"}}>
                    {pokemon.name}
                </Typography>
                <Typography sx={{textTransform: "capitalize", color: "white"}}>
                    #{pokemon.id}
                </Typography>
            </Box>
        </CardContent>
    </Card>
  )
}

export default PokeAvatar