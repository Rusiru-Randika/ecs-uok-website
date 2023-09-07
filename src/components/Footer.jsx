import { Link } from "react-router-dom";
import Logo from "../assets/logo/ecsc_logo_footer.png";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaDiscord,
  FaYoutube,
  FaLocationDot,
  FaPhone,
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
    name: "About ECSC",
    to: "/about/about-ecsc",
  },
  {
    id: 3,
    name: "Messages",
    to: "/about/messages",
  },
  {
    id: 4,
    name: "Executive Committee",
    to: "/about/executive-committee",
  },
  {
    id: 5,
    name: "News",
    to: "/news",
  },
  {
    id: 6,
    name: "Events",
    to: "/events",
  },
];

const StayConnectedLinkArray = [
  {
    id: 1,
    name: "Faculty of Science, University of Kelaniya",
    to: "https://goo.gl/maps/98oGFdWo3nPwue2d9",
    icon: <FaLocationDot size={18} />,
  },
  {
    id: 2,
    name: "(+94) 78 256 3766",
    to: "tel:+94782563766",
    icon: <FaPhone size={18} />,
  },
  {
    id: 3,
    name: "ecs.uok@gmail.com",
    to: "mailto:ecs.uok@gmail.com",
    icon: <FaEnvelope size={18} />,
  },
];

const SocialMediaLinksArray = [
  {
    id: 1,
    to: "https://www.linkedin.com/company/electronics-and-computer-science-club/",
    icon: <FaLinkedin size={32} className="hover:fill-blue-800 duration-500" />,
  },
  {
    id: 2,
    to: "https://www.facebook.com/profile.php?id=61550473266598",
    icon: <FaFacebook size={32} className="hover:fill-primary duration-500" />,
  },
  {
    id: 3,
    to: "https://instagram.com/ecsc_uok",
    icon: (
      <FaInstagram size={32} className="hover:fill-pink-600 duration-500" />
    ),
  },
  {
    id: 4,
    to: "www.discord.gg",
    icon: <FaDiscord size={32} className="hover:fill-secondary duration-500" />,
  },
  {
    id: 5,
    to: "https://youtube.com/@ECSCUOK",
    icon: <FaYoutube size={32} className="hover:fill-red-600 duration-500" />,
  },
];

export default function Footer() {
  const handleSubscribe = () => {};

  return (
    <div className="w-full bg-white text-black p-4 my-4">
      <div className="grid grid-cols-1 md:grid-cols-6 gap-8 mx-20 border-b-2 border-gray-600 pb-8">
        <div className="flex flex-col items-center justify-center">
          <img src={Logo} alt="ecsc logo" className="w-auto max-h-[200px]" />
          <p>
            &quot;Let&apos;s Embrace the world of Hardware and Software, to
            create a sustainable future&quot;
          </p>
        </div>

        <div className="col-span-2 flex flex-col items-center">
          <h6 className="font-bold uppercase">Site Map</h6>
          <ol>
            {siteMapLinkArray.map((item) => {
              return (
                <Link key={item.id} to={item.to}>
                  <li className="text-base font-sans cursor-pointer py-1">
                    {item.name}
                  </li>
                </Link>
              );
            })}
          </ol>
        </div>

        <div className="flex flex-col items-center">
          <h6 className="font-bold uppercase">Stay Connected</h6>
          <ol>
            {StayConnectedLinkArray.map((item) => {
              return (
                <div
                  className="flex items-center justify-start gap-4 my-2"
                  key={item.id}
                >
                  {item.icon}
                  <a
                    className="text-base mt-0 cursor-pointer"
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

        <div className="col-span-2 flex flex-col items-center">
          <p className="font-bold uppercase">Subscribe To Our Newsletter</p>
          <p className="py-4 text-center md:text-start">
            The latest news, articles and resources will be sent to your inbox
            weekly
          </p>
          <form className="flex sm:flex-row flex-col gap-4">
            <input
              className="p-2 rounded-md mb-2 border-2 border-secondary max-w-[200px]"
              type="email"
              placeholder="Enter your email"
            />
            <button
              className="py-2 px-8 mb-2 bg-primary text-white hover:bg-secondary hover:text-white duration-500"
              onClick={handleSubscribe}
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="flex flex-col pt-8 justify-center items-center text-center text-gray-500 ">
        <div className="flex text-2xl mb-4 gap-8 md:gap-12">
          {SocialMediaLinksArray.map((item) => {
            return (
              <a key={item.id} href={item.to} target="_blank" rel="noreferrer">
                {item.icon}
              </a>
            );
          })}
        </div>
        <p>© Copyright 2023 by GenZ DevLabs. All Rights Reserved.</p>
      </div>
    </div>
  );
}
