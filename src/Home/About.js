import React from 'react';
import "./About.css";
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import { useStateValue } from '../StateProvider';

import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LanguageIcon from '@material-ui/icons/Language';
import HomeWorkIcon from '@material-ui/icons/HomeWork';

function About() {
   const [{RTC}] = useStateValue();
    
    return (
        <div id="about" className="about">
                <div className="about__pic">
                    <img src={'./images/site/about.jpg'} alt="" />
                   
                </div>
                <div className="about__details">
                    <h2>About</h2>
                    <p><span className="about__rtc">{RTC.about?.title}</span> {RTC.about?.description}</p>
                </div>
                <div className="about__contacts">
                    <h2>Contact Details</h2>
                    <div className="contacts__icon">
                        <PhoneIphoneIcon /> <p>{RTC.main?.phone}</p>
                     </div>
                     <div className="contacts__icon">
                        <MailOutlineIcon /> <p>{RTC.main?.email}</p>
                     </div>
                     <div className="contacts__icon">
                        <LanguageIcon /> <p> {RTC.main?.website}</p>
                     </div>
                     <div className="contacts__icon">
                        <HomeWorkIcon /> <p> {RTC.main?.address}</p>
                     </div>
                     <div className="contacts__socialmedia">
                        <a target="_blank" rel="noopener noreferrer" href={RTC.main?.facebook}><FacebookIcon /></a>
                        <span>  </span> 
                        <a target="_blank" rel="noopener noreferrer" href={RTC.main?.twitter}><TwitterIcon /></a>
                        <span>  </span> 
                        <a target="_blank" rel="noopener noreferrer" href={RTC.main?.instagram}><InstagramIcon /></a>
                     </div>
                </div>

                {/* <div className="about_geninfo">
                    <h2>General Information</h2>
                    <p>Type of Cooperative : <span>{RTC.geninfo?.type}</span></p>
                    <p>Area of Operation : <span>{RTC.geninfo?.area}</span></p>
                    <p>Bond of Membership : <span>{RTC.geninfo?.bond}</span></p>
                    <p>Members : <span>{RTC.geninfo?.members}</span></p>
                    <p>CDA : <span>{RTC.main?.cda}</span></p>
                    <p>TIN : <span>{RTC.geninfo?.tin}</span></p>
                </div> */}
        </div>
    )
}

export default About
