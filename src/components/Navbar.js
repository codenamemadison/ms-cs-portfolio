import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div id="hamburger-outer">
            <nav>
                {/* <div 
                    className={`hamburger-menu ${isOpen ? 'open' : ''}`}
                    onClick={()=> setIsOpen(!isOpen)}
                >
                ☰
                </div> */}
                <div 
                    className={`hamburger-menu ${isOpen ? 'open' : ''}`} 
                    onClick={() => setIsOpen(!isOpen)}
                    >
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
                <div className={`side-menu ${isOpen ? 'open' : ''}`}>
                    <ul>
                        <li><Link to="/" onClick={() => setIsOpen(false)}>HOME</Link></li>
                        {/* <li><Link to="/about">About</Link></li> */}
                        <li><Link to="/projects" onClick={() => setIsOpen(false)}>PROJECTS</Link></li>
                        <li><Link to="/experience" onClick={() => setIsOpen(false)}>EXPERIENCE</Link></li>
                        <li><Link to="/contact" onClick={() => setIsOpen(false)}>CONTACT</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}