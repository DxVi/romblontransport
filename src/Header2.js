import React from 'react';
import { Link } from "react-router-dom";

import {Avatar} from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';
import PaymentIcon from '@material-ui/icons/Payment';
import InfoIcon from '@material-ui/icons/Info';

function Header2() {

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
                    <Link to="/">
                        <HomeIcon />
                        <p className="desktop" >Home</p>
                    </Link>
                </div>


                 {/* ***** using link ***** */}
                 <div className="menu__products">
                    <Link to="/products">
                        <LocalGroceryStoreIcon />
                        <p className="desktop">Products</p>
                    </Link>
                </div>
                <div className="menu_Fares">
                    <Link to="fares">
                        <PaymentIcon />
                        <p className="desktop">Fares</p>
                    </Link>
                </div>
               
                <div className="menu_info">
                    <Link to="/info">
                        <InfoIcon />
                        <p className="desktop">Info</p>
                    </Link>
                </div>
            </div> 
        </div>
    )
}

export default Header2
