import 'bootstrap/dist/css/bootstrap.min.css';

const ServiceItem = ({ title, summary, icon }) => {
  return (
    <div className="col-md-4">
      <div className='services d-flex align-items-center'>
        {icon}
        <div className="d-flex flex-column ms-2">
          <h4 className='mb-0'>{title}</h4>
          <p className='mb-0'>{summary}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceItem;