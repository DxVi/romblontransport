import React from 'react';
import "./About.css";
import Logo from "../About/Logo";
import Vmc from "./Vmc";
import GenInfo from "./GenInfo";
import Services from "./Services";
import Officers from "./Officers";
import GoalsPurposes from "./GoalsPurposes";

function About() {
    
    return (
        <div className="about page__container">
            <Logo />
            <Vmc />
            <GenInfo />
            <Services />
            <Officers />
            <GoalsPurposes />
        </div>
    )
}

export default About
