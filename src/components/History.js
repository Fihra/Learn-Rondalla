import React from 'react';
import rondallaGroup1 from '../assets/images/rondalla_group1.jpg';
import rondallaGroup2 from '../assets/images/rondalla_group2.jpg';
import rondallaGroup3 from '../assets/images/rondalla_group3.jpg';

const History = () => {
    return(
        <div>
            <fieldset>
            <legend align="center"><h2 id="history">History</h2></legend>
            <p>Rondalla originated in Spain, where later in the 16th century, the Spanish colonized Philippines, bringing Rondalla for the music culture. </p>
           
            <p> In 1565, Ferdinand Magellan arrived on the Philippine Islands. His main goal was to spread Christianity around the country. He also wanted to introduce the Spanish language and western European culture. 
            </p>
            <p>The Spanish church introduced music in the form of worship for Christian faith, with Gregorian chant and polyphony. The Spanish friars decided to teach the Filipino people Western music, from vocal and instrumental lessons to theory and counterpoint. 3 Types of music began cultivating from the Spanish culture: <i>harana</i>, <i>kundiman</i>, and <i>rondalla</i>. These were the results of combining elements of the Filipino indigenous music styles with Spanish music.
            </p>
            <ul>
                <li><i>harana</i>: courting music (serenade) - Man sing/plays guitar for a woman beneath her window at nightfall. <i>habanera</i> influenced for its rhythmic elements. </li>
                <li><i>kundiman</i>: sad, melancholy, blues music - Themes for hardships and heartbreaks, based on the Tagalog phrase, <i>"kung hindi man"</i>, which translates to "if not meant to be." Usually starts in minor key but modulates to its parallel major key.</li>
                <li><i>rondalla</i>: plucked-string ensemble that contain mandolin-like instruments, guitars, and bass.</li>
            </ul>
            <p>Rondalla's origin of the name is theorized by Nitoy Gonzales, a former maestro of the Bayanihan Philippine Dancers. With <i>ronda</i>, meaning "guard," and <i>alla</i> meaning "over there." 
            </p>
            <p>
                <b>Quote from Justin Cydrick Gaffud Cabales's Thesis "Music of Pre-­‐‑colonial and Spanish Colonial Philippines, and the Filipino Rondalla":</b>
                </p>
            <blockquote>
                "A bystander shouted, “A guard is there!” upon hearing a guard serenading a woman with his guitar, instead of protecting the barrio from the nearby threat of the Moslem pirates."    
            </blockquote> 
            <p>
                Another theory was that it originated from a Southern Spanish town called Ronda. Rumored to come from the Spanish word <i>rondar</i>, which means "to court," while others may suggest the rolling of the fingers on the strings of the plucked instrument.  
            </p>
            <p>Essentially, <i>Rondalla</i> is defined as an ensemble of the Philippines containing plucked string instruments and percussion. They are known to be performed for fiestas, weddings, baptisms, and funerals.</p>
            <figure className="rondalla-pics">
                <img className="rondalla-group" src={rondallaGroup1} alt="group"/>
                <img className="rondalla-group" src={rondallaGroup2} alt="group"/>
                <img className="rondalla-group" src={rondallaGroup3} alt="group"/>
            </figure>

            </fieldset>
        </div>
    )
}

export default History;