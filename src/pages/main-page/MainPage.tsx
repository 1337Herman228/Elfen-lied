'use client';

import CategoryCard from '@/components/cards/category-card/CategoryCard';
import LargeSlider from '@/components/large-slider/LargeSlider';
import './MainPage.scss';
import SearchCard from '@/components/cards/search-card/SearchCard';
import { useEffect, useState } from 'react';
import CustomModal from '@/components/modal/custom-modal/CustomModal';
import StyledModal from '@/components/modal/StyledModal';
import ProductCard from '@/components/cards/product-card/ProductCard';
import BlogCard from '@/components/cards/blog-card/BlogCard';

const baseUrl = '/Elfen-lied'

const categories = [
    {
        id:1,
        categoryName:'Напольные зеркала',
        quantity: 4,
        img: 'products/mirror-category.png',
    },
    {
        id:2,
        categoryName:'торшеры и лампы',
        quantity: 4,
        img:'products/lamp-category.png',
    },
    {
        id:3,
        categoryName:'кресла и стулья',
        quantity: 4,
        img:'products/sophisticated-unusual-modern-high-chair-wave-form 2.png',
    },
    {
        id:4,
        categoryName:'столы и тумбы',
        quantity: 4,
        img:'products/table-category.png',
    },
]

const products = [
    {
        id:1,
        categoryId:1,
        name: 'Kristin',
        description: 'Зеркало напольное',
        price: '150 000',
        img:'products//elongated-wave-form-modern-mirror-light-blue-color.png',
        color:'#A5D4FF',
    },
    {
        id:2,
        categoryId:1,
        name: 'Arlene',
        description: 'Зеркало напольное',
        price: '150 000',
        img:'products//tall-flower-form-modern-mirror-light-blue-color-wh.png',
        color:'#F0B3EA',
    },
    {
        id:3,
        categoryId:1,
        name: 'Colleen',
        description: 'Зеркало напольное',
        price: '150 000',
        img:'products//tall-sun-form-modern-mirror-light-blue-color-white.png',
        color:'#8ECDFA',
    },
    {
        id:4,
        categoryId:1,
        name: 'coppelia',
        description: 'Зеркало напольное',
        price: '150 000',
        img:'products//tall-flower-form-modern-mirror-light-blue-color-wh (1).png',
        color:'#FBE4CA',
    },
    {
        id:5,
        categoryId:1,
        name: 'artemide',
        description: 'Зеркало напольное',
        price: '150 000',
        img:'products//tall-wave-form-modern-mirror-light-lavender-color- (1).png',
        color:'#F0B5FA',
    },
    {
        id:6,
        categoryId:2,
        name: 'Aubrey',
        description: 'Лампа настольная',
        price: '150 000',
        img:'products//sophisticated-unusual-modern-high-lamp-wave-form-- (1).png',
        color:'#FFC4A5',
    },
    {
        id:7,
        categoryId:2,
        name: 'Leslie',
        description: 'Лампа настольная',
        price: '150 000',
        img:'products//sophisticated-unusual-modern-high-lamp-tree-form--.png',
        color:'#88E379',
    },
    {
        id:8,
        categoryId:2,
        name: 'Darrell',
        description: 'Лампа настольная',
        price: '150 000',
        img:'products//sophisticated-unusual-modern-high-lamp-wave-form-- (3) 1.png',
        color:'#FA8EEF',
    },
    {
        id:9,
        categoryId:2,
        name: 'coppelia',
        description: 'Лампа настольная',
        price: '150 000',
        img:'products//sophisticated-unusual-modern-high-lamp-wave-form-- (2).png',
        color:'#29D0D9',
    },
    {
        id:10,
        categoryId:2,
        name: 'artemide',
        description: 'Лампа настольная',
        price: '150 000',
        img:'products//sophisticated-unusual-modern-high-lamp-wave-form--.png',
        color:'#89D5FF',
    },
    {
        id:11,
        categoryId:3,
        name: 'Kathryn',
        description: 'Кресло',
        price: '150 000',
        img:'products//sophisticated-unusual-modern-high-chair-wave-form- (1).png',
        color:'#FBE4CA',
    },
    {
        id:12,
        categoryId:3,
        name: 'Wendy',
        description: 'Кресло',
        price: '150 000',
        img:'products//sophisticated-unusual-modern-high-chair-wave-form-.png',
        color:'#F0B3EA',
    },
    {
        id:13,
        categoryId:3,
        name: 'Judith',
        description: 'Кресло',
        price: '150 000',
        img:'products//tall-unusual-modern-chair-light-lavender-color-whi (1).png',
        color:'#F18EFA',
    },
    {
        id:14,
        categoryId:3,
        name: 'Jane',
        description: 'Кресло',
        price: '150 000',
        img:'products//unusual-modern-chair-lavender-color.png',
        color:'#5C544A',
    },
    {
        id:15,
        categoryId:3,
        name: 'Darlene',
        description: 'Кресло',
        price: '150 000',
        img:'products//unusual-modern-high-chair-wave-form.png',
        color:'#F0B5FA',
    },
    {
        id:16,
        categoryId:4,
        name: 'Kathryn',
        description: 'Стол',
        price: '150 000',
        img:'products//elongated-form-tall-modern-table-light-blue-color- (2).png',
        color:'#A5D4FF',
    },
    {
        id:17,
        categoryId:4,
        name: 'Wendy',
        description: 'Стол',
        price: '150 000',
        img:'products//unusual-modern-high-wide-wave-glowing-light-table- (1).png',
        color:'#F0DFB3',
    },
    {
        id:18,
        categoryId:4,
        name: 'Judith',
        description: 'Стол',
        price: '150 000',
        img:'products//unusual-modern-tall-wide-wave-glowing-light-table- 1.png',
        color:'#F88EFA',
    },
    {
        id:19,
        categoryId:4,
        name: 'Jane',
        description: 'Стол',
        price: '150 000',
        img:'products//unusual-modern-high-wide-wave-glowing-light-table- (2) 1.png',
        color:'#CACFFB',
    },
    {
        id:20,
        categoryId:4,
        name: 'Darlene',
        description: 'Стол',
        price: '150 000',
        img:'products//wide-form-hight-modern-table-light-lavender-color- (2).png',
        color:'#F0B5FA',
    },
]

