import React, { useRef, useCallback } from 'react';
import Parallax from 'parallax-js';

import styles from './Background.module.css';

const imgDivs = [
  {
    className: styles.panWithVeggies,
    depth: '0.32',
  },
  {
    className: styles.stove,
    depth: '0.25',
  },

  {
    className: styles.largeSplatters,
    depth: '0.4',
  },
  {
    className: styles.smallSplatters,
    depth: '0.45',
  },
];

const Background = props => {
  const ParallaxInstance = useRef(null);

  const parallaxContainerRef = useCallback(node => {
    if (node !== null) {
      ParallaxInstance.current = new Parallax(node, {
        relativeInput: true,
        frictionX: 0.03,
        frictionY: 0.03,
      });
    }
  }, []);

  return (
    <div ref={parallaxContainerRef} className={styles.container}>
      {imgDivs.map((imgDiv, i) => {
        return (
          <div key={i} className={imgDiv.className} data-depth={imgDiv.depth} />
        );
      })}
    </div>
  );
};
// <motion.div
//   className={styles.stove}
//   initial={{ opacity: 0 }}
//   animate={{ opacity: 1, top: '15px' }}
//   transition={{ duration: 1 }}
// />
export default Background;
