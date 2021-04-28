import React from 'react';
import '../App.css';

export const NomineeList = props => {
    return (
        <div>
            <ul>{props.nominees ? props.nominees.map(nominee => ) : null}
            </ul>
        </div>
    )
}