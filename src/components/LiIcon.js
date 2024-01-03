import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
const LiIcon = ({ reference }) => {
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ['center end', 'center center'],
  });

  return (
    <figur className='absolute left-0 stroke-dark'>
      <svg className='-rotate-90' width={'75'} height={'75'} viewBox='0 0 100 100'>
        <motion.circle
          cx='75'
          cy='50'
          r='20'
          className='stroke-primary stroke-1 fill-none'
        />
        <motion.circle
          style={{
            pathLength: scrollYProgress,
          }}
          className='stroke-[5px] fill-light'
          cx='75'
          cy='50'
          r='20'
        />
        <motion.circle
          className='stroke-1 animate-pulse fill-primary'
          cx='75'
          cy='50'
          r='10'
        />
      </svg>
    </figur>
  );
};

export default LiIcon;
