import React from 'react';
import "./Services.css";
import ServiceCard from "./ServiceCard";
import { useStateValue } from '../StateProvider';

function Services() {
    const [{RTC}] = useStateValue();

    return (
        <div id="services" className="services">
            <div className="services__title">
                <h2>Services</h2>   
            </div>
            <div className="services__cards">
                {
                    RTC ?(
                            RTC.business?.services.map(service => (
                                <ServiceCard 
                                    key={service.title} 
                                    title={service.title} 
                                    description={service.description} 
                                    image={service.image}
                                />
                            ))
                        )
                        : (<> </>)
                }
            </div>
        </div>
    )
}

export default Services
