import './GoogleSearchHeader.scss'
import { Link } from 'react-router-dom';

function GoogleSearchHeader() {
    return (
        <header className="search-header">
            <section className="search-header__items-left">
                <label className='search-header__label'>About</label>
                <label className='search-header__label'>Store</label>
            </section>
            <section className="search-header__items-right">
                <label className='search-header__label'>Gmail</label>
                <Link className='search-header__link' to='/health'>
                    <label className='search-header__label-health' id= 'link'>Health</label>
                </Link>
                <div className='search-header__bento-icon'/>
                <div className='search-header__avatar'/>
            </section>
        </header>
    );
}

export default GoogleSearchHeader;