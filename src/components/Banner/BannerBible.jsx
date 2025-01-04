import React from "react";
import Bible from "../../assets/bible.png";
import { motion } from "motion/react";
import { RiAppleFill, RiGooglePlayFill } from "react-icons/ri";

const BannerBible = () => {
  return (
    <div
      className="flex flex-col md:flex-row items-center justify-center w-full py-6 md:py-8 lg:py-10 px-4 md:px-16 lg:px-32 bg-gray-100"
      id="bible"
    >
      {/* Image Column */}
      <motion.div
        className="w-full md:w-1/2 flex justify-center items-center p-4"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src={Bible}
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
          Bible Verses & Game
        </h1>
        <p className="text-gray-600 text-center md:text-left mb-6">
          This app has selected bible verses that addresses more than 70 topics
          or situations and also integrates a game experience through bible
          quizzes, receive notification for daily verses, a daily journaling
          feature and more. Download today and draw closer to God by studying
          the word of God in a fun way
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="https://apps.apple.com/app/bible-verses-bible-quiz/id6478053799"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-black text-white font-bold rounded-md shadow hover:bg-slate-600 transition"
          >
            <div className="flex items-center justify-center gap-2">
              <RiAppleFill />
              Download on App Store
            </div>
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.bible.verse"
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

export default BannerBible;
