import React from 'react'
import { useStateValue } from '../StateProvider';

function GenInfo() {
    const [{RTC}] = useStateValue();

    return (
        <div className="geninfo component__container border__bottom">
                <h2>General Information</h2>
                <div className="geninfo__details">
                    <p className="geninfo__title">Name of Cooperative :</p>
                    <p className='rtc__name'>{RTC.main?.name}</p>
                </div>
                <div className="geninfo__details">
                    <p className="geninfo__title">Type of Cooperative :</p>
                    <p>{RTC.geninfo?.type}</p>
                </div>
                <div className="geninfo__details">
                    <p className="geninfo__title">Area of Operation :</p>
                    <p>{RTC.geninfo?.area}</p>
                </div>
                <div className="geninfo__details">
                    <p className="geninfo__title">Bond of Membership :</p>
                    <p>{RTC.geninfo?.bond}</p>
                </div>
                <div className="geninfo__details">
                    <p className="geninfo__title">Members :</p>
                    <p>{RTC.geninfo?.members}</p>
                </div>
                <div className="geninfo__details">
                    <p className="geninfo__title">CDA :</p>
                    <p>{RTC.main?.cdano}</p>
                </div>
                <div className="geninfo__details">
                    <p className="geninfo__title">CDA Registered :</p>
                    <p>{RTC.main?.cdadate}</p>
                </div>
                <div className="geninfo__details">
                    <p className="geninfo__title">TIN :</p>
                    <p>{RTC.geninfo?.tin}</p>
                </div>
            </div>
    )
}

export default GenInfo
