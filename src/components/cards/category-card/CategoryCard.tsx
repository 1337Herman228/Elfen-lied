
import './CategoryCard.scss';

const CategoryCard = () => {
    return (
        <div 
            data-category-name={'Напольные зеркала'}
            className='category-card'
        >
            <img
                className='category-card__img'
                src='/products/mirror-category.png'
                width={210}
                height={260}
                loading='lazy'
            />
            {/* .open */}
            <div className='category-card__quantity'> 
                <span className='category-card__quantity-digit'>4</span>
                <span className='category-card__quantity-text'>шт</span>
            </div>
            <img
                className='category-card__btn'
                src='/svg/category-btn.svg' //category-btn-open.svg
                width={101}
                height={101}
                loading='lazy'
            />
        </div>
    );
};

export default CategoryCard;