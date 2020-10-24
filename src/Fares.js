import React from 'react';
import "./Fares.css";
import ScrollableTabsButtonForce from "./TabPanel";

function Fares() {
    return (
        <div id="fares" className="fares">
            <div className="fares__title">
                <h2>Fares</h2>   
            </div>
            <div className="fares_details">
                <ScrollableTabsButtonForce />  
            </div>          
        </div>
    )
}

export default Fares
