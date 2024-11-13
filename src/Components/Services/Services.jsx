import 'bootstrap/dist/css/bootstrap.min.css';
import ServiceItem from '../ServiceItem/ServiceItem';
import { FaAward } from 'react-icons/fa';
import Package from '../../assets/images/package.png';
import Bag from '../../assets/images/bag.png';
import Medal from '../../assets/images/medal.png';

const Services = () => {
  return (
    <div className='row pt-90'>
      <ServiceItem title="fast delivery" summary="Within 30 minutes" icon={Package} />
      <ServiceItem title="absolute dining" summary="Best buffet restaurant" icon={Medal} />
      <ServiceItem title="pickup delivery" summary="Grab your food order" icon={Bag} />
    </div>
  );
};

export default Services;