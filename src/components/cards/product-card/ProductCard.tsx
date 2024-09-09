
import { useState } from 'react';
import './ProductCard.scss';

interface searchProductI {
    id:number,
    categoryId:number,
    name: string,
    description: string,
    price: string,
    img:string,
    color:string,
}

const ProductCard = (
    {
        product,
    }
    :
    {
        product:searchProductI,
    }) => {

    const [isFavourite, setIsFavourite] = useState(false);

    return (
        <div className='product-card'>

            <div 
                data-bg-text='Benjamin Moore'
                className='product-card__body'
            >
                <div className='product-card__body-left'>
                    <span className='product-card__body-left-article'>Арт. GNM007</span>
                    <div className='color hidden-tablet'>
                        <span>Цвет:</span>
                        <div className='color__container'>
                            <div className='color__icon' style={{backgroundColor: product.color}}/>
                            <span>Лаванда</span>
                        </div>
                    </div>
                    <div className='charachteristics visible-tablet'>
                        <span>Высота:</span>
                        <span>60см</span>
                    </div>
                </div>
                <div className='product-card__body-center'>
                    <img 
                        className='product-card__body-center-img'
                        src={product.img}
                        width={450}
                        height={666}
                        loading='lazy'
                    />
                </div>
                <div className='product-card__body-right'>
                    <div className='product-card__body-right-favourite'>
                        <button
                            onClick={() => setIsFavourite(!isFavourite)}
                            className='product-card__body-right-favourite-btn active'
                         >
                            <img 
                                className='product-card__body-right-favourite-icon'
                                // src={isFavourite ? '//svg/pink-favourite-icon.svg' : '//svg/lime-favourite-icon.svg'}
                                src={isFavourite ? 'svg/pink-favourite-icon.svg' : 'svg/lime-favourite-icon.svg'}
                                width={79}
                                height={79}
                                loading='lazy'
                            />
                        </button>
                    </div>
                    <div className='charachteristics hidden-tablet'>
                        <span>Высота:</span>
                        <span>60см</span>
                    </div>
                    <div className='color visible-tablet'>
                        <div className='color__icon' style={{backgroundColor: product.color}}/>
                        <div className='color__container'>
                            <span>Лаванда</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className='product-card__footer hidden-tablet'>
                <div className='product-card__footer-description'>
                Функциональная дизайнерская лампа для создания максимально комфортного освещения
                </div>
                <div className='product-card__footer-central'>
                    <span className='product-card__footer-central-name'>
                        {product.name}
                    </span>
                    <span className='product-card__footer-central-price'>
                        {product.price}<span className='product-card__footer-central-price-rub'>₽</span>
                    </span>
                </div>
                <div className='product-card__footer-buy'>
                    <button className='product-card__footer-buy-btn buy-btn'>
                        <img
                            className=''
                            // src='//svg/cart-lime.svg'
                            src='svg/cart-lime.svg'
                            width={21}
                            height={21}
                            loading='lazy'
                        />
                        <span>Купить</span>
                    </button>
                </div>
            </div>

            <div className='product-card__footer-mobile visible-tablet'>

                <div className='product-card__footer-mobile-info'>
                    <div className='product-card__footer-mobile-info-name'> {product.name}</div>
                    <div className='product-card__footer-mobile-info-description'>
                        <p>Функциональная дизайнерская лампа для создания максимально комфортного освещения</p>
                    </div>
                </div>

                <div className='product-card__footer-mobile-form'>
                    <div className='product-card__footer-mobile-form-price'>
                        {product.price}<span className='rub'>₽</span>
                    </div>
                    <button className='product-card__footer-mobile-form-buy buy-btn'>
                        <img
                            className=''
                            // src='//svg/cart-lime.svg'
                            src='svg/cart-lime.svg'
                            width={21}
                            height={21}
                            loading='lazy'
                        />
                        <span>Купить</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;