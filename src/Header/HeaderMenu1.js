import React from 'react';
import "./HeaderMenu1.css";
import HeaderMenuItem from "./HeaderMenuItem";

import HomeIcon from "@material-ui/icons/Home";
import PersonIcon from '@material-ui/icons/Person';
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications';
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';
import TodayIcon from '@material-ui/icons/Today';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import PaymentIcon from '@material-ui/icons/Payment';
import InfoIcon from '@material-ui/icons/Info';

function HeaderMenu1() {
    return (
        <div className="headerMenu1">
            <HeaderMenuItem Icon={HomeIcon} title="Home" href="#home" />
            <HeaderMenuItem Icon={PersonIcon} title="About" href="#about" />
            <HeaderMenuItem Icon={SettingsApplicationsIcon} title="Services" href="#services" />
            <HeaderMenuItem Icon={ContactMailIcon} title="Contact" href="#contact" />

            <HeaderMenuItem Icon={TodayIcon} title="Booking" path="/booking" />
            <HeaderMenuItem Icon={LocalGroceryStoreIcon} title="Products" path="/products" />
            <HeaderMenuItem Icon={PaymentIcon} title="Fares" path="/fares" />
            <HeaderMenuItem Icon={InfoIcon} title="Info" path="/info" />
        </div>
    )
}

export default HeaderMenu1
