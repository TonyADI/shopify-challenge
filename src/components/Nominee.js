import React from 'react';
import '../App.css';

export const Nominee = props => {
    const handleClick = () => {
        props.handleClick(props.nominee);
    }
    return (
        <div className="nominee-container">
            <img className="movie-poster" src={props.nominee.imageUrl} 
            alt="poster"/> <div><span>{props.nominee.title} </span> 
            <span>({props.nominee.year})</span>
            <button id={props.nominee.id} className="button" onClick={handleClick}>
                {props.action}</button></div>
        </div>
    )
}