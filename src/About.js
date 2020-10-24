import React from 'react';
import "./About.css";
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import { useStateValue } from './StateProvider';

function About() {
   const [{RTC},dispatch] = useStateValue();
    
    return (
        <div id="about" className="about">
                <div className="about__pic">
                    <img src={'./images/site/about.jpg'} alt="" />
                   
                </div>
                <div className="about__details">
                    <h2>About</h2>
                    <p><span className="about_rtc">{RTC.about?.title}</span> {RTC.about?.description}</p>
                </div>
                <div className="about_contacts">
                    <h2>Contact Details</h2>
                    <p>Mobile : <span>{RTC.main?.phone}</span></p>
                    <p>Address : <span>{`${RTC.main?.street}, ${RTC.main?.municipality}, ${RTC.main?.province}`}</span></p>
                    <p>Email : <span>{RTC.main?.email}</span></p>
                    <p>Website : <span>romblontransport@xxx.com</span></p>
                    <a target="_blank" rel="noopener noreferrer" href={RTC.main?.facebook}><FacebookIcon /></a>
                    <span>  </span> 
                    <a target="_blank" rel="noopener noreferrer" href={RTC.main?.twitter}><TwitterIcon /></a>
                    <span>  </span> 
                    <a target="_blank" rel="noopener noreferrer" href={RTC.main?.instagram}><InstagramIcon /></a>
                </div>

                <a href="" alt="">More</a>
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
