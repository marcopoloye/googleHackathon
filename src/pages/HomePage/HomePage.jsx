import Header from "../../components/Header/Header";
import Navigation from "../../components/Navigation/Navigation";
import './HomePage.scss';
import uuid from 'react-uuid';
import DateCard from '../../components/DateCard/DateCard';
import NextButton from '../../assets/icons/next.svg';
import {Link} from 'react-router-dom';

function HomePage() {

    const calendarArray = 
    {August: 
      {Days: [
        {isDoctorAvailable: true,
        dayNumber: "",
        isDoctorScheduled: false},
        {isDoctorAvailable: true,
        dayNumber: "1",
        isDoctorScheduled: false},
        {isDoctorAvailable: true,
        dayNumber: "2",
        isDoctorScheduled: false},
        {isDoctorAvailable: true,
        dayNumber: "3",
        isDoctorScheduled: false},
        {isDoctorAvailable: true,
        dayNumber: "4",
        isDoctorScheduled: false},
        {isDoctorAvailable: true,
        dayNumber: "5",
        isDoctorScheduled: false},
        {isDoctorAvailable: true,
        dayNumber: "6",
        isDoctorScheduled: false},
        {isDoctorAvailable: true,
        dayNumber: "7",
        isDoctorScheduled: false},
        {isDoctorAvailable: true,
        dayNumber: "8",
        isDoctorScheduled: false},
        {isDoctorAvailable: true,
        dayNumber: "9",
        isDoctorScheduled: false},
        {isDoctorAvailable: true,
        dayNumber: "10",
        isDoctorScheduled: false},
        {isDoctorAvailable: true,
        dayNumber: "11",
        isDoctorScheduled: false},
        {isDoctorAvailable: true,
        dayNumber: "12",
        isDoctorScheduled: false},
        {isDoctorAvailable: true,
        dayNumber: "13",
        isDoctorScheduled: false},
        {isDoctorAvailable: true,
        dayNumber: "14",
        isDoctorScheduled: false},
        {isDoctorAvailable: true,
        dayNumber: "15",
        isDoctorScheduled: false},
        {isDoctorAvailable: true,
        dayNumber: "16",
        isDoctorScheduled: false},
        {isDoctorAvailable: true,
        dayNumber: "17",
        isDoctorScheduled: false},
        {isDoctorAvailable: true,
        dayNumber: "18",
        isDoctorScheduled: false},
        {isDoctorAvailable: true,
        dayNumber: "19",
        isDoctorScheduled: false},
        {isDoctorAvailable: true,
        dayNumber: "20",
        isDoctorScheduled: false},
        {isDoctorAvailable: true,
        dayNumber: "21",
        isDoctorScheduled: false},
        {isDoctorAvailable: true,
        dayNumber: "22",
        isDoctorScheduled: false},
        {isDoctorAvailable: true,
        dayNumber: "23",
        isDoctorScheduled: false},
        {isDoctorAvailable: true,
        dayNumber: "24",
        isDoctorScheduled: false},
        {isDoctorAvailable: true,
        dayNumber: "25",
        isDoctorScheduled: false},
        {isDoctorAvailable: true,
        dayNumber: "26",
        isDoctorScheduled: false},
        {isDoctorAvailable: true,
        dayNumber: "27",
        isDoctorScheduled: false},
        {isDoctorAvailable: true,
        dayNumber: "28",
        isDoctorScheduled: false},
        {isDoctorAvailable: true,
        dayNumber: "29",
        isDoctorScheduled: false},
        {isDoctorAvailable: true,
        dayNumber: "30",
        isDoctorScheduled: false},
        {isDoctorAvailable: true,
        dayNumber: "31",
        isDoctorScheduled: false}
      ]}
    }
    return (
        <>
            <Header />
            <main className="homepage__main">
                <Navigation />

                <div className="homepage__content">

                    <div className="homepage__header">
                        <div className="homepage__avatar"/>
                        <div className="homepage__text-container">
                            <p className="homepage__text">Welcome, Alex</p>
                            <p className="homepage__text--blue">Your Next Eye Exam is up in <span className="homepage__text--red">2 Weeks</span></p>
                        </div>
                        <div className="homepage__button-container">
                            <button className="homepage__button">Read the screen</button>
                        </div> 
                    </div>

                    <div className="homepage__appointment-button-container">
                        <Link to="/health/appointment" className="homepage__appointment-button">Appointment</Link>
                    </div>

                    <div className="homepage__calendar-content">
                        
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
                                    // handleDateClick={this.handleDateClick}
                                    // availableClass={this.state.dateNumberClass}
                                    // handleNumClick={this.handleNumClick}
                                />
                            )
                        })}
                    </article>
            
                </form>
                        
                        <div className="homepage__calendar-card-container">

                            <div className="homepage__calendar-card-medical">
                                <h2 className="homepage__calendar-card-medical-heading">Medical Card</h2>
                                <div className="homepage__calendar-card-medical-body">
                                    <h2 className="homepage__calendar-card-medical-subheading">Alex White</h2>
                                    <p className="homepage__calendar-card-medical-text"><span className="text-bold">DOB:</span> 1984/05/21</p>
                                    <p className="homepage__calendar-card-medical-text"><span className="text-bold">ID#:</span> 5388206</p>
                                    <p className="homepage__calendar-card-medical-text"><span className="text-bold">Expires:</span> 2024/07/31</p>
                                    <p className="homepage__calendar-card-medical-text"><span className="text-bold">Sex:</span> M</p>
                                    <p className="homepage__calendar-card-medical-text">455 Granville St #400, Boise, ID I6C 1T1</p>
                                </div>
                            </div>

                            <div className="homepage__calendar-card-upcoming">
                                <h2 className="homepage__calendar-card-upcoming-heading">Upcoming Appointments</h2>
                                <p className="homepage__calendar-card-upcoming-body">Dr Susan Young: Eye Exam</p>
                            </div>
                        </div>
                    </div>

                    <div className="homepage__education">
                        <h2 className="homepage__text-heading">Education</h2>
                        <div className="homepage__text-main">
                            <h2 className="homepage__text-subheading">Living with Low Vision: Tips for Home Safety</h2>
                            <p className="homepage__text-body">These simples changes can make it safer to get around your home and complete daily tasks when living with low vision...</p>
                            <p className="homepage__text-read-more">Read more</p>
                        </div>
                    </div>

                </div>
                
            </main>
        </>
    );
}

export default HomePage;