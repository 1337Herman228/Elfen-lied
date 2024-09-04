
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
    }
    :
    {
        product:searchProductI,
    }
) => {

    return(
        <>
            <div className="search-card">
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
        </>
    )
}

export default SearchCard