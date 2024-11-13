import { BiEnvelope, BiMap, BiPhoneCall, BiTime } from 'react-icons/bi';
import FooterInfo from '../FooterInfo/FooterInfo';
import SocialIcon from '../SocialIcon/SocialIcon';
import { FaLinkedin, FaSquareFacebook, FaSquareInstagram, FaSquareXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className='footer ptb-90'>
      <div className="container">
        <h2 className='text-white text-center mb-5'>We ready to have you the best dining experiences</h2>
        <div className="row g-3">
          <div className="col-lg-3 col-md-6 text-center">
            <FooterInfo icon={<BiTime />} title="Opening hours" text1="Monday - Sunday" text2="9:00 AM to 11:30 PM" />
          </div>
          <div className="col-lg-3 col-md-6 text-center">
            <FooterInfo icon={<BiPhoneCall />} title="Let's Talk" text1="Phone: 1-800-222-4545" text2="Fax: 1-800-222-4545" />
          </div>
          <div className="col-lg-3 col-md-6 text-center">
            <FooterInfo icon={<BiEnvelope />} title="Book a Table" text1="Email: demo@website.com" text2="Support: support@website.com" />
          </div>
          <div className="col-lg-3 col-md-6 text-center">
            <FooterInfo icon={<BiMap />} title="Our Address" text1="123 Stree New York City , United " text2="States Of America" />
          </div>
        </div>
        <div className="row footer-bottom">
          <div className="d-flex align-items-center justify-content-center mb-3">
            <SocialIcon link="#" icon={<FaSquareFacebook />} />
            <SocialIcon link="#" icon={<FaSquareXTwitter />} />
            <SocialIcon link="#" icon={<FaSquareInstagram />} />
            <SocialIcon link="#" icon={<FaLinkedin />} />
          </div>
          <p className='text-white text-center mb-0'>© 2023 All Rights Reserved </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;