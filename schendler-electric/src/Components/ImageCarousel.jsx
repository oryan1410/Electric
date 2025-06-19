import React, { useMemo } from 'react';


// core version + navigation, pagination modules:
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { width } from '@mui/system';
import { useUserContext } from '../UserContext'; // Adjust the import path as necessary
import { useState, useEffect } from 'react';
import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';

const testimonials = [
    {
        id: 1,
        text: "This is the best service I've ever used! Highly recommend to everyone.",
        author: "יוגב להב",
        authorPicUrl: "https://static.wixstatic.com/media/3161de_c9120ca62eac492b8ef88d8142d80918~mv2.png/v1/fill/w_198,h_77,al_c,lg_1,q_85,enc_avif,quality_auto/logo.png", // Example image URL
    },
    {
        id: 2,
        text: "Amazing experience! The team was professional and the results were outstanding.",
        author: "יוגב להב",
        authorPicUrl: "https://static.wixstatic.com/media/3161de_c9120ca62eac492b8ef88d8142d80918~mv2.png/v1/fill/w_198,h_77,al_c,lg_1,q_85,enc_avif,quality_auto/logo.png", // Example image URL
    },
    {
        id: 3,
        text: "I was impressed by the quality and speed of the service. Will definitely use again.",
        author: "יוגב להב",
        authorPicUrl: "https://static.wixstatic.com/media/3161de_c9120ca62eac492b8ef88d8142d80918~mv2.png/v1/fill/w_198,h_77,al_c,lg_1,q_85,enc_avif,quality_auto/logo.png", // Example image URL
    },
    {
        id: 4,
        text: "Exceptional service! They went above and beyond to meet my needs.",
        author: "יוגב להב",
        authorPicUrl: "https://static.wixstatic.com/media/3161de_c9120ca62eac492b8ef88d8142d80918~mv2.png/v1/fill/w_198,h_77,al_c,lg_1,q_85,enc_avif,quality_auto/logo.png", // Example image URL
    },
    {
        id: 5,
        text: "Great value for money. The team was knowledgeable and very helpful.",
        author: "יוגב להב",
        authorPicUrl: "https://static.wixstatic.com/media/3161de_c9120ca62eac492b8ef88d8142d80918~mv2.png/v1/fill/w_198,h_77,al_c,lg_1,q_85,enc_avif,quality_auto/logo.png", // Example image URL
    },
    {
        id: 6,
        text: "I can't believe how easy they made the process. Highly satisfied with the results.",
        author: "יוגב להב",
        authorPicUrl: "https://static.wixstatic.com/media/3161de_c9120ca62eac492b8ef88d8142d80918~mv2.png/v1/fill/w_198,h_77,al_c,lg_1,q_85,enc_avif,quality_auto/logo.png", // Example image URL
    },
    {
        id: 7,
        text: "Top-notch service! They exceeded my expectations in every way.",
        author: "יוגב להב",
        authorPicUrl: "https://static.wixstatic.com/media/3161de_c9120ca62eac492b8ef88d8142d80918~mv2.png/v1/fill/w_198,h_77,al_c,lg_1,q_85,enc_avif,quality_auto/logo.png", // Example image URL
    },
    {
        id: 8,
        text: "Fantastic experience! The team was friendly and the service was quick and efficient.",
        author: "יוגב להב",
        authorPicUrl: "https://static.wixstatic.com/media/3161de_c9120ca62eac492b8ef88d8142d80918~mv2.png/v1/fill/w_198,h_77,al_c,lg_1,q_85,enc_avif,quality_auto/logo.png", // Example image URL
    },
]




function ImageCarousel(props) {
    const { carouselImages } = useUserContext();
    const [images, setImages] = useState([]);
    const [open, setOpen] = useState(false);
    const [selectedImg, setSelectedImg] = useState(null);

    useEffect(() => {
        if (carouselImages && carouselImages.length > 0) {
            const imageUrls = carouselImages.map(img => img);
            setImages(imageUrls);
        }
    }, [carouselImages]);

    const handleOpen = (img) => {
        setSelectedImg(img);
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
        setSelectedImg(null);
    };

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '350px',
                padding: '24px',
                boxSizing: 'border-box',
                position: 'relative',
            }}
        >
            <div
                className="testimonial-swiper-wrapper"
                style={{ width: '100%', position: 'relative' }}
            >
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={10}
                    slidesPerView={1}
                    loop={true}
                    style={{ width: '100%' }}
                    navigation={true}
                    pagination={{
                        clickable: true,
                        dynamicBullets: true,
                        renderBullet: (index, className) => `<span class="${className}"></span>`
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: true,
                        pauseOnMouseEnter: true,
                        pauseOnFocus: true
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 10
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 10
                        },
                        992: {
                            slidesPerView: 4,
                            spaceBetween: 10
                        },
                    }}
                >
                    {carouselImages.map((image) => (
                        <SwiperSlide key={image.imgUrl}>
                            <div
                                style={{
                                    background: '#fff',
                                    borderRadius: '16px',
                                    boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    minHeight: '250px',
                                    maxHeight: '250px',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    backgroundImage: `url(${image})`,
                                    backgroundSize: 'cover',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'center',
                                    cursor: 'zoom-in',
                                }}
                                onClick={() => handleOpen(image)}
                            >
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <style>{`
                    .testimonial-swiper-wrapper .swiper-button-next,
                    .testimonial-swiper-wrapper .swiper-button-prev {
                        opacity: 0;
                        transition: opacity 0.2s;
                    }
                    .testimonial-swiper-wrapper:hover .swiper-button-next,
                    .testimonial-swiper-wrapper:hover .swiper-button-prev {
                        opacity: 1;
                    }
                `}</style>
                <Dialog open={open} onClose={handleClose} maxWidth="xxl" fullWidth PaperProps={{ style: {  overflow: 'hidden', background: 'rgba(0, 0, 0, 0)', boxShadow: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' } }}>
                    <IconButton
                        aria-label="close"
                        onClick={handleClose}
                        sx={{ position: 'absolute', right: 16, top: 16, color: '#fff', zIndex: 2 }}
                    >
                        <CloseIcon />
                    </IconButton>
                    {selectedImg && (
                        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', p: 2 }}>
                            <img
                                src={selectedImg.imgUrl || selectedImg}
                                alt="gallery zoom"
                                style={{
                                    maxWidth: '90vw',
                                    maxHeight: '80vh',
                                    borderRadius: 16,
                                    boxShadow: '0 4px 32px rgba(0,0,0,0.25)',
                                    objectFit: 'contain',
                                    cursor: 'zoom-out',
                                    overflow: 'hidden',
                                }}
                                onClick={handleClose}
                            />
                        </Box>
                    )}
                </Dialog>
            </div>
        </div>
    );
}

const styles = {
    swiper: {
        height: '100%',
    }
}

export default React.memo(ImageCarousel);