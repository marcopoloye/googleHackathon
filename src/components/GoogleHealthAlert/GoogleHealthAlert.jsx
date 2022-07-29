import './GoogleHealthAlert.scss';
import id from '../../assets/icons/id.svg'
function GoogleHealthAlert() {
    return (
        <main className='alert'>
            <img src={id} className='alert-id' />
            <p className="alert-text">Your Next Eye Exam is up in <span className='alert-text--red'>2 Weeks</span>
            </p>
        </main>
    );
}

export default GoogleHealthAlert;