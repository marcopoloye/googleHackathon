import React from 'react';
import uuid from 'react-uuid';
import './Calendar.scss';
import DateCard from '../DateCard/DateCard';
import NextButton from '../../assets/icons/next.svg';
import BackButton from '../../assets/icons/backarrow.svg';

const Calendar = () => {


      // calendarArray has been made in this format to add other months as objects if needed, or other key/value pairs besides the days if needed.
    const calendarArray = 
    {August: 
      {Days: [
        {isDoctorAvailable: false,
        dayNumber: "",
        isDoctorScheduled: false},
        {isDoctorAvailable: false,
        dayNumber: "1",
        isDoctorScheduled: false},
        {isDoctorAvailable: false,
        dayNumber: "2",
        isDoctorScheduled: false},
        {isDoctorAvailable: false,
        dayNumber: "3",
        isDoctorScheduled: false},
        {isDoctorAvailable: false,
        dayNumber: "4",
        isDoctorScheduled: false},
        {isDoctorAvailable: false,
        dayNumber: "5",
        isDoctorScheduled: false},
        {isDoctorAvailable: false,
        dayNumber: "6",
        isDoctorScheduled: false},
        {isDoctorAvailable: false,
        dayNumber: "7",
        isDoctorScheduled: false},
        {isDoctorAvailable: false,
        dayNumber: "8",
        isDoctorScheduled: false},
        {isDoctorAvailable: false,
        dayNumber: "9",
        isDoctorScheduled: false},
        {isDoctorAvailable: false,
        dayNumber: "10",
        isDoctorScheduled: false},
        {isDoctorAvailable: false,
        dayNumber: "11",
        isDoctorScheduled: false},
        {isDoctorAvailable: false,
        dayNumber: "12",
        isDoctorScheduled: false},
        {isDoctorAvailable: false,
        dayNumber: "13",
        isDoctorScheduled: false},
        {isDoctorAvailable: false,
        dayNumber: "14",
        isDoctorScheduled: false},
        {isDoctorAvailable: true,
        dayNumber: "15",
        isDoctorScheduled: false},
        {isDoctorAvailable: false,
        dayNumber: "16",
        isDoctorScheduled: false},
        {isDoctorAvailable: false,
        dayNumber: "17",
        isDoctorScheduled: false},
        {isDoctorAvailable: true,
        dayNumber: "18",
        isDoctorScheduled: false},
        {isDoctorAvailable: false,
        dayNumber: "19",
        isDoctorScheduled: false},
        {isDoctorAvailable: false,
        dayNumber: "20",
        isDoctorScheduled: false},
        {isDoctorAvailable: false,
        dayNumber: "21",
        isDoctorScheduled: false},
        {isDoctorAvailable: false,
        dayNumber: "22",
        isDoctorScheduled: false},
        {isDoctorAvailable: false,
        dayNumber: "23",
        isDoctorScheduled: false},
        {isDoctorAvailable: true,
        dayNumber: "24",
        isDoctorScheduled: false},
        {isDoctorAvailable: false,
        dayNumber: "25",
        isDoctorScheduled: false},
        {isDoctorAvailable: false,
        dayNumber: "26",
        isDoctorScheduled: false},
        {isDoctorAvailable: false,
        dayNumber: "27",
        isDoctorScheduled: false},
        {isDoctorAvailable: false,
        dayNumber: "28",
        isDoctorScheduled: false},
        {isDoctorAvailable: false,
        dayNumber: "29",
        isDoctorScheduled: false},
        {isDoctorAvailable: false,
        dayNumber: "30",
        isDoctorScheduled: false},
        {isDoctorAvailable: false,
        dayNumber: "31",
        isDoctorScheduled: false}
      ]}
    }

  console.log(calendarArray)


    return (
        <section className="calendar-page">
            <img className="calendar-page__back-button" alt="Back Arrow Button"
            src={BackButton}
            />
            <article className='calendar-page__dr-title'>Appointment with Dr. John Doe</article>
            <form className="calendar-form"> 
                <div className='calendar-form__month-title-wrapper'>
                    <h3 className='calendar-form__month-title'>August 2022</h3>
                    <img className='calendar-form__next-button' alt="Next Month Button" src={NextButton}/>
                </div>
                <article className='calendar-form__day-bar'>
                    <div className='calendar-form__day-bar--day'>S</div>
                    <div className='calendar-form__day-bar--day'>M</div>
                    <div className='calendar-form__day-bar--day'>T</div>
                    <div className='calendar-form__day-bar--day'>W</div>
                    <div className='calendar-form__day-bar--day'>T</div>
                    <div className='calendar-form__day-bar--day'>F</div>
                    <div className='calendar-form__day-bar--day'>S</div>
                </article>
                <article className='calendar-form__calendar-wrapper'>
                    {calendarArray.August.Days.map(day => {
                        return (
                            <DateCard 
                                calendarArray={calendarArray} 
                                key={uuid()}
                                day={day.dayNumber}
                                scheduleInfo={day}
                            />
                        )
                    })}
                </article>
                {/* <article className='calendar-form__button-wrapper'>
                    <button className='calendar-form__button'>Return</button>
                    <button className='calendar-form__button'>Confirm</button>
                </article> */}
            </form>
        </section>
    );
};

export default Calendar;