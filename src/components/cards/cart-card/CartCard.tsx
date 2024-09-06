
import { useEffect, useRef, useState } from 'react';
import './CartCard.scss';

interface searchProductI {
    id:number,
    categoryId:number,
    name: string,
    description: string,
    price: string,
    img:string,
    color:string,
}

const CartCard = ({product}:{product:searchProductI}) => {

    const btnMinusRef = useRef<HTMLButtonElement>(null);
    const btnPlusRef = useRef<HTMLButtonElement>(null);

    const [selectedQuantity, setSelectedQuantity] = useState(1);

    const changeQuantity = (value:number) => {
        if(value < 2){
            if (btnMinusRef.current) {
                btnMinusRef.current.disabled = true; // Устанавливаем кнопку в состояние "disabled"
            }
            setSelectedQuantity(value);
        }
        if(value > 98){
            setSelectedQuantity(value);
            if (btnPlusRef.current) {
                btnPlusRef.current.disabled = true; // Устанавливаем кнопку в состояние "disabled"
            }
        }
        if(value > 1 && value < 99){
            setSelectedQuantity(value);
            if (btnMinusRef.current) {
                btnMinusRef.current.disabled = false; // Устанавливаем кнопку в состояние "enabled"
            }
            if (btnPlusRef.current) {
                btnPlusRef.current.disabled = false; // Устанавливаем кнопку в состояние "enabled"
            }
        }
    }

    useEffect(() => {
        changeQuantity(selectedQuantity);
    }, []);

    return (
        <div className='cart-card'>
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

                <div className='body'>

                    <div className='body__info'>
                        <div className='body__info-name'>
                            <span className='body__info-name-color' style={{backgroundColor: product.color}}/>
                            <span className='body__info-name-text' >{product.name}</span>
                        </div>
                        <div className='body__info-description'>
                            <p>{product.description}</p>
                        </div>
                    </div>

                    <div className='body__delete'>
                        <button className='body__delete-btn'>
                            <img
                                src='/svg/garbage-can.svg'
                                width={30}
                                height={33}
                                loading='lazy'
                            />
                        </button>
                    </div>

                </div>

                <div className='footer'>
                    <span className='footer__price'>
                        <span>{Number(product.price.replace(/\s/g, ''))*selectedQuantity}</span>
                        <span className='footer__price-rub'>₽</span>
                    </span>
                    <div className='footer__quantity'>
                        <button onClick={() => changeQuantity(selectedQuantity - 1)} ref={btnMinusRef} className='footer__quantity-btn footer-quantity-btn--minus'>
                            <img
                                className='footer__quantity-btn-icon'
                                src='/svg/btn-minus.svg'
                                width={45}
                                height={45}
                                loading='lazy'
                            />
                        </button>
                        <span className='footer__quantity-number'>{selectedQuantity}</span>
                        <button onClick={() => changeQuantity(selectedQuantity + 1)} ref={btnPlusRef} className='footer__quantity-btn footer__quantity-btn--plus'>
                            <img
                                className='footer__quantity-btn-icon'
                                src='/svg/btn-plus.svg'
                                width={45}
                                height={45}
                                loading='lazy'
                            />    
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartCard;