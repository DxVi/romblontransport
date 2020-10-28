import React from 'react';
import "./Header.css";
import {Avatar} from "@material-ui/core";
import { useStateValue } from '../StateProvider';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import { Link } from 'react-router-dom';


function Header() {
    const [{user, avatar}] = useStateValue();
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
                <p> {user} </p>
                <div className="header__user">
                    {
                        
                        user ? (
                            /*** if logged-in show avatar and upload avatar icon ***/
                            <div className="header__avatar">
                                <Avatar 
                                src={avatar}
                                alt=""
                                />
                                <Link to="/avatar">
                                    <PersonAddIcon />
                                </Link>
                            </div>
                        ):
                        (
                            /*** if not logged in show empty avatar and login icon ***/
                            <div className="header__avatar">
                                <Avatar 
                                    src={avatar}
                                    alt=""
                                />
                                <Link to="/login">
                                    <VpnKeyIcon />
                                </Link>
                            </div>
                        )
                    }
                    
                </div>
            </div>
        </div>
    )
}

export default Header
