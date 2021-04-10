import React from 'react';
import TremoloPic from '../assets/images/Tremolo.png';
import ChordsPic from '../assets/images/Chords.png';
import HarmonicsPic from '../assets/images/Harmonics.png';
import PluckStrokePic from '../assets/images/Pluck_Stroke.png';

import BandurriaChords from '../assets/audio/Bandurria_Chords.mp3';
import BandurriaTremolo from '../assets/audio/Bandurria_Tremolo.mp3';
import BandurriaTremolo2 from '../assets/audio/Bandurria_Tremolo2.mp3';
import BandurriaTremolo2click from '../assets/audio/Bandurria_Tremolo2_w_120_click.mp3';

import LaudChords from '../assets/audio/Laud_Chords.mp3';
import LaudHarmonics from '../assets/audio/Laud_Harmonics.mp3';
import LaudTremolo from '../assets/audio/Laud_Tremolo.mp3';
import LaudTremolo2 from '../assets/audio/Laud_Tremolo2.mp3';
import LaudTremolo2click from '../assets/audio/Laud_Tremolo2_w_120_click.mp3';

import OctavinaChords from '../assets/audio/Octavina_Chords.mp3';
import OctavinaHarmonics from '../assets/audio/Octavina_Harmonics.mp3';
import OctavinaTremolo from '../assets/audio/Octavina_Tremolo.mp3';
import OctavinaTremolo2 from '../assets/audio/Octavina_Tremolo2.mp3';
import OctavinaTremolo2click from '../assets/audio/Octavina_Tremolo2_w_120_click.mp3';

const audioTechniques = {
    Chords: {
        Bandurria: {
            fileName: "Bandurria Chords",
            audioSrc: BandurriaChords
        },
        Laud: {
            fileName: "Laud Chords",
            audioSrc: LaudChords
        },
        Octavina: {
            fileName: "Octavina Chords",
            audioSrc: OctavinaChords
        }
    },
    Harmonics: {
        Laud: {
            fileName: "Laud Harmonics",
            audioSrc: LaudHarmonics
        },
        Octavina: {
            fileName: "Octavina Harmonics",
            audioSrc: OctavinaHarmonics
        }
    },
    Tremolos: {
        Bandurria: [
            {
                fileName: "Bandurria Tremolo",
                audioSrc: BandurriaTremolo
            },
            {
                filename: "Bandurria Tremolo2",
                audioSrc: BandurriaTremolo2
            },
            {
                fileName: "Bandurria Tremolo with click",
                audioSrc: BandurriaTremolo2click
            }   
        ],
        Laud: [
            {
                fileName: "Laud Tremolo",
                audioSrc: LaudTremolo
            },
            {
                filename: "Laud Tremolo2",
                audioSrc: LaudTremolo2
            },
            {
                fileName: "Laud Tremolo with click",
                audioSrc: LaudTremolo2click
            }   
        ],
        Octavina: [
            {
                fileName: "Octavina Tremolo",
                audioSrc: OctavinaTremolo
            },
            {
                filename: "Octavina Tremolo2",
                audioSrc: OctavinaTremolo2
            },
            {
                fileName: "Octavina Tremolo with click",
                audioSrc: OctavinaTremolo2click
            }   
        ]
    }
}

const showAudio = (files) => {
    const audioChords = Object.keys(files).map((key, value) => {
        return (
            <div key={value}>
                <b className="audio_name">{files[key].fileName}</b>
                <audio controls>
                    <source src={files[key].audioSrc} type="audio/mp3"/>
                </audio>
            </div>
        )
    })
    return audioChords;
}

const Techniques = () => {
    return(
        <div id="technique">
            <h2>Techniques</h2>
            <figure>
                <figcaption className="cap">Chords</figcaption>
                <img src={ChordsPic} alt="Chords sheet music"/>
                <figcaption>Chords can be played, but best to <b>split the chord's notes to individual parts</b> as it will be easier for the players, plus you will get a cleaner sound of the chord, unless you are looking for a certain timbre. Still, please use <b>chords sparingly.</b></figcaption>
                {showAudio(audioTechniques["Chords"])}
                <figcaption className="cap">Harmonics</figcaption>
                <img src={HarmonicsPic} alt="Harmonics sheet music"/>
                <figcaption>Natural Harmonics are possible, but it is not too loud. <b>Not audible</b> on the <b>Bandurria</b>. <b>Audible</b> for <b>Laud</b> &amp; <b>Octavina</b>. </figcaption>
                {showAudio(audioTechniques["Harmonics"])}
                <figcaption className="cap">Pluck Stroke</figcaption>
                <img src={PluckStrokePic} alt="Pluck Stroke sheet music"/>
                <figcaption>Writing Up/Down strokes are <b>optional</b>, unless you are looking for a certain timbre the player can adjust to their preference.</figcaption>

                <figcaption className="cap">Tremolo</figcaption>
                <figcaption><b>Tremolo is the main feature &amp; aesthetic for the Rondalla instruments.</b></figcaption>
                <img src={TremoloPic} alt="Tremolo sheet music"/>
            </figure>
        </div>
    )
}

export default Techniques;