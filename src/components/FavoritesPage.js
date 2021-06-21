import './FavoritesPage.css'
import Button from 'react-bootstrap/Button';
import {useState, useContext} from 'react'
import GameTiles from './GameTiles'
import AppContext from '../AppContext';

function FavoritesPage() {
  const [modalShow, setModalShow] = useState(false);
  const { favoriteData } = useContext(AppContext)

  return (
    <>
      <div className="favoritesPage">
      {(favoriteData.length === 0) ? 
      (<div className="noFavorites">
        <img src="https://media.tenor.com/images/aafc827dad01b1f0974c5388674f8302/tenor.gif" />
        <div><h2>You have no favorites!</h2></div>
      </div>) : <></> }
        {favoriteData.map(game => {
          return (
            <GameTiles gameInfo={game} />
          )
        })}
      </div>
    </>
  )
}

export default FavoritesPage;