import Header from "../../components/Header/Header";
import Navigation from "../../components/Navigation/Navigation";
import Calendar from "../../components/Calendar/Calendar";
import './AppointmentPage.scss'
import BackButton from '../../assets/icons/backarrow.svg'

function AppointmentPage() {
    return (
        <>
            <Header />
            <div className="appointment-page__content">
                <Navigation />
                <div className="appointment-page__header">
                    <img alt="Back Arrow Button"
                    src={BackButton}
                    />
                    <h1 className="appointment-page__heading">Appointment with Dr. Susan Young: Regular Eye Exam</h1>
                    <Calendar />
                    <button className="appointment-page__button">Confirm</button>
                </div>
                
            </div>

        </>

    );
}

export default AppointmentPage;