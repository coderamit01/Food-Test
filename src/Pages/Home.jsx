import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../Components/Navbar/Navbar';
import AboutSection from '../Components/AboutSection/AboutSection';
import ProductSection from '../Components/ProductSection/ProductSection';
import BookSection from '../Components/BookSection/BookSection';
import Testimonial from '../Components/Testimonial/Testimonial';
import Footer from '../Components/Footer/Footer';
import HeroSection from '../Components/HeroSection/HeroSection';

const Home = () => {
  return (
    <div>
     <Navbar />
     <HeroSection />
     <AboutSection />
     <ProductSection />
     <BookSection />
     <Testimonial />
     <Footer />
    </div>
  );
};

export default Home;