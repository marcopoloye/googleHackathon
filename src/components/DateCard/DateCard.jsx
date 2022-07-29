import React from 'react';
import './DateCard.scss';

const DateCard = (props) => {
    console.log(props.day)
    return (
        <article className="date-card">
            {props.day}
        </article>
    );
};

export default DateCard;