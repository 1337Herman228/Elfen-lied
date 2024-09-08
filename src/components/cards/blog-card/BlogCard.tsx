'use client';

import { useEffect, useState } from 'react';
import './BlogCard.scss';

interface blogI {
    id:number,
    headerInfo:string,
    title:string,
    date:string,
    img:string,
    imgMobile:string,
    time:number,
}

const BlogCard = (
    {
        blog,
        openBlogID,
        setOpenBlogID,
    }
    :
    {
        blog:blogI,
        openBlogID:number,
        setOpenBlogID:React.Dispatch<React.SetStateAction<number>>
    }) => {


    const [deviceWidth, setDeviceWidth] = useState(0);
    useEffect(() => {
         if (typeof window !== 'undefined') {
            setDeviceWidth(window.outerWidth);
        }
    }, []);

    return (
        <div onClick={() => openBlogID === blog.id ? setOpenBlogID(0) : setOpenBlogID(blog.id)} key={blog.id} className='blog-card'>
            <div className='blog-card__info'>
                <div className='blog-card__info-header'>
                    <span className='blog-card__info-header-digit'>0{blog.id}</span>
                    <span className='blog-card__info-header-text'>{blog.headerInfo}</span>
                </div>
                <div className='blog-card__info-body'>
                    {blog.title}
                </div>
                <div className='blog-card__info-footer'>
                    {blog.date}
                </div>
            </div>

            <div className='blog-card__img-container'>
                <img 
                    className='img'
                    src={`${deviceWidth < 1024 ? blog.imgMobile : blog.img}`}
                    // width={316}
                    // height={257}
                    loading='lazy'
                />
            </div>

            <div className={`blog-card__time ${openBlogID === blog.id ? 'active' : ''}`}> 
                <span className='blog-card__time-digit'>{blog.time}</span>
                <span className='blog-card__time-text'>мин</span>
            </div>
        </div>
    );
};

export default BlogCard;