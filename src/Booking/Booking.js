import React from 'react';
import "./Booking.css";
import { useStateValue } from '../StateProvider';

function Booking() {
    const [{user}] = useStateValue();

    return (
        <div className="booking">
         
            <h1>Booking Chat now</h1>
            {/* <div className="image__upload">
            {user? (
                <ImageUpload username={user}/>
            ) : (
                <h3>Login to Upload</h3>
            )
            }
            </div> */}
            
        </div>
    )
}

export default Booking
