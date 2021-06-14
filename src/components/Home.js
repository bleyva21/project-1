import { useEffect, useState, useContext } from 'react';
import Fab from '@material-ui/core/Fab';
import { Link } from 'react-router-dom'
import AppContext from '../AppContext.js'
import './Home.css';

function Home (){
  const { genres } = useContext(AppContext)
  const genreButtons = genres.map(genre=>{
    return (<Link style={{textDecoration: "none"}} path=''><Fab>{genre.name}</Fab></Link>)
  })
  return (
    <div className="home">
      {genreButtons}
    </div>
  )
}

export default Home