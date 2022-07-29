import './Header.scss';
import Logo from '../../assets/icons/logo.svg';
import bento from '../../assets/icons/bento.svg';

const Header = () => {
    return (
        <header className='header' >
            <section className='header__row' >
                <img src={Logo} className='header__logo' />
                <h1 className='header__title' >Health Connect
                <span className='header__patient'>Patient</span>
                </h1>

                <article className='header__search'>
                    <input type='search' name='search' className='header__search-bar' placeholder='Search Google Health...' />
                </article>
            </section>

            <section className='header__row-avatar' >
                <article> 
                    <img src={bento} className='header__bento' />
                </article>
                <article className='header__avatar-box'> 
                    <img src='' 
                    alt=' avatar of user'
                    className='header__avatar' 
                    />
                </article>
               
            </section>

        </header>
    )
}

export default Header;