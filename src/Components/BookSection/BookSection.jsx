import BookingForm from '../BookingForm/BookingForm';
import SectionTitle from '../SectionTitle/SectionTitle';
import 'bootstrap/dist/css/bootstrap.min.css';

const BookSection = () => {
  return (
    <div className='book-section pt-70 pb-70'>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <SectionTitle preTitle="Book Now" title="Book Your Table" />
            <p className='text-white'>Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo molestie vel, ornare non id blandit netus.</p>
            <div className=''>
              <BookingForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookSection;