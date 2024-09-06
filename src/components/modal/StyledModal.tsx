

import { ConfigProvider, Modal } from 'antd';
import React, { ReactNode } from 'react';

const modalStyles = {
    mask: {
        // backdropFilter: 'none',
        backdropFilter: 'blur(100px)',
        backgroundColor: 'transparent', // Цвет фона под модальным окном
    },
    content: {
        // padding:'60px',
        color: 'var(--color-white)',
        backgroundColor: 'var(--color-purple-transparent)', //Цвет фона
        // borderRadius: 'var(--border-radius-modal)',
        colorIcon: 'var(--color-white)',
        // backdropFilter: 'blur(50px)',
    },
};


const StyledModal = (
    {
        isModalOpen,
        toggleModal,
        children,
        closeIcon = 
        <div style={{display:'flex', alignItems:'center', gap:'14px', marginRight:'132px'}}>
            <div style={{color:'var(--color-gray)', fontFamily:'Euclid Circular A', textTransform:'uppercase', fontSize:'18px', fontWeight:'500', letterSpacing:'2px'}}>Закрыть</div>
            <img 
                src = {'/svg/x.svg'}
                width={22}
                height={22}
            />
        </div>
        ,
        centered = false,
        modalId,
        style,
        width,
    }
    :
    {
        isModalOpen: boolean[],
        toggleModal: (idx:number, target:boolean) => void,
        children: React.ReactNode,
        closeIcon?: ReactNode,
        centered?: boolean,
        modalId:number,
        style?: React.CSSProperties,
        width?: number,
    }) => {

    const getDeviceWidth = () => window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth

    const theme = {
        token: {
            colorIcon: 'white',
            colorIconHover: 'transparent',
            padding: getDeviceWidth() < 1024 ? 21 : 60,
        },
    }

    return (
        <ConfigProvider
            theme={theme}
            modal={{
                styles: modalStyles,
            }}
        >
            <Modal
                zIndex={6000}
                style={style}
                centered={centered}
                open={isModalOpen[modalId]}
                closeIcon={closeIcon}
                onCancel={() => toggleModal(modalId, false)}
                width={width}
                footer={(_) => (
                    <>
                        {/* <button className='delete-modal-btn mr main-color-transparent-rect-btn' onClick={handleCancel}>Отмена</button> */}
                        {/* <button className='delete-modal-btn main-color-filled-rect-btn' onClick={handleOk}>Да</button> */}
                    </>
                )}
                >
                    <div className=''>
                        {children}
                    </div>
            </Modal>
        </ConfigProvider>
    );
};

export default StyledModal;