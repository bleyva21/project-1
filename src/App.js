import { useEffect, useState } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './components/Home.js'
import AppContext from './AppContext.js'
import Nav from './components/Nav.js'

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
        <Route exact path='/' component={Home}/>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
