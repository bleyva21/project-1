import {Link} from 'react-router-dom'
import './Nav.css'

function Nav () {

    return(
        <nav>
          <Link to="" style={{textDecoration: "none"}}><span style={{fontSize: "50px"}}>G</span>ame<span style={{fontSize: "50px"}}> G</span>enres</Link>
        </nav>
    )
}

export default Nav