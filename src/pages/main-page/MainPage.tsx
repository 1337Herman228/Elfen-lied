'use client';

import CategoryCard from '@/components/cards/category-card/CategoryCard';
import LargeSlider from '@/components/large-slider/LargeSlider';
import './MainPage.scss';

const MainPage = () => {
    return (
        <>
            <h1 className='visually-hidden'>Elfen lied main page</h1>

            <div className='container'>
                <div className='section-20'>
                    <LargeSlider />
                </div>
                <div className='categories section-20 padding-top-section'>
                    <h2 className='categories__title'>Категории</h2>
                    <CategoryCard />
                </div>
            </div>
        </>
    );
};

export default MainPage;