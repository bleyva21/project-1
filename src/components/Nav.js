import {Link} from 'react-router-dom'
import './Nav.css'
// import GenreDescription from './GenreDescription'

function Nav () {


    return(
        <nav style={{backgroundImage: 'url('+ 'https://cdn.staticcrate.com/stock-hd/effects/footagecrate-4k-looping-tech-background-clean-blue-2-prev-full.png' +')'}}>
          <Link to="/">
            <img className='logo'src='https://api.freelogodesign.org/files/5eb5391d67a24960bf93cc058bc02b73/thumb/logo_200x200.png?v=0'/>
          </Link>
          <Link to='/FavoritesPage'>
            <img className='logo'src='https://cdn.thememylogin.com/uploads/edd/2019/03/favorites.png'/>
          </Link>
        </nav>
    )
}

export default Nav