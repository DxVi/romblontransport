import React from 'react';
import "./Home.css";
import PlayForWorkIcon from '@material-ui/icons/PlayForWork';
import { useStateValue } from '../StateProvider';

function Home() {
    const [{RTC}] = useStateValue();

    return (
        // <div id="home" className="home bg-gradient-overlay" style={{backgroundImage: "url('./images/home.jpg')"}}>
        <div id="home" className="home">
            <div className="home__top">
                <h1>&#10078;{RTC.main?.title}&#10078;</h1>
                <p><span>{RTC.main?.description}</span><br />
                   <span>{RTC.main?.cda}</span><br />
                   <span>{RTC.main?.details}</span></p>
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
