import './Navigation.scss';

const Navigation = () => {
    return (
        <main className="navigation">
        <ul className="navigation__list">
            <li className="navigation__list-item navigation__list-item--selected">Home</li>
            <li className="navigation__list-item">Medical History</li>
            <li className="navigation__list-item"> Calendar</li>
            <li className="navigation__list-item"> My Doctor</li>
            <li className="navigation__list-item"> Appointment</li>
            <li className="navigation__list-item">Settings</li>
            <li className="navigation__list-item">Help</li>
        </ul>
    </main>
    )
}

export default Navigation;