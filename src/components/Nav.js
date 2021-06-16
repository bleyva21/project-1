import {Link} from 'react-router-dom'
import './Nav.css'

function Nav () {

    return(
        <nav>
          <Link to="/">GameGenres
            {/* <div style={{backgroundImage: 'url(https://api.freelogodesign.org/files/5eb5391d67a24960bf93cc058bc02b73/thumb/logo_200x200.png?v=0)'}}/> */}
            {/* <img src='https://api.freelogodesign.org/files/5eb5391d67a24960bf93cc058bc02b73/thumb/logo_200x200.png?v=0'/> */}
          </Link>
        </nav>
    )
}

export default Nav