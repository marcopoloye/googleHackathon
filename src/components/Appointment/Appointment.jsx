import './Appointment.scss'
import arrow from '../../assets/icons/backarrow.svg'
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';

function Appointment () {

    return (
        <div className='appointment'>
            <Header />
            <main className='appointment__main'>
                <Navigation />
                <div className='appointment__page'>
                    <div className='appointment__nav-container'>
                        <Link className='appointment__nav-link' to='/health'>
                            <img className='appointment__nav-arrow' src={arrow} alt='left arrow'/>
                        </Link>
                        <h1 className='appointment__nav-text'>Appointment</h1>
                    </div>

                    <div className='appointment__cards'>
                        <div className='appointment__booking-card'>
                            <div className='appointment__booking-card-header'>
                                <div className='appointment__booking-card-avatar'/>
                                <div className='appointment__booking-card-header-text'>
                                    <h2 className='appointment__booking-card-heading'>Dr. Susan Young</h2>
                                    <p className='appointment__booking-card-subheading'>Doctor of Optomery</p>
                                </div>
                            </div>
                            <div className='appointment__booking-card-body'>
                                <p className='appointment__booking-card-text address'>885 W Georgia St #110A, Boise, ID, I6C 2G2</p>
                                <p className='appointment__booking-card-text phone'>604-639-8088</p>
                                <p className='appointment__booking-card-text mail'>susany@icclinic.com</p>
                            </div>
                            <div className='appointment__booking-card-footer'>
                                <Link to="/health/calendar" className='appointment__booking-card-button'>Book</Link>
                            </div>
                        </div>

                        <div className='appointment__details-card'>
                            <div className='appointment__details-card-header'>
                                <h2 className='appointment__details-card-heading'>Before you go</h2>
                            </div>
                            <div className='appointment__details-card-body'>
                                <ul className='appointment__details-card-list'>
                                    <li className='appointment__details-card-item'>
                                        Get a good night's sleep
                                    </li>
                                    <li className='appointment__details-card-item'>
                                        Avoid too much time on digital screens
                                    </li>
                                    <li className='appointment__details-card-item'>
                                        Don't drink coffee or alcohol before your appointment
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div> 
    );
}

export default Appointment;