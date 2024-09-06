'use client';

import CategoryCard from '@/components/cards/category-card/CategoryCard';
import LargeSlider from '@/components/large-slider/LargeSlider';
import './MainPage.scss';
import SearchCard from '@/components/cards/search-card/SearchCard';
import { useEffect, useState } from 'react';
import CustomModal from '@/components/modal/custom-modal/CustomModal';
import StyledModal from '@/components/modal/StyledModal';
import ProductCard from '@/components/cards/product-card/ProductCard';

const categories = [
    {
        id:1,
        categoryName:'Напольные зеркала',
        quantity: 4,
        img:'/products/mirror-category.png',
    },
    {
        id:2,
        categoryName:'торшеры и лампы',
        quantity: 4,
        img:'/products/lamp-category.png',
    },
    {
        id:3,
        categoryName:'кресла и стулья',
        quantity: 4,
        img:'/products/sophisticated-unusual-modern-high-chair-wave-form 2.png',
    },
    {
        id:4,
        categoryName:'столы и тумбы',
        quantity: 4,
        img:'/products/table-category.png',
    },
]

const products = [
    {
        id:1,
        categoryId:1,
        name: 'Kristin',
        description: 'Зеркало напольное',
        price: '150 000',
        img:'/products/elongated-wave-form-modern-mirror-light-blue-color.png',
        color:'#A5D4FF',
    },
    {
        id:2,
        categoryId:1,
        name: 'Arlene',
        description: 'Зеркало напольное',
        price: '150 000',
        img:'/products/tall-flower-form-modern-mirror-light-blue-color-wh.png',
        color:'#F0B3EA',
    },
    {
        id:3,
        categoryId:1,
        name: 'Colleen',
        description: 'Зеркало напольное',
        price: '150 000',
        img:'/products/tall-sun-form-modern-mirror-light-blue-color-white.png',
        color:'#8ECDFA',
    },
    {
        id:4,
        categoryId:1,
        name: 'coppelia',
        description: 'Зеркало напольное',
        price: '150 000',
        img:'/products/tall-flower-form-modern-mirror-light-blue-color-wh (1).png',
        color:'#FBE4CA',
    },
    {
        id:5,
        categoryId:1,
        name: 'artemide',
        description: 'Зеркало напольное',
        price: '150 000',
        img:'/products/tall-wave-form-modern-mirror-light-lavender-color- (1).png',
        color:'#F0B5FA',
    },
    {
        id:6,
        categoryId:2,
        name: 'Aubrey',
        description: 'Лампа настольная',
        price: '150 000',
        img:'/products/sophisticated-unusual-modern-high-lamp-wave-form-- (1).png',
        color:'#FFC4A5',
    },
    {
        id:7,
        categoryId:2,
        name: 'Leslie',
        description: 'Лампа настольная',
        price: '150 000',
        img:'/products/sophisticated-unusual-modern-high-lamp-tree-form--.png',
        color:'#88E379',
    },
    {
        id:8,
        categoryId:2,
        name: 'Darrell',
        description: 'Лампа настольная',
        price: '150 000',
        img:'/products/sophisticated-unusual-modern-high-lamp-wave-form-- (3) 1.png',
        color:'#FA8EEF',
    },
    {
        id:9,
        categoryId:2,
        name: 'coppelia',
        description: 'Лампа настольная',
        price: '150 000',
        img:'/products/sophisticated-unusual-modern-high-lamp-wave-form-- (2).png',
        color:'#29D0D9',
    },
    {
        id:10,
        categoryId:2,
        name: 'artemide',
        description: 'Лампа настольная',
        price: '150 000',
        img:'/products/sophisticated-unusual-modern-high-lamp-wave-form--.png',
        color:'#89D5FF',
    },
    {
        id:11,
        categoryId:3,
        name: 'Kathryn',
        description: 'Кресло',
        price: '150 000',
        img:'/products/sophisticated-unusual-modern-high-chair-wave-form- (1).png',
        color:'#FBE4CA',
    },
    {
        id:12,
        categoryId:3,
        name: 'Wendy',
        description: 'Кресло',
        price: '150 000',
        img:'/products/sophisticated-unusual-modern-high-chair-wave-form-.png',
        color:'#F0B3EA',
    },
    {
        id:13,
        categoryId:3,
        name: 'Judith',
        description: 'Кресло',
        price: '150 000',
        img:'/products/tall-unusual-modern-chair-light-lavender-color-whi (1).png',
        color:'#F18EFA',
    },
    {
        id:14,
        categoryId:3,
        name: 'Jane',
        description: 'Кресло',
        price: '150 000',
        img:'/products/unusual-modern-chair-lavender-color.png',
        color:'#5C544A',
    },
    {
        id:15,
        categoryId:3,
        name: 'Darlene',
        description: 'Кресло',
        price: '150 000',
        img:'/products/unusual-modern-high-chair-wave-form.png',
        color:'#F0B5FA',
    },
    {
        id:16,
        categoryId:4,
        name: 'Kathryn',
        description: 'Стол',
        price: '150 000',
        img:'/products/elongated-form-tall-modern-table-light-blue-color- (2).png',
        color:'#A5D4FF',
    },
    {
        id:17,
        categoryId:4,
        name: 'Wendy',
        description: 'Стол',
        price: '150 000',
        img:'/products/unusual-modern-high-wide-wave-glowing-light-table- (1).png',
        color:'#F0DFB3',
    },
    {
        id:18,
        categoryId:4,
        name: 'Judith',
        description: 'Стол',
        price: '150 000',
        img:'/products/unusual-modern-tall-wide-wave-glowing-light-table- 1.png',
        color:'#F88EFA',
    },
    {
        id:19,
        categoryId:4,
        name: 'Jane',
        description: 'Стол',
        price: '150 000',
        img:'/products/unusual-modern-high-wide-wave-glowing-light-table- (2) 1.png',
        color:'#CACFFB',
    },
    {
        id:20,
        categoryId:4,
        name: 'Darlene',
        description: 'Стол',
        price: '150 000',
        img:'/products/wide-form-hight-modern-table-light-lavender-color- (2).png',
        color:'#F0B5FA',
    },
]


const MainPage = () => {

    const [openCategoryID, setOpenCategoryID] = useState(0);
    const [isMobileCategoriesModalOpen, setIsMobileCategoriesModalOpen] = useState(false);

    const [product, setProduct] = useState(products[0]);
    const [isProductsModalOpen, setIsProductsModalOpen] = useState([false, false]);
    const toggleModal = (idx:number, target:boolean) => {
       setIsProductsModalOpen((p) => {
        p[idx] = target;
        return [...p];
      });
    };

    const openProductModal = (idx: number, product: any) => {
        setProduct(product)
        toggleModal(idx, true)
    }

    function getCurrentScreenWidth(): number {
        return window.outerWidth;
    }


    const closeCategoriesModal = (state:boolean) => {
        if(!state){
            setOpenCategoryID(0)
        }
    }

    const isWindowOpen = () => {

        const screenWidth = window.innerWidth;
        if (screenWidth <= 1023) {
            return !!openCategoryID
        }
        else{
            return false
        } 
    }

    function openCategories(id: number) {

        const screenWidth = window.innerWidth;
        if (screenWidth <= 1023) {
            setIsMobileCategoriesModalOpen(!isMobileCategoriesModalOpen)
        }
        setOpenCategoryIdFunc(id)
    
      }

    const categoriesScrollBlock = ()=>{
        const cardsContainer = document.querySelector<HTMLElement>('.categories__cards');
        let isDown = false;
        let startX: number;
        let scrollLeft: number;

        if (cardsContainer) {
            cardsContainer.addEventListener('mousedown', (e: MouseEvent) => {
                isDown = true;
                cardsContainer.classList.add('active');
                startX = e.pageX - cardsContainer.offsetLeft;
                scrollLeft = cardsContainer.scrollLeft;
            });

            cardsContainer.addEventListener('mouseleave', () => {
                isDown = false;
                cardsContainer.classList.remove('active');
            });

            cardsContainer.addEventListener('mouseup', () => {
                isDown = false;
                cardsContainer.classList.remove('active');
            });

            cardsContainer.addEventListener('mousemove', (e: MouseEvent) => {
                if (!isDown) return; // Если мышь не нажата, ничего не делаем
                e.preventDefault(); // Отменяем стандартное поведение
                const x = e.pageX - cardsContainer.offsetLeft;
                const walk = (x - startX) * 1; // Количество пикселей для прокрутки
                cardsContainer.scrollLeft = scrollLeft - walk;
            });
        }
    }

    const setOpenCategoryIdFunc = (id: number) => {
        if (openCategoryID === id) {
            setOpenCategoryID(0);
        }
        else {
            setOpenCategoryID(id);
        }
    }

    useEffect(() => {
        categoriesScrollBlock();
    }, []);


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
                        <span 
                            className='categories__cards-card' 
                            onClick={() => {
                                openCategories(category.id);
                            }}
                        >
                           <CategoryCard 
                                openCategoryID={openCategoryID} 
                                key={category.id} 
                                category={category} 
                            /> 
                        </span>
                            
                        )}
                    </div>
                    <div className={`products products--section hidden-tablet`}>
                        <div className={`products__header ${openCategoryID!==0 ? 'show': ''}`}>
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
                        
                        <div className={`products-container ${openCategoryID && 'show'}`}>
                            <div className='products__body'>
                                {products.filter(product => product.categoryId === openCategoryID).map(product => 
                                    <SearchCard 
                                        openProductModal={openProductModal} 
                                        key={product.id} 
                                        product={product} 
                                    />
                                )} 
                            </div>
                            <div className='load-more'>

                                <button className='load-more__btn one-ellipse-btn'>
                                    <span>Загрузить еще</span>
                                    <img
                                        className='products__header-filters-icon'
                                        src='/svg/arrow-down.svg'
                                        width={24}
                                        height={24}
                                        loading='lazy'
                                    />
                                </button>
                            </div>
                        </div>
                    </div>

                    <CustomModal 
                        style={{top:90, width:'90%', right:'50%', transform:'translateX(50%)'}}
                        isWindowOpen={isWindowOpen()}
                        setIsWindowOpen={closeCategoriesModal}
                    >
                        <div className='modal-title'>{openCategoryID!==0 && categories.filter(category => category.id === openCategoryID)[0].categoryName}</div>
                        <div className='modal-products'>
                            {products.filter(product => product.categoryId === openCategoryID).map(product => 
                                <SearchCard 
                                    key={product.id} 
                                    product={product} 
                                    openProductModal={openProductModal}
                                />
                            )} 
                        </div>   
                    </CustomModal>

                </div>
                <div className='main-divider  padding-top-section' />
                
                <StyledModal
                    isModalOpen={isProductsModalOpen}
                    toggleModal={toggleModal}
                    modalId={1}
                    centered={true}
                    width={getCurrentScreenWidth()}
                >
                    <ProductCard product={product}/>

                </StyledModal>
                    
            </div>
        </>
    );
};

export default MainPage;