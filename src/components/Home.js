import { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom'
import AppContext from '../AppContext.js'
import './Home.css';

function Home (){
  const { genres } = useContext(AppContext)
  const genreButtons = genres.map(genre=>{
    if (genre.name === 'Massively Multiplayer') genre.name = 'MMO'
    return (<Link style={{textDecoration: "none", textDecorationColor: "white", borderRadius: '50%' }} to={`/${genre.name}`}><div className='genre' style={{backgroundImage: 'url('+genre.image_background+')'}}>{genre.name}</div></Link>)
  })
  return (
    <div className="home">
      {genreButtons}
    </div>
  )
}

export default Home