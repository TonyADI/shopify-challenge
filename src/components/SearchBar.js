import React from 'react';
import '../App.css';

export const SearchBar = props => {
    return (
        <div className="searchbar-container">
            <h4>Movie Title</h4>
            <div className="input-container">
                <i className="fa fa-search search-icon"></i>
                <input placeholder="Enter movie title.." value={props.term}
                className="input" onChange={props.handleChange}/>
            </div>
        </div>
    )
}