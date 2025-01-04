import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { FaAngleRight } from "react-icons/fa"; // Import the info icon
import FeedbackForm from "../../components/FeedbackForm";

const Feedback = () => {
  return (
    <>
      <Navbar />
      <FeedbackForm />
    </>
  );
};

export default Feedback;
