import React from 'react';
import "./Header.css";
import HeaderNavItem from "./HeaderNavItem";

import HomeIcon from "@material-ui/icons/Home";
import PersonIcon from '@material-ui/icons/Person';
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';
import TodayIcon from '@material-ui/icons/Today';
import PaymentIcon from '@material-ui/icons/Payment';

function HeaderNav() {
    return (
        <div className="headerNav">
            <HeaderNavItem Icon={HomeIcon} title="Home" path="/" />
            <HeaderNavItem Icon={TodayIcon} title="Booking" path="/booking" />
            <HeaderNavItem Icon={LocalGroceryStoreIcon} title="Products" path="/products" />
            <HeaderNavItem Icon={PaymentIcon} title="Fares" path="/fares" />
            <HeaderNavItem Icon={PersonIcon} title="About" path="/about" />
        </div>
    )
}

export default HeaderNav
