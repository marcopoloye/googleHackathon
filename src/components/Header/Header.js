import './Header.scss'
const Header = () => {
    return (
        <header className='header' >
            <section className='header__row' >
                <h1 className='header__title' >Google Health Connect</h1>

                <article className='header__search'>
                    <input type='search' name='search' className='header__search-bar' placeholder='Search Google Health...' />
                </article>
            </section>

            <section className='header__row-avatar' >
                <img src='' 
                // alt=' avatar of user'
                className='header__avatar' 
                alt='placeholder text'
                />
            </section>

        </header>
    )
}

export default Header;