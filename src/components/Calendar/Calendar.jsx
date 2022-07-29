import React from 'react';
import './Calendar.scss';

const Calendar = () => {
    return (
        <section className="calendar-page">
            <img alt="Back Arrow Button"/>
            <div> {/* Possible make this a form? */}
                <article>Appointment with Dr. John Doe</article>
                <article>

                </article>
                <article>
                    <button></button>
                    <button></button>
                </article>
            </div>
        </section>
    );
};

export default Calendar;