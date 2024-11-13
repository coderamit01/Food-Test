import { Link } from "react-router-dom";


const YellowBtn = ({text,link}) => {
  return (
    <>
      <Link to={link} className="ct-btn">{text}</Link>
    </>
  );
};

export default YellowBtn;