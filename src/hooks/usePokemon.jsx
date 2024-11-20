import axios from "axios";
import { useEffect, useState } from "react";
import downloadPokemon from "../utils/downloadPokemon";
import { useParams } from "react-router-dom";

function usePokemon(pokemonName) {
  const { id } = useParams();

  const POKEMON_DETAIL_URL = "https://pokeapi.co/api/v2/pokemon/";
  const [pokemon, setPokemon] = useState(null);

  const [pokemonListState, setPokemonListState] = useState({
    pokemonList: [],
    pokedexUrl: "",
    nextUrl: "",
    prevUrl: "",
  });

  async function dowloadGivenPokemons(id) {
    const response = await axios.get(POKEMON_DETAIL_URL + ((pokemonName) ? pokemonName : id));
    const pokemon = response.data;
    setPokemon({
      name: pokemon.name,
      height: pokemon.height,
      weight: pokemon.weight,
      types: pokemon.types,
      image: pokemon.sprites.other.dream_world.front_default,
    });
    const types = response.data.types.map((t) => t.type.name);
    return types[0];
  }

  async function downloadPokemonRelated(id) {
    try {
      const type = await dowloadGivenPokemons(id);
    await downloadPokemon(
      pokemonListState,
      setPokemonListState,
      `https://pokeapi.co/api/v2/type/${type}/`
    );
    } catch(e) {
      console.log("No pokemon found");
      
    }
  }

  useEffect(() => {
    downloadPokemonRelated(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id, pokemonName]);

  return [pokemon, pokemonListState];
}

export default usePokemon;
