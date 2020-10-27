import React from 'react';
import "./Header.css";
import {Avatar} from "@material-ui/core";
import { useStateValue } from '../StateProvider';

function Header() {
    const [{user}] = useStateValue();
    return (
        <div className="header border__bottom">
            <div className="header__left">
                <Avatar 
                    src="./images/rtc.jpg"
                    alt=""
                />
                <h1>ROMBLONTransport</h1>
            </div>
            <div className="header__right">
                <p>User : "dixv" </p>
            </div>
        </div>
    )
}

export default Header
