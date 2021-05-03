import React from 'react';
import { Nominee } from './Nominee';
import '../App.css';

export const NomineeList = props => {
    return (
        <div>
            <ul>{props.nominees ? props.nominees.length ? 
            props.nominees.map(movie => {return <li><Nominee nominee={movie} 
                key={movie.id} handleClick={props.handleClick}
                action={props.action}/></li>
            }) : props.action === 'Nominate' && <div>No results found. Try a different movie.</div>: null}
            </ul>
        </div>
    )
}