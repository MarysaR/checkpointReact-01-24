import { useEffect, useState } from 'react';
import { IndexedPokemon, PokemonListResponse, ListPokemon } from '../interfaces/pokemon.interface';
import { POKEMON_API_POKEMON_URL, POKEMON_IMAGES_BASE_URL } from '../constants/pokemon.constants';
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


    // recoit la string à remplacer par l'url PokeAPI et renvoie une nouvelle chaîne vide (reste la barre / et le numéro du pokemon )
    // convertit analyse le nombre convertir en string et renvoie un entier
    const indexPokeToListPoke = (IndexedPokemon: IndexedPokemon) => {
        const pokedexNumber = parseInt(IndexedPokemon.url.replace(`${POKEMON_API_POKEMON_URL}/`, "").replace("/", ""))

        const listPokemon: ListPokemon = {
        name: IndexedPokemon.name,
        url: IndexedPokemon.url,
        image: `${POKEMON_IMAGES_BASE_URL}/${pokedexNumber}.png`,
        pokedexNumber
        }
    } 


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

export default usePokemons;