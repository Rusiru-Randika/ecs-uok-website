import { useState } from "react";
import Logo from "../assets/logo/ecsc_logo_header.png";
import { Link } from "react-router-dom";
import { FaBars, FaXmark } from "react-icons/fa6";

export default function Header() {
  const [toggleNavBar, setToggleNavBar] = useState(false);

  const handleClickNavBar = () => {
    setToggleNavBar(!toggleNavBar);
  };

  return (
    <header className="w-full bg-blue-900 backdrop-blur-md fixed top-0 left-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Area */}
          <div className="flex-shrink-0 flex items-center">
            <Link to={"/"} className="flex items-center">
              <img src={Logo} alt="ECSC Logo" className="w-auto max-h-[50px]" />
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to={"/"}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-white hover:text-blue-200 font-medium transition-colors duration-200"
            >
              Home
            </Link>

            {/* About Link */}
            <a
              href="/#about"
              className="text-white hover:text-blue-200 font-medium transition-colors duration-200"
            >
              About
            </a>

            {/* Events Link */}
            <a
              href="/#events"
              className="text-white hover:text-blue-200 font-medium transition-colors duration-200"
            >
              Events
            </a>

            {/* Team Link */}
            <a
              href="/#team"
              className="text-white hover:text-blue-200 font-medium transition-colors duration-200"
            >
              Team
            </a>

            {/* Achievements Link */}
            <a
              href="/#achievements"
              className="text-white hover:text-blue-200 font-medium transition-colors duration-200"
            >
              Achievements
            </a>

            <a
              href="/#contact"
              className="text-white hover:text-blue-200 font-medium transition-colors duration-200"
            >
              Contact Us
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div
            className="md:hidden cursor-pointer p-2"
            onClick={handleClickNavBar}
          >
            {toggleNavBar ? (
              <FaXmark className="w-6 h-6 text-white" />
            ) : (
              <FaBars className="w-6 h-6 text-white" />
            )}
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={
          toggleNavBar
            ? `bg-white border-t border-gray-100 md:hidden shadow-lg`
            : `hidden`
        }
      >
        <div className="px-4 py-2">
          <Link
            to={"/"}
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
              setToggleNavBar(false);
            }}
          >
            <div className="px-4 py-3 text-gray-600 hover:text-red-600 font-medium">
              Home
            </div>
          </Link>

          <a href="/#about" onClick={() => setToggleNavBar(false)}>
            <div className="px-4 py-3 text-gray-600 hover:text-red-600 font-medium">
              About
            </div>
          </a>

          <a href="/#events" onClick={() => setToggleNavBar(false)}>
            <div className="px-4 py-3 text-gray-600 hover:text-red-600 font-medium">
              Events
            </div>
          </a>

          <a href="/#team" onClick={() => setToggleNavBar(false)}>
            <div className="px-4 py-3 text-gray-600 hover:text-red-600 font-medium">
              Team
            </div>
          </a>

          <a href="/#achievements" onClick={() => setToggleNavBar(false)}>
            <div className="px-4 py-3 text-gray-600 hover:text-red-600 font-medium">
              Achievements
            </div>
          </a>

          <a href="/#contact" onClick={() => setToggleNavBar(false)}>
            <div className="px-4 py-3 text-gray-600 hover:text-red-600 font-medium">
              Contact Us
            </div>
          </a>
        </div>
      </div>
    </header>
  );
}
