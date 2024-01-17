import { useEffect, useState } from 'react';
import { IndexedPokemon, PokemonListResponse } from '../interfaces/pokemon.interface';
import { POKEMON_API_POKEMON_URL } from '../constants/pokemon.constants';
import { httpClient } from '../api/httpsClient';


function usePokemons() {
    // TABLEAU DE POKEMONs INITIALISER EN TABLEAU VIDE
    const [pokemons, setPokemons] = useState<IndexedPokemon[]>([]);

    // CONSTANTE URL INITIALISER SUR URL POKEMON
    const [nextUrl, setNextUrl] = useState<string | null> 
        (POKEMON_API_POKEMON_URL)

    useEffect (() => {
        fetchPokemon()
    }, [])

    // RÉCUPÈRE LES POKEMONS - APPEL API
    const fetchPokemon = async () => {
        if (nextUrl) {
            const result = await httpClient.get<PokemonListResponse>(nextUrl)
            // Chainage optionnel simplifie l'accès aux valeurs de propriétés des objets interconnectés et imbriquées 
            // quand il est possible qu'une fonction soit undefined ou null
            if (result?.data?.results) {
                setPokemons(result.data.results)
            }
            console.log(result)
        }
    }
        
    return {
            pokemons
    }
}

export default usePokemons