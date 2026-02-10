import { useState } from "react";
import Logo from "../assets/logo/ecsc_logo_header.png";
import { Link } from "react-router-dom";
import { FaCaretDown, FaCaretRight, FaBars, FaXmark } from "react-icons/fa6";

export default function Header() {
  const [toggleNavBar, setToggleNavBar] = useState(false);
  const [toggleMenu1, setToggleMenu1] = useState(false);
  const [toggleMenu2, setToggleMenu2] = useState(false);

  const handleClickNavBar = () => {
    setToggleNavBar(!toggleNavBar);
  };

  const handleClickMenuBar1 = () => {
    setToggleMenu1(!toggleMenu1);
    setToggleMenu2(false);
  };

  const handleCloseMenu1 = () => {
    setToggleMenu1(false);
  };

  const handleClickMenuBar2 = () => {
    setToggleMenu2(!toggleMenu2);
    setToggleMenu1(false);
  };

  const handleCloseMenu2 = () => {
    setToggleMenu2(false);
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

            {/* About Dropdown */}
            <div className="relative">
              <button
                className="flex items-center gap-1 text-white hover:text-blue-200 font-medium transition-colors duration-200 bg-transparent border-0 cursor-pointer"
                onClick={handleClickMenuBar1}
              >
                About{" "}
                {toggleMenu1 ? (
                  <FaCaretDown className="text-sm" />
                ) : (
                  <FaCaretRight className="text-sm" />
                )}
              </button>
              <ul
                className={
                  toggleMenu1
                    ? `absolute top-12 left-0 bg-white rounded-lg shadow-lg border border-gray-100 min-w-[200px] py-2`
                    : `hidden`
                }
              >
                <Link to={"/about/about-ecsc"}>
                  <li
                    className="px-4 py-3 text-gray-600 hover:bg-gray-50 hover:text-red-600 transition-colors"
                    onClick={handleCloseMenu1}
                  >
                    About ECSC
                  </li>
                </Link>
                <Link to={"/about/executive-committee"}>
                  <li
                    className="px-4 py-3 text-gray-600 hover:bg-gray-50 hover:text-red-600 transition-colors"
                    onClick={handleCloseMenu1}
                  >
                    Executive Committee
                  </li>
                </Link>
              </ul>
            </div>

            {/* Events Link */}
            <a
              href="/#events"
              onClick={() => {
                setToggleMenu1(false);
                setToggleMenu2(false);
              }}
              className="text-white hover:text-blue-200 font-medium transition-colors duration-200"
            >
              Events
            </a>

            <a
              href="/#contact"
              onClick={() => {
                setToggleMenu1(false);
                setToggleMenu2(false);
              }}
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

          <div
            className="px-4 py-3 text-gray-600 hover:text-red-600 font-medium cursor-pointer flex items-center gap-2"
            onClick={handleClickMenuBar1}
          >
            About{" "}
            {toggleMenu1 ? (
              <FaCaretDown className="text-sm" />
            ) : (
              <FaCaretRight className="text-sm" />
            )}
          </div>
          {toggleMenu1 && (
            <div className="pl-8 bg-gray-50 rounded-lg mx-2 mb-2">
              <Link to={"/about/about-ecsc"}>
                <div
                  className="px-4 py-3 text-gray-600 hover:text-red-600"
                  onClick={() => setToggleNavBar(false)}
                >
                  About ECSC
                </div>
              </Link>
              <Link to={"/about/executive-committee"}>
                <div
                  className="px-4 py-3 text-gray-600 hover:text-red-600"
                  onClick={() => setToggleNavBar(false)}
                >
                  Executive Committee
                </div>
              </Link>
            </div>
          )}

          <div
            className="px-4 py-3 text-gray-600 hover:text-red-600 font-medium cursor-pointer flex items-center gap-2"
            onClick={handleClickMenuBar2}
          >
            Events{" "}
            {toggleMenu2 ? (
              <FaCaretDown className="text-sm" />
            ) : (
              <FaCaretRight className="text-sm" />
            )}
          </div>
          {toggleMenu2 && (
            <div className="pl-8 bg-gray-50 rounded-lg mx-2 mb-2">
              <a
                href="https://robotbattles.ecsc-uok.com/"
                target="_blank"
                rel="noreferrer"
              >
                <div
                  className="px-4 py-3 text-gray-600 hover:text-red-600"
                  onClick={() => setToggleNavBar(false)}
                >
                  UOK Robot Battles
                </div>
              </a>
              <a
                href="https://medusa.ecsc-uok.com/"
                target="_blank"
                rel="noreferrer"
              >
                <div
                  className="px-4 py-3 text-gray-600 hover:text-red-600"
                  onClick={() => setToggleNavBar(false)}
                >
                  Medusa - CTF Challenge
                </div>
              </a>
            </div>
          )}

          <a
            href="/#contact"
            onClick={() => {
              setToggleNavBar(false);
              setToggleMenu1(false);
              setToggleMenu2(false);
            }}
          >
            <div className="px-4 py-3 text-gray-600 hover:text-red-600 font-medium">
              Contact Us
            </div>
          </a>
        </div>
      </div>
    </header>
  );
}
