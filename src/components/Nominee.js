import React from 'react';
import '../App.css';

export const Nominee = props => {
    return (
        <div>
            <button className="button" onClick={props.handleClick}>
                Nominate</button>
        </div>
    )
}