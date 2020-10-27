import React from 'react';
import "./Home.css";
import Logo from "./About/Logo";
import { useStateValue } from './StateProvider';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import HomeWorkIcon from '@material-ui/icons/HomeWork';

function Home() {
    const [{RTC}] = useStateValue();

    return (
        <div className="home page__container">
            <div className="home__title border__bottom">
                <h1>&#10078;{RTC.main?.title}&#10078;</h1>
                <p>
                   <span>{RTC.main?.cda}</span><br />
                   <span>{RTC.main?.cdano}</span><br />
                   <span>{RTC.main?.cdadate}</span>
                </p>
            </div>
            <div className="home_logo component__container">
                <Logo />
            </div>
            <div className="component__container">
                <h2>About</h2>
                <p><span className="rtc__name">{RTC.main?.name}</span> {RTC.main?.about}</p>
            </div>

            <div className="component__container">
                <h2>Contact Details</h2>
                <div className="contacts__icon">
                    <PhoneIphoneIcon /> <p>{RTC.contacts?.mobile}</p>
                </div>
                <div className="contacts__icon">
                    <MailOutlineIcon /> <p>{RTC.contacts?.email}</p>
                </div>
                <div className="contacts__icon">
                    <HomeWorkIcon /> <p> {RTC.contacts?.address}</p>
                </div>
                <br />
            </div>
        </div>
            
    )
}

export default Home