const blogs = [
    {
        id:1,
        headerInfo:'Laura Busche',
        title:'новая коллекция кресел',
        date:'14 Января 2023',
        img:'images/blog-1.png',
        imgMobile:'images/blog-1-mobile.png',
        time:3,
    },
    {
        id:2,
        headerInfo:'Laura Busche',
        title:'Световой дизайн в интерьере',
        date:'14 Января 2023',
        img:'images/blog-2.png',
        imgMobile:'images/blog-2-mobile.png',
        time:3,
    },
    {
        id:3,
        headerInfo:'Laura Busche',
        title:'как выбрать шкаф в спальню',
        date:'14 Января 2023',
        img:'images/blog-3.png',
        imgMobile:'images/blog-3-mobile.png',
        time:3,
    },

]


const MainPage = () => {

    const [openCategoryID, setOpenCategoryID] = useState(0);
    const [isMobileCategoriesModalOpen, setIsMobileCategoriesModalOpen] = useState(false);

    const [openBlogID, setOpenBlogID] = useState(0);

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

    const [deviceWidth, setDeviceWidth] = useState(0);
    useEffect(() => {
         if (typeof window !== 'undefined') {
            setDeviceWidth(window.outerWidth);
        }
    }, []);

    function getCurrentScreenWidth(): number {
        return deviceWidth;
    }


    const closeCategoriesModal = (state:boolean) => {
        if(!state){
            setOpenCategoryID(0)
        }
    }

    const isWindowOpen = () => {
        if (deviceWidth <= 1023) {
            return !!openCategoryID
        }
        else{
            return false
        } 
    }

    function openCategories(id: number) {
        if (deviceWidth <= 1023) {
            setIsMobileCategoriesModalOpen(!isMobileCategoriesModalOpen)
        }
        setOpenCategoryIdFunc(id)
    }

    const makeScrollForBlock = (container: HTMLElement, speed: number) => {
        let isDown = false;
        let startX: number;
        let scrollLeft: number;

        if (container) {
            container.addEventListener('mousedown', (e: MouseEvent) => {
                isDown = true;
                container.classList.add('active');
                startX = e.pageX - container.offsetLeft;
                scrollLeft = container.scrollLeft;
            });

            container.addEventListener('mouseleave', () => {
                isDown = false;
                container.classList.remove('active');
            });

            container.addEventListener('mouseup', () => {
                isDown = false;
                container.classList.remove('active');
            });

            container.addEventListener('mousemove', (e: MouseEvent) => {
                if (!isDown) return; // Если мышь не нажата, ничего не делаем
                e.preventDefault(); // Отменяем стандартное поведение
                const x = e.pageX - container.offsetLeft;
                const walk = (x - startX) * speed; // Количество пикселей для прокрутки
                container.scrollLeft = scrollLeft - walk;
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

        const cardsContainer = document.querySelector<HTMLElement>('.categories__cards');
        if(cardsContainer) makeScrollForBlock(cardsContainer,3);

        const blogContainer = document.querySelector<HTMLElement>('.blog-container');
        if(blogContainer) makeScrollForBlock(blogContainer,3);

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
                        <div 
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
                        </div>
                            
                        )}
                    </div>
                    <div className={`products products--section hidden-tablet`}>
                        <div className={`products__header ${openCategoryID!==0 ? 'show': ''}`}>
                            <button className='products__header-filters'>
                                <img
                                    className='products__header-filters-icon'
                                    src='svg/filters.svg'
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
                                        src='svg/arrow-down.svg'
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
                <div className='main-divider padding-top-section' />
                
                <StyledModal
                    isModalOpen={isProductsModalOpen}
                    toggleModal={toggleModal}
                    modalId={1}
                    centered={true}
                    width={getCurrentScreenWidth()}
                >
                    <ProductCard product={product}/>

                </StyledModal>
                    
                <div className='blogs-header padding-top-section section-60'>
                    <div className='blogs-header__left'>
                        <div className='navigation'>
                            <span className='navigation__dot active'></span>
                            <span className='navigation__dot'></span>
                            <span className='navigation__dot'></span>
                        </div>
                        <div className='blogs-header__left-text'>
                            Блог
                        </div>
                    </div>
                    <div className='blogs-header__right'>
                       <span className='blogs-header__right__digit'>02</span> 
                       <div className='blogs-header__right__divider'></div> 
                       <span className='blogs-header__right__digit'>04</span>
                    </div>
                </div>
                <div className="blog-container blog-container--section">
                    {blogs.map(blog => 
                        <div className="blog">
                            <BlogCard 
                                key={blog.id} 
                                blog={blog} 
                                openBlogID={openBlogID}
                                setOpenBlogID={setOpenBlogID}
                            />
                        </div>
                    )}
                </div>

                <footer className='main-footer main-footer--section section-60'>

                    <div className='main-footer__left hidden-tablet'>
                        @2023
                    </div>

                    <div className='main-footer__left visible-tablet'>
                        Все права<br/>
                        защищены<br/>
                        @2023
                    </div>

                    <div className='main-footer__right hidden-tablet'>
                        Все права защищены
                    </div>

                    <div className='main-footer__right visible-tablet'>
                       <img 
                           src='/images/footer-mobile-img.png'
                           width={148}
                           height={86}
                           loading='lazy'
                       />   
                    </div>
                </footer>
            </div>
        </>
    );
};

export default MainPage;