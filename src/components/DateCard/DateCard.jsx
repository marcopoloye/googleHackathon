import React from 'react';
import './DateCard.scss';

const DateCard = (props) => {
    console.log(props)



    return (
        <article className="date-card">

            {props.scheduleInfo.isDoctorAvailable 
            ? <div onClick={() => props.handleDateClick()} className='date-card__text-container'><p className={`date-card__available date-card__available--selected`}>{props.day} </p></div>
            : <div className='date-card__text-container'><p className="date-card__unavailable">{props.day}</p></div>}
            
        </article>
    );
};

export default DateCard;