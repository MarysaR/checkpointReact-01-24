import { useEffect, useState } from 'react';
import { IndexedPokemon, PokemonListResponse, ListPokemon } from '../interfaces/pokemon.interface';
import { POKEMON_API_POKEMON_URL, POKEMON_IMAGES_BASE_URL } from '../constants/pokemon.constants';
import { httpClient } from '../api/httpsClient';


function usePokemons() {
    // TABLEAU DE POKEMONs INITIALISER EN TABLEAU VIDE
    const [pokemons, setPokemons] = useState<ListPokemon[]>([]);


    // CONSTANTE URL INITIALISER SUR URL POKEMON
    const [nextUrl, setNextUrl] = useState<string | null> 
        (POKEMON_API_POKEMON_URL)

    useEffect (() => {
        fetchPokemon()
    }, [])


    const indexPokeToListPoke = (IndexedPokemon: IndexedPokemon) => {
        const pokedexNumber = parseInt(IndexedPokemon.url.replace(`${POKEMON_API_POKEMON_URL}/`, "").replace("/", ""))

        const listPokemon: ListPokemon = {
        name: IndexedPokemon.name,
        url: IndexedPokemon.url,
        image: `${POKEMON_IMAGES_BASE_URL}/${pokedexNumber}.png`,
        pokedexNumber
        }
        return listPokemon
    } 

    // APPEL API - RÉCUPÈRE LES POKEMONS - MAPPE CHAQUE POKEMON INDEXE DE LA REP API À L'INDEX POKEMON LISTPOKEMON 
    const fetchPokemon = async () => {
        if (nextUrl) {
            const result = await httpClient.get<PokemonListResponse>(nextUrl);
            if (result?.data?.results) {
                const listPokemons = result.data.results.map(p => indexPokeToListPoke(p))
                setPokemons([...pokemons, ...listPokemons])
                setNextUrl(result.data.next)
            }
            console.log(result)
        }
    }
        
    return {
    pokemons,
    fetchNextPage: fetchPokemon,
    hasMorePokemon: !!nextUrl
    }
};

export default usePokemons;