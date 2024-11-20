import React, { useEffect, useState } from "react";
import "./PokemonList.css";
import Pokemon from "../pokemon/Pokemon";
import usePokemonList from "../../hooks/usePokemonList";

function PokemonList() {
  const DEFAULT_URL = "https://pokeapi.co/api/v2/pokemon/";
  
  const [pokemonListState, setPokemonListState] = usePokemonList(DEFAULT_URL)
  return (
    <div className="pokemon-list-wrapper">
      <div>
        <h1>Pokemon List</h1>
      </div>
      <div className="page-controler">
        <button onClick={() =>setPokemonListState({...pokemonListState, pokedexUrl:pokemonListState.prevUrl})}>prev</button>
        <button onClick={() => setPokemonListState({...pokemonListState, pokedexUrl:pokemonListState.nextUrl})}>next</button>
      </div>
      <div className="pokemon-list">
        {pokemonListState.pokemonList.map((pokemon) => (
          <Pokemon name={pokemon.name} key={pokemon.id} url={pokemon.image} id={pokemon.id} />
        ))}
      </div>
    </div>
  );
}

export default PokemonList;
