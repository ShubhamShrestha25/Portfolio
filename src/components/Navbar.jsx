import React, { useState } from 'react';
import "./Navbar.css";
import {HashLink as Link} from "react-router-hash-link";


const Navbar = () => {

        const [click, setClick] = useState(false);
        
        const clickHandle = () => setClick (!click);


    return (
        <div className="navbarr">
            <div className="left"> 
            <h1>PortFolio</h1>
            </div>
            <div className={click? "right active" : "right"}>
           <h1> <Link  to="#Home" className="disableLink"smooth={true} duration={500} spy={true}  offset={-80}>Home</Link></h1> 
           <h1> <Link  to="#About" className="disableLink" smooth={true} duration={500} spy={true}  offset={-80}>About</Link></h1>
           <h1 > <Link  to="#Skills"  className="disableLink" smooth={true} duration={500} spy={true}  offset={-80} >Skills</Link></h1>
           <h1> <Link  to="#Contact"  className="disableLink" smooth={true} duration={500} spy={true}  offset={-80}>Contact</Link></h1>
            </div>
            
            <div className="hamburger" onClick={clickHandle}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            
        </div>
    )
    
}

export default Navbar
