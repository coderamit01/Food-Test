import Tabs from '../Tabs/Tabs';
import AboutImg from '../../assets/images/about-image.jpeg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Counter from '../Counter/Counter';
import Services from '../Services/Services';
import BurgerImg from '../../assets/images/about-img.png'

const AboutSection = () => {

  return (
    <section className='ptb-90 position-relative'>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mb-4 mb-lg-0 position-relative">
            <img src={AboutImg} alt="Food Image" className='w-100' />
            <div className="experience-badge d-flex align-items-center bg-white position-absolute rounded-3 p-2">
              <Counter />
              <span>Market <br /> Experiences</span>
            </div>
          </div>
          <div className="col-lg-6 ps-lg-5">
            <Tabs />
          </div>
          <img src={BurgerImg} alt='' className='d-none d-lg-block position-absolute end-0 w-auto p-0 salad-img' />
        </div>
        <Services />
      </div>
    </section>
  );
};

export default AboutSection;