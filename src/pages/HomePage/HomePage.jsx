import Header from "../../components/Header/Header";
import Navigation from "../../components/Navigation/Navigation";
import './HomePage.scss';
import Calendar from "../../components/Calendar/Calendar";

function HomePage() {
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
                        <button className="homepage__appointment-button">Appointment</button>
                    </div>

                    <div className="homepage__calendar-content">
                        <Calendar />
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
                                <p className="homepage__calendar-card-upcoming-body">No available appointments</p>
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