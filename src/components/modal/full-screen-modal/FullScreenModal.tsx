
import './FullScreenModal.scss';
import React, { useEffect, useRef } from 'react';

const FullScreenModal = (
    {
        style,
        children,
        isWindowOpen, 
        setIsWindowOpen,
    }
    :
    {
        style?:React.CSSProperties,
        children:React.ReactNode,
        isWindowOpen:boolean,
        setIsWindowOpen: (target:boolean) => void
    }) => {

    const modalRef = useRef<HTMLDivElement>(null);
    const isWindowOpenRef = useRef(false);

//     useEffect(()=>{
//         document.addEventListener('click', addClickOutOfWindowListener);
//         return () => {
//              document.removeEventListener('click', addClickOutOfWindowListener);
//         };
//    },[isWindowOpen])

    useEffect(() => {
        const handleOutsideClick = (event: any) => {
        if (isWindowOpenRef.current) {
            if (!modalRef.current?.contains(event.target)) {
            isWindowOpenRef.current = false;
            }
        }
        };
    
        document.addEventListener('click', handleOutsideClick);
    
        return () => {
        document.removeEventListener('click', handleOutsideClick);
        };
    }, [modalRef, isWindowOpenRef]);

//    const addClickOutOfWindowListener = useCallback((event:any) => {
//         if(isWindowOpen){
//             const block = document.querySelector('._modal');
//             if (!block?.contains(event.target)) {
//                 setIsWindowOpen(false)
//             }     
//         }
//    },[isWindowOpen])

    return (
        <div className='full-screen-modal-container'>

            <div ref={modalRef} style={{...style}} className={`full-screen-modal ${isWindowOpen ? 'open' : ''}`}>
                <div className='close-btn-container'>
                    <button className='close-btn' >
                        <img
                            className='close-btn--icon' 
                            src='svg/x.svg'
                            // src='/svg/x.svg'
                            alt='close'
                            width={20}
                            height={20}
                            onClick={() => setIsWindowOpen(false)}
                        />
                    </button>
                </div>
                <div className='_modal__inner'>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default FullScreenModal;