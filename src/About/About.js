import React from 'react';
import "./About.css";
import Logo from "../About/Logo";
import Vmc from "./Vmc";
import GenInfo from "./GenInfo";
import Services from "./Services";

function About() {
    
    return (
        <div className="about page__container">
            <Logo />
            <Vmc />
            <GenInfo />
            <Services />
        </div>
    )
}

export default About
