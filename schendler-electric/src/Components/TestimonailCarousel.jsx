import React, { useMemo, useState } from 'react';


// core version + navigation, pagination modules:
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { useUserContext } from '../UserContext';
import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { width } from '@mui/system';

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


function TestimonailCarousel(props) {

    const {recoArray} = useUserContext();
    const [open, setOpen] =useState(false);
    const [selectedReco, setselectedReco] = useState(null);

        const handleOpen = (reco) => {
        
        setselectedReco(reco);
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
        setselectedReco(null);
    };
 

return (
    <div
        style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '350px',
            
            boxSizing: 'border-box',
            position: 'relative',
        }}
        
    >
        <div
            className="testimonial-swiper-wrapper"
            style={{ width: '100%', position: 'relative', height: '100%'  }}
        >
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={10}
                slidesPerView={1}
                loop={true}
                style={{ width: '100%', height: '100%' }}
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
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 10
                    },
                    992: {
                        slidesPerView: 3,
                        spaceBetween: 10
                    },
                }}
            >
                {recoArray.map((testimonial) => (
                    <SwiperSlide key={testimonial.id}>
                        <a style={{
                            background: '#fff',
                            borderRadius: '16px',
                            padding: '24px 24px 24px 24px',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            minHeight: '250px',
                            position: 'relative',
                            textDecoration: 'none',                          
                        }}
                        href={testimonial.pdfUrl || testimonial}
                        aria-label={`Click to view testimonial from ${testimonial.author}`}
                        alt={`Click to view testimonial from ${testimonial.author}`}
                        target='_blank'
                        onClick={() => handleOpen(testimonial)}
                        >
                            <div style={{
                                width: '64px',
                                height: '64px',
                                borderRadius: '50%',
                                background: '#e1d5e7',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                                <span role="img" aria-label="user" style={{ fontSize: '32px' }}>👤</span>
                            </div>
                            <p style={{
                                marginTop: '48px',
                                marginBottom: '24px',
                                color: '#333',
                                fontSize: '1.1rem',
                                textAlign: 'center',
                                lineHeight: 1.6
                            }}>
                                {testimonial.content && testimonial.content.length > 90
                                    ? testimonial.content.slice(0, 83) + '...'
                                    : testimonial.content}
                            </p>
                            <div style={{
                                color: '#7b5fa1',
                                fontWeight: 600,
                                fontSize: '1rem',
                                marginTop: 'auto',
                                textAlign: 'center'
                            }}>
                               {testimonial.author}
                            </div>
                        </a>
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
             {/* <Dialog open={open} onClose={handleClose} maxWidth="xxl" fullWidth PaperProps={{ style: {  overflow: 'hidden', background: 'transparent', boxShadow: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' } }}>
                    <IconButton
                        aria-label="close"
                        onClick={handleClose}
                        sx={{ position: 'absolute', right: 16, top: 16, color: '#fff', zIndex: 2, backgroundColor: '#000', borderRadius: '50%' }}
                    >
                        <CloseIcon />
                    </IconButton>
                    {selectedReco && (
                        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', p: 2 }}>
                            <iframe
                                src={(selectedReco.pdfUrl || selectedReco) + '#toolbar=0'}
                                title="PDF Viewer"
                                style={{
                                    width: '100%',
                                    maxWidth: '900px',
                                    height: '90vh',
                                    minHeight: '320px',
                                    borderRadius: 16,
                                    boxShadow: '0 4px 32px rgba(0,0,0,0.25)',
                                    background: 'transparent',
                                    border: 'none',
                                    display: 'block',
                                    overflow: 'auto',
                                }}
                            />
                        </Box>
                    )}
                </Dialog> */}
        </div>
    </div>
);
}

const styles = {
    swiper: {
        height: '100%',
    }
}

export default React.memo(TestimonailCarousel);