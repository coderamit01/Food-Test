
const FooterInfo = ({icon,title,text1,text2}) => {
  return (
    <div className="footer-info">
      {icon}
      <h5 className="mt-2">{title}</h5>
      <p className='mb-0'>{text1}</p>
      <p className='mb-0'>{text2}</p>
    </div>
  );
};

export default FooterInfo;