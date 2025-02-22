import React from "react";
import { RiComputerLine } from "react-icons/ri";
import { CiMobile3 } from "react-icons/ci";
import { TbWorldWww } from "react-icons/tb";
import { IoMdHappy } from "react-icons/io";
import { BiSupport } from "react-icons/bi";
import { IoPulseOutline } from "react-icons/io5";
import { motion } from "motion/react";
import { RiDoubleQuotesL } from "react-icons/ri";
import { ImBooks } from "react-icons/im";
import { FaBible } from "react-icons/fa";
import { FaRegGrinStars } from "react-icons/fa";

const ServicesData = [
  {
    id: 1,
    title: "1000+ book summaries",
    link: "#",
    icon: <ImBooks />    ,
    delay: 0.2,
  },
  {
    id: 2,
    title: "100,000+ Quotes & Affirmations",
    link: "#",
    icon: <RiDoubleQuotesL />,
    delay: 0.3,
  },
  {
    id: 3,
    title: "Bible verses & 200+ Quizzes",
    link: "#",
    icon: <FaBible />,
    delay: 0.4,
  },
  {
    id: 4,
    title: "4.8 Global Average Rating",
    link: "#",
    icon: <FaRegGrinStars />,
    delay: 0.5,
  },
  // {
  //   id: 5,
  //   title: "SEO optimization",
  //   link: "#",
  //   icon: <IoPulseOutline />,
  //   delay: 0.6,
  // },
  // {
  //   id: 6,
  //   title: "24/7 support",
  //   link: "#",
  //   icon: <BiSupport />,
  //   delay: 0.7,
  // },
];

const SlideLeft = (delay) => {
  return {
    initial: {
      opacity: 0,
      x: 50,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        delay: delay,
        ease: "easeInOut",
      },
    },
  };
};
const Services = () => {
  return (
    <section className="bg-white">
      <div className="container pb-14 pt-16">
        {/* <h1 className="text-4xl font-bold text-left pb-10">
          Services we provide
        </h1> */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-center">
          {ServicesData.map((service) => (
            <motion.div
              variants={SlideLeft(service.delay)}
              initial="initial"
              whileInView={"animate"}
              viewport={{ once: true }}
              className="bg-[#f4f4f4] rounded-2xl flex flex-col gap-4 items-center justify-center p-4 py-7 hover:bg-white hover:scale-110 duration-300 hover:shadow-2xl"
            >
              <div className="text-4xl mb-4"> {service.icon}</div>
              <h1 className="text-lg font-semibold text-center px-3">
                {service.title}
              </h1>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
