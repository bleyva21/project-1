import { Modal } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react'
import ReactPlayer from 'react-player/lazy'

// import Slider from './Slider.js';

function CenteredModal(props) {
  const { gameInfo } = props;
  const [trailer, setTrailer] = useState('')
  let rating = '';
  (gameInfo.esrb_rating) ? rating = gameInfo.esrb_rating.name : rating = 'https://www.esrb.org/wp-content/uploads/2019/05/RP.svg';

  switch (rating) {
    case 'Adults Only':
      rating = 'https://www.esrb.org/wp-content/uploads/2019/05/AO.svg'
      break;
    case 'Mature':
      rating = 'https://www.esrb.org/wp-content/uploads/2019/05/M.svg'
      break;
    case 'Teen':
      rating = 'https://www.esrb.org/wp-content/uploads/2019/05/T.svg'
      break;
    case 'Everyone 10+':
      rating = 'https://www.esrb.org/wp-content/uploads/2019/05/E10plus.svg'
      break;
    case 'Everyone':
      rating = 'https://www.esrb.org/wp-content/uploads/2019/05/E.svg'
      break;
    default:
      break;
  }

  useEffect(()=>{
    fetch(`https://api.rawg.io/api/games/${gameInfo.id}/movies?key=a6f95382b2a642d7bd6c1dd0c5afbdf9`)
    .then(response=>response.json())
    .then(data=>setTrailer(data.results))
  }, [])

  function formatter(){
  if (trailer.length !== 0) {
    return (<video controls width="500" autoPlay='true'><source src={trailer[0].data.['480']}/></video>)
  } else {return (<></>)}
  }
  console.log(trailer)
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          {gameInfo.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      {formatter()} 
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
        {/* <Slider images={}/> */}
        <img height='100' src={rating}/>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="dark" onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CenteredModal;