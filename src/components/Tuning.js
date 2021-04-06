import React from 'react';
import TuningPic from '../assets/Tuning.png';
import StringGroups from '../assets/String_Groups.png';

const Tuning = () => {
    return(
        <div id="tuning">
            <h2>Tuning</h2>
            <section>
                <p>There are 14 strings on each Rondalla instrument.</p>
            <figure>
                <img src={StringGroups} alt="String Groups on Laud" width={500}/>
                <figcaption>String groups with Laud (Applied to all 3 instruments, Bandurria, Laud, Octavina)</figcaption>
            </figure>
            </section>
            <figure>
                <img src={TuningPic} alt="Tuning Sheet Music"/>
            </figure>
        </div>
    )
}

export default Tuning;