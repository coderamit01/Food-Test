import 'bootstrap/dist/css/bootstrap.min.css';

const ServiceItem = ({ title, summary, icon }) => {
  return (
    <div className="col-md-6 col-lg-4 mb-3">
      <div className='services d-flex align-items-center'>
        <img src={icon} alt={title} />
        <div className="d-flex flex-column ms-3">
          <h4 className='mb-0'>{title}</h4>
          <p className='mb-0'>{summary}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceItem;