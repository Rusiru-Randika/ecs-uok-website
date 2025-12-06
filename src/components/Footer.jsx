import { Link } from "react-router-dom";
import Logo from "../assets/logo/ecsc_logo_footer.png";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaLocationDot,
  FaEnvelope,
} from "react-icons/fa6";

const siteMapLinkArray = [
  {
    id: 1,
    name: "Home",
    to: "/",
  },
  {
    id: 2,
    name: "UOK Robot Battles",
    to: "https://robotbattles.ecsc-uok.com/",
  },
  {
    id: 3,
    name: "Medusa CTF Challange",
    to: "https://medusa.ecsc-uok.com/",
  },
  {
    id: 4,
    name: "About ECSC",
    to: "/about/about-ecsc",
  },
];

const StayConnectedLinkArray = [
  {
    id: 1,
    name: "Faculty of Science, University of Kelaniya",
    to: "https://goo.gl/maps/98oGFdWo3nPwue2d9",
    icon: <FaLocationDot className="w-5 md:w-8 h-5 md:h-8" />,
  },
  {
    id: 3,
    name: "ecs.uok@gmail.com",
    to: "mailto:ecs.uok@gmail.com",
    icon: <FaEnvelope className="w-5 md:w-6 h-5 md:h-6" />,
  },
];

const SocialMediaLinksArray = [
  {
    id: 1,
    to: "https://www.linkedin.com/company/electronics-and-computer-science-club/",
    icon: (
      <FaLinkedin className="w-6 h-6 md:w-9 md:h-9 hover:fill-black duration-500" />
    ),
  },
  {
    id: 2,
    to: "https://www.facebook.com/profile.php?id=61550473266598",
    icon: (
      <FaFacebook className="w-6 h-6 md:w-9 md:h-9 hover:fill-black duration-500" />
    ),
  },
  {
    id: 3,
    to: "https://instagram.com/ecsc_uok",
    icon: (
      <FaInstagram className="w-6 h-6 md:w-9 md:h-9 hover:fill-black duration-500" />
    ),
  },
  {
    id: 5,
    to: "https://youtube.com/@ECSCUOK",
    icon: (
      <FaYoutube className="w-6 h-6 md:w-9 md:h-9 hover:fill-black duration-500" />
    ),
  },
];

export default function Footer() {
  return (
    <div className="w-full bg-primary text-white p-4 static">
      <div className="grid grid-cols-1 md:grid-cols-6 md:gap-8 mx-4 sm:mx-10 md:mx-20 border-b-2 border-white pb-6">
        <div className="flex flex-col md:col-span-3 items-center justify-center text-center">
          <img
            src={Logo}
            alt="ecsc logo"
            className="w-auto max-h-[100px] sm:max-h-[120px] md:max-h-[200px]"
          />
          <p className="mt-2 text-sm sm:text-base md:mt-0">
            &quot;Let&apos;s Embrace the world of Hardware and Software, to
            create a sustainable future&quot;
          </p>
        </div>

        <div className="col-span-2 md:col-span-1 md:col-start-5 flex flex-col justify-start items-left pt-4 md:pt-8">
          <h6 className="font-bold uppercase text-lg sm:text-xl">Site Map</h6>
          <ol>
            {siteMapLinkArray.map((item) => {
              return item.external ? (
                <a
                  key={item.id}
                  href={item.to}
                  target="_blank"
                  rel="noreferrer"
                >
                  <li className="text-sm sm:text-base md:text-lg font-sans cursor-pointer py-1">
                    {item.name}
                  </li>
                </a>
              ) : (
                <Link key={item.id} to={item.to}>
                  <li className="text-sm sm:text-base md:text-lg font-sans cursor-pointer py-1">
                    {item.name}
                  </li>
                </Link>
              );
            })}
          </ol>
        </div>

        <div className="flex flex-col md:col-start-6 items-left justify-start pt-4 md:pt-8">
          {/* Stay Connected Section */}
          <h6 className="font-bold uppercase text-lg sm:text-xl">
            Stay Connected
          </h6>
          <ol>
            {StayConnectedLinkArray.map((item) => {
              return (
                <div
                  className="flex items-center justify-start gap-2 sm:gap-4 my-2"
                  key={item.id}
                >
                  {item.icon}
                  <a
                    className="text-sm sm:text-base md:text-lg cursor-pointer"
                    href={item.to}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {item.name}
                  </a>
                </div>
              );
            })}
          </ol>
        </div>
      </div>

      <div className="flex flex-col pt-6 md:pt-8 justify-center items-center text-center text-white">
        <div className="flex flex-wrap justify-center mb-4 gap-6 sm:gap-8 md:gap-12">
          {SocialMediaLinksArray.map((item) => {
            return (
              <a key={item.id} href={item.to} target="_blank" rel="noreferrer">
                {item.icon}
              </a>
            );
          })}
        </div>
        <p className="text-xs sm:text-sm md:text-base">
          © Copyright 2025 by&nbsp; ECS Club. All Rights Reserved.
        </p>
      </div>
    </div>
  );
}
