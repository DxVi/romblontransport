import React from 'react';
import "./Header.css";
import {Avatar} from "@material-ui/core";

import HomeIcon from "@material-ui/icons/Home";
import PersonIcon from '@material-ui/icons/Person';
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications';
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';
import TodayIcon from '@material-ui/icons/Today';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import PaymentIcon from '@material-ui/icons/Payment';

function Header() {

    return (
        <div className="header">
            <div className="header__left">
                <Avatar 
                    src="./images/rtc.jpg"
                    alt=""
                />
                <p>Romblon Transport</p>
            </div>
            
            <div className="header__right">    
                <div className="menu__home">
                    <a href="#home">
                        <HomeIcon />
                        <p className="desktop" >Home</p>
                    </a>
                </div>
                <div className="menu__about">
                    <a href="#about">
                        <PersonIcon />
                        <p className="desktop">About</p>
                    </a>
                </div>
                <div className="menu__services">
                    <a href="#services"> 
                        <SettingsApplicationsIcon />
                        <p className="desktop">Services</p>
                    </a>
                </div>
                <div className="menu__products">
                    <a href="#products"> 
                        <LocalGroceryStoreIcon />
                        <p className="desktop">Products</p>
                    </a>
                </div>
                <div className="menu__booking">
                    <a href="#booking">
                        <TodayIcon />
                        <p className="desktop">Booking</p>
                    </a> 
                </div>
                <div className="menu_contact">
                    <a href="#contact">
                        <ContactMailIcon />
                        <p className="desktop">Contact</p>
                    </a>
                </div>
                <div className="menu_Fares">
                    <a href="#fares">
                        <PaymentIcon />
                        <p className="desktop">Fares</p>
                    </a>
                </div>
            </div> 
        </div>
    )
}

export default Header
