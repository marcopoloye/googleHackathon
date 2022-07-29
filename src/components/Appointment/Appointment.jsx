import './Appointment.scss'

function Appointment () {
    return (
        <div className='appointment'>
            <div className='appointment__book'>
                <button type='submit' className='appointment__submit-button'>+ New Appointment</button>
                <div className='appointment__card'>
                    <div className='appointment__card-content'>
                        <div className='appointment__card-avatar' />
                        <div className='appointment__card-subheading'>Lorem ipsum dolor sit amet</div>
                        <div className='appointment__card-inner-container'>
                            Lorem ipsum dolor sit amet
                        </div>
                        <div className='appointment__card-bottom-container'>
                            <p className='appointment__card-bottom-container-text'>Text</p>
                            <button type='submit' className='appointment__card-bottom-container-button'>Book</button>
                        </div>
                    </div>
                </div>
            </div>
         

            <div className='appointment__details-card'>
                <div className='appointment__details-card-content'>
                    <div className='appointment__details-card-header'>Appointment Details</div>
                    <div className='appointment__details-card-text'>Lorem ipsum</div>

                </div>
            </div>
        </div>
    );
}

export default Appointment;