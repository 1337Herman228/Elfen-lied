
import { Carousel } from 'antd';
import './LargeSlider.scss';
import React, { useEffect, useState } from 'react';

const slider_info = [
    {   
        id:1,
        name:'Santa Trinita',
        colorOpen:'--color-lavender',
        colorClose:'--color-light-lavender',
        imgOpen:'/products/lamp-3.png',
        imgClose:'/products/lamp-3-rotate.png',
        backgroundTitle:'Benjamin Moore',
        title:'Светильник',
        description:'Функциональная дизайнерская лампа для создания максимально комфортного освещения',
        price:'150 000',
    },
    {   
        id:2,
        name:'Santa Trinita',
        colorOpen:'--color-pink',
        colorClose:'--color-pink',
        imgOpen:'/products/chair-2.png',
        imgClose:'/products/chair-2-rotate.png',
        backgroundTitle:'Paint Here Glory',
        title:'Светильник',
        description:'Функциональная дизайнерская лампа для создания максимально комфортного освещения',
        price:'150 000',
    },
    {   
        id:3,
        name:'Santa Trinita',
        colorOpen:'--color-blue',
        colorClose:'--color-blue',
        imgOpen:'/products/table-2.png',
        imgClose:'/products/table-2-rotate.png',
        backgroundTitle:'Benjamin Moore',
        title:'Светильник',
        description:'Функциональная дизайнерская лампа для создания максимально комфортного освещения',
        price:'150 000',
    }
]

interface SliderInfoItemI {
    id:number,
    name:string,
    colorOpen:string,
    colorClose:string,
    imgOpen:string,
    imgClose:string,
    backgroundTitle:string,
    title:string,
    description:string,
    price:string,
}

const contentStyle: React.CSSProperties = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

const SliderCard = (
    {
        index,
        openSlideID = 0,
        sliderInfoItem,
    }
    :
    {
        index:number,
        openSlideID:number,
        sliderInfoItem:SliderInfoItemI,
    }
    ) => {

        
        
        return(
            <>
                 <div 
                 key={sliderInfoItem.id}
                 style={{backgroundColor:`var(${sliderInfoItem.colorClose})`}}
                 data-background-title={sliderInfoItem.backgroundTitle}
                 className={`slider-card hidden-tablet ${openSlideID === 0 ? 'slider-card--all-closed' : (openSlideID === sliderInfoItem.id ? 'slider-card--open' : 'slider-card--closed')} `}>
                    <img
                        className='slider-card__img'
                        src={openSlideID === sliderInfoItem.id ? sliderInfoItem.imgOpen : sliderInfoItem.imgClose}
                        alt={sliderInfoItem.name}
                        width={200}
                        height={300}
                        loading='lazy'
                    />
                        {openSlideID === 0 ? //all closed
                        <>
                        <div className='slider-card__text'>
                            {openSlideID === 0 && <>
                            <h3 className='slider-card__text-title'>{sliderInfoItem.title}</h3>
                            <div className='slider-card__text-description'>
                                <p>{sliderInfoItem.description}</p>
                            </div>
                            <span className='slider-card__text-price'>{sliderInfoItem.price} ₽</span>
                            </>}
                        </div>
                        </>
                        :
                        openSlideID === sliderInfoItem.id ? // open
                        <> 
                           <div className='slider-card__footer'>
                                <div className='slider-card__footer-text'>
                                    <h3 className='slider-card__footer-text-title'>{sliderInfoItem.title}</h3>
                                    <div className='slider-card__footer-text-description'>
                                        <p>{sliderInfoItem.description}</p>
                                    </div>
                                    <span className='slider-card__footer-text-price'>{sliderInfoItem.price}<span className='rub-symbol top-right'>₽</span></span>
                                </div>
                                <div></div>
                                <div className='slider-card__footer-button'>
                                    <button className='buy-btn'>
                                        <img
                                            className='buy-btn__img'
                                            src='/svg/cart-lime.svg'
                                            width={21}
                                            height={21}
                                            loading='lazy'
                                        />
                                        <span>Купить</span>
                                    </button>
                                </div>
                           </div>
                        </>
                        : //close
                        <>
                            <div className='slider-card__text'>
                                <span className='slider-card__text-slide'>Слайд</span>
                                <span className='slider-card__text-index'>0{index+1}</span>
                            </div>
                        </>
                        }
                 </div>
            </>
        )
}

const SliderCardMobile = (
    {
        index,
        openSlideID = 0,
        sliderInfoItem,
    }
    :
    {
        index:number,
        openSlideID:number,
        sliderInfoItem:SliderInfoItemI,
    }
    ) => {

        return(
            <>
                <div key={sliderInfoItem.id} className='slider-card-mobile visible-tablet'>
                    <div
                        className='slider-card-mobile__body'
                        data-background-title={sliderInfoItem.backgroundTitle}
                    >
                        <img
                            className='slider-card-mobile__body-img'
                            src={sliderInfoItem.imgOpen}
                            alt={sliderInfoItem.name}
                            width={200}
                            height={300}
                            loading='lazy'
                        />
                        <button className='slider-card-mobile__body-buy-btn buy-btn'>
                            <img
                                className='buy-btn__img'
                                src='/svg/cart-lime.svg'
                                width={21}
                                height={21}
                                loading='lazy'
                            />
                            <span>Купить</span>
                        </button>
                    </div>
                    
                    <div className='slider-card-mobile__footer'>
                        <div className='slider-card-mobile__footer-text'>
                            <h3 className='slider-card-mobile__footer-text-title'>{sliderInfoItem.name}</h3>
                            <div className='slider-card-mobile__footer-text-description'>
                                <p>{sliderInfoItem.description}</p>
                            </div>
                            <span className='slider-card-mobile__footer-text-price'>
                                {sliderInfoItem.price}
                                <span className='rub-symbol top-right'>₽</span>
                            </span>
                        </div>
                        <div></div>
                        <div className='slider-card-mobile__footer-slider-navigation'>
                            <div className='slider-card-mobile__footer-slider-navigation-index'>
                                0{index+1}
                            </div>
                            <div className='slider-card-mobile__footer-slider-navigation-divider'>

                            </div>
                            <div className='slider-card-mobile__footer-slider-navigation-index'>
                                03
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }


const LargeSlider = () => {

    const [openSlideID, setOpenSlideID] = useState(0);

    const changeSlide = (id:number) => {
        if(openSlideID === id){
            setOpenSlideID(0)
        }
        else {
            setOpenSlideID(id)
        }
    }
    

    return (
        <div className='large-slider-container'>
            {slider_info.map((sliderInfoItem,index) => 
                <div onClick={()=>changeSlide(sliderInfoItem.id)}>
                    <SliderCard
                        index={index}
                        openSlideID={openSlideID}
                        key={sliderInfoItem.id} 
                        sliderInfoItem={sliderInfoItem} 
                    />
                </div>
            )}
           <div className='slider-mobile visible-tablet'>
                <Carousel dotPosition={'right'}>
                    {slider_info.map((sliderInfoItem,index) => 
                        <div onClick={()=>changeSlide(sliderInfoItem.id)}>
                            <SliderCardMobile
                                index={index}
                                openSlideID={openSlideID}
                                key={sliderInfoItem.id} 
                                sliderInfoItem={sliderInfoItem} 
                            />
                        </div>
                    )}
                </Carousel>
           </div>
        </div>
    );
};


export default LargeSlider;