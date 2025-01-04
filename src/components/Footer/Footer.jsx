import React from "react";
import { FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { motion } from "motion/react";
import { FaHeart } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-28 bg-[#f7f7f7]">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="container"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-4">
          {/* first section */}
          <div className="space-y-4 max-w-[300px]">
            <h1 className="text-2xl font-bold">Growth Mindset Apps</h1>
            <p className="text-dark2">
              We create simple to use but life transforming applications. The
              reviews and rating is a testament of how useful and helpful our
              apps are. Download and start using the growth mindset apps and see
              how all aspects of your life will change...
            </p>
          </div>
          {/* second section */}
          <div className="grid grid-cols-2 gap-10">
            <div className="space-y-4">
              <h1 className="text-2xl font-bold">Our Apps</h1>
              <div className="text-dark2">
                <ul className="space-y-2 text-lg">
                  <li className="cursor-pointer hover:text-secondary duration-200">
                    <a href="#books">Book Summaries </a>
                  </li>
                  <li className="cursor-pointer hover:text-secondary duration-200">
                    <a href="#quotes">Daily Quotes</a>
                  </li>
                  <li className="cursor-pointer hover:text-secondary duration-200">
                    <a href="#bible">Bible Verses & Quizzes </a>
                  </li>
                  <li className="cursor-pointer hover:text-secondary duration-200">
                    <a href="#quotesAffirm">Daily Affirmations </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* third section */}
          <div className="space-y-4 max-w-[300px]">
            <h1 className="text-2xl font-bold">Links</h1>
            <div className="text-dark2">
              <ul className="space-y-2 text-lg">
                <li className="cursor-pointer hover:text-secondary duration-200">
                  <a href="/">Home</a>
                </li>
                <li className="cursor-pointer hover:text-secondary duration-200">
                <a href="/terms"> Terms </a>
                </li>
                <li className="cursor-pointer hover:text-secondary duration-200">
                <a href="/terms"> Privacy </a>
                </li>
                <li className="cursor-pointer hover:text-secondary duration-200">
                <a href="#contact">Get In Touch</a>
                </li>
              </ul>
            </div>

            {/* social icons */}
          </div>
        </div>
        <div className="container mx-auto my-10 flex justify-center items-center">
          <p className="inline-flex items-center">
            Copyright &copy; {currentYear} | Created with{" "}
            <FaHeart className="text-red-500 mx-4" /> by Growth Mindset team
          </p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
