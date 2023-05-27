import { useEffect, useRef } from 'react';

export default function useOutsideClick(callback) {
  const ref = useRef();

  const handleClick = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      callback();
    }
  };

  useEffect(() => {
    setTimeout(() => {
      document.addEventListener('click', handleClick);
    }, 100);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return ref;
}
