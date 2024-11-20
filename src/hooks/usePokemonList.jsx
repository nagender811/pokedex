import axios from "axios";
import { useEffect, useState } from "react";
import downloadPokemon from "../utils/downloadPokemon";

function usePokemonList(DEFAULT_URL){

  const [pokemonListState, setPokemonListState] = useState({
    pokemonList: [],
    pokedexUrl: DEFAULT_URL,
    nextUrl: DEFAULT_URL,
    prevUrl: DEFAULT_URL
  })


  useEffect(() => {
    downloadPokemon(pokemonListState, setPokemonListState, DEFAULT_URL);
  }, [pokemonListState.pokedexUrl]);

  return [pokemonListState, setPokemonListState]
}

export default usePokemonList