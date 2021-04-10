import React from 'react';

const bibliography = [
    {
        title: "Music of Pre-colonial and Spanish Colonial Philippines, and the Filipino Rondalla",
        author: "Justin Cydrick Gaffud Cabales",
        source: "https://core.ac.uk/download/pdf/48499732.pdf"
    },
    {
        title: "The Virtuoso Bandurria: Basic Method for the Bandurria as a Solo Instrument Book I, 4th Edition",
        author: "Michael Dadap",
        source: null
    }
]

const imagesUsed = [
    "https://365greatpinoystuff.wordpress.com/2010/10/09/282-rondalla/",
    "http://www.philippinessanfrancisco.org/news/2262/286/Paskong-Pinoy-Gathers-Filipino-Community-in-Metro-DC-to-Celebrate-Christmas/",
    "https://primer.com.ph/study/wp-content/uploads/sites/8/2018/02/Rondalla-Workshop-8_web.jpg"
]

const showBibliography = () => {
    return bibliography.map((bib, i) => {
        return(
            <li key={i}>"{bib.title}" by {bib.author} {bib.source !== null ? <a href={bib.source}>${bib.source}</a> : null}</li>
        )
    })
}

const showImages = () => {
    return imagesUsed.map((i) => {
        return <li key={i}><a href={i}>{i}</a></li>
    })
}

const Resources = () => {
    return(
        <div id="resources">
            <h2>Resources</h2>
            <ul>
                {showBibliography()}
            </ul>
            <h2>Images I do not own that are used for educational purposes:</h2>
            <ul>
                {showImages()}
            </ul>
        </div>
    )
}

export default Resources;