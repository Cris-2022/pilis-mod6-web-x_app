import { Tarjetas } from '../../layouts/components/Tarjetas';
import './style.css';

export default function Home() {
  return (
    <div>
      <section className='automatic'>
        <img className='slider-imag' src='/src/assets/Carousel/1.jpg' alt='' />
        <img className='slider-imag' src='/src/assets/Carousel/2.jpg' alt='' />
        <img className='slider-imag' src='/src/assets/Carousel/3.jpg' alt='' />
        <img className='slider-imag' src='/src/assets/Carousel/4.jpg' alt='' />
      </section>
      <div className='grid-card'>
        <Tarjetas />
      </div>
    </div>
  );
}
