import { Modal } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react'
import GameDetails from './GameDetails.js'
import GameTrailer from './GameTrailer.js'
import GenreButtons from './GenreButtons.js'
import FavoriteGame from './FavoriteGame.js'
import Slider from './Slider.js';
import './CenteredModal.css'

function CenteredModal(props) {
  const { gameInfo } = props;
  
  let rating = '';
  (gameInfo.esrb_rating) ? rating = gameInfo.esrb_rating.name : rating = 'https://www.esrb.org/wp-content/uploads/2019/05/RP.svg';

  switch (rating) {
    case 'Adults Only':
      rating = 'https://www.esrb.org/wp-content/uploads/2019/05/AO.svg'
      break;
    case 'Mature':
      rating = 'https://www.esrb.org/wp-content/uploads/2019/05/M.svg'
      break;
    case 'Teen':
      rating = 'https://www.esrb.org/wp-content/uploads/2019/05/T.svg'
      break;
    case 'Everyone 10+':
      rating = 'https://www.esrb.org/wp-content/uploads/2019/05/E10plus.svg'
      break;
    case 'Everyone':
      rating = 'https://www.esrb.org/wp-content/uploads/2019/05/E.svg'
      break;
    default:
      rating = 'https://www.esrb.org/wp-content/uploads/2019/05/RP.svg'
      break;
  }

  function ratingsFormatter () {
    let metScore = gameInfo.metacritic
    let ratingHTML = <></>
    if (metScore >= 80) {
        ratingHTML = (<span className='metacritic' data-high>{metScore}</span>)
    } else if (metScore >= 51) {
      ratingHTML = (<span className='metacritic' data-medium>{metScore}</span>)
    } else {
      ratingHTML = (<span className='metacritic' data-low>{metScore}</span>)
    }

    if (metScore) {
      return (<h5> Overall Rating: {gameInfo.rating}<br/>
      Metacritic Rating: {ratingHTML}</h5>)
    } else { return (<h5> Overall Rating: {gameInfo.rating}</h5>)}
  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          {gameInfo.name}
          <FavoriteGame gameInfo={gameInfo} /> 
          {ratingsFormatter()}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <GameTrailer id={gameInfo.id}/>
      <Slider images={gameInfo.short_screenshots}/>
        <GameDetails id={gameInfo.id}/>
        
        <img height='100' src={rating}/>
        <GenreButtons onHide={props.onHide} genres={gameInfo.genres}/>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="dark" onClick={props.onHide}>Close</Button>
        
      </Modal.Footer>
    </Modal>
  );
}

export default CenteredModal;