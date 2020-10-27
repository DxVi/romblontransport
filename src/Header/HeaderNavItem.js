import React from 'react';
import "./Header.css";
import {Link} from "react-router-dom";

function HeaderNavItem({Icon, title, path}) {
    return (
        <div className="headerNavItem">
            {
             
                <Link to={path}>
                    <Icon />
                    <p>{title}</p>
                </Link>
            }
        </div>
    )
}

export default HeaderNavItem
