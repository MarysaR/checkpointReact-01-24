import { useEffect, useState } from 'react';
import { IndexedPokemon, PokemonListResponse, ListPokemon, IndeType, PokemonByTypeResponse } from '../interfaces/pokemon.interface';
import { POKEMON_API_POKEMON_URL, POKEMON_IMAGES_BASE_URL, POKEMON_TYPES } from '../constants/pokemon.constants';
import { httpClient } from '../api/httpsClient';


function usePokemons() {
    // TABLEAU DE POKEMONS INITIALISÉ EN TABLEAU VIDE
    // CONSTANTE URL INITIALISER SUR URL POKEMON
    // SÉLECTION DE POKEMONS PAR TYPE
    const [pokemons, setPokemons] = useState<ListPokemon[]>([]);
    const [nextUrl, setNextUrl] = useState<string | null>(POKEMON_API_POKEMON_URL);
    const [selectedType, setSelectedType] = useState<IndeType | null>(null);

    useEffect(() => {
        if (selectedType) {
          fetchPokemonByType();
        } else {
          fetchPokemon();
        }
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [selectedType]);


    // RÉCUPÉRATION DES POKÉMONS PAR TYPE
    const fetchPokemonByType = async () => {
        if (selectedType) {
            const result = await httpClient.get<PokemonByTypeResponse>(selectedType.url);
            if (result?.data?.pokemon) {
                const listPokemons = result.data.pokemon.map((p) => indexPokeToListPoke(p.pokemon)
                );
                    setPokemons(listPokemons);
                    setNextUrl(POKEMON_API_POKEMON_URL);
            }
            console.log(result)
        }
    }

    // CONVERTION URL & ID
    const indexPokeToListPoke = (IndexedPokemon: IndexedPokemon) => {
        const pokedexNumber = parseInt(
            IndexedPokemon.url
                .replace(`${POKEMON_API_POKEMON_URL}/`, "")
                .replace("/", ""))

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
            // console.log(result)
        }
    }
        
    return {
        pokemons,
        fetchNextPage: fetchPokemon,
        hasMorePokemon: !!nextUrl,
        pokemonTypes: POKEMON_TYPES,
        selectedType,
        setSelectedType,
        setPokemons
    }
};

export default usePokemons;