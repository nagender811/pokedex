import React from "react";
import "./PokemonDetails.css";
import { Link, useParams } from "react-router-dom";
//custom hooks
import usePokemon from "../../hooks/usePokemon";
import Pokemon from "../pokemon/Pokemon";
import Navbar from "../navbar/Navbar";

function PokemonDetails({ pokemonName }) {
  const [pokemon, pokemonListState] = usePokemon(pokemonName);
  return (
    <>
      {pokemon && (
        <div>
          <Link to="/" className="link">
            <Navbar />
          </Link>
          <div className="pokemon-details-wrapper">
            <div className="pokemon-detail-name">{pokemon.name}</div>
            <div className="pokemon-image">
              <img src={pokemon.image} />
            </div>
            <div className="pokemon-attribute">
              <div>Height: {pokemon.height}</div>
              <div>Weight: {pokemon.weight}</div>
            </div>
            <div className="pokemon-types">
              <h1>Types:</h1>
              {pokemon.types.map((t) => (
                <span className="type" key={t.type.name}>
                  {t.type.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
      <div className="similar-pokemons">
        <h2>Similar Pokemons</h2>
        <div className="pokemon-similar-boxes">
          {pokemonListState.pokemonList.length > 0 ? (
            pokemonListState.pokemonList.map((pokemon) => (
              <Pokemon
                name={pokemon.name}
                key={pokemon.id}
                url={pokemon.image}
                id={pokemon.id}
              />
            ))
          ) : (
            <div className="not-found">No Pokemon Found!!</div>
          )}
        </div>
      </div>
    </>
  );
}

export default PokemonDetails;
