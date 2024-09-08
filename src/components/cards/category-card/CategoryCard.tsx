
import './CategoryCard.scss';

interface categoryI {
    id:number,
    categoryName:string,
    quantity: number,
    img:string,
}

const CategoryCard = (
    {
        category,
        openCategoryID,
    }
    :
    {
        category:categoryI,
        openCategoryID: number,
    }
) => {
    return (
        <div 
            data-category-name={category.categoryName}
            className='category-card'
        >
            <img
                className='category-card__img'
                src={category.img}
                width={210}
                height={260}
                loading='lazy'
            />
            {/* .open */}
            <div className='category-card__quantity'> 
                <span className='category-card__quantity-digit'>{category.quantity}</span>
                <span className='category-card__quantity-text'>шт</span>
            </div>
            <img
                className='category-card__btn'
                // src={openCategoryID === category.id ?'/svg/category-btn-open.svg' : '/svg/category-btn.svg'} //category-btn-open.svg
                src={openCategoryID === category.id ?'svg/category-btn-open.svg' : 'svg/category-btn.svg'} //category-btn-open.svg
                width={101}
                height={101}
                loading='lazy'
            />
        </div>
    );
};

export default CategoryCard;