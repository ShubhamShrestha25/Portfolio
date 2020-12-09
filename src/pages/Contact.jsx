import React from 'react'
import './Contact.css'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';
import { Link  } from "react-router-dom";

const Contact = () => {
    return (
        <div className="contact" id="Contact">
            <h1>Contact</h1>
            <div className="contactBox">
                <div className="contactLeft">
                    <h3>Send your request</h3>
                    <form >
                        <div className="inputAll">
                        <div className="input">                            
                                <label>Name</label>
                                <input type="text" required />                            
                        </div>
                        <div className="input">                            
                                <label>Email</label>
                                <input type="email" required />                            
                        </div>
                        <label>Message</label>
                        <div className="textArea">                            
                                <textarea rows="5" placeholder="Your Message"  />                        
                        </div>
                        <button type="submit">Send</button>
                        </div>
                    </form>
                </div>
                <div className="contactRight">
                    <h3>More info</h3>
                    <div className="textRight">
                    <h4>Email :</h4>
                    <p>Shubhamshrestha123@gmail.com</p>
                    <h4>Address :</h4>
                    <p>Tahacal,Kathmandu</p>
                    <h3>Social Media</h3>
                    <div className="socialMedia" >
                        
                        <Link to={"//www.facebook.com/"}  target="1"><FacebookIcon className="color1"/> </Link>
                        <Link to={"//www.instagram.com/"} target="2"> <InstagramIcon  className="color2"/> </Link>
                        <Link to={"//twitter.com/"} target="3"><TwitterIcon className="color1" /></Link>
                        <Link to={"//www.youtube.com/"} target="4"><YouTubeIcon  className="color2"/></Link>
                    
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
