import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../Components/Navbar/Navbar';
import AboutSection from '../Components/AboutSection/AboutSection';
import ProductSection from '../Components/ProductSection/ProductSection';
import BookSection from '../Components/BookSection/BookSection';
import Testimonial from '../Components/Testimonial/Testimonial';
import Footer from '../Components/Footer/Footer';

const Home = () => {
  return (
    <div>
     <Navbar />
     <AboutSection />
     <ProductSection />
     <BookSection />
     <Testimonial />
     <Footer />
    </div>
  );
};

export default Home;