import { ListPokemon } from '../interfaces/pokemon.interface';
import { Card, CardContent, Typography, CardMedia, CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';
import { Box } from '@mui/system';
import { useEffect, useState } from 'react';
import { getColorFromUrl } from '../utils/colors';

interface PokeCardProps {
    pokemon: ListPokemon;
}

const PokeCard = ({ pokemon }: PokeCardProps) => {
    const [pokemonColor, setPokemonColor] = useState<string | null>
    (null);

    const getPokemonColor = async () => {
        const color = await getColorFromUrl(pokemon.image);
        if (color) setPokemonColor(color);
    };

    useEffect(() => {
        getPokemonColor();
    }, []);

    return (
        <Card sx={{ backgroundColor: pokemonColor }}>
            <CardActionArea>
                <Link to={`pokemon/${pokemon.name}`} style={{textDecoration:"none", color: "white"}}>
                    <CardMedia
                        component="img"
                        image={pokemon.image}
                        title={pokemon.name}
                        sx={{ height: 100, objectFit: "contain" }}
                    />
                    <CardContent>
                        <Box sx={{  
                            display: "flex", 
                            justifyContent:"center",
                            flexDirection: "column",
                            alignItems: "center",
                            color: "white",
                        }}>
                            <Typography sx={{ textTransform: "capitalize" }}>
                                {pokemon.name}
                            </Typography> 
                            <Typography sx={{ textTransform: "capitalize" }}>
                                #{pokemon.pokedexNumber}
                            </Typography>
                        </Box>
                    </CardContent>
                </Link>
            </CardActionArea>
        </Card>
    );
}

export default PokeCard