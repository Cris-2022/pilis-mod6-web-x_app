import { Tarjetas } from '../../layouts/components/Tarjetas';
import './style.css';
import banner_1 from '@/assets/Carousel/pizza-delivery.jpg';
import banner_2 from '@/assets/Carousel/hamburg-2.jpg';
import banner_3 from '@/assets/Carousel/3.jpg';
import banner_4 from '@/assets/Carousel/x-app-promo.jpg';

export default function Home() {
  return (
    <div>
      <section className='automatic'>
        <img className='slider-imag' src={banner_1} alt='' />
        <img className='slider-imag' src={banner_2} alt='' />
        <img className='slider-imag' src={banner_3} alt='' />
        <img className='slider-imag' src={banner_4} alt='' />
      </section>
      <div className='container grid-card'>
        <Tarjetas />
      </div>
    </div>
  );
}
