import React from 'react'
import OfficerCard from "./OfficerCard";
import { useStateValue } from '../StateProvider'

function Officers() {
    const [{RTC}] = useStateValue();
    return (
        <div className="officers component__container border__bottom">
            <h2>Officers</h2>  
            <div className="officers__group">
                {
                    RTC ?
                    (
                        RTC.officers?.bod.map(officer => (
                            <OfficerCard key={officer.name} name={officer.name} position={officer.position} group="BOD" />
                        ))                        
                    )
                    :
                    (<></>)
                }
            </div>
            <div className="officers__group">
                {
                    RTC ?
                    (
                        RTC.officers?.audit.map(officer => (
                            <OfficerCard name={officer.name} position={officer.position} group="Audit" />
                        ))                        
                    )
                    :
                    (<></>)
                }
            </div>
            <div className="officers__group">
                {
                    RTC ?
                    (
                        RTC.officers?.election.map(officer => (
                            <OfficerCard name={officer.name} position={officer.position} group="Election" />
                        ))                        
                    )
                    :
                    (<></>)
                }
            </div>
            <div className="officers__group">
                {
                    RTC ?
                    (
                        RTC.officers?.admin1.map(officer => (
                            <OfficerCard name={officer.name} position={officer.position} group="" />
                        ))                        
                    )
                    :
                    (<></>)
                }
            </div>
            <div className="officers__group">
                {
                    RTC ?
                    (
                        RTC.officers?.education.map(officer => (
                            <OfficerCard name={officer.name} position={officer.position} group="Education" />
                        ))                        
                    )
                    :
                    (<></>)
                }
            </div>
            <div className="officers__group">
                {
                    RTC ?
                    (
                        RTC.officers?.mediation.map(officer => (
                            <OfficerCard name={officer.name} position={officer.position} group="Mediation" />
                        ))                        
                    )
                    :
                    (<></>)
                }
            </div>
            <div className="officers__group">
                {
                    RTC ?
                    (
                        RTC.officers?.ethics.map(officer => (
                            <OfficerCard name={officer.name} position={officer.position} group="Ethics" />
                        ))                        
                    )
                    :
                    (<></>)
                }
            </div>
            <div className="officers__group">
                {
                    RTC ?
                    (
                        RTC.officers?.gad.map(officer => (
                            <OfficerCard name={officer.name} position={officer.position} group="GAD" />
                        ))                        
                    )
                    :
                    (<></>)
                }
            </div>
            <div className="officers__group">
                {
                    RTC ?
                    (
                        RTC.officers?.admin2.map(officer => (
                            <OfficerCard name={officer.name} position={officer.position} group="Admin" />
                        ))                        
                    )
                    :
                    (<></>)
                }
            </div>
        </div>
    )
}

export default Officers
