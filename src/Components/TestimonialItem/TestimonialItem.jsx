import { BiPlay } from "react-icons/bi";
import { Link } from "react-router-dom";
import star from '../../assets/images/half-star.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

const TestimonialItem = ({ review, onSelectReview }) => {
  const { reviewText, clientName, clientLocation, clientImage, testimonialImage } = review;

  return (
    <div className="row g-0 d-flex flex-xl-row flex-column-reverse">
      <div className="col-xl-5 p-5 position-relative client-content">
        <div className="position-relative d-flex flex-column justify-content-between h-100">
          <p className="pb-3 pb-xl-0 review-text position-relative">{reviewText}</p>
          <address className="client-info d-flex align-items-center justify-content-between position-relative pb-4">
            <div>
              <h6 className="mb-0">{clientName}</h6>
              <p className="mb-0">{clientLocation}</p>
            </div>
            <img src={clientImage} alt="Client" />
          </address>
        </div>
        <img src={star} alt="Star" className="position-absolute start-0 half-star" />
      </div>
      <div className="col-xl-7 position-relative">
        <div className="client-video overflow-hidden">
          <div className="video-wrapper position-relative">
            <Link to="#" className="w-100" onClick={onSelectReview}>
              <img src={testimonialImage} alt="Testimonial" className="w-100 img-fluid" />
              <div className="overlay-icon">
                <BiPlay />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialItem;
