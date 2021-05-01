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

  // Add the specified nominee to the nomination list if the list is less than 5.
  const addNomination = nominee => {
    if(nominations.length < 5){
      // Checks if the nominee is already in the nomination list.
      if(nominations.findIndex(nomination => nomination.id === nominee.id) === -1){
        setNominations([...nominations, nominee]);
        document.getElementById(nominee.id).disabled = true;
      }
      else{
        document.getElementById(nominee.id).disabled = true;
      }
    }
  }

  // Remove the specified nominee from the nominations list.
  const removeNomination = nominee => {
    const filteredNominations = nominations.filter(nomination => 
      nomination.id !== nominee.id);
    setNominations([...filteredNominations]);    
    document.getElementById(nominee.id).disabled = false;
  }

  // Checks if the user made previous nominations and readds them to the list.
  useEffect(() => {
    const previousNominations = JSON.parse(localStorage.getItem('nominations')) 
    || [];
    setNominations([...previousNominations]);
  }, [])

  // Display banner when five nominees have been selected and remove otherwise.
  useEffect(() => {
    if(nominations.length === 5){
      document.querySelector('.nominations-banner').style.display = 'block';
    }
    else{
      document.querySelector('.nominations-banner').style.display = 'none';
    }
  }, [nominations])

  // Saves nomination list to local storage everytime the user alters it.
  useEffect(() => {
    console.log(nominations)
    localStorage.setItem('nominations', JSON.stringify(nominations));
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
