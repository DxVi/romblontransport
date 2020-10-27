import React from 'react';
import "./OfficerCard.css";

function OfficerCard({name, position, group}) {
    return (
        <div className={`officerCard  ${position}`}>
            <div className="officerCard__container">
                <div className="officerCard__img">
                    <img src="./images/site/logo300.png" alt="" />
                </div>

                <p className="officerCard__details">
                    <span className="officerCard__name">{name}</span>
                    <span className="officerCard__position">{position}</span>
                    <span className="officerCard__group">{group}</span>
                </p>
            </div>
        </div>
    )
}

export default OfficerCard
