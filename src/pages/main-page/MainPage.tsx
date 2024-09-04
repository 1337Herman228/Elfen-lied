'use client';

import CategoryCard from '@/components/cards/category-card/CategoryCard';
import LargeSlider from '@/components/large-slider/LargeSlider';
import './MainPage.scss';
import SearchCard from '@/components/cards/search-card/SearchCard';

const categories = [
    {
        id:1,
        categoryName:'Напольные зеркала',
        quantity: 4,
        img:'/products/mirror-category.png',
    },
    {
        id:2,
        categoryName:'Напольные зеркала',
        quantity: 4,
        img:'/products/mirror-category.png',
    },
    {
        id:3,
        categoryName:'Напольные зеркала',
        quantity: 4,
        img:'/products/mirror-category.png',
    },
    {
        id:4,
        categoryName:'Напольные зеркала',
        quantity: 4,
        img:'/products/mirror-category.png',
    },
]

const products = [
    {
        id:1,
        name: 'Kristin',
        description: 'Зеркало напольное',
        price: 150000,
        img:'/products/elongated-wave-form-modern-mirror-light-blue-color.png',
    },
    {
        id:2,
        name: 'Kristin',
        description: 'Зеркало напольное',
        price: 150000,
        img:'/products/elongated-wave-form-modern-mirror-light-blue-color.png',
    },
    {
        id:3,
        name: 'Kristin',
        description: 'Зеркало напольное',
        price: 150000,
        img:'/products/elongated-wave-form-modern-mirror-light-blue-color.png',
    },
    {
        id:4,
        name: 'Kristin',
        description: 'Зеркало напольное',
        price: 150000,
        img:'/products/elongated-wave-form-modern-mirror-light-blue-color.png',
    },
    {
        id:5,
        name: 'Kristin',
        description: 'Зеркало напольное',
        price: 150000,
        img:'/products/elongated-wave-form-modern-mirror-light-blue-color.png',
    },
]

const MainPage = () => {
    return (
        <>
            <h1 className='visually-hidden'>Elfen lied main page</h1>

            <div className='container'>
                <div className='section-20'>
                    <LargeSlider />
                </div>
                <div className='categories section-60 padding-top-section'>
                    <h2 className='categories__title'>Категории</h2>
                    <div className='categories__cards'>
                        {categories.map(category => 
                            <CategoryCard key={category.id} category={category} />
                        )}
                    </div>
                    <div className='products products--section'>
                        <div className='products__header'>
                            <button className='products__header-filters'>
                                <img
                                    className='products__header-filters-icon'
                                    src='/svg/filters.svg'
                                    width={20}
                                    height={21}
                                    loading='lazy'
                                />
                                <span className='products__header-filters-text'>Фильтры</span>
                            </button>
                            <div className='products__header-info'>
                                <span className='products__header-info-text'>20 позиций в категории</span>
                            </div>
                        </div>
                        <div className='products__body'>
                            {products.map(product => 
                                <SearchCard key={product.id} product={product} />
                            )} 
                        </div>
                       
                    </div>
                </div>
            </div>
        </>
    );
};

export default MainPage;