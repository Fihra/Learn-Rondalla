import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import Bandurria2 from '../assets/images/Bandurria2.jpg';
import Laud6 from '../assets/images/Laud6.jpg';
import Octavina2 from '../assets/images/Octavina2.jpg';
import Gitara from '../assets/images/Gitara_edited.png';
import Bass from '../assets/images/bajo_de_unas_edited.png';

import Parts1 from '../assets/images/Bandurria_diagram1.png';
import Parts2 from '../assets/images/Bandurria_diagram2.png';
import Parts3 from '../assets/images/Bandurria_diagram3.png';

const pictures = [
    <img className="img" src={Bandurria2} alt="bandurria"/>,
    <img className="img" src={Laud6} alt="laud"/>,
    <img className="img" src={Octavina2} alt="octavina"/>,
    <img className="img" src={Gitara} alt="gitara"/>,
    <img className="img" src={Bass} alt="bajo de uñas"/>
]

const diagrams = [
    <img className="img" src={Parts1} alt="Bandurria diagram 1"/>,
    <img className="img" src={Parts2} alt="Bandurria diagram 2"/>,
    <img className="img" src={Parts3} alt="Bandurria diagram 3"/>
]

const checkIndex = (num) => {
    
}

const Instrumentation = () => {
    return(
        <div>
            <h2 id="instrumentation">Instrumentation</h2>
            <ol className="number-list">
                <li>Bandurria</li>
                <li>Laud</li>
                <li>Octavina</li>
                <li>Gitara (Guitar)</li>
                <li>Bajo de uñas (Double Bass)</li>
            </ol>
            <AliceCarousel items={pictures} disableButtonsControls animationType="fadeout" onInitialized={() => checkIndex(0)} />
            

            <p>With the many different interpretations that can be altered in order to showcase the rondalla instruments, we can see about </p>

            <AliceCarousel items={diagrams} disableButtonsControls disableDotsControls animationType="slide" autoWidth={400}/>
        </div>
    )
}

export default Instrumentation;