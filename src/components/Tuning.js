import React from 'react';
import TuningPic from '../assets/images/Tuning.png';
import StringGroups from '../assets/images/String_Groups.png';

import BandurriaTuning from '../assets/audio/Bandurria_Tuning.mp3';
import BandurriaOpen from '../assets/audio/Bandurria_Open_Tuning.mp3';
import LaudTuning from '../assets/audio/Laud_Tuning.mp3';
import LaudOpen from '../assets/audio/Laud_Open_Tuning.mp3';
import OctavinaTuning from '../assets/audio/Octavina_Tuning.mp3';
import OctavinaOpen from '../assets/audio/Octavina_Open_Tuning.mp3';

const audioTunings = [
    {
        fileName: "Bandurria Tuning",
        audioSrc: BandurriaTuning
    },
    {
        fileName: "Bandurria Open Strings",
        audioSrc: BandurriaOpen
    },
    {
        fileName: "Laud Tuning",
        audioSrc: LaudTuning
    },
    {
        fileName: "Laud Open Strings",
        audioSrc: LaudOpen
    },
    {
        fileName: "Octavina Tuning",
        audioSrc: OctavinaTuning
    },
    {
        fileName: "Octavina Open Strings",
        audioSrc: OctavinaOpen
    }
]

const showTuningAudio = () => {
    return audioTunings.map((file, i) => {
        return ( <div key={i}>
            <b className="audio_name">{file.fileName}</b>
            <audio controls>
                <source src={file.audioSrc} type="audio/mp3"/>
            </audio>
        </div>
        )
    })
    
}


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
                <img src={TuningPic} alt="Tuning Sheet Music" style={{width: 1100, height: 300}}/>
            </figure>
            <div className="audioContainer">
                {showTuningAudio()}
            </div> 
        </div>
    )
}

export default Tuning;