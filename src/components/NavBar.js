import Link from "next/link";
import React, { useState } from "react";
import Logo from "./Logo";
import { useRouter } from "next/router";
import {
  DribbbleIcon,
  GithubIcon,
  LinkedInIcon,
  MoonIcon,
  PinterestIcon,
  SunIcon,
  TwitterIcon,
} from "./Icons";
import { motion } from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher";

const CustomLink = ({ href, title, className = "" }) => {
  const route = useRouter();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1px] inline-block  bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 dark:bg-light ${
          route?.asPath === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};
const CustomMobileLink = ({ href, title, className = "", toggel }) => {
  const route = useRouter();
  const handleClick = () => {
    route.push(href);
    toggel();
  };
  return (
    <button
      onClick={handleClick}
      className={`${className} relative group text-light dark:text-dark`}
    >
      {title}
      <span
        className={`h-[1px] inline-block  bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 dark:bg-light ${
          route?.asPath === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </button>
  );
};

const NavBar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full px-32 py-8 font-medium flex item-center justify-between dark:text-light relative">
      <button
        onClick={handleClick}
        className=" flex-col gap-1 justify-center items-center hidden lg:flex"
      >
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? "rotate-45 translate-y-1.5" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? "-rotate-45 -translate-y-1.5" : "translate-y-0.5"
          }`}
        ></span>
      </button>

      <div className="w-full flex justify-between items-center lg:hidden">
        <nav>
          <CustomLink href="/" title="Home" className="mr-4" />
          <CustomLink href="/about" title="About" className="mx-4" />
          <CustomLink href="/projects" title="Projects" className="mx-4" />
          {/* <CustomLink
            href="/articles"
            title="Articles"
            className="ml-4"
          /> */}
        </nav>
        <nav className="flex items-center justify-center flex-wrap">
          <motion.a
            href="https://twitter.com/kumar_sant79802"
            target={"_blank"}
            whileHover={{ y: -2 }}
            className="w-6 mr-3"
            whileTap={{ scale: 0.9 }}
          >
            <TwitterIcon />
          </motion.a>
          <motion.a
            href="https://github.com/kumarsantos"
            target={"_blank"}
            whileHover={{ y: -2 }}
            className="w-6 mx-3"
            whileTap={{ scale: 0.9 }}
          >
            <GithubIcon />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/santosh-kumar-sah-3436151a3/"
            target={"_blank"}
            whileHover={{ y: -2 }}
            className="w-6 mx-3"
            whileTap={{ scale: 0.9 }}
          >
            <LinkedInIcon />
          </motion.a>
          {/* <motion.a
            href="https://pinterest.com"
            target={"_blank"}
            whileHover={{ y: -2 }}
            className="w-6 mx-3"
            whileTap={{ scale: 0.9 }}
          >
            <PinterestIcon />
          </motion.a> */}
          {/* <motion.a
            href="https://dribble.com"
            target={"_blank"}
            whileHover={{ y: -2 }}
            className="w-6 ml-3"
            whileTap={{ scale: 0.9 }}
          >
            <DribbbleIcon />
          </motion.a> */}
          <button
            className={`ml-4 flex items-center justify-center rounded-full p-1 ${
              mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
            }`}
            onClick={() =>
              setMode((prev) => (prev === "light" ? "dark" : "light"))
            }
          >
            {mode !== "dark" ? (
              <SunIcon className={"fill-dark"} />
            ) : (
              <MoonIcon className={"fill-dark"} />
            )}
          </button>
        </nav>
      </div>
      {isOpen && (
        <div className="min-w-[70vw] flex flex-col justify-between items-center z-30 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32">
          <nav className="flex items-center justify-center flex-col">
            <CustomMobileLink
              href="/"
              title="Home"
              className="mr-4"
              toggel={handleClick}
            />
            <CustomMobileLink
              href="/about"
              title="About"
              className="mx-4"
              toggel={handleClick}
            />
            <CustomMobileLink
              href="/projects"
              title="Projects"
              className="mx-4"
              toggel={handleClick}
            />
            {/* <CustomMobileLink
              href="/articles"
              title="Articles"
              className="ml-4"
              toggel={handleClick}
            /> */}
          </nav>
          <nav className="flex items-center justify-center flex-wrap">
            <motion.a
            href="https://twitter.com/kumar_sant79802"
            target={"_blank"}
              whileHover={{ y: -2 }}
              className="w-6 mr-3"
              whileTap={{ scale: 0.9 }}
            >
              <TwitterIcon />
            </motion.a>
            <motion.a
              href="https://github.com/kumarsantos"
              target={"_blank"}
              whileHover={{ y: -2 }}
              className="w-6 mx-3"
              whileTap={{ scale: 0.9 }}
            >
              <GithubIcon />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/santosh-kumar-sah-3436151a3/"
              target={"_blank"}
              whileHover={{ y: -2 }}
              className="w-6 mx-3"
              whileTap={{ scale: 0.9 }}
            >
              <LinkedInIcon />
            </motion.a>
            {/* <motion.a
              href="https://pinterest.com"
              target={"_blank"}
              whileHover={{ y: -2 }}
              className="w-6 mx-3"
              whileTap={{ scale: 0.9 }}
            >
              <PinterestIcon />
            </motion.a> */}
            {/* <motion.a
              href="https://dribble.com"
              target={"_blank"}
              whileHover={{ y: -2 }}
              className="w-6 ml-3"
              whileTap={{ scale: 0.9 }}
            >
              <DribbbleIcon />
            </motion.a> */}
            <button
              className={`ml-4 flex items-center justify-center rounded-full p-1 ${
                mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
              }`}
              onClick={() =>
                setMode((prev) => (prev === "light" ? "dark" : "light"))
              }
            >
              {mode !== "dark" ? (
                <SunIcon className={"fill-dark"} />
              ) : (
                <MoonIcon className={"fill-dark"} />
              )}
            </button>
          </nav>
        </div>
      )}
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;
