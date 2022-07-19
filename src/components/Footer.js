import React from "react"
import Twitter from './Twitter-Icon.png';
import Facebook from './Facebook-Icon.png';
import Instagram from './Instagram-Icon.png';
import GitHub from './GitHub-Icon.png';

export default function Footer() {
    return( 
        <footer className="icon-style">
        <img src={Twitter} alt="Twitter" className="icon-style" />
        <img src={Facebook} alt="Facebook" className="icon-style" />
        <img src={Instagram} alt="Instagram" className="icon-style" />
        <img src={GitHub} alt="GitHub" className="icon-style" />
        </footer>
    )
}