import { useEffect, useState } from 'react';

function setSlidesPerView(width) {
  if (width >= 1400) return 5;
  else if (width <= 1400 && width > 1100) return 4;
  else if (width <= 1100 && width > 800) return 3;
  else if (width <= 800 && width > 330) return 2;
  // else if (width <= 330) return 1;
}

export default function useSlidesPerView() {
  const [viewPortWidth, setViewPortWidth] = useState(window.innerWidth);

  const slidesPerView = setSlidesPerView(viewPortWidth);

  useEffect(() => {
    const onWindowResize = () => {
      setViewPortWidth(window.innerWidth);
    };

    window.addEventListener('resize', onWindowResize);

    return () => {
      window.removeEventListener('resize', onWindowResize);
    };
  }, [viewPortWidth]);

  return slidesPerView;
}
