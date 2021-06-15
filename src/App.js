import { useEffect, useState } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './components/Home.js'
import AppContext from './AppContext.js'
import Nav from './components/Nav.js'
import Genre from './components/Genre.js'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [genres, setGenres] = useState([])

  useEffect (()=> {
    fetch('https://api.rawg.io/api/genres?key=a6f95382b2a642d7bd6c1dd0c5afbdf9')
    .then(response => response.json())
    .then(data=> setGenres(data.results))
  }, [])
  return (
    <AppContext.Provider value={{genres}}>
      <Router>
      <Nav /> 
      {/* {console.log(genres)} */}  
          <Route exact path='/'><Home/></Route>
          <Route exact path='/:genre'><Genre/></Route>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
