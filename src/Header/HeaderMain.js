import React from 'react';
import "./HeaderMain.css";
import {Avatar} from "@material-ui/core";

function HeaderMain() {
    return (
        <div className="headerMain">
            <Avatar 
             src="./images/rtc.jpg"
             alt=""
            />
            <h1>Romblon Transport</h1>
        </div>
    )
}

export default HeaderMain
