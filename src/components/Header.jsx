import { useState } from "react";
import Logo from "../assets/ecsc_logo_header.png";
import { Link } from "react-router-dom";
import { CarotDown, CarotRight, CloseIcon, MenuIcon2 } from "../assets/Icon";

export default function Header() {
  const [toggleNabBar, setToggleNavBar] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleClickNavBar = () => {
    setToggleNavBar(!toggleNabBar);
  };

  const handleClickMenuBar = () => {
    setToggleMenu(!toggleMenu);
  };

  const handleCloseMenu = () => {
    setToggleMenu(false);
  };

  return (
    <div className="w-full h-[80px] z-10 bg-primary drop-shadow-lg relative">
      <div className="flex justify-between items-center w-full, h-full md:max-w-[1240px] m-auto">
        <div className="flex items-center">
          <Link to={"/"}>
            <img
              src={Logo}
              alt="logo"
              className="sm:ml-10 ss:ml-10 md:ml-3 w-auto h-[64px]"
            />
          </Link>
        </div>

        <div className="flex items-center">
          <ul className="hidden md:flex text-white text-2xl">
            <Link to={"/"}>
              <li>Home</li>
            </Link>
            <li
              className="cursor-pointer flex items-center gap-4 "
              onClick={handleClickMenuBar}
            >
              About {toggleMenu ? <CarotDown /> : <CarotRight />}
            </li>
            <ul
              className={
                toggleMenu
                  ? `absolute mt-[72px] ml-28 bg-primary max-w-[300px] p-4 text-white`
                  : `hidden`
              }
            >
              <Link to={"/about/about-ecsc"}>
                <li onClick={handleCloseMenu}>About ECSC</li>
              </Link>
              <Link to={"/about/messages"}>
                <li onClick={handleCloseMenu}>Messages</li>
              </Link>
              <Link to={"/about/executive-committee"}>
                <li onClick={handleCloseMenu}>Executive Committee</li>
              </Link>
            </ul>
            <Link to={"/news"}>
              <li>News</li>
            </Link>
            <Link to={"/events"}>
              <li>Events</li>
            </Link>
          </ul>
        </div>

        <div className="hidden md:flex sm:mr-10 md:mr-10">
          <Link to={"/contact-us"}>
            <button
              className="px-8 py-2 text-xl hover:bg-secondary hover:text-white hover:border-white duration-500"
              onClick={() => {
                setToggleNavBar(false);
              }}
            >
              Contact Us
            </button>
          </Link>
        </div>

        <div
          className="md:hidden cursor-pointer mr-10"
          onClick={handleClickNavBar}
        >
          {toggleNabBar ? <CloseIcon /> : <MenuIcon2 />}
        </div>
      </div>

      <ul
        className={
          toggleNabBar
            ? `bg-primary w-full px-8 md:hidden text-white`
            : `hidden`
        }
      >
        <Link to={"/"}>
          <li>Home</li>
        </Link>
        <li
          className="cursor-pointer flex items-center gap-4 "
          onClick={handleClickMenuBar}
        >
          About {toggleMenu ? <CarotDown /> : <CarotRight />}
        </li>
        {toggleMenu ? (
          <div className="pl-4">
            <Link to={"/about/about-ecsc"}>
              <li
                onClick={() => {
                  setToggleNavBar(false);
                }}
              >
                About ECSC
              </li>
            </Link>
            <Link to={"/about/messages"}>
              <li
                onClick={() => {
                  setToggleNavBar(false);
                }}
              >
                Messages
              </li>
            </Link>
            <Link to={"/about/executive-committee"}>
              <li
                onClick={() => {
                  setToggleNavBar(false);
                }}
              >
                Executive Committee
              </li>
            </Link>
          </div>
        ) : (
          ""
        )}

        <Link to={"/news"}>
          <li>News</li>
        </Link>
        <Link to={"/events"}>
          <li>Events</li>
        </Link>
        <div className="flex flex-col py-8">
          <Link to={"/contact-us"}>
            <button
              className="px-8 py-3 hover:bg-secondary hover:text-white hover:border-white duration-500"
              onClick={() => {
                setToggleNavBar(false);
              }}
            >
              Contact Us
            </button>
          </Link>
        </div>
      </ul>
    </div>
  );
}
