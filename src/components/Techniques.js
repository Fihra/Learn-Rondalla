import React from 'react';
import TremoloPic from '../assets/Tremolo.png';

const Techniques = () => {
    return(
        <div id="technique">
            <h2>Techniques</h2>
            <figure>
                <img src={TremoloPic} alt="Tremolo sheet music"/>
            </figure>
        </div>
    )
}

export default Techniques;