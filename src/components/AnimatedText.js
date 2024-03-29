import React from "react";
import { motion } from "framer-motion";

const quote = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08, //this is used for animate children after this time
    },
  },
};
const singleWord = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};
const AnimatedText = ({ text, className = "" }) => {
  return (
    <div
      className={`w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden dark:text-light `}
    >
      <motion.h1
        variants={quote}
        initial="initial"
        animate="animate"
        className={`inline-block w-full text-dark font-bold capitalize text-8xl dark:text-light  ${className}`}
      >
        {text?.split(" ").map((word, idx) => (
          <motion.span
            variants={singleWord}
            key={word + "-" + idx}
            className="inline-block"
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
};

export default AnimatedText;
