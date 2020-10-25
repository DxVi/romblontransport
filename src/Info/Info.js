import React from 'react';
import "./Info.css";
import { useStateValue } from '../StateProvider';
import MissionVision from "./MissionVision";
import Officers from "./Officers";

function Info() {
    const [{RTC}] = useStateValue();
    return (
        <div className="info">
            <MissionVision />

            <div className="info__title">
                <h2>General Information</h2>   
            </div>
            <div className="info__general">
                <div className="infoRow">
                    <div className="infoRow__title">
                        <p>Type of Cooperative :</p>
                    </div>
                    <div className="infoRow__description">
                        <p>Transport</p>
                    </div>
                </div>
                <div className="infoRow">
                    <div className="infoRow__title">
                        <p>Area of Operation :</p>
                    </div>
                    <div className="infoRow__description">
                        <p>Province of ROMBLON</p>
                    </div>
                </div>
                <div className="infoRow">
                    <div className="infoRow__title">
                        <p>Bond of Membership :</p>
                    </div>
                    <div className="infoRow__description">
                        <p>Occupational</p>
                    </div>
                </div>
                <div className="infoRow">
                    <div className="infoRow__title">
                        <p>Members :</p>
                    </div>
                    <div className="infoRow__description">
                        <p>Workers, Employees, Operators & Drivers</p>
                    </div>
                </div>
                <div className="infoRow">
                    <div className="infoRow__title">
                        <p>CDA :</p>
                    </div>
                    <div className="infoRow__description">
                        <p>{RTC.main?.cda}</p>
                    </div>
                </div>
                <div className="infoRow">
                    <div className="infoRow__title">
                        <p>BIR TIN :</p>
                    </div>
                    <div className="infoRow__description">
                        <p>{RTC.main?.tin}</p>
                    </div>
                </div>
                <div className="infoRow">
                    <div className="infoRow__title">
                        <p>Address :</p>
                    </div>
                    <div className="infoRow__description">
                        <p>{RTC.main?.address}</p>
                    </div>
                </div>
                <div className="infoRow">
                    <div className="infoRow__title">
                        <p>Mobile :</p>
                    </div>
                    <div className="infoRow__description">
                        <p>{RTC.main?.mobile}</p>
                    </div>
                </div>
                <div className="infoRow">
                    <div className="infoRow__title">
                        <p>Email :</p>
                    </div>
                    <div className="infoRow__description">
                        <p>{RTC.main?.email}</p>
                    </div>
                </div>
                <div className="infoRow">
                    <div className="infoRow__title">
                        <p>Website :</p>
                    </div>
                    <div className="infoRow__description">
                        <p>{RTC.main?.website}</p>
                    </div>
                </div>
                <div className="infoRow">
                    <div className="infoRow__title">
                        <p>Facebook :</p>
                    </div>
                    <div className="infoRow__description">
                        <a target="_blank" rel="noopener noreferrer" href={RTC.main?.facebook}>
                            <p>www.facebook.com/RomblonTrans</p>
                        </a>
                    </div>
                </div>
                <div className="infoRow">
                    <div className="infoRow__title">
                        <p>Twitter :</p>
                    </div>
                    <div className="infoRow__description">
                        <a target="_blank" rel="noopener noreferrer" href={RTC.main?.twitter}>
                            <p>www.twitter.com/RomblonTrans</p>
                        </a>
                    </div>
                </div>
                <div className="infoRow">
                    <div className="infoRow__title">
                        <p>Instagram :</p>
                    </div>
                    <div className="infoRow__description">
                        <a target="_blank" rel="noopener noreferrer" href={RTC.main?.instagram}> 
                            <p>www.instagram.com/RomblonTrans</p>
                        </a>
                    </div>
                </div>
            </div>
           
            <div className="info__title">
                <h2>Officers</h2>  
            </div>
            <div className="info__officers">
                {
                    RTC ?
                    (
                        RTC.officers?.bod.map(officer => (
                            <Officers name={officer.name} position={officer.position} group="BOD" />
                        ))                        
                    )
                    :
                    (<></>)
                }
            </div>
            <div className="info__officers">
                {
                    RTC ?
                    (
                        RTC.officers?.audit.map(officer => (
                            <Officers name={officer.name} position={officer.position} group="Audit" />
                        ))                        
                    )
                    :
                    (<></>)
                }
            </div>
            <div className="info__officers">
                {
                    RTC ?
                    (
                        RTC.officers?.election.map(officer => (
                            <Officers name={officer.name} position={officer.position} group="Election" />
                        ))                        
                    )
                    :
                    (<></>)
                }
            </div>
            <div className="info__officers">
                {
                    RTC ?
                    (
                        RTC.officers?.admin1.map(officer => (
                            <Officers name={officer.name} position={officer.position} group="" />
                        ))                        
                    )
                    :
                    (<></>)
                }
            </div>
            <div className="info__officers">
                {
                    RTC ?
                    (
                        RTC.officers?.education.map(officer => (
                            <Officers name={officer.name} position={officer.position} group="Education" />
                        ))                        
                    )
                    :
                    (<></>)
                }
            </div>
            <div className="info__officers">
                {
                    RTC ?
                    (
                        RTC.officers?.mediation.map(officer => (
                            <Officers name={officer.name} position={officer.position} group="Mediation" />
                        ))                        
                    )
                    :
                    (<></>)
                }
            </div>
            <div className="info__officers">
                {
                    RTC ?
                    (
                        RTC.officers?.ethics.map(officer => (
                            <Officers name={officer.name} position={officer.position} group="Ethics" />
                        ))                        
                    )
                    :
                    (<></>)
                }
            </div>
            <div className="info__officers">
                {
                    RTC ?
                    (
                        RTC.officers?.gad.map(officer => (
                            <Officers name={officer.name} position={officer.position} group="GAD" />
                        ))                        
                    )
                    :
                    (<></>)
                }
            </div>
            <div className="info__officers">
                {
                    RTC ?
                    (
                        RTC.officers?.admin2.map(officer => (
                            <Officers name={officer.name} position={officer.position} group="Admin" />
                        ))                        
                    )
                    :
                    (<></>)
                }
            </div>
            <div className="info__officers">
                {
                    RTC ?
                    (
                        RTC.officers?.operation.map(officer => (
                            <Officers name={officer.name} position={officer.position} group="Operation" />
                        ))                        
                    )
                    :
                    (<></>)
                }
            </div>
        
            <div className="info__title">
                <h2>Purposes</h2>   
            </div>

            <div className="info__purposes">
                <p className="purposes__title"><strong>RTC is organized to :</strong></p>
                <div className="purposes__details">
                    <p>i. Provide transport services</p>
                    <p>ii. Engage in businesses such as:</p>
                    <p>&nbsp;&nbsp;- Sales of spare parts and supplies</p>
                    <p>&nbsp;&nbsp;- Vehicle/Driver’s insurance</p>
                    <p>&nbsp;&nbsp;- Repair and Maintenance Shop</p>
                    <p>&nbsp;&nbsp;- Vehicle Rental Services</p>
                    <p>&nbsp;&nbsp;- Micro Lending</p>
                    <p>iii. Promote economic status of members</p>
                    <p>iv. Coordinate activities of cooperatives</p>
                    <p>v. Advocate for cooperative movements</p>
                    <p>vi. Utilize new technologies</p>
                </div>
            </div>
            
            <div className="info__title">
            <h2>Goals</h2>  
            </div>

            <div className="info__goals">
            <p className="purposes__title"><strong> Improve quality of life, enterprise development and employment of its members; It shall aim:</strong></p>
                <div className="purposes__details">
                    <p>1. To attain increased income, savings, investments and productivity</p>
                    <p>2. To provide social and economic benefits to its members</p>
                    <p>3. To teach members of doing things in a Cooperative manner</p>
                    <p>4. To propagate Cooperative practices</p>
                    <p>5. To provision opportunities to the poor and less privileged groups</p>
                    <p>6. To support the government, other Cooperatives and people-oriented organization</p>
                    <p>7. To develop savings mobilization and capital build-up</p>
                    <p>8. To adopt membership expansion scheme</p>
                    <p>9. To ensure transparency and accountability</p>
                    <p>10. To plan for the welfare of members, their families and the community</p>
                    <p>11. To advance competitiveness and innovativeness of the industry</p>
                    <p>12. To coordinate learning and trade with other Cooperatives</p>
                    <p>13. To advocate policies for the development of transport Cooperatives</p>
                    <p>14. To be the voice in resisting growth-centered development aggression</p>
                    <br />
                    <br />
                </div>
            </div>
        
            
        </div>
    )
}

export default Info
