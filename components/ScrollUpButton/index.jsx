import { useEffect, useState } from 'react';
import { Button } from '@catho/quantum';
import styles from './ScrollUpButton.module.css';

const ScrollUpButton = () => {
  const [scrollUpButton, setScrollUpButton] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        setScrollUpButton(true);
      } else {
        setScrollUpButton(false);
      }
    });
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'auto',
    });
  };

  return (
    <>
      <div className={styles.ScrollUpButton}>
        {scrollUpButton && (
          <Button size="small" onClick={scrollTop}>
            Voltar ao Topo
          </Button>
        )}
      </div>
    </>
  );
};

export default ScrollUpButton;
