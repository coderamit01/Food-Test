import SectionTitle from "../SectionTitle/SectionTitle";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import leftImg from '../../assets/images/testimonial-img.png';

const Testimonial = () => {
  return (
    <div className='testimonial ptb-50 position-relative'>
      <div className="container">
        <SectionTitle title="What Some of my Customers Say" preTitle="Crispy, Every Bite Taste" />
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
            
                <SwiperSlide>
                  sdfdf
                </SwiperSlide>
                <SwiperSlide>
                  sdfdf
                </SwiperSlide>
                <SwiperSlide>
                  sdfdf
                </SwiperSlide>
                <SwiperSlide>
                  sdfdf
                </SwiperSlide>
                <SwiperSlide>
                  sdfdf
                </SwiperSlide>
          </Swiper>
        </div>
        {/* <img src={leftImg} className='left-img position-absolute start-0 d-none d-md-block' alt="Img" /> */}
      </div>
    </div>
  );
};

export default Testimonial;