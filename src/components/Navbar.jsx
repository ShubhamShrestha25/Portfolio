import React, { useState } from 'react';
import "./Navbar.css";
import {Link} from "react-router-dom";


const Navbar = () => {

        const [click, setClick] = useState(false);
        
        const clickHandle = () => setClick (!click);

    return (
        <div className="navbarr">
            <div className="left"> 
            <h1>PortFolio</h1>
            </div>
            
            <div className={click? "right active" : "right"}>
           <h1> <Link to="/Home" className="disableLink">Home</Link></h1> 
           <h1><Link to="/About" className="disableLink">About</Link></h1>
           <h1> <Link to="/Skills"  className="disableLink">Skills</Link></h1>
           <h1> <Link to="/Contact"  className="disableLink">Contact</Link></h1>
            </div>
            
            <div className="hamburger" onClick={clickHandle}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            
        </div>
    )
    
}

export default Navbar
