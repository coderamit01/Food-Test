import 'bootstrap/dist/css/bootstrap.min.css';
import AboutSection from '../Components/AboutSection/AboutSection';
import ProductSection from '../Components/ProductSection/ProductSection';
import BookSection from '../Components/BookSection/BookSection';
import Testimonial from '../Components/Testimonial/Testimonial';
import HeroSection from '../Components/HeroSection/HeroSection';

const Home = () => {
  return (
    <div>
     <HeroSection />
     <AboutSection />
     <ProductSection />
     <BookSection />
     <Testimonial />
    </div>
  );
};

export default Home;