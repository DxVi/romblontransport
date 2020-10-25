import React from 'react';
import "./HeaderMenuItem.css";
import {Link} from "react-router-dom";

function HeaderMenuItem({Icon, title, href, path}) {
    return (
        <div className="headerMenuItem">
            {
                href ?
                (
                    <div>
                    <a href={href}>
                        <Icon />
                        <p>{title}</p>
                    </a>
                    </div>
                ) :
                (
                    <div>
                    <Link to={path}>
                        <Icon />
                        <p>{title}</p>
                    </Link>
                    </div>
                )
            }
        </div>
    )
}

export default HeaderMenuItem
