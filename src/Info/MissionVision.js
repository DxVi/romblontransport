import React from 'react';
import { useStateValue } from '../StateProvider';
import "./MissionVision.css";

function MissionVision() {
    const [{RTC}] = useStateValue();


    return (
        <div className="missionVision">
            {/* mvcv - mission vision core values */}
            <div className="info__title">
                <h2>VISION</h2>   
            </div>
            <div className="info__mvcv">
                <p>{RTC.main?.vision}</p>
            </div>

            <div className="info__title">
                <h2>MISSION</h2>   
            </div>
            <div className="info__mvcv">
                <p>{RTC.main?.mission1}</p>
                <p>&#8594; {RTC.main?.mission2}</p>
                <p>&#8594; {RTC.main?.mission3}</p>
                <p>&#8594; {RTC.main?.mission4}</p>
            </div>

            <div className="info__title">
                <h2>CORE VALUES</h2>   
            </div>
            <div className="info__mvcv">
                <p>{RTC.main?.corevalues}</p>
            </div>
            
        </div>
    )
}

export default MissionVision 
