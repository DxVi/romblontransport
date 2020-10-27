import React from 'react';
import ServiceCard from "./ServiceCard";
import { useStateValue } from '../StateProvider';

function Services() {
    const [{RTC}] = useStateValue();

    return (
        <div className="services component__container">
            <h2>Services</h2>   
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
