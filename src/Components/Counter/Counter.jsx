import { useEffect, useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const incrementCount = () => {
      setCount(prevCount => {
        if (prevCount < 50) {
          return prevCount + 1
        } else {
          clearInterval(intervalId);
          return prevCount;
        }
      })
    }
    const intervalId = setInterval(incrementCount, 50);
    return () => clearInterval(intervalId);
  }, [])
  return (
    <span className='counter d-flex align-items-center justify-content-center rounded-5 me-2 border border-2 border-secondary border-opacity-10'>{count}+</span>
  );
};

export default Counter;