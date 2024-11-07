import { Link } from "react-router-dom";

const SocialIcon = ({icon,link}) => {
  return (
    <Link to={link} className="footer-icon mx-2 d-flex align-items-center justify-content-center">
      {icon}
    </Link>
  );
};

export default SocialIcon;