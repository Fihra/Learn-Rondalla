import React from 'react';
import { Link } from 'react-scroll';
import twitterLogo from '../assets/images/twitter.png';
import youtubeLogo from '../assets/images/youtube.png';
import websiteLogo from '../assets/images/website.png';
import instagramLogo from '../assets/images/instagram.png';
import bandcampLogo from '../assets/images/bandcamp.png';
import spotifyLogo from '../assets/images/spotify.png';
import emailLogo from '../assets/images/email-icon.png';
import fileLogo from '../assets/images/file-icon.png';
import RondallaCheatSheet from '../assets/misc/Rondalla_Cheatsheet.pdf';

const Navbar = () => {
    const myContacts = [
        {
            logo: bandcampLogo,
            url: "https://www.bandcamp.com/firahfabe"
        },
        {
            logo: youtubeLogo,
            url: "https://www.youtube.com/firahfabe"
        },
        {
            logo: spotifyLogo,
            url: "https://open.spotify.com/artist/5MwSQ5vfamJ2RZSeP12ql5?si=1ZVDAImVSo2IKAe9SCQ53A"
        },
        {
            logo: twitterLogo,
            url: "https://www.twitter.com/firahfabe"
        },
        {
            logo: websiteLogo,
            url: "https://fabian-fabro.netlify.app/"
        },
        {
            logo: instagramLogo,
            url: "https://www.instagram.com/firahfabemusic"
        },
        {
            logo: emailLogo,
            url: "fihrarondalla@gmail.com"
        }
    ]

    const navLinks = [
        {
            name: "Home",
            destination: "top"
        },
        {
            name: "History",
            destination: "history"
        },
        {
            name: "Instrumentation",
            destination: "instrumentation"
        },
        {
            name: "Tuning",
            destination: "tuning"
        },
        {
            name: "Range",
            destination: "range"
        },
        {
            name: "Techniques",
            destination: "technique"
        },
        // {
        //     name: "Samples",
        //     destination: "sample"
        // },
        {
            name: "Contact",
            destination: "contact"
        },
        {
            name: "Resources",
            destination: "resources"
        }
    ]

    const showLinks = () => {
        return navLinks.map((item, i) => {
            return(
                <li key={i}>
                    <Link activeClass="active" to={item.destination} spy={true} smooth={true} >
                        {item.name}
                    </Link>
                </li>
            )
        })
    }

    const showSocialMedia = () => {
        return myContacts.map((item, i) => {
            return(
                <li key={i}>
                    <a href={item.url}>
                    <img className="social-media-icons" src={item.logo} alt={item.url}/>
                    </a>
                </li>
            )
        })
    }

    return(
        <div className="side-nav">
            <div className="side-line"></div>
            <nav className="links">
                <ul>
                    {showLinks()}
                </ul>
            </nav>
            <p style={{paddingTop: 10}}><b>Rondalla Cheatsheet PDF</b></p>
            <a href={RondallaCheatSheet} target="_blank" rel="noreferrer"><img className="social-media-icons" src={fileLogo} alt="Rondalla Cheatsheet"/></a>
            <div className="follow-me">
                <p>Built by Fabian Fabro.</p>
                <p><b>Follow me on:</b></p> 
                <ul className="social-media-list">
                    {showSocialMedia()}
                </ul>
            </div>
        </div>
    )
}

export default Navbar;