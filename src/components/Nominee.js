import React from 'react';
import '../App.css';

export const Nominee = props => {
    const handleClick = () => {
        props.handleClick(props.nominee);
    }
    return (
        <div className="nominee-container">
            <span>{props.nominee.title} ({props.nominee.year})</span>
            <button id={props.id} className="button" onClick={handleClick}>
                {props.action}</button>
        </div>
    )
}