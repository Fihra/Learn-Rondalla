import React from 'react';
import RangePic from '../assets/Range.png';

const Range = () => {
    return(
        <div id="range">
            <h2>Range</h2>
            <figure>
            <figcaption><b>Bandurria</b> sounds an octave higher than the <b>Laud</b> &amp; <b>Octavina</b>. <b>Laud</b> &amp; <b>Octavina</b> are in the same octave, but <b>Octavina's</b> tone sounds a little deeper.</figcaption>
            <img src={RangePic} alt="Range Pic" style={{width: 900, height: 500}}/>
            </figure>
        </div>
    )
}

export default Range;