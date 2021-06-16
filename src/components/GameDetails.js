import parse from 'html-react-parser';
import { useState, useEffect } from 'react'

function GameDetails({ id }){
  const [gameDetails, setGameDetails] = useState('')
  const [showMore, setShowMore] = useState(false)

  useEffect(()=>{
    fetch(`https://api.rawg.io/api/games/${id}?key=a6f95382b2a642d7bd6c1dd0c5afbdf9`)
    .then(response=>response.json())
    .then(data=>setGameDetails(data))
  }, [])

  if(gameDetails.description) {
  let str = gameDetails.description
  let firstStr = str.substring(0, str.indexOf('/')+3)
  let secondStr = str.substring(str.indexOf('/')+3)
  return (<>
            {parse(firstStr)}
            {(showMore) ? parse(secondStr) : <></>}
            <a onClick={()=> setShowMore(!showMore)}>
            {(showMore) ? <div>See less...</div> : <div>See more...</div>}
              </a>
          </>)}
  else { return (<></>)}
}

export default GameDetails;