import React from 'react';
require('../styles/buttonStyles.css');

export default function NewGame(props){
        return(
            <a href="#" class="myButton" onClick={props.onClick}>Undo</a>
        )
}

