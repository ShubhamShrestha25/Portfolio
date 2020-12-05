import React, { useState } from 'react';
import "./Navbar.css";

const Navbar = () => {

        const [click, setClick] = useState(false);
        
        const clickHandle = () => setClick (!click);

    return (
        <div className="navbarr">
            <div className="left"> 
            <h1>PortFolio</h1>
            </div>
            
            <div className={click? "right active" : "right"}>
            <h1 >Home</h1>
            <h1 >About</h1>
            <h1 >Skills</h1>
            <h1 >Contact</h1>
            </div>
            
            <div className="hamburger" onClick={clickHandle}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            
        </div>
    )
    
}

export default Navbar
