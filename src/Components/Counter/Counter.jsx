import { useEffect, useState } from 'react';
import '../../assets/css/style.css';

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const incrementCount = () => {
      setCount(prevCount => {
        if (prevCount < 50) {
          return prevCount + 1;
        } else {
          clearInterval(intervalId); 
          return prevCount;
        }
      });
    };
    const intervalId = setInterval(incrementCount, 50);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const block = document.querySelector('.block');
    const num = 80;
    const circle = block.querySelector('.circle');
    circle.style.strokeDashoffset = 226 - (226 * (num / 100));
    const dots = block.querySelector('.dots');
    dots.style.transform = `rotate(${360 * (num / 100)}deg)`;
    if (num === 100) {
      dots.style.opacity = 0;
    }
  }, []);

  return (
    <div className="counter d-flex align-items-center justify-content-center rounded-5 me-2">
      <div className="block">
        <div className="box">
          <p className="number mb-0">
            {count}+
          </p>
        </div>
        <span className="dots"></span>
        <svg className="svg">
          <defs>
            <linearGradient id="gradientStyle">
              <stop offset="0%" stopColor="#FEBF00" />
              <stop offset="100%" stopColor="#FEBF00" />
            </linearGradient>
          </defs>
          <circle className="circle" cx="45" cy="45" r="36" />
        </svg>
      </div>
    </div>
  );
};

export default Counter;
