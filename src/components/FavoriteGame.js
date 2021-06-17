import { BsHeart, BsHeartFill } from 'react-icons/bs';
import AppContext from '../AppContext';
import { useState, useContext } from 'react'


function FavoriteGame ({ gameInfo }) {
  const { favoriteId, setFavoriteId, favoriteData, setFavoriteData } = useContext(AppContext)
  const [favorited, setFavorited] = useState(false)
  if (favorited === false) {
    if (favoriteId.indexOf(gameInfo.id) !== -1) {
    setFavorited(true)
    }
  }

  function removeGame () {
    let index = favoriteId.indexOf(gameInfo.id)
    let tmpDataArray = favoriteData
    let tmpIdArray = favoriteId
    tmpIdArray.splice(index, 1)
    tmpDataArray.splice(index, 1)
    setFavoriteId(tmpIdArray);
    setFavoriteData(tmpDataArray);
  }

  return (
    <>
      {(favorited) ? 
      <BsHeartFill className='heart2' onClick={()=>{
        setFavorited(!favorited);
        removeGame()
      }}/>
      : <BsHeart  className='heart1' onClick={()=>{
        setFavorited(!favorited);
        setFavoriteId([...favoriteId, gameInfo.id]);
        setFavoriteData([...favoriteData, gameInfo])
        }}/>}
    </>
  )
}
export default FavoriteGame;