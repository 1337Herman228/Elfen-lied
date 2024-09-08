'use client';

import './SearchCard.scss'

interface searchProductI {
    id:number,
    categoryId:number,
    name: string,
    description: string,
    price: string,
    img:string,
    color:string,
}

const SearchCard = (
    {
        product,
        openProductModal,
    }
    :
    {
        product:searchProductI,
        openProductModal:(idx:number, product:searchProductI)=>void
    }
) => {

    return(
        <>
            <div onClick={()=>openProductModal(1, product)}  className="search-card hidden-tablet">
                <div className='search-card__body'>
                    <span className='search-card__body-color' style={{backgroundColor: product.color}}/>
                    <img
                        className='search-card__body-img'
                        src={product.img}
                        // width={260}
                        height={260}
                        loading='lazy'
                    />
                    <div className='search-card__body-info'>
                        <h4 className='search-card__body-info-name'>{product.name}</h4>
                        <div className='search-card__body-info-description'><p>{product.description}</p></div>
                    </div>
                </div>
                <div className='search-card__footer'>
                    <span className='search-card__footer-price'>
                        <span>{product.price}</span>
                        <span className='search-card__footer-price-rub-symbol'>₽</span>
                    </span>
                    <button className='search-card__footer-buy-btn'>
                        <img
                            className='search-card__footer-buy-btn-img'
                            // src='//svg/cart-lime.svg'
                             src='/svg/cart-lime.svg'
                            width={24}
                            height={24}
                            loading='lazy'
                        />
                        <span className='search-card__footer-buy-btn-text'>
                            Купить
                        </span>
                    </button>
                </div>
            </div>
            <div onClick={()=>openProductModal(1, product)} className='search-card-mobile visible-tablet'>
                <div className='img-container'> 
                    <img
                        className='img-container__img'
                        src={product.img}
                        // width={260}
                        height={120}
                        loading='lazy'
                    />
                </div>
                <div className='info-container'>

                    <div className='info-container__body'>
                        <div className='info-container__body-name'>
                            <span className='info-container__body-name-color' style={{backgroundColor: product.color}}/>
                            <span className='info-container__body-name-text' >{product.name}</span>
                        </div>
                        <div className='info-container__body-description'>
                            <p>{product.description}</p>
                        </div>
                    </div>

                    <div className='info-container__footer'>
                        <span className='info-container__footer-price'>
                            <span>{product.price}</span>
                            <span className='info-container__footer-price-rub'>₽</span>
                        </span>
                        <button className='info-container__footer-buy-btn'>
                            <img
                                className='info-container__footer-buy-btn-icon'
                                // src='//svg/cart-lime.svg'
                                 src='/svg/cart-lime.svg'
                                width={24}
                                height={24}
                                loading='lazy'
                            />
                            <span className='info-container__footer-buy-btn-text'>
                                Купить
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SearchCard