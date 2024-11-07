import SectionTitle from "../SectionTitle/SectionTitle";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import leftImg from '../../assets/images/testimonial-img.png';
import TestimonialImg from '../../assets/images/testmonial.png';
import clientImg from '../../assets/images/client.png';
import star from '../../assets/images/half-star.svg';

const Testimonial = () => {
  return (
    <div className='testimonial ptb-50 position-relative'>
      <div className="container">
        <SectionTitle title="What Some of my Customers Say" preTitle="Crispy, Every Bite Taste" />
        <div className="row g-0">
          <div className="col-md-5 position-relative">
            <div className="client-content p-5">
              <p>You can't go wrong with Chicken Mandi, I had it twice. The chicken was cooked perfectly, juicy & soft (usually mandi chicken is a bit dry). I would defiantly recommend it.</p>
              <div className="client-info d-flex align-items-center justify-content-between position-relative pb-4">
                <div>
                  <h6 className="mb-0">Khalid Al Dawsry</h6>
                  <p className="mb-0">Jeddah, Saudi</p>
                </div>
                <img src={clientImg} alt="Client Image" />
              </div>
            </div>
            <img src={star} alt="Satar Image" className="position-absolute start-0 half-star" />
          </div>
          <div className="col-md-7 position-relative">
            <img src={TestimonialImg} alt="Tesimonial Image w-100" />
          </div>
        </div>
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

            {/* <SwiperSlide>
                  sdfdf
                </SwiperSlide> */}
          </Swiper>
        </div>
        {/* <img src={leftImg} className='left-img position-absolute start-0 d-none d-md-block' alt="Img" /> */}
      </div>
    </div>
  );
};

export default Testimonial;