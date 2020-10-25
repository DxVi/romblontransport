import React from 'react';
import "./HeaderMenu2.css";
import HeaderMenuItem from "./HeaderMenuItem";
import HomeIcon from "@material-ui/icons/Home";
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';
import TodayIcon from '@material-ui/icons/Today';
import PaymentIcon from '@material-ui/icons/Payment';
import InfoIcon from '@material-ui/icons/Info';

function HeaderMenu2() {
    return (
        <div className="headerMenu2">
            <HeaderMenuItem Icon={HomeIcon} title="Home" path="/" />

            <HeaderMenuItem Icon={TodayIcon} title="Booking" path="/booking" />
            <HeaderMenuItem Icon={LocalGroceryStoreIcon} title="Products" path="/products" />
            <HeaderMenuItem Icon={PaymentIcon} title="Fares" path="/fares" />
            <HeaderMenuItem Icon={InfoIcon} title="Info" path="/info" />
        </div>
    )
}

export default HeaderMenu2
