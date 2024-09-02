'use client';

import LargeSlider from '@/components/large-slider/LargeSlider';

const MainPage = () => {
    return (
        <>
            <h1 className='visually-hidden'>Elfen lied main page</h1>

            <div className='container'>
                <div className='section-20'>
                    <LargeSlider />
                </div>
            </div>
        </>
    );
};

export default MainPage;