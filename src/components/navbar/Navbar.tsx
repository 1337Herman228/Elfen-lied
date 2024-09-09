'use client'

import Link from 'next/link';
import './Navbar.scss';
import React, { useEffect, useState } from 'react';
import SignInForm from '../forms/sign-in-form/SignInForm';
import SignUpForm from '../forms/sign-up-form/SignUpForm';
import CustomModal from '../modal/custom-modal/CustomModal';
import CartCard from '../cards/cart-card/CartCard';
import FavouriteCard from '../cards/favourite-card/FavouriteCard';

const cartProducts = [
    {
        id:9,
        categoryId:2,
        name: 'coppelia',
        description: 'Лампа настольная',
        price: '150 000',
        img:'/products/sophisticated-unusual-modern-high-lamp-wave-form-- (2).png',
        color:'#29D0D9',
    },
    {
        id:6,
        categoryId:2,
        name: 'Aubrey',
        description: 'Лампа настольная',
        price: '150 000',
        img:'/products/sophisticated-unusual-modern-high-lamp-wave-form-- (1).png',
        color:'#FFC4A5',
    },
    {
        id:8,
        categoryId:2,
        name: 'Darrell',
        description: 'Лампа настольная',
        price: '150 000',
        img:'/products/sophisticated-unusual-modern-high-lamp-wave-form-- (3) 1.png',
        color:'#FA8EEF',
    },
]

const favouriteProducts = [
    {
        id:9,
        categoryId:2,
        name: 'coppelia',
        description: 'Лампа настольная',
        price: '150 000',
        img:'/products/sophisticated-unusual-modern-high-lamp-wave-form-- (2).png',
        color:'#29D0D9',
    },
    {
        id:6,
        categoryId:2,
        name: 'Aubrey',
        description: 'Лампа настольная',
        price: '150 000',
        img:'/products/sophisticated-unusual-modern-high-lamp-wave-form-- (1).png',
        color:'#FFC4A5',
    },
    {
        id:8,
        categoryId:2,
        name: 'Darrell',
        description: 'Лампа настольная',
        price: '150 000',
        img:'/products/sophisticated-unusual-modern-high-lamp-wave-form-- (3) 1.png',
        color:'#FA8EEF',
    },
]

