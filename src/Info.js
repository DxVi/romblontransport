import React from 'react';
import "./Info.css";

function Info() {
    return (
        <div className="info">
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
                        <p>Provincial</p>
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
                        <p>CDA Reg. No. :</p>
                    </div>
                    <div className="infoRow__description">
                        <p>9520-1018000000046928</p>
                    </div>
                </div>
                <div className="infoRow">
                    <div className="infoRow__title">
                        <p>BIR TIN :</p>
                    </div>
                    <div className="infoRow__description">
                        <p>756-296-750-000</p>
                    </div>
                </div>
            </div>
           
            <div className="info__title">
                <h2>Purposes</h2>   
            </div>

            <div className="info__purposes">
                <p className="purposes__title"><strong>RTC is organized to :</strong></p>
                <div className="purposes__details">
                    <p>&nbsp;1. Provide transport services</p>
                    <p>&nbsp;2. Engage in businesses such as:</p>
                    <p>&nbsp;&nbsp;&nbsp;a. Sales of spare parts and supplies</p>
                    <p>&nbsp;&nbsp;&nbsp;b. Vehicle/Driver’s insurance</p>
                    <p>&nbsp;&nbsp;&nbsp;c. Repair and Maintenance Shop</p>
                    <p>&nbsp;&nbsp;&nbsp;d. Vehicle Rental Services</p>
                    <p>&nbsp;&nbsp;&nbsp;e. Micro Lending</p>
                    <p>&nbsp;3. Promote economic status of members</p>
                    <p>&nbsp;4. Coordinate activities of cooperatives</p>
                    <p>&nbsp;5. Advocate for cooperative movements</p>
                    <p>&nbsp;6. Utilize new technologies</p>
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
