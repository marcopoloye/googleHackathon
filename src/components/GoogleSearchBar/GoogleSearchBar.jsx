import './GoogleSearchBar.scss';

function GoogleSearchBar() {
    return (
        <div className='searchbar__container'>
            <input type='text' className='searchbar__input'></input>
            <div className='searchbar__button-container'>
                <button className='searchbar__button'>Google Search</button>
                <button className='searchbar__button'>I'm Feeling Lucky</button>
            </div>
        </div>
    );
}

export default GoogleSearchBar;