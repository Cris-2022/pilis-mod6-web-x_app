import './style.css';

interface Props {
  banners: string[];
  defBanner?: string;
}

export default function CarouselBanners({
  banners = [],
  defBanner = '',
}: Props) {
  if (banners.length === 0) return <img src={defBanner} alt='default-banner' />;

  return (
    <section className='carousel'>
      {banners.map(banner => (
        <img
          className='carousel__image'
          key={banner}
          src={banner}
          alt='banner'
        />
      ))}
    </section>
  );
}
