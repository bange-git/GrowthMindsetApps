import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { FiSend } from "react-icons/fi";
import { motion } from "motion/react";

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let errors = {};
    if (!formData.name) errors.name = "Name is required";
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }
    if (!formData.message) errors.message = "Message is required";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validateErrors = validate();
    if (Object.keys(validateErrors).length > 0) {
      setErrors(validateErrors);
    } else {
      setErrors({});
      setIsSending(true);

      emailjs
        .send(
          "service_lysbzsn",
          "template_o60fcpn",
          formData,
          "ZxjECWrGEpzl6O7VP"
        )
        .then(() => {
          toast.success("Message sent successfully");
          setFormData({ name: "", email: "", message: "" });
        })
        .catch(() => {
          toast.error("Failed to send message. Please try again later.");
        })
        .finally(() => {
          setIsSending(false);
        });
    }
  };

  return (
    <div
      className="flex flex-col lg:flex-row w-full py-32 px-6 lg:px-24 "
      id="contact"
    >
      {/* Text Column */}
      <Toaster />
      <motion.div
        className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left p-6"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-2xl lg:text-4xl font-bold text-gray-600 mb-4">
          Get In Touch
        </h1>
        <p className="text-gray-600 mb-6">
          If you have any issue with any of our apps, kindly send us a message
          mentioning the issue and the app name. We’ll get back to you as soon
          as possible. <br />
          <br />
          Our developer team also offer services to build cross platform mobile
          applications for businesses. If you need our services, just send us a
          message.
          <br />
          <br />
          you can as well write me directly via <span className="text-gray-500 font-bold">sebastienbange@gmail.com</span>
        </p>
      </motion.div>
      {/* Form Column */}
      <motion.div
        className="w-full lg:w-1/2 flex justify-center p-6"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <form className="w-full flex flex-col" onSubmit={handleSubmit}>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            placeholder="Name"
            onChange={handleChange}
            className="mb-4 w-full rounded-lg border border-stone-700 bg-stone-900 px-4 py-2 text-sm text-white focus:border-stone-500 focus:outline-none"
          />
          {errors.name && (
            <p className="text-sm text-rose-500">{errors.name}</p>
          )}

          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            placeholder="Email"
            onChange={handleChange}
            className="mb-4 w-full rounded-lg border border-stone-700 bg-stone-900 px-4 py-2 text-sm text-white focus:border-stone-500 focus:outline-none"
          />
          {errors.email && (
            <p className="text-sm text-rose-500">{errors.email}</p>
          )}

          <textarea
            id="message"
            name="message"
            value={formData.message}
            placeholder="Message"
            onChange={handleChange}
            className="mb-4 w-full rounded-lg border border-stone-700 bg-stone-900 px-4 py-2 text-sm text-white focus:border-stone-500 focus:outline-none"
            rows={6}
          />
          {errors.message && (
            <p className="text-sm text-rose-500">{errors.message}</p>
          )}

          <button
            type="submit"
            className={`w-full rounded-lg bg-stone-700 px-4 py-2 text-sm font-semibold text-white hover:bg-stone-600 focus:outline-none ${
              isSending ? "cursor-not-allowed opacity-50" : ""
            }`}
            disabled={isSending}
          >
            <div className="flex items-center justify-center gap-2">
              {isSending ? "Sending..." : "Send"}
              <FiSend />
            </div>
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default FeedbackForm;
