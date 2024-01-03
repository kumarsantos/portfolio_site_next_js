import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React, { useRef } from 'react';
import artice1 from '../../public/images/articles/pagination component in reactjs.jpg';
import artice2 from '../../public/images/articles/todo list app built using react redux and framer motion.png';
import { motion, useMotionValue } from 'framer-motion';

const FramerImage = motion(Image);

const FeaturedArticle = ({ img, title, time, summary, link }) => {
  return (
    <li className='col-span-1 w-full relative p-4 bg-light border border-solid rounded-2xl border-dark dark:bg-dark dark:border-light'>
      <div className='absolute top-0 -right-2 -z-10 w-[101%] h-[102%] rounded-[1.5rem] bg-dark dark:bg-light ' />

      <Link
        href={link}
        target='_blank'
        className='w-full inline-block cursor-pointer overflow-hidden rounded-lg  '
      >
        <FramerImage
          src={img}
          alt={title}
          className='w-full h-auto '
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority//this is used for priority so it will disabled the lazyloading so it appear immedieately
          sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw, 50vw"

        />
      </Link>
      <Link href={link} target='_blank'>
        <h2 className='capitalize text-2xl font-bold my-2 hover:underline hover:dark:decoration-white dark:text-light/90'>
          {title}
        </h2>
      </Link>
      <p className=' text-sm mb-2 dark:text-light/90'>{summary}</p>
      <span className='text-primary font-semibold'>{time}</span>
    </li>
  );
};

const MovingImg = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  function handleMouseEnter(e) {
    imgRef.current.style.display = 'inline-block';
    x.set(e.pageX);
    y.set(-10);
  }
  function handleMouseLeave(e) {
    imgRef.current.style.display = 'none';
    x.set(0);
    y.set(0);
  }

  return (
    <Link
      target='_blank'
      href={link}
      onMouseMove={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className='capitalize text-xl font-semibold hover:underline'>
        {title}
      </h2>
      <FramerImage
        ref={imgRef}
        src={img}
        alt={title}
        className='w-96 h-auto hidden absolute rounded-lg z-10'
        style={{ x: x, y: y }}
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: { duration: 0.2 },
        }}
        priority//this is used for priority so it will disabled the lazyloading so it appear immedieately
        sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw, 33vw"

      />
    </Link>
  );
};
const Article = ({ img, title, date, link }) => {
  return (
    <motion.li
      className='relative w-full p-4 py-4 my-4 rounded-xl flex items-center justify-between bg-light dark:bg-dark dark:text-light/90 text-dark first:mt-0 border border-solid border-dark cursor-pointer border-r-4 border-b-4 dark:border-light/90 '
      initial={{ y: 200 }}
      whileInView={{
        y: 0,
        transition: {
          duration: 0.5,
          ease: 'easeInOut',
        },
      }}
      viewport={{ once: true }}
    >
      <MovingImg img={img} title={title} link={link} />
      <span className='text-primary font-semibold pl-4'>{date}</span>
    </motion.li>
  );
};

const Articles = () => {
  return (
    <>
      <Head>
        <title>CodeBucks | About Page</title>
        <meta name='description' content='any description' />
      </Head>
      <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden'>
        <Layout>
          <AnimatedText text='Words Can Change The World!' className='mb-16' />
          <ul className='grid grid-cols-2 gap-16'>
            <FeaturedArticle
              img={artice1}
              title='Build A Custom Pagination Component In Reactjs From Scratch'
              time='9 min read'
              summary={`Learn how to build a custom pagination component in ReactJS from scratch. 
              Follow this step-by-step guide to integrate Pagination component in your ReactJS project.`}
              link={`https://google.com`}
            />
            <FeaturedArticle
              img={artice2}
              title='Build A Custom Pagination Component In Reactjs From Scratch'
              time='9 min read'
              summary={`Learn how to build a custom pagination component in ReactJS from scratch. 
              Follow this step-by-step guide to integrate Pagination component in your ReactJS project.`}
              link={`https://google.com`}
            />
          </ul>
          <h2 className='font-bold text-4xl w-full text-center my-16 mt-32 dark:text-light'>
            All Articles
          </h2>
          <ul>
            <Article
              title='Form validation in react'
              img={artice1}
              date=' Sep 20, 2023'
              link='https://google.com'
            />
            <Article
              title='Form validation in react'
              img={artice1}
              date=' Sep 20, 2023'
              link='https://google.com'
            />
            <Article
              title='Form validation in react'
              img={artice1}
              date=' Sep 20, 2023'
              link='https://google.com'
            />
            <Article
              title='Form validation in react'
              img={artice1}
              date=' Sep 20, 2023'
              link='https://google.com'
            />
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default Articles;
