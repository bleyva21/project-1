import { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom'
import AppContext from '../AppContext.js'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import './Home.css';

function Home (){
  const { genres } = useContext(AppContext)


  const genreButtons = genres.map(genre=>{
    const renderTooltip = (props) => (
      <Tooltip id="button-tooltip" {...props}>
       Games Count: {genre.games_count}
      </Tooltip>)
    if (genre.name === 'Massively Multiplayer') genre.name = 'MMO'
    return (
      <OverlayTrigger
      placement="bottom"
      delay={{ show: 250, hide: 400 }}
      overlay={renderTooltip}
      >
        <Link style={{textDecoration: "none", textDecorationColor: "white", borderRadius: '50%' }} to={`/${genre.name}`}>
          <div className='genre' style={{backgroundImage: 'url('+genre.image_background+')'}}>
          <div id='overlay'/>
          <h3 className='genreName'>{genre.name}</h3>
          {/* <p style={{display: 'none'}}>Games Count: {genre.games_count}</p> */}
          </div>
        </Link>
      </OverlayTrigger>)
  })
  return (

    <div className="home">
      {genreButtons}
    </div>
  )
}

export default Home