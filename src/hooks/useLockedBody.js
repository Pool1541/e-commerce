import { useEffect, useState } from 'react';

export default function useLockedBody(initialLocked) {
  const [locked, setLocked] = useState(initialLocked);

  useEffect(() => {
    if (!locked) {
      return;
    }

    const body = document.querySelector('body');

    const originalOverflow = body.style.overflow;
    const originalPaddingRight = body.style.paddingRight;

    const scrollBarWidth = window.innerWidth - body.clientWidth;

    document.body.style.overflow = 'hidden';

    if (scrollBarWidth) {
      body.style.paddingRight = `${scrollBarWidth}px`;
    }

    return () => {
      body.style.overflow = originalOverflow;

      if (scrollBarWidth) {
        body.style.paddingRight = originalPaddingRight;
      }
    };
  }, [locked]);

  useEffect(() => {
    if (locked !== initialLocked) {
      setLocked(initialLocked);
    }
  }, [initialLocked]);

  return [locked, setLocked];
}
