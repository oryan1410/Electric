import React, { useMemo } from 'react';

// core version + navigation, pagination modules:
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { padding, width } from '@mui/system';


function ImageCarousel(props) {

    const images = [
        'https://static.wixstatic.com/media/11062b_de14de77d16c416795eff56611a73ada~mv2.jpg/v1/fill/w_292,h_219,fp_0.50_0.50,q_90,enc_avif,quality_auto/11062b_de14de77d16c416795eff56611a73ada~mv2.jpg',
        'https://static.wixstatic.com/media/11062b_5c007e1cf964496fbb8c041a2e99232d~mv2.jpg/v1/fill/w_292,h_219,fp_0.50_0.50,q_90,enc_avif,quality_auto/11062b_5c007e1cf964496fbb8c041a2e99232d~mv2.jpg',
        'https://static.wixstatic.com/media/3161de_05c2b828c4a14c1cbb467a661e55f5f9~mv2.jpg/v1/fill/w_292,h_219,fp_0.50_0.50,q_90,enc_avif,quality_auto/3161de_05c2b828c4a14c1cbb467a661e55f5f9~mv2.jpg',
         'https://static.wixstatic.com/media/11062b_de14de77d16c416795eff56611a73ada~mv2.jpg/v1/fill/w_292,h_219,fp_0.50_0.50,q_90,enc_avif,quality_auto/11062b_de14de77d16c416795eff56611a73ada~mv2.jpg',
        'https://static.wixstatic.com/media/11062b_5c007e1cf964496fbb8c041a2e99232d~mv2.jpg/v1/fill/w_292,h_219,fp_0.50_0.50,q_90,enc_avif,quality_auto/11062b_5c007e1cf964496fbb8c041a2e99232d~mv2.jpg',
        'https://static.wixstatic.com/media/3161de_05c2b828c4a14c1cbb467a661e55f5f9~mv2.jpg/v1/fill/w_292,h_219,fp_0.50_0.50,q_90,enc_avif,quality_auto/3161de_05c2b828c4a14c1cbb467a661e55f5f9~mv2.jpg',
         'https://static.wixstatic.com/media/11062b_de14de77d16c416795eff56611a73ada~mv2.jpg/v1/fill/w_292,h_219,fp_0.50_0.50,q_90,enc_avif,quality_auto/11062b_de14de77d16c416795eff56611a73ada~mv2.jpg',
        'https://static.wixstatic.com/media/11062b_5c007e1cf964496fbb8c041a2e99232d~mv2.jpg/v1/fill/w_292,h_219,fp_0.50_0.50,q_90,enc_avif,quality_auto/11062b_5c007e1cf964496fbb8c041a2e99232d~mv2.jpg',
        'https://static.wixstatic.com/media/3161de_05c2b828c4a14c1cbb467a661e55f5f9~mv2.jpg/v1/fill/w_292,h_219,fp_0.50_0.50,q_90,enc_avif,quality_auto/3161de_05c2b828c4a14c1cbb467a661e55f5f9~mv2.jpg',
    ];

 

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={10}
      slidesPerView={1}
      draggable={true}
      loop={true}
      style={{ ...styles.swiper, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      pagination={{ clickable: true, dynamicBullets: true, renderBullet: (index, className) => `<span class="${className}"></span>` }}
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
          slidesPerView: 3,
          spaceBetween: 10,
          centeredSlides: true,
        },
      }}
    >
      {images.map((img, index) => (
        <SwiperSlide key={index} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div class="swiper-slide-transform">
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
    image: {
        width: '100%',
        height: 'auto',
        borderRadius: '50px',
        objectFit: 'cover',
        paddingBlock: '20px'
    },
}

export default React.memo(ImageCarousel);