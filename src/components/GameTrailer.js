import {useState, useEffect} from 'react'

function GameTrailer ({ id }) {
  const [trailer, setTrailer] = useState('')
  
  useEffect(()=>{
      fetch(`https://api.rawg.io/api/games/${id}/movies?key=5e704af79f8045638311f0553d4e1b86`)
        .then(response => response.json())
        .then(data => setTrailer(data.results))
  }, [])
    
      if (trailer.length !== 0) {
        return (
          <div className='videoContainer'>
            <video controls className='videoPlayer' width='auto' autoPlay='true'><source src={trailer[0].data.['480']} /></video>
          </div>)
        } else { return (<></>)}
}

export default GameTrailer;