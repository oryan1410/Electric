import React, { useEffect, useMemo, useState } from 'react';

// core version + navigation, pagination modules:
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { padding, width } from '@mui/system';
import { useUserContext } from '../UserContext'; // Adjust the import path as necessary


function ImageCarousel(props) {
    const { carouselImages } = useUserContext(); // Example usage of UserContext

    const [images, setImages] = useState([]);

    useEffect(() => {
        if (carouselImages && carouselImages.length > 0) {
            const imageUrls = carouselImages.map(img => img); // Assuming each image object has a 'url' property
            setImages(imageUrls);
        }
    }, [carouselImages]);

    useEffect(() => {
        if (images.length > 0) {
            console.log('Images loaded:', images);
        }
    }, [images]);



    return (
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={10}
            slidesPerView={1}
            draggable={true}
            loop={true}
            style={{ ...styles.swiper, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            pagination={{ clickable: true, dynamicBullets: true, renderBullet: (index, className) => `<span className="${className}"></span>` }}
            navigation
            centeredSlides={true}
            breakpoints={{
                640: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                    centeredSlides: true,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                    centeredSlides: true,
                },
                992: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                    centeredSlides: true,
                },
            }}
        >
            {images.map((img, index) => (
                <SwiperSlide key={index} style={styles.swiperSlide}>
                    <div className="swiper-slide-transform">
                        <img className='swiperImg' src={img} alt={`Slide ${index + 1}`} style={styles.image} />
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

const styles = {
    swiper: {
        height: '100%',
        width: '80%',
        '--swiper-pagination-color': '#008080',
        '--swiper-navigation-color': '#008080',
    },
    swiperSlide: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '360px',
    },
    image: {
        maxWidth: '400px',
        width: '100%',
        borderRadius: '18px',
        objectFit: 'contain',
        display: 'block',
        margin: '0 auto',
        aspectRatio: '16/12',
    },
}

export default React.memo(ImageCarousel);