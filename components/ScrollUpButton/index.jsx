import { useEffect, useState } from 'react';
import { Button } from '@catho/quantum';
import styles from './ScrollUpButton.module.css';

const ScrollUpButton = () => {
  const [scrollUpButton, setScrollUpButton] = useState(false);
  useEffect(() => {
    const headerHeight = 75;
    window.addEventListener('scroll', () => {
      if (window.scrollY > windowHeight) {
        setScrollUpButton(true);
      } else {
        setScrollUpButton(false);
      }
    });
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={styles.ScrollUpButton}>
      {scrollUpButton && (
        <Button size="small" icon="keyboard_arrow_up" onClick={scrollTop} />
      )}
    </div>
  );
};

export default ScrollUpButton;
