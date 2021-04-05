import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [active, setActive] = useState("");

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
        }
    ]

    console.log(active);

    const currentNav = (item) => {
        console.log(item);
    }

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

    return(
        <div className="side-nav">
            <nav className="links">
                <ul>
                    {showLinks()}
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;