import YellowBtn from "../YellowBtn/YellowBtn";
import 'bootstrap/dist/css/bootstrap.min.css';

const BookingForm = () => {
  return (
    <>
      <div className="row g-3">
        <div className="col-md-6">
          <input className="form-control" type="text" placeholder="Your Name*" />
        </div>
        <div className="col-md-6">
          <input className="form-control" type="email" placeholder="Your Email" />
        </div>
        <div className="col-md-6">
          <input className="form-control position-relative" type="text" placeholder="Reservation Date" onFocus={(e) => (e.target.type = "date")}  onBlur={(e) => (e.target.type = e.target.value ? "date" : "text")} />
        </div>
        <div className="col-md-6">
          <input className="form-control" type="number" placeholder="Total People" min="0" />
        </div>
        <div className="col-12">
          <textarea className="form-control" placeholder="Message" rows="5"></textarea>
        </div>
        <div className="col-12">
          <YellowBtn link="#" text="Book Now" />
        </div>
      </div>
    </>
  );
};

export default BookingForm;