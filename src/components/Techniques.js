import React from 'react';
import TremoloPic from '../assets/Tremolo.png';
import ChordsPic from '../assets/Chords.png';
import HarmonicsPic from '../assets/Harmonics.png';
import PluckStrokePic from '../assets/Pluck_Stroke.png';

const Techniques = () => {
    return(
        <div id="technique">
            <h2>Techniques</h2>
            <figure>
                <figcaption className="cap">Chords</figcaption>
                <img src={ChordsPic} alt="Chords sheet music"/>
                <figcaption>Chords can be played, but best to <b>split the chord's notes to individual parts</b> as it will be easier for the players, plus you will get a cleaner sound of the chord, unless you are looking for a certain timbre. Still, please use <b>chords sparingly.</b></figcaption>
                <figcaption className="cap">Harmonics</figcaption>
                <img src={HarmonicsPic} alt="Harmonics sheet music"/>
                <figcaption>Natural Harmonics are possible, but it is not too loud. <b>Not audible</b> on the <b>Bandurria</b>. <b>Audible</b> for <b>Laud</b> &amp; <b>Octavina</b>. </figcaption>
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