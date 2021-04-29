import React, { useState } from 'react';
import { NomineeList } from './components/NomineeList';
import { SearchBar } from './components/SearchBar';
import { retrieveMovies } from './utilities/OMDB';
import './App.css';
import { Nominee } from './components/Nominee';

const App = () => {
  const [term, setTerm] = useState('');
  const [nominees, setNominees] = useState([])
  const [nominations, setNominations] = useState([]);

  const handleChange = e => {
    setTerm(e.target.value);
    retrieveMovies(e.target.value).then(movies => setNominees(movies));
  }

  const addNomination = nominee => {
    setNominations([...nominations, nominee]);
  }

  const removeNomination = e => {

  }

  return (
    <div className="app-body">
      <span style={{textAlign: 'center'}}>The Shoppies: Movie awards for entreprenuers</span>
      <SearchBar handleChange={handleChange} term={term}/>
      <div className="flex-container">
        <div className="container">
          <h2>Results {term && `for "${term}"`}</h2>
          <NomineeList nominees={nominees} handleClick={addNomination}/>
        </div>
        <div className="container">
          <h2>Nominations</h2>
          <NomineeList nominees={nominations} handleClick={removeNomination}/>
        </div>
      </div>
    </div>
  );
}

export default App;
