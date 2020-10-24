import React from 'react';
import "./Home.css";
import PlayForWorkIcon from '@material-ui/icons/PlayForWork';
import { useStateValue } from './StateProvider';

function Home() {
    const [{RTC}] = useStateValue();

    return (
        <div id="home" className="home bg-gradient-overlay" style={{backgroundImage: "url('./images/home.jpg')"}}>
            <div className="home__top">
                <h1>{RTC.main?.title}</h1>
                <h3><span>{RTC.main?.cda}</span></h3>
                <h3><span>{RTC.main?.details}</span></h3>
                <br />
                <br />
                <a className="home__downIcon" href="#about">
                    <PlayForWorkIcon />
                </a>
            </div>
            <div className="home__fadeBottom" />
        </div>
    )
}

export default Home
