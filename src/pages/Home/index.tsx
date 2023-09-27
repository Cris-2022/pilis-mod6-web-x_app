import { Tarjetas } from '../../layouts/components/Tarjetas';
import './style.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import banner_1 from '@/assets/Carousel/pizza-delivery.jpg';
import banner_2 from '@/assets/Carousel/hamburg-2.jpg';
import banner_3 from '@/assets/Carousel/3.jpg';
import banner_4 from '@/assets/Carousel/x-app-promo.jpg';
import banner_5 from '@/assets/Carousel/4.jpg';

export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className='container'>
      <div>
        <Slider {...settings}>
          <div className='row col-12'>
            <img src={banner_1} alt='' height='450px' />
          </div>
          <div className='row col-12'>
            <img src={banner_2} alt='' height='450px' />
          </div>
          <div className='row col-12'>
            <img src={banner_3} alt='' height='450px' />
          </div>
          <div className='row col-12'>
            <img src={banner_4} alt='' height='450px' />
          </div>
          <div className='row col-12'>
            <img src={banner_5} alt='' height='450px' />
          </div>
        </Slider>
      </div>

      <div className='container grid-card'>
        <Tarjetas />
      </div>
    </div>
  );
}
