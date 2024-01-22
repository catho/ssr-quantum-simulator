import { useEffect, useState } from 'react';
import { Button } from '@catho/quantum';

const ScrollUpButton = () => {
  const [scrollUpButton, setScrollUpButton] = useState(false);
  useEffect(() => {
    const windowHeight = 75;
    window.addEventListener('scroll', () => {
      if (window.scrollY > windowHeight) {
        setScrollUpButton(true);
      } else {
        setScrollUpButton(false);
      }
    });
  }, []);

  const scrollTop = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="ScrollUpButton">
      {scrollUpButton && (
        <Button size="small" icon="keyboard_arrow_up" onClick={scrollTop} />
      )}
    </div>
  );
};

export default ScrollUpButton;
