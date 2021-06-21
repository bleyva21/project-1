import './GenreButtons.css'
import { Link } from 'react-router-dom'
import Genre from './Genre.js'

function GenreButtons ({genres, onHide}) {

  // function colorGenerator(){
  //   function getRandomInt(min, max) {
  //     min = Math.ceil(min);
  //     max = Math.floor(max);
  //     return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  //   }

  //   let output = '#';
    
  //   for(var i = 0; i < 6; i++){
  //     let z = getRandomInt(0, 15)
  //     if(z > 9){
  //       switch (z){
  //         case 10 : z = 'a'; break;
  //         case 11 : z = 'b'; break;
  //         case 12 : z = 'c'; break;
  //         case 13 : z = 'd'; break;
  //         case 14 : z = 'e'; break;
  //         case 15 : z = 'f'; break;
  //       }
  //       output = output.concat(z)
  //       continue;
  //     }
  //     output = output.concat(z.toString())
  //   }
  //   return(
  //     <>{output}</>
  //   )
  // }

  let genreMatches = genres.map(genre=>{
    if (genre.name === 'Massively Multiplayer') genre.name = 'MMO';
    return (<Link to={`/${genre.name}`} onClick={onHide} style={{textDecoration: 'none', textDecorationColor: 'white'}}><h4 className={(genre.name==='Board Games')? 'Board-Games' : genre.name }>{genre.name}</h4></Link>)})

return (
  <>
    <div className='genreButtons'>
      {genreMatches}
    </div>
  </>
)}
export default GenreButtons;