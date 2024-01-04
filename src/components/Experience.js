import React, { useRef } from "react";
import { useScroll, motion, spring } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, comapany, companyLink, time, address, work }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{
          y: 0,
        }}
        transition={{
          duration: 0.5,
          type: spring,
        }}
      >
        <h3 className="capitalize font-bold text-2xl">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_black"
            className="text-primary capitalize"
          >
            @{comapany}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-white/75">
          {time} | {address}
        </span>
        <p className="font-medium  w-full ">{work}</p>
      </motion.div>
    </li>
  );
};
const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center">
        Experience
      </h2>
      <div className="w-[75%] mx-auto relative" ref={ref}>
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light "
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            position="Software Engineer - 2"
            comapany="Mpoweredhealth"
            companyLink="https://me.mpoweredhealth.com"
            time="Apr 2023-Present"
            address="Bangalore, Karnataka"
            work={`
          Worked on a team responsible for developing new features as per the requirements and leading the frontend team of 5 interns,
          including improving the accuracy and relevance of data visibility and 
          contributed in developing new library for data analysis and visualization.`}
          />
          <Details
            position="Software Engineer - 1"
            comapany="Mpoweredhealth"
            companyLink="https://me.mpoweredhealth.com"
            time="Sep 2021 - Mar 2023"
            address="Bangalore, Karnataka"
            work={`
          Worked on a team responsible for developing a new mobile app feature that allowed users to register,
          login, share award points, redeem gift card, self reporting data, add dependant profile, etc.
          Also contributed on DDUI (Data Driven UI) implementation which helped for data creation and visualization in web as well as mobile application. 
          `}
          />
          <Details
            position="Frontend Developer"
            companyLink="#"
            comapany="FirstPrinciple"
            time="Feb 2021 - Jun 2021"
            address="Remote (Part time)"
            work={`
          Worked on a team responsible for developing a new web application feature that allowed users to find 
the best university in the world, and it also offers courses and fee structure transparency to the users.`}
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
