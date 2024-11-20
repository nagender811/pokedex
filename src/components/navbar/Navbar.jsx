import React from 'react'
import ball from "../../assets/ball.png";
import './Navbar.css'
function Navbar() {
  return (
    <div className='pokemon-redirect'>
      <img src={ball} alt="" />
      <h1>POKEDEX</h1>
    </div>
  )
}

export default Navbar
