import { Link } from "react-router-dom";

const SmallBtn = ({link,text}) => {
  return (
    <>
      <Link to={link} className="mini-btn">{text}</Link>
    </>
  );
};

export default SmallBtn;