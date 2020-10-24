import React from 'react';
import "./Officers.css";

function Officers({name, position, group}) {
    return (
        <div className={`officers   ${position}`}>
            <div className="officers__img">
                <img src="./images/site/logo300.png" alt="" />
            </div>

            <p className="officers__details">
                <span className="officers__name">{name}</span>
                <span className="officers__position">{position}</span>
                <span className="officers__group">{group}</span>
            </p>
        </div>
    )
}

export default Officers
