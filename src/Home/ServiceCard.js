import React from 'react';
import "./ServiceCard.css";

function ServiceCard({title, description, image}) {
    return (
        <div className="serviceCard">
            <div className="serviceCard__title">
                <h2>{title}</h2>  
            </div>
            <div className="serviceCard__img" >
                <img
                    src={`/images/site/${image}`}
                    alt=""
                />
            </div>
            
            <div className="serviceCard__details">
                <p>{description}</p>
            </div>
            
        </div>
    )
}

export default ServiceCard
