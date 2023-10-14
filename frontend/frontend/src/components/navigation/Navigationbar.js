import React from "react";
import './Navigationbar.css';
import newsIcon from './icons/news1.png';
import web3icon from './icons/web-3.png';
import hacker from './icons/hacker.jpg';

const Navigationbar = () => {
    return (
        <nav className="navbar">
            <ul className="nav-links">
                <li><a href="/"><img src={newsIcon} alt="News"/>News</a></li>
                <li><a href="/"><img src={web3icon} alt="Web 3.0"/>Web3.0</a></li> 
                <li><a href="/"><img src={hacker} alt="Cyber"/>Cyberspace</a></li>
                <li><a href="/">Music</a></li>
            </ul>
        </nav>
    );
}

export default Navigationbar;