import {Link} from 'react-router-dom'
import './Nav.css'
// import GenreDescription from './GenreDescription'

function Nav () {


    return(
        <nav >
          <Link to="/">
            <img className='logo'src='https://api.freelogodesign.org/files/5eb5391d67a24960bf93cc058bc02b73/thumb/logo_200x200.png?v=0'/>
          </Link>
          <Link to='/FavoritesPage'>
            <img className='logo' src='https://cdn.thememylogin.com/uploads/edd/2019/03/favorites.png'/>
          </Link>
        </nav>
    )
}

export default Nav