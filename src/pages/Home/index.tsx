import { Tarjetas } from '../../layouts/components/Tarjetas';
import './style.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


/* import banner_1 from '@/assets/Carousel/pizza-delivery.jpg';
import banner_2 from '@/assets/Carousel/hamburg-2.jpg';
import banner_3 from '@/assets/Carousel/3.jpg';
import banner_4 from '@/assets/Carousel/x-app-promo.jpg'; */

export default function Home() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className='container'>
      <div className='row col-12'>

        <Slider {...settings} >
        <div className="row col-12">
          <img src="/src/assets/Carousel/x-app-promo.jpg" alt="" height="450px" />
        </div>
        <div className="row col-12">
          <img src="/src/assets/Carousel/pizza-delivery.jpg" alt="" height="450px" />
        </div>
        <div className="row col-12">
          <img src="/src/assets/Carousel/hamburg-2.jpg" alt="" height="450px" />
        </div>
        <div className="row col-12">
          <img src="/src/assets/Carousel/3.jpg" alt="" height="450px" />
        </div>
        <div className="row col-12">
          <img src="/src/assets/Carousel/4.jpg" alt="" height="450px" />
        </div>
        </Slider>
      </div> 

      <div className='container grid-card'>
        <Tarjetas />
      </div>
    </div>
  );
}
