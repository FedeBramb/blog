import { useEffect } from "react";

// Hook per gestire le immagini
import useRecipeImages from '../../hooks/useRecipeImages.js';

// Libreria per Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectCoverflow, Autoplay } from 'swiper/modules';

// Foglio CSS per Swiper
import 'swiper/swiper-bundle.css';

// Componente Link per gestire i collegamenti
import { Link } from 'react-router-dom';

// Componente renderizza le immagini solo se sono visibili 
import { LazyLoadImage } from 'react-lazy-load-image-component';

import './Carousel.css';
// Immagini sullo sfondo del carosello
import caffe from '../../assets/carouselBackground/caffe.webp';
import ciambella from '../../assets/carouselBackground/ciambella.webp';

/* Inseriamo le prime due immagini che andremo a mettere sullo sfondo.
   Swiper:
    _Pagination: visualizzazione della paginazione
    _EffectCoverflow: immagine principale al centro ingrandita con a lati le altre immagini più piccole
    _Autoplay: le immagini scorrono di un'unità ogni tot tempo
    
   SwiperSlide: applichiamo LazyLoadImage a ogni immagine, con un titolo e un pulsante in overlay */
function Carousel() {
  const recipeImages = useRecipeImages();
  console.log("render");

  useEffect(() => {
    console.log("ciao")
  }, []);


  return (
    <div className='carousel'>
      <LazyLoadImage src={caffe} alt='' className='caffe' />
      <LazyLoadImage src={ciambella} alt='' className='ciambella' />
      <div>
        <div className='carousel-content'>
          <span>discover</span>
          <h1>Home Recipes</h1>
          <hr className='carousel-hr'/>
          <p>La nostra collezione di ricette gourmet, fatte su misura per te. Provale!</p>
        </div>
      </div>
      <Swiper 
      className='myswiper'
      modules={[Pagination, EffectCoverflow, Autoplay]}
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 3,
        slideShadows: true,
      }}
      loop={true}
      pagination={{clickable: true}}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false
      }}
      breakpoints={{
        640: {
          slidesPerView: 2,
          slidesPerGroup: 1
        },
        768: {
          slidesPerView: 1,
          slidesPerGroup: 1
        },
        1100: {
          slidesPerView: 2,
          slidesPerGroup: 1
        },
        1500: {
          slidesPerView: 3,
          slidesPerGroup: 1
        }
      }}
      >
        {recipeImages.map(([recipeName, { title, image }], index) => (
          <SwiperSlide 
          key={recipeName}   
          className='myswiper-slider'>
              <LazyLoadImage src={require(`../../assets${image}`)} alt={"Recipe" + recipeName} />
              <div>
                <h2>{title}</h2>
                <Link to={`/cookbook/${recipeName}`}>
                  <button className='slider-btn'>Explore</button>
                </Link>
              </div>
          </SwiperSlide>
        ))}
      </Swiper>      
    </div>
  );
}

export default Carousel;