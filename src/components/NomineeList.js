import React from 'react';
import { Nominee } from './Nominee';
import '../App.css';

export const NomineeList = props => {
    return (
        <div>
            <ul>{props.nominees ? props.nominees.map(movie => {
                return <li><Nominee nominee={movie} key={movie.id}
                handleClick={props.handleClick} id={movie.id} 
                action={props.action}/></li>
            }) : null}
            </ul>
        </div>
    )
}