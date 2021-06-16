import { useParams } from 'react-router-dom'
import AppContext from '../AppContext';
import { useState, useEffect } from 'react'
import GameTiles from './GameTiles.js'
import './Genre.css'
import Button from 'react-bootstrap/Button';

function Genre () {
    let { genre } = useParams();
    const [gameList, setGameList] = useState([])
    const [page, setPage] = useState(0)
    if (page === 0) setPage(1);

    function next(){
        setPage(page+1)
    }

    function back(){
        setPage(page-1)
    }

    function backButton(){
        return(

            (page > 1) ? <Button variant='primary' onClick={back}>Back</Button> :
            <></>
        )
    }

    function URLFormatter() {
        if(genre === 'MMO') genre = 'Massively Multiplayer'
        if(genre === 'RPG') genre = 'role playing gamess rpg'
        let newGenre = genre.toLowerCase()
        newGenre = newGenre.replace(/\s/g, '-')
        console.log(newGenre)
        return `https://api.rawg.io/api/games?key=a6f95382b2a642d7bd6c1dd0c5afbdf9&genres=${newGenre}&page=${page}&page_size=20`
    }
    
    useEffect(async ()=>{
      let url = await URLFormatter()
      console.log(url)
      fetch(url)
      .then(response=>response.json())
      .then(data=>setGameList(data.results))
    }, [page])

    return(
        <div className="gameList">
          {console.log(gameList)}
          {gameList.map(game => <GameTiles gameInfo={game}/>)}
          {backButton()}
          <Button variant='primary' onClick={next}>Next</Button>
        </div>
    )
}

export default Genre;