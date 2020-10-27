import React from 'react';
import { useStateValue } from '../StateProvider';

function Vmc() {
    const [{RTC}] = useStateValue();

    return (
        <div className="vmc component__container">
            <div className="vmc__vision">
                <h2>Vision</h2>
                <p>{RTC.about?.vision}</p>
            </div>
            <div className="vmc__mission">
                <h2>Mission</h2>
                <p>{RTC.about?.mission1}</p>
                <p>i. {RTC.about?.mission2}</p>
                <p>ii. {RTC.about?.mission3}</p>
                <p>iii. {RTC.about?.mission4}</p>
            </div>
            <div className="vmc__corevalues border__bottom">
                <h2>Core Values</h2>
                <p>{RTC.about?.corevalues}</p>
            </div>
        </div>
    )
}

export default Vmc
