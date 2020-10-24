import React from 'react';
import "./Services.css";
import ServiceCard from "./ServiceCard";
import { useStateValue } from './StateProvider';

function Services() {
    const [{RTC}] = useStateValue();
    // let projects=[];

    // if(data){
        // projects=data.projects;
    // }

    return (
        <div id="services" className="services">
            <div className="services__title">
                <br />
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
                          :
                          (<> </>)
                }
            </div>
            <hr />
        </div>
    )
}

export default Services
