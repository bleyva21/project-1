import './FavoritesPage.css'
import Button from 'react-bootstrap/Button';
import {useState, useContext} from 'react'
import GameTiles from './GameTiles'
import AppContext from '../AppContext';

function FavoritesPage() {
  const [modalShow, setModalShow] = useState(false);
  const { favoriteData } = useContext(AppContext)

  return (
    <div className="favoritesPage">
      {favoriteData.map(game => {
        return (
         
            <GameTiles gameInfo={game} /> 
          )
      })}
    </div>
  )
}

export default FavoritesPage;