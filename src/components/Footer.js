import React from 'react';
import Layout from './Layout';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light border-light'>
      <Layout className={`py-8 flex items-center justify-between`}>
        <span>{new Date().getFullYear()} &copy; All Rights reserved.</span>
        <div className='flex items-center'>
          Build with{' '}
          <span className='text-primary text-2xl px-1 '>&#9825; </span>
          by&nbsp;
          <Link
            href={'https://github.com/kumarsantos'}
            className='underline underline-offset-2'
            target='_blank'
          >
            CodeBucks
          </Link>
        </div>
        <Link
          className='underline underline-offset-2'
          href={'https://github.com/kumarsantos'}
          target='_blank'
        >
          Say hello
        </Link>
      </Layout>
    </footer>
  );
};

export default Footer;
