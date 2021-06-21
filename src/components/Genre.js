import { useParams, Switch } from 'react-router-dom'
import { useState, useEffect } from 'react'
import GameTiles from './GameTiles.js'
import './Genre.css'
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'
import { HiOutlineArrowNarrowRight, HiOutlineArrowNarrowLeft } from 'react-icons/hi';

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
            (page > 1) ? <HiOutlineArrowNarrowLeft variant='dark' className='back' onClick={back}/>:
            <></>
        )
    }

    function URLFormatter() {
        if(genre === 'MMO') genre = 'Massively Multiplayer'
        if(genre === 'RPG') genre = 'role playing games rpg'
        let newGenre = genre.toLowerCase()
        newGenre = newGenre.replace(/\s/g, '-')
        console.log(newGenre)
        return `https://api.rawg.io/api/games?key=5e704af79f8045638311f0553d4e1b86&genres=${newGenre}&page=${page}&page_size=20`
    }
    
    useEffect(async ()=>{
      let url = await URLFormatter()
      console.log(url)
      fetch(url)
      .then(response=>response.json())
      .then(data=>setGameList(data.results))
    }, [page, genre])

    useEffect(()=>{
        setPage(0)
      }, [genre])


    return (
        <>
            <div className='description'>
               <h1>{genre}</h1>
            </div>
            <div className="gameList">
                {console.log(gameList)}
                {gameList.map(game => <GameTiles gameInfo={game} />)}
                {backButton()}
                <HiOutlineArrowNarrowRight className='next' variant='dark' onClick={next} />
            </div>
        </>
    )
}

export default Genre;