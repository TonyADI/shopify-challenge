import React, { useState, useEffect } from 'react';
import { NomineeList } from './components/NomineeList';
import { SearchBar } from './components/SearchBar';
import { retrieveMovies } from './utilities/OMDB';
import './App.css';

const App = () => {
  const [term, setTerm] = useState('');
  const [nominees, setNominees] = useState([])
  const [nominations, setNominations] = useState([]);

  const handleChange = e => {
    setTerm(e.target.value);
    retrieveMovies(e.target.value).then(movies => setNominees(movies));
  }

  const addNomination = nominee => {
    if(nominations.length < 5){
      if(nominations.findIndex(nomination => nomination.id === nominee.id) === -1){
        setNominations([...nominations, nominee]);
        document.getElementById(nominee.id).disabled = true;
      }
      else{
        document.getElementById(nominee.id).disabled = true;
      }
    }
  }

  const removeNomination = nominee => {
    const filteredNominations = nominations.filter(nomination => 
      nomination.id !== nominee.id);
    setNominations([...filteredNominations]);    
    document.getElementById(nominee.id).disabled = false;
  }

  useEffect(() => {
    if(nominations.length === 5){
      document.querySelector('.nominations-banner').style.display = 'block';
    }
    else{
      document.querySelector('.nominations-banner').style.display = 'none';
    }
  }, [nominations])

  return (
    <div className="app-body">
      <div className="nominations-banner">You have selected the maximum 
      number of nominees</div>
      <div className="content-section">
        <h1 className="hero-title">The Shoppies: Movie awards for 
        entreprenuers</h1>
        <SearchBar handleChange={handleChange} term={term}/>
        <div className="flex-container">
          <div className="container">
            <h2>Results {term && `for "${term}"`}</h2>
            <NomineeList nominees={nominees} handleClick={addNomination} 
            action="Nominate"/>
          </div>
          <div className="container">
            <h2>Nominations</h2>
            <NomineeList nominees={nominations} handleClick={removeNomination}
            action="Remove"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
