import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io"; // Import close icon
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const NavbarMenu = [
  {
    id: 1,
    title: "Home",
    path: "/",
  },
  {
    id: 2,
    title: "Terms",
    path: "/terms",
  },
  {
    id: 3,
    title: "Privacy",
    path: "/privacy",
  },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="relative z-20 bg-white shadow-md">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="container py-6 flex justify-between items-center"
      >
        {/* Logo section */}
        <div>
          <h1 className="font-bold text-2xl">Growth Mindset</h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:block">
          <ul className="flex items-center gap-3">
            {NavbarMenu.map((menu) => (
              <li key={menu.id}>
                <a
                  href={menu.path}
                  className="inline-block py-2 px-3 hover:text-secondary relative group"
                >
                  <div className="w-2 h-2 bg-secondary absolute mt-4 rounded-full left-1/2 -translate-x-1/2 top-1/2 bottom-0 group-hover:block hidden"></div>
                  {menu.title}
                </a>
              </li>
            ))}
            <a href="/feedback">
              <button className="primary-btn">Get In Touch</button>
            </a>
          </ul>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="lg:hidden">
          {isMobileMenuOpen ? (
            <IoMdClose
              className="text-4xl cursor-pointer"
              onClick={() => setIsMobileMenuOpen(false)}
            />
          ) : (
            <IoMdMenu
              className="text-4xl cursor-pointer"
              onClick={() => setIsMobileMenuOpen(true)}
            />
          )}
        </div>
      </motion.div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="lg:hidden bg-white shadow-md"
        >
          <ul className="flex flex-col items-center gap-3 py-4">
            {NavbarMenu.map((menu) => (
              <li key={menu.id}>
                <a
                  href={menu.path}
                  className="block py-2 px-3 hover:text-secondary"
                  onClick={() => setIsMobileMenuOpen(false)} // Close menu on click
                >
                  {menu.title}
                </a>
              </li>
            ))}
            <a href="/feedback">
              <button
                className="primary-btn"
                onClick={() => setIsMobileMenuOpen(false)} // Close menu on click
              >
                Get In Touch
              </button>
            </a>
          </ul>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
