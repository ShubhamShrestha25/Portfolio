import React from 'react';
import "./Navbar.css";

const Navbar = () => {
    return (
        <div className="navbarr">
            <div className="left"> 
            <h1>PortFolio</h1>
            </div>
            <div className="right">
            <h1 >Home</h1>
            <h1 >About</h1>
            <h1 >Skills</h1>
            <h1 >Contact</h1>
            </div>
            <div className="hamburger" >
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
            
        </div>
    )
}

export default Navbar
