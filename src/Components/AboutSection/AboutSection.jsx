import Tabs from '../Tabs/Tabs';
import AboutImg from '../../assets/images/about-image.jpeg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Counter from '../Counter/Counter';
import Services from '../Services/Services';

const AboutSection = () => {
  
return (
  <div className='ptb-50'>
    <div className="container">
      <div className="row">
        <div className="col-lg-6 mb-4 mb-lg-0 position-relative">
          <img src={AboutImg} alt="Food Image" className='w-100' />
          <div className="experience-badge d-flex align-items-center bg-white position-absolute rounded-3">
            <Counter />
            <span>Market <br /> Experiences</span>
          </div>
        </div>
        <div className="col-lg-6">
          <Tabs />
        </div>
      </div>
      <Services />
    </div>
  </div>
);
};

export default AboutSection;