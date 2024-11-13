import YellowBtn from '../YellowBtn/YellowBtn';
import HeroImg from '../../assets/images/hero-img.jpeg';
import Star from '../../assets/images/star.png';

const HeroSection = () => {
  return (
    <section className='hero-section'>
      <div className="container">
        <div className="row align-items-center text-white position-relative ">
          <div className="col-md-5 text-white mb-4 mb-md-0">
            <div className="hero-content">
              <div className='position-absolute hero-title z-3'>
                <h1 className='mb-0 pe-3'>Taste the authentic<br />
                  Saudi cuisine</h1>
              </div>
              <div className='hero-text'>
                <p>Among the best Saudi chefs in the world, serving you something beyond flavor. </p>
                <YellowBtn link="#" text="Explore Menu" />
              </div>
            </div>
          </div>
          <div className="col-md-7">
            <div className="hero-right position-relative">
              <img src={Star} alt="Image" className='white-star position-absolute z-1' />
              <img src={HeroImg} alt="Hero Image" className='w-100 position-relative z-2' />
              <div className="hero-offer position-absolute z-3">
                <h4 className='mb-0'>Today<br/>Offer</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;