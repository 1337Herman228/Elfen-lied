

import './FavouriteCard.scss';

interface searchProductI {
    id:number,
    categoryId:number,
    name: string,
    description: string,
    price: string,
    img:string,
    color:string,
}


const FavouriteCard = ({product}:{product:searchProductI}) => {

    // const btnMinusRef = useRef<HTMLButtonElement>(null);
    // const btnPlusRef = useRef<HTMLButtonElement>(null);

    // const [selectedQuantity, setSelectedQuantity] = useState(1);

    // const changeQuantity = (value:number) => {
    //     if(value < 2){
    //         if (btnMinusRef.current) {
    //             btnMinusRef.current.disabled = true; // Устанавливаем кнопку в состояние "disabled"
    //         }
    //         setSelectedQuantity(value);
    //     }
    //     if(value > 98){
    //         setSelectedQuantity(value);
    //         if (btnPlusRef.current) {
    //             btnPlusRef.current.disabled = true; // Устанавливаем кнопку в состояние "disabled"
    //         }
    //     }
    //     if(value > 1 && value < 99){
    //         setSelectedQuantity(value);
    //         if (btnMinusRef.current) {
    //             btnMinusRef.current.disabled = false; // Устанавливаем кнопку в состояние "enabled"
    //         }
    //         if (btnPlusRef.current) {
    //             btnPlusRef.current.disabled = false; // Устанавливаем кнопку в состояние "enabled"
    //         }
    //     }
    // }

    // useEffect(() => {
    //     changeQuantity(selectedQuantity);
    // }, []);

    return (
        <div className='favourite-card'>
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
                                src='/svg/pink-favourite-icon.svg'
                                width={50}
                                height={50}
                                loading='lazy'
                            />
                        </button>
                    </div>

                </div>

                <div className='footer'>
                    <span>{product.price}</span>
                    <span className='footer__price-rub'>₽</span>
                </div>
            </div>
        </div>
    );
};

export default FavouriteCard;