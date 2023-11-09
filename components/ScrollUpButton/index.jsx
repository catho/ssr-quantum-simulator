import { useEffect, useState } from 'react';
import { Button } from '@catho/quantum';

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
      <div>
        {scrollUpButton && (
          <Button
            size="small"
            className="ScrollUpButton"
            style={{
              position: 'fixed',
              bottom: '50px',
              right: '50px',
              height: '50px',
              zIndex: '9999999',
            }}
            onClick={scrollTop}
          >
            Topo
          </Button>
        )}
      </div>
    </>
  );
};

export default ScrollUpButton;