const Navbar = () => {

    // const [isProductsModalOpen, setIsProductsModalOpen] = useState([false, false]);
    // const toggleModal = (idx:number, target:boolean) => {
    //    setIsProductsModalOpen((p) => {
    //     p[idx] = target;
    //     return [...p];
    //   });
    // };

    const [authModal, setAuthModal] = useState('sign-in');

    useEffect(() => {
        changeAuthForm()
    }, [authModal]);

    const changeAuthForm = () => {
        const signInForm = document.querySelector('#_sign-in-form')
        const signUpForm = document.querySelector('#_sign-up-form')

        const signInFormMobile = document.querySelector('#_sign-in-form-mobile')
        const signUpFormMobile = document.querySelector('#_sign-up-form-mobile')

        signInForm?.classList.toggle('show')
        signUpForm?.classList.toggle('show')
        signInFormMobile?.classList.toggle('show')
        signUpFormMobile?.classList.toggle('show')
    }

    const [isAuthModalOpen, setisAuthModalOpen] = useState(false);
    const [isMobileAuthModalOpen, setisMobileAuthModalOpen] = useState(false);

    const [isCartModalOpen, setIsCartModalOpen] = useState(false);
    const [isFavouriteModalOpen, setIsFavouriteModalOpen] = useState(false);

    const [deviceWidth, setDeviceWidth] = useState(0);
    useEffect(() => {
        if (typeof window !== 'undefined') {
            setDeviceWidth(window.outerWidth);
        }
    }, []);

    const isDesktopDevice = () => {
            return deviceWidth > 1023
    }

    return (
        <header className='header'>
            <div style={{position:'relative'}}  className='header__inner container'>
                
                <Link className="header__logo" href="/">
                    <span className="header__logo-text">Elfen lied</span>
                </Link>

                <nav className='navbar hidden-tablet'>
                    <div className='navbar__links'>

                        <Link className='navbar__links-link navbar__links-link--catalog' href='/catalog'>
                            <img 
                                className="navbar__links-link-icon" 
                                src="svg/catalog.svg"
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
                                src="svg/search.svg"
                                alt="search" 
                                width={26} 
                                height={26} 
                                loading="lazy"
                            />
                            <span>Поиск</span>
                        </button>
                    </div>

                    <div style={{position:'relative'}} className='navbar__buttons'>
                        <button 
                            onClick={()=>setIsFavouriteModalOpen(true)}
                            className='navbar__buttons-btn'
                        >
                            <img 
                                className="navbar__buttons-btn-icon" 
                                src="svg/favourite.svg"
                                alt="favourite" 
                                width={22} 
                                height={20} 
                                loading="lazy"
                            />
                        </button>

                        <button onClick={()=>setisAuthModalOpen(true)} className='navbar__buttons-btn'> 
                            <img 
                                className="navbar__buttons-btn-icon" 
                                src="svg/profile.svg"
                                alt="profile" 
                                width={19} 
                                height={21} 
                                loading="lazy"
                            />
                        </button>

                        <CustomModal //auth modal
                            style={{top:50, right:-50}}
                            isWindowOpen={isAuthModalOpen}
                            setIsWindowOpen={setisAuthModalOpen}
                        >
                           <div className='auth-modal'>
                                <div id='_sign-in-form' className='auth-modal__form'>
                                    <SignInForm setAuthModal={setAuthModal}/>
                                </div>
                                <div id='_sign-up-form' className='auth-modal__form show'>
                                    <SignUpForm setAuthModal={setAuthModal}/>
                                </div>
                            </div>
                        </CustomModal>

                        <button 
                            onClick={()=>setIsCartModalOpen(true)}
                            className='navbar__buttons-btn'
                        >
                            <img 
                                className="navbar__buttons-btn-icon" 
                                src="svg/cart.svg"
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
                            src="svg/search-mobile.svg"
                            alt="search" 
                            width={24} 
                            height={24} 
                            loading="lazy"
                        />
                    </button>

                    <button
                        onClick={()=>setIsFavouriteModalOpen(true)}
                        style={{position:'relative'}} className='navbar__buttons-btn'
                    >
                        <img 
                            className="navbar__buttons-btn-icon" 
                            src="svg/favourite.svg"
                            alt="favourite" 
                            width={25} 
                            height={24} 
                            loading="lazy"
                        />
                    </button>

                    <button onClick={()=>setisMobileAuthModalOpen(true)} className='navbar__buttons-btn'> 
                        <img 
                            className="navbar__buttons-btn-icon" 
                            src="svg/profile.svg"
                            alt="profile" 
                            width={24} 
                            height={24} 
                            loading="lazy"
                        />
                    </button>

                    <CustomModal  //mobile auth modal
                        style={{top:60, right:0}}
                        isWindowOpen={isMobileAuthModalOpen}
                        setIsWindowOpen={setisMobileAuthModalOpen}
                    >
                        <div className='auth-modal'>
                            <div id='_sign-in-form-mobile' className='auth-modal__form'>
                                <SignInForm setAuthModal={setAuthModal}/>
                            </div>
                            <div id='_sign-up-form-mobile' className='auth-modal__form show'>
                                <SignUpForm setAuthModal={setAuthModal}/>
                            </div>
                        </div>
                    </CustomModal>

                    <button 
                        onClick={()=>setIsCartModalOpen(true)}
                        className='navbar__buttons-btn'
                    >
                        <img 
                            className="navbar__buttons-btn-icon" 
                            src="svg/cart.svg"
                            alt="cart" 
                            width={24} 
                            height={24} 
                            loading="lazy"
                        />
                    </button>

                    <button className='navbar__buttons-btn'>
                        <img 
                            className="navbar__buttons-btn-icon" 
                            src="svg/tel.svg"
                            alt="telephone" 
                            width={24} 
                            height={24} 
                            loading="lazy"
                        />
                    </button>
                </nav>

                <CustomModal  //cart modal
                    style={
                        isDesktopDevice() ?{
                            maxWidth:'619px',
                            padding:'0px 23px 33px 23px',
                            top:50, 
                            right:-50
                        }:
                        {
                            top:60,
                            right:0,
                            width:'100%',
                            padding:'0px',
                        }
                    }
                    isWindowOpen={isCartModalOpen}
                    setIsWindowOpen={setIsCartModalOpen}
                >
                    <div className='modal-title'>Ваша корзина</div>
                    <div className='modal'>
                        {cartProducts.map(product => 
                            <CartCard 
                                key={product.id} 
                                product={product} 
                            />
                        )} 
                    </div>  
                    <div className='cart-modal-footer'>
                        <div className='cart-modal-footer__total'>
                            <span className='cart-modal-footer__total-text'>Итого:</span>
                            <div className='cart-modal-footer__total-price'>
                                <span>450 000</span>
                                <span className='price-rub'>₽</span>
                            </div>
                        </div>
                        <div className='cart-modal-footer__buy'>
                            <button className='cart-modal-footer__buy-btn'>
                                Оформить
                            </button>
                        </div>
                    </div>
                </CustomModal>

                <CustomModal  //favourite modal
                    style={
                        isDesktopDevice() ?{
                            maxWidth:'619px',
                            padding:'0px 23px 33px 23px',
                            top:50, 
                            right:-50
                        }:
                        {
                            top:60,
                            right:0,
                            width:'100%',
                            padding:'0px 0px 30px 0px',
                        }
                    }
                    isWindowOpen={isFavouriteModalOpen}
                    setIsWindowOpen={setIsFavouriteModalOpen}
                >
                    <div className='modal-title'>Товары в избранном</div>
                    <div className='modal'>
                        {favouriteProducts.map(product => 
                            <FavouriteCard 
                                key={product.id} 
                                product={product} 
                            />
                        )} 
                    </div>  
                </CustomModal>

            </div>
        </header>
    );
};

export default Navbar;