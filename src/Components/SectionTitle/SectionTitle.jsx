import 'bootstrap/dist/css/bootstrap.min.css';

const SectionTitle = ({preTitle,title}) => {
  return (
    <>
      <p className='before-title mb-2 position-relative'>{preTitle}</p>
      <h2>{title}</h2>
    </>
  );
};

export default SectionTitle;