import './GenreButtons.css'
import { Link } from 'react-router-dom'
import Genre from './Genre.js'

function GenreButtons ({genres, onHide}) {
  const buttons = {
    'Action': <Link to='/Action' onClick={onHide}><h5>Action</h5></Link>,
    'Indie': <Link to='/Indie' onClick={onHide}><h5 >Indie</h5></Link>,
    'Adventure': <Link to='/Adventure' onClick={onHide}><h5>Adventure</h5></Link>,
    'RPG': <Link to='/RPG' onClick={onHide}><h5>RPG</h5></Link>,
    'Strategy': <Link to='/Strategy' onClick={onHide}><h5>Strategy</h5></Link>,
    'Shooter': <Link to='/Shooter' onClick={onHide}><h5>Shooter</h5></Link>,
    'Casual': <Link to='/Casual' onClick={onHide}><h5>Casual</h5></Link>,
    'Puzzle': <Link to='/Puzzle'  onClick={onHide}><h5>Puzzle</h5></Link>,
    'Arcade': <Link to='/Arcade'  onClick={onHide}><h5>Arcade</h5></Link>,
    'Platformer': <Link to='/Platformer' onClick={onHide}><h5>Platformer</h5></Link>,
    'Racing': <Link to='/Racing' onClick={onHide}><h5>Racing</h5></Link>,
    'MMO': <Link to='/MMO' onClick={onHide}><h5>MMO</h5></Link>,
    'Sports': <Link to='/Sports' onClick={onHide}><h5>Sports</h5></Link>,
    'Fighting': <Link to='/Fighting' onClick={onHide}><h5>Fighting</h5></Link>,
    'Family': <Link to='/Family' ><h5>Family</h5></Link>,
    'Board Games': <Link to='/Board Games' onClick={onHide}><h5>Board Games</h5></Link>,
    'Educational': <Link to='/Educational' onClick={onHide}><h5>Educational</h5></Link>,
    'Card': <Link to='/Card' onClick={onHide}><h5>Card</h5></Link>,
  }
  let genreMatches = genres.map(genre=>{
    return (buttons[genre.name])})
return (
  <>
    <div className='genreButtons'>
      {genreMatches}
    </div>
  </>
)}
export default GenreButtons;