
import Link from 'next/link';
import './Navbar.scss';
import React from 'react';

const Navbar = () => {
    return (
        <header className='header'>
            <div className='header__inner container'>
                
                <Link className="header__logo" href="/">
                    <span className="header__logo-text">Elfen lied</span>
                </Link>

                <nav className='navbar hidden-tablet'>
                    <div className='navbar__links'>

                        <Link className='navbar__links-link navbar__links-link--catalog' href='/catalog'>
                            <img 
                                className="navbar__links-link-icon" 
                                src="/svg/catalog.svg"
                                alt="catalog" 
                                width={15} 
                                height={15} 
                                loading="lazy"
                            />
                            <span>Каталог</span>
                        </Link>

                        <div className='navbar__links-group'>
                            <Link className='navbar__links-group-link' href='/blog'>
                                Блог
                            </Link>
                            <Link className='navbar__links-group-link' href='/contacts'>
                                Контакты
                            </Link>
                        </div>

                        <button className='navbar__links-link navbar__links-link--search-btn'>
                            <img 
                                className="navbar__links-link-icon" 
                                src="/svg/search.svg"
                                alt="search" 
                                width={26} 
                                height={26} 
                                loading="lazy"
                            />
                            <span>Поиск</span>
                        </button>
                    </div>

                    <div className='navbar__buttons'>
                        <button className='navbar__buttons-btn'>
                            <img 
                                className="navbar__buttons-btn-icon" 
                                src="/svg/favourite.svg"
                                alt="favourite" 
                                width={22} 
                                height={20} 
                                loading="lazy"
                            />
                        </button>

                        <button className='navbar__buttons-btn'> 
                            <img 
                                className="navbar__buttons-btn-icon" 
                                src="/svg/profile.svg"
                                alt="profile" 
                                width={19} 
                                height={21} 
                                loading="lazy"
                            />
                        </button>

                        <button className='navbar__buttons-btn'>
                            <img 
                                className="navbar__buttons-btn-icon" 
                                src="/svg/cart.svg"
                                alt="cart" 
                                width={21} 
                                height={22} 
                                loading="lazy"
                            />
                        </button>
                    </div>
                </nav>

                <nav className='navbar-mobile visible-tablet'>

                    <button className='navbar__buttons-btn'>
                        <img 
                            className="navbar__buttons-btn-icon" 
                            src="/svg/search-mobile.svg"
                            alt="search" 
                            width={24} 
                            height={24} 
                            loading="lazy"
                        />
                    </button>

                    <button className='navbar__buttons-btn'>
                        <img 
                            className="navbar__buttons-btn-icon" 
                            src="/svg/favourite.svg"
                            alt="favourite" 
                            width={25} 
                            height={24} 
                            loading="lazy"
                        />
                    </button>

                    <button className='navbar__buttons-btn'> 
                        <img 
                            className="navbar__buttons-btn-icon" 
                            src="/svg/profile.svg"
                            alt="profile" 
                            width={24} 
                            height={24} 
                            loading="lazy"
                        />
                    </button>

                    <button className='navbar__buttons-btn'>
                        <img 
                            className="navbar__buttons-btn-icon" 
                            src="/svg/cart.svg"
                            alt="cart" 
                            width={24} 
                            height={24} 
                            loading="lazy"
                        />
                    </button>

                    <button className='navbar__buttons-btn'>
                        <img 
                            className="navbar__buttons-btn-icon" 
                            src="/svg/tel.svg"
                            alt="telephone" 
                            width={24} 
                            height={24} 
                            loading="lazy"
                        />
                    </button>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;