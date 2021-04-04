import React from 'react';
import Scroll from 'react-scroll';
import { Link } from 'react-scroll';

const ScrollLink = Scroll.ScrollLink;

const Navbar = () => {
    return(
        <div className="side-nav">
            <nav className="links">
                <Link to="top" spy={true} smooth={true}>
                Home
                </Link>
                <Link to="history" spy={true} smooth={true}>
                Brief History
                </Link>
                <Link to="instrumentation" spy={true} smooth={true}>
                    Instrumentation
                </Link>
                {/* <a href="#">Home</a>
                <a href="#">Brief History</a>          
                    <ScrollLink
                        to="instrumentation"
                        spy={true}
                        smooth={true}
                        duration={100}
                    >
                        Instrumentation
                    </ScrollLink>
                
                <a href="#">Tuning</a>
                <a href="#">Range</a>
                <a href="#">Technique</a> */}
            </nav>
        </div>
    )
}

export default Navbar;