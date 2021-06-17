import './GameTiles.css'
import Button from 'react-bootstrap/Button';
import {useState, useEffect} from 'react'
import CenteredModal from './CenteredModal.js'



function GameTiles ({gameInfo}) {
    const [modalShow, setModalShow] = useState(false);
    
return (
  <div className="gameTiles" style={{backgroundImage: 'url('+ gameInfo.background_image +')'}}>
    <div className='gameName'>{gameInfo.name}</div>

    <div className='gameDetails'>
    <Button className='gameDetails' variant="dark" onClick={() => setModalShow(true)}>
        Game Details
      </Button>
    </div>
      <CenteredModal
        show={modalShow} gameInfo={gameInfo}
        onHide={() => setModalShow(false)}
      />
  </div>
 )
}

export default GameTiles;