import 'bootstrap/dist/css/bootstrap.min.css';
import ServiceItem from '../ServiceItem/ServiceItem';
import { FaAward } from 'react-icons/fa';

const Services = () => {
  return (
    <div className='row py-5 gy-3'>
        <ServiceItem title="fast delivery" summary="Within 30 minutes" icon={<FaAward />} />
        <ServiceItem title="absolute dining" summary="Best buffet restaurant" icon={<FaAward />} />
        <ServiceItem title="pickup delivery" summary="Grab your food order" icon={<FaAward />} />
    </div>
  );
};

export default Services;