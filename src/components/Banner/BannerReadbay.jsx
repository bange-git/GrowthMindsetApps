import React from "react";
import Readbay from "../../assets/readbay1.png";
import { motion } from "motion/react";
import { FiSend } from "react-icons/fi";
import { RiAppleFill, RiGooglePlayFill } from "react-icons/ri";

const Banner = () => {
  return (
    <div
      className="flex flex-col md:flex-row items-center justify-center w-full py-6 md:py-8 lg:py-14 px-4 md:px-16 lg:px-14 bg-gray-100"
      id="books"
    >
      {/* Image Column */}
      <motion.div
        className="w-full md:w-1/2 flex justify-center items-center p-4"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src={Readbay}
          alt="App Preview"
          className="rounded-lg shadow-md max-w-full h-auto"
        />
      </motion.div>

      {/* Text Column */}
      <motion.div
        className="w-full md:w-1/2 flex flex-col items-center md:items-start p-4"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">
          Readbay: Daily Book Summaries
        </h1>
        <p className="text-gray-600 text-center md:text-left mb-6">
          Readbay summarizes books into 15-minute reads or listens. Explore 27+
          categories like productivity, self development, Success,
          communication, leadership & management, career & business, happiness,
          money & finance, relationship, motivation and more.
          <br />
          <br />
          Gain key insights, ideas from top non-fiction books in a fraction of the time. Enjoyed by
          thousands, with 31K+ organic downloads. Available on the app store
          with a 4.9 average rating.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="https://apps.apple.com/app/readbay-great-book-summaries/id6499073338"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-black text-white font-bold rounded-md shadow hover:bg-slate-600 transition"
          >
            <div className="flex items-center justify-center gap-2">
              <RiAppleFill  />
              Download on App Store
            </div>
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.dbsummaries"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-green-600 text-white font-bold rounded-md shadow hover:bg-green-700 transition"
          >
            <div className="flex items-center justify-center gap-2">
              <RiGooglePlayFill />
              Download on Play Store
            </div>
            
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Banner;
