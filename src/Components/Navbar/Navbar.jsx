import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../../assets/css/style.css';
import Logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';
import { BiMenu } from 'react-icons/bi';
import SmallBtn from '../SmallBtn/SmallBtn';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 350);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { name: "Home", link: '/' },
    { name: "About", link: '/about' },
    { name: "Portfolio", link: '/portfolio' },
    { name: "Clients", link: '/clients' },
    { name: "Blog", link: '/blog' },
    { name: "Contact", link: '/contact' },
  ];

  return (
    <header>
      <nav id='header' className={`navbar navbar-expand-lg py-3 ${isSticky ? 'sticky-header' : ''}`}>
        <div className="container">
          <Link className="navbar-brand me-5" to="/">
            <img src={Logo} alt="Logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#nav-content"
            aria-controls="nav-content"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="toggle-icon">
              <BiMenu />
            </span>
          </button>
          <div className="collapse navbar-collapse" id="nav-content">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {navItems.map((item, idx) => (
                <li className="nav-item" key={idx}>
                  <Link to={item.link} className="nav-link active text-white py-2 px-3">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div>
              <SmallBtn link="#" text="Book a table" />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
