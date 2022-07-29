import './GoogleSearchBar.scss';
import microphone from '../../assets/icons/microphone.png';

function GoogleSearchBar() {
    return (
        <div className='searchbar__container'>
            <section className='searchbar__search'>
                <input type='text' className='searchbar__input'/>
                <img src={microphone}  className='searchbar__microphone' alt='microphone that can be activated to speak'/>
            </section>

            <div className='searchbar__button-container'>
                <button className='searchbar__button'>Google Search</button>
                <button className='searchbar__button'>I'm Feeling Lucky</button>
            </div>
        </div>
    );
}

export default GoogleSearchBar;