import React from 'react';
import uuid from 'react-uuid';
import './Calendar.scss';
import DateCard from '../DateCard/DateCard';

const Calendar = () => {


      // calendarArray has been made in this format to add other months as objects if needed, or other key/value pairs besides the days if needed.
    const calendarArray = 
    {July: 
      {Days: [
        "26",
        "27",
        "28",
        "29",
        "30",
        "01",
        "02",
        "03",
        "04",
        "05",
        "06",
        "07",
        "08",
        "09",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
        "20",
        "21",
        "22",
        "23",
        "24",
        "25",
        "26",
        "27",
        "28",
        "29",
        "30",
        "31",
      ]}
    }

  console.log(calendarArray)


    return (
        <section className="calendar-page">
            <img className="calendar-page__back-button" alt="Back Arrow Button"/>
            <form className="calendar-form"> 
                <article className='calendar-form__dr-title'>Appointment with Dr. John Doe</article>
                <article className='calendar-form__day-bar'>
                    <div className='calendar-form__day-bar--day'>Sunday</div>
                    <div className='calendar-form__day-bar--day'>Monday</div>
                    <div className='calendar-form__day-bar--day'>Tuesday</div>
                    <div className='calendar-form__day-bar--day'>Wednesday</div>
                    <div className='calendar-form__day-bar--day'>Thursday</div>
                    <div className='calendar-form__day-bar--day'>Friday</div>
                    <div className='calendar-form__day-bar--day'>Saturday</div>
                </article>
                <article className='calendar-form__calendar-wrapper'>
                    {calendarArray.July.Days.map(day => {
                        return (
                            <DateCard 
                                calendarArray={calendarArray} 
                                key={uuid()}
                                day={day}
                            />
                        )
                    })}
                </article>
                <article className='calendar-form__button-wrapper'>
                    <button className='calendar-form__button'>Return</button>
                    <button className='calendar-form__button'>Confirm</button>
                </article>
            </form>
        </section>
    );
};

export default Calendar;