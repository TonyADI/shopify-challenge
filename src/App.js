import React, { useState } from 'react';
import { Nominee } from './components/Nominee';
import { SearchBar } from './components/SearchBar';
import './App.css';

const App = () => {
  const [term, setTerm] = useState('');
  const [nominations, setNominations] = useState([]);

  const handleChange = e => {
    setTerm(e.target.value);
  }

  const addNomination = e => {

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
        </div>
        <div className="container">
          <h2>Nominations</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
