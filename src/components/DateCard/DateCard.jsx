import React from 'react';
import './DateCard.scss';

const DateCard = (props) => {
    console.log(props)
    return (
        <article className="date-card">

            {props.scheduleInfo.isDoctorAvailable 
            ? <div className='date-card__text-container'><p className="date-card__available">{props.day} </p></div>
            : <p className="date-card__unavailable">{props.day} </p>}
            
        </article>
    );
};

export default DateCard;