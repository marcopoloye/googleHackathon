import './Navigation.scss';

const Navigation = () => {
    return (
 
        <ul className="navigation__list">
            <li className="navigation__list-item navigation__list-item--selected">Home</li>
            <li className="navigation__list-item">Medical History</li>
            <li className="navigation__list-item"> Calendar</li>
            <li className="navigation__list-item"> My Doctor</li>
            <li className="navigation__list-item"> Appointment</li>
            <li className="navigation__list-item">Settings</li>
            <li className="navigation__list-item">Help</li>
        </ul>

    )
}

export default Navigation;