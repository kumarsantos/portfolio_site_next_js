import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full border-t-1 border-solid border-dark/50 font-medium text-lg dark:text-light/50 dark:border dark:border-light/10">
      <Layout className={`py-8 flex items-center justify-center`}>
        <span>{new Date().getFullYear()} &copy; All Rights reserved.</span>
      </Layout>
    </footer>
  );
};

export default Footer;
