import React from 'react'
import { useStateValue } from '../StateProvider';

function GenInfo() {
    const [{RTC}] = useStateValue();

    return (
        <div className="geninfo component__container">
                <h2>General Information</h2>
                <div className="geninfo__details">
                    <p className="geninfo__title">Name</p>
                    <p className='rtc__name'>{RTC.main?.name}</p>
                </div>
                <div className="geninfo__details">
                    <p className="geninfo__title">Type of Cooperative</p>
                    <p>{RTC.geninfo?.type}</p>
                </div>
                <div className="geninfo__details">
                    <p className="geninfo__title">Area of Operation</p>
                    <p>{RTC.geninfo?.area}</p>
                </div>
                <div className="geninfo__details">
                    <p className="geninfo__title">Bond of Membership</p>
                    <p>{RTC.geninfo?.bond}</p>
                </div>
                <div className="geninfo__details">
                    <p className="geninfo__title">Members</p>
                    <p>{RTC.geninfo?.members}</p>
                </div>
                <div className="geninfo__details">
                    <p className="geninfo__title">CDA</p>
                    <p>{RTC.main?.cdano}</p>
                </div>
                <div className="geninfo__details">
                    <p className="geninfo__title">CDA Registered</p>
                    <p>{RTC.main?.cdadate}</p>
                </div>
                <div className="geninfo__details">
                    <p className="geninfo__title">TIN</p>
                    <p>{RTC.geninfo?.tin}</p>
                </div>
                <div className="geninfo__details">
                    <p className="geninfo__title">Mobile</p>
                    <p>{RTC.contacts?.mobile}</p>
                </div>
                <div className="geninfo__details">
                    <p className="geninfo__title">Email</p>
                    <p>{RTC.contacts?.email}</p>
                </div>
                <div className="geninfo__details">
                    <p className="geninfo__title">Address</p>
                    <p>{RTC.contacts?.address}</p>
                </div>
                <div className="geninfo__details">
                    <p className="geninfo__title">Website</p>
                    <p>{RTC.contacts?.website}</p>
                </div>
                <div className="geninfo__details">
                    <p className="geninfo__title">Facebook</p>
                    <a href={RTC.contacts?.facebook} target="_blank" rel="noopener noreferrer">
                        <p>{RTC.contacts?.facebook}</p>
                    </a>
                </div>
                <div className="geninfo__details">
                    <p className="geninfo__title">Twitter</p>
                    <a href={RTC.contacts?.twitter} target="_blank" rel="noopener noreferrer">
                        <p>{RTC.contacts?.twitter}</p>
                    </a>
                </div>
                <div className="geninfo__details">
                    <p className="geninfo__title">Instagram</p>
                    <a href={RTC.contacts?.instagram} target="_blank" rel="noopener noreferrer">
                        <p>{RTC.contacts?.instagram}</p>
                    </a>
                </div>
            </div>
    )
}

export default GenInfo
