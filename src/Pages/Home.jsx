import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../Components/Navbar/Navbar';
import AboutSection from '../Components/AboutSection/AboutSection';
import ProductSection from '../Components/ProductSection/ProductSection';
import BookSection from '../Components/BooSection/BookSection';

const Home = () => {
  return (
    <div>
     <Navbar />
     <AboutSection />
     <ProductSection />
     <BookSection />
    </div>
  );
};

export default Home;