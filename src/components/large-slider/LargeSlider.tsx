
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
        price:150000,
    },
    {   
        id:2,
        name:'Santa Trinita',
        colorOpen:'--color-pink',
        colorClose:'--color-pink',
        imgOpen:'/products/chair-2.png',
        imgClose:'/products/chair-2-rotate.png',
        backgroundTitle:'Benjamin Moore',
        title:'Светильник',
        description:'Функциональная дизайнерская лампа для создания максимально комфортного освещения',
        price:150000,
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
        price:150000,
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
    price:number,
}

const SliderCard = (
    {
        index,
        isOpen = false,
        sliderInfoItem,
    }
    :
    {
        index:number,
        isOpen:boolean,
        sliderInfoItem:SliderInfoItemI,
    }
    ) => {
    
        return(
            <>
                {isOpen ? 
                    <>
                    <div 
                        style={{backgroundColor:`var(${sliderInfoItem.colorOpen})`}} 
                        className='slider-card-open'
                        data-background-title={sliderInfoItem.backgroundTitle}
                    >
                        
                    </div>
                    </> 
                    : 
                    <>
                    <div style={{backgroundColor:`var(${sliderInfoItem.colorClose})`}} className='slider-card-close'>
                        <img
                            className='slider-card-close__img'
                            src={sliderInfoItem.imgClose}
                            alt={sliderInfoItem.name}
                            width={200}
                            height={300}
                            loading='lazy'
                        />
                        <div className='slider-card-close__text'>
                            <span className='slider-card-close__text-slide'>Слайд</span>
                            <span className='slider-card-close__text-index'>0{index+1}</span>
                        </div>
                    </div>
                    </>
                }
            </>
        )

}

const LargeSlider = () => {

    const firstSlideID = slider_info[0].id
    const [openSlide, setOpenSlide] = useState(firstSlideID);

    return (
        <div className='large-slider-container'>
           {slider_info.map((sliderInfoItem,index) => 
            <div onClick={() => setOpenSlide(sliderInfoItem.id)}>
                <SliderCard
                    index={index}
                    isOpen={sliderInfoItem.id === openSlide}
                    key={sliderInfoItem.id} 
                    sliderInfoItem={sliderInfoItem} 
                />
            </div>
            )}
        </div>
    );
};

export default LargeSlider;