import SectionTitle from "../SectionTitle/SectionTitle";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import leftImg from '../../assets/images/testimonial-img.png';

import TestimonialItem from "../TestimonialItem/TestimonialItem";
import { useEffect, useState } from "react";

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const getReview = await fetch('/review.json');
        if (!getReview.ok) throw new Error('Failed to Load data');
        const product = await getReview.json();
        setReviews(product);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchReviews();
  }, [])
  return (
    <div className='testimonial ptb-50 position-relative'>
      <div className="container">
        <SectionTitle title="What Some of my Customers Say" preTitle="Crispy, Every Bite Taste" />
        <div className='pt-3 pb-5 py-md-5 position-relative'>
          <button className="swiper-button-prev custom-nav-button"></button>
          <button className="swiper-button-next custom-nav-button"></button>
          <Swiper
            modules={[Navigation]}
            spaceBetween={25}
            slidesPerView={1}
            loop={true}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            breakpoints={{
              // 320: { slidesPerView: 1, spaceBetween: 10 },
              // 640: { slidesPerView: 1, spaceBetween: 15 },
              // 768: { slidesPerView: 3, spaceBetween: 20 },
              // 1024: { slidesPerView: 1, spaceBetween: 25 },
            }}
          >
            {
              reviews.map(review => (
                <SwiperSlide key={review.id}>
                  <TestimonialItem review={review} />
                </SwiperSlide>
              ))
            }

          </Swiper>
        </div>
        {/* <img src={leftImg} className='left-img position-absolute start-0 d-none d-md-block' alt="Img" /> */}
      </div>
    </div>
  );
};

export default Testimonial;