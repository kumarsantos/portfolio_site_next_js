import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Project1 from "../../public/images/projects/crypto-screener-cover-image.jpg";
import { motion } from "framer-motion";
import PizzaSiteImg from "../../website_images/pizza_site.png";
import CourseFinder from "../../website_images/courseFinder.png";
import LavishWebSite from "../../website_images/lavishWebSite.png";
import SocialMediaApp from "../../website_images/socialMediaApp.png";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, gitHubLink }) => {
  return (
    <article className="w-full flex p-12  items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl relative dark:border-light dark:bg-dark">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-4xl dark:bg-light" />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg "
      >
        <FramerImage
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          src={img}
          alt={title}
          className="w-full h-auto"
          priority //this is used for priority so it will disabled the lazyloading so it appear immedieately
          sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw, 50vw"
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6">
        <span className="text-primary font-medium text-xl">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2 dark:decoration-white"
        >
          <h2 className="my-2 text-left text-4xl font-bold dark:text-light/90">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light/90">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <Link
            href={gitHubLink}
            target="_blank"
            className="w-12 bg-dark text-light p-0.5 rounded-full"
          >
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light/90 dark:text-dark"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};
const Project = ({ type, title, summary, img, link, gitHubLink }) => {
  return (
    <article className="w-full flex p-6 flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light dark:bg-dark dark:border-light shadow-2xl relative">
      <div className="absolute top-0 -right-2 -z-10 w-[100%] h-[102%] rounded-[1.5rem] bg-dark dark:bg-light  " />

      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg "
      >
        <FramerImage
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          src={img}
          alt={title}
          className="w-full h-auto"
          priority //this is used for priority so it will disabled the lazyloading so it appear immedieately
          sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw, 50vw"
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary  font-medium text-md">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2 hover:dark:decoration-white"
        >
          <h2 className="my-1 text-left text-2xl font-bold dark:text-light/90">
            {title}
          </h2>
        </Link>
        <p className="my-1 font-medium  text-sm dark:text-light/90">
          {summary}
        </p>
        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="rounded-2xl bg-dark/90 dark:bg-light/90 dark:text-dark text-light py-1 px-6 text-medium font-semibold"
          >
            Visit
          </Link>
          <Link
            href={gitHubLink}
            target="_blank"
            className="w-10 bg-dark/90 text-light p-0.5 rounded-full"
          >
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};
const Projects = () => {
  return (
    <>
      <Head>
        <title>Projects Page</title>
        <meta name="descriptio" content="any description" />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-16"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32">
            <div className="col-span-12">
              {" "}
              <FeaturedProject
                type="Full stack application using Next JS"
                title="Pizza website"
                summary={`A website with multiple features like register, login, pizza order with selection of multiple extra ingredients and size, add to cart, order management, and PayPal payment getway, etc. In this project focus was to implement fully functional website, ratherthan UI/UX. `}
                img={PizzaSiteImg}
                link="https://pizza-site-mu.vercel.app/"
                gitHubLink="https://github.com/kumarsantos/pizza_site"
              />
            </div>
            <div className="col-span-6">
              <Project
                type="Frontend application using React JS"
                title="Course Finder"
                summary={`This is the part of the website which allows user to select course and country and based on the input user can see the available university and course details based on the input, etc.`}
                img={CourseFinder}
                link="https://shimmering-syrniki-59d333.netlify.app/"
                gitHubLink="https://github.com/kumarsantos/CourseFinder"
              />
            </div>
            <div className="col-span-6">
              {" "}
              <Project
                type="Full stack application using  React JS/Express JS/Mongo DB"
                title="Instagram clone"
                summary={`Social media application which offers various features like, account creation, login/logout, authorization, post creation, post edit, post delete, comment/like/unlike, user profile, etc.`}
                img={SocialMediaApp}
                link="https://github.com/kumarsantos/socialMediaApplication"
                gitHubLink="https://github.com/kumarsantos/socialMediaApplication"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                type="Frontend application using React JS"
                title="Credit Card Website (Clone)"
                summary={`Tried to Design and implement Credit card replica website which consists of Navbar,Main section and footer section. In Header section it consists of navigation link and button, via that user can navigate to other page and via button user can register or login. In main section tried to show plan structure of the LAVISH credit card, etc.`}
                img={LavishWebSite}
                link="https://reliable-crostata-95998b.netlify.app/"
                gitHubLink="https://github.com/kumarsantos/Static_websit_clone"
              />
            </div>
            <div className="col-span-6">
              {" "}
              <Project
                // type='Featured'
                title="Crypto Screener Application"
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                local currency."
                img={Project1}
                link="/"
                gitHubLink="https://github.com"
              />
            </div>
            <div className="col-span-6">
              {" "}
              <Project
                // type='Featured'
                title="Crypto Screener Application"
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                local currency."
                img={Project1}
                link="/"
                gitHubLink="https://github.com"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Projects;
