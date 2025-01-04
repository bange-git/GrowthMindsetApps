import React from "react";
import QuoteImg from "../../assets/quotes.png";
import { motion } from "motion/react";
import { RiAppleFill } from "react-icons/ri";

const BannerQuote = () => {
  return (
    <div
      className="flex flex-col md:flex-row items-center justify-center w-full py-6 md:py-8 lg:py-10 px-4 md:px-16 lg:px-32 bg-gray-100 "
      id="quotes"
    >
      {/* Text Column */}
      <motion.div
        className="w-full md:w-1/2 flex flex-col items-center md:items-start p-4"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">
          Daily Motivational Quotes
        </h1>
        <p className="text-gray-600 text-center md:text-left mb-6">
          This app serves quotes in various categories in both audio and text
          format. Quotes that have been carefully selected to cause a great
          impact in the life of all using this app. You can listen to beautiful
          quotes while doing other things and it has the power to improve your
          mindset and make your day a better one. Download for free and try it
          today.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="https://apps.apple.com/us/app/daily-quotes-positive-focus/id6467518296"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-black text-white font-bold rounded-md shadow hover:bg-slate-600 transition"
          >
            <div className="flex items-center justify-center gap-2">
              <RiAppleFill />
              Download on App Store
            </div>
          </a>
        </div>
      </motion.div>
      {/* Image Column */}
      <motion.div
        className="w-full md:w-1/2 flex justify-center items-center p-4"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src={QuoteImg}
          alt="App Preview"
          className="rounded-lg shadow-md max-w-full h-auto"
        />
      </motion.div>
    </div>
  );
};

export default BannerQuote;
