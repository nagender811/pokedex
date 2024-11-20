import React, { useState } from 'react'
import './Pokedex.css'
import Search from '../search/Search'
import PokemonList from '../pokemonList/PokemonList'
import PokemonDetails from '../pokemonDetails/PokemonDetails';
import Navbar from '../navbar/Navbar';

function Pokedex() {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <div className='wrapper'>
      {searchTerm ? "" : <div className='navbar'><Navbar /></div>}
      
      <div className='pokedex-wrapper'>
      <Search updateSearchTerm={setSearchTerm}/>
       {searchTerm ? <PokemonDetails pokemonName={searchTerm}/> : <PokemonList />}
    </div>
    </div>
    
  )
}

export default Pokedex
