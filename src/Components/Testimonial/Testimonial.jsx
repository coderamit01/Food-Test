import SectionTitle from "../SectionTitle/SectionTitle";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import TestimonialItem from "../TestimonialItem/TestimonialItem";
import leftImg from '../../assets/images/tomato.png';
import leaf from '../../assets/images/leaf.png';

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);
  const [selectedReview, setSelectedReview] = useState(null); // State to handle selected review for modal

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
    <section className='testimonial-section ptb-90 position-relative'>
      <div className="container">
        <SectionTitle title="What Some of my Customers Say" preTitle="Crispy, Every Bite Taste" />
        <div className='pt-3 pb-5 py-md-5 position-relative'>
          <button className="swiper-button-prev custom-nav-button"></button>
          <button className="swiper-button-next custom-nav-button"></button>
          <Swiper modules={[Navigation]} spaceBetween={25} slidesPerView={1} loop={true}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 10 },
              640: { slidesPerView: 1, spaceBetween: 15 },
              768: { slidesPerView: 1, spaceBetween: 20 },
              1024: { slidesPerView: 1, spaceBetween: 25 },
            }}
          >
            {reviews.map(review => (
              <SwiperSlide key={review.id}>
                <TestimonialItem review={review} onSelectReview={() => setSelectedReview(review)} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <img src={leftImg} className='tomato position-absolute d-none d-md-block' alt="Tomato" />
        <img src={leaf} className='leaf position-absolute d-none d-md-block' alt="Leaf" />
      </div>
      {/* Modal for displaying selected review video */}
      {selectedReview && (
        <div className="modal fade show d-block custom-modal-backdrop" tabIndex="-1" role="dialog" onClick={() => setSelectedReview(null)}>
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body p-2">
                <iframe width="100%" height="320" src={selectedReview.videoUrl} title="Testimonial Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Testimonial;
