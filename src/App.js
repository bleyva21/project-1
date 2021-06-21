import { useEffect, useState } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './components/Home.js'
import AppContext from './AppContext.js'
import Nav from './components/Nav.js'
import Genre from './components/Genre.js'
import FavoritesPage from './components/FavoritesPage.js'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [genres, setGenres] = useState([])
  const [favoriteId, setFavoriteId] = useState([])
  const [favoriteData, setFavoriteData] = useState([])

  useEffect (()=> {
    fetch('https://api.rawg.io/api/genres?key=5e704af79f8045638311f0553d4e1b86')
    .then(response => response.json())
    .then(data=> setGenres(data.results))
  }, [])
  console.log()
  return (
    <AppContext.Provider value={{genres, favoriteId, setFavoriteId, favoriteData, setFavoriteData}}>
      <Router>
      <body>
      <Nav /> 
      {/* {console.log(genres)} */}  
          <Route exact path='/'>
            <Home/>
          </Route>
            <Switch>
            <Route exact path='/FavoritesPage'>
              <FavoritesPage/>
            </Route>
            <Route exact path='/:genre' component={Genre}/>
            </Switch>
      </body> 
      </Router>
    </AppContext.Provider>
  );
}

export default App;
