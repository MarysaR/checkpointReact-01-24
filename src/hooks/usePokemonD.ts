import { httpClient } from '../api/httpsClient';
import { POKEMON_API_POKEMON_URL } from '../constants/pokemon.constants';
import { DetailPokemon } from '../interfaces/pokemon.interface';
import { useEffect, useState } from 'react';


interface UsePokemonProps {
    pokemonName: string | undefined;
};

function usePokemonD({ pokemonName }: UsePokemonProps) {
    const [pokemon, setPokemon] = useState<DetailPokemon | null>(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        if (pokemonName) {
            fetchPokemon();
        };
    });

    const fetchPokemon = async () => {
        if (pokemonName) {
            setIsLoaded(true);
            const url = `${POKEMON_API_POKEMON_URL}/${pokemonName}`;
            const result = await httpClient.get<DetailPokemon>(url);
            if(result?.data) {
                setPokemon(result.data)
            }
            setIsLoaded(false);
        };
    };

    return {
        pokemon,
        isLoaded
    };
}



export default usePokemonD;