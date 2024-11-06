import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
  const { title, img, desc } = product;
  return (
    <div className="product-card bg-white p-4 text-center h-100">
      <img src={img} className='pb-2' alt={title} />
      <h3 className='position-relative'><Link to="#">{title}</Link></h3>
      <p className='mb-0'>{desc}</p>
    </div>
  );
};

export default Product;