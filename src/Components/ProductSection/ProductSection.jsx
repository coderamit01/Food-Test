import { Swiper, SwiperSlide } from 'swiper/react';
import SectionTitle from '../SectionTitle/SectionTitle';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useEffect, useState } from 'react';
import Product from '../Product/Product';
import { Navigation, Scrollbar } from 'swiper/modules';
import leftImg from '../../assets/images/product-absolute.png';

const ProductSection = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const getData = await fetch('/productsData.json');
        if (!getData.ok) throw new Error('Failed to Load data');
        const product = await getData.json();
        setProducts(product);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchData();
  }, [])

  return (
    <section className='product-section pt-90 position-relative'>
      <div className="container">
        <SectionTitle title="POPULAR FOOD ITEMS" preTitle="Crispy, Every Bite Taste" />
        <div className='pt-3 pb-5 py-md-5 position-relative'>
          <button className="swiper-button-prev custom-nav-button"></button>
          <button className="swiper-button-next custom-nav-button"></button>
          <Swiper
            modules={[Navigation, Scrollbar]}
            spaceBetween={25}
            slidesPerView={4}
            loop={true}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            scrollbar={{ draggable: true }}
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 10 },
              640: { slidesPerView: 1, spaceBetween: 15 },
              768: { slidesPerView: 3, spaceBetween: 20 },
              1024: { slidesPerView: 4, spaceBetween: 25 },
            }}
          >
            {
              products.map((product) => (
                <SwiperSlide key={product.id}>
                  <Product product={product} />
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
        <img src={leftImg} className='left-img position-absolute start-0 d-none d-md-block' alt="Img" />
      </div>
    </section>
  );
};

export default ProductSection;