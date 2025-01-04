import React from "react";
import AffirmImg from "../../assets/affirm.png";
import { motion } from "motion/react";
import { RiAppleFill, RiGooglePlayFill } from "react-icons/ri";

const BannerAffirm = () => {
  return (
    <div
      className="flex flex-col md:flex-row items-center justify-center w-full py-6 md:py-8 lg:py-10 px-4 md:px-16 lg:px-32 bg-gray-100"
      id="quotesAffirm"
    >
      {/* Text Column */}
      <motion.div
        className="w-full md:w-1/2 flex flex-col items-center md:items-start p-4"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">
          Daily Affirmation
        </h1>
        <p className="text-gray-600 text-center md:text-left mb-6">
          This app serves affirmations in various categories in both audio and
          text format and also uses widgets for easy access. Affirmations that
          have been carefully selected to cause a great impact in the life of
          all using this app. You can listen to beautiful affirmations while
          doing other things and it has the power to improve your mindset and
          make your day a better one. Download for free and try it today.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="https://apps.apple.com/app/affirm-manifest-affirmations/id6472883494"
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
            href="https://play.google.com/store/apps/details?id=com.daily.affirm"
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
      {/* Image Column */}
      <motion.div
        className="w-full md:w-1/2 flex justify-center items-center p-4"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src={AffirmImg}
          alt="App Preview"
          className="rounded-lg shadow-md max-w-full h-auto"
        />
      </motion.div>
    </div>
  );
};

export default BannerAffirm;
