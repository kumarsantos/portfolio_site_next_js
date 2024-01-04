import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light  shadow-dark cursor-pointer absolute py-3 px-6 dark:bg-light dark:text-dark"
      whileHover={{
        scale: 1.05,
      }}
      initial={{ x: 0, y: 0 }}
      whileInView={{
        x: x,
        y: y,
        transition: {
          duration: 1.5,
        },
      }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};
const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 mb-16 w-full text-center">
        Skills
      </h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark ">
        {/* repeating-radial-gradient() from mdn docs */}
        <Skill name="Web" x="0" y="0" />
        <Skill name="Html" x="21.5vw" y="-0vw" />
        <Skill name="Css" x="-21.5vw" y="-0vw" />
        <Skill name="Javascript" x="-0vw" y="-13vw" />
        <Skill name="React" x="0vw" y="13vw" />
        <Skill name="Node Js" x="-36vw" y="-0vw" />
        <Skill name="Next Js" x="36vw" y="-0vw" />
        <Skill name="Express Js" x="0vw" y="-21vw" />
        <Skill name="Mongo DB" x="0vw" y="21vw" />
        <Skill name="React native" x="-25vw" y="15vw" />
        <Skill name="Jira" x="25vw" y="-15vw" />
        <Skill name="Git/GitHub" x="-25vw" y="-15vw" />
        <Skill name="Rest API/graphql" x="25vw" y="15vw" />
      </div>
    </>
  );
};

export default Skills;
