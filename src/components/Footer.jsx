import { Link } from "react-router-dom";
import Logo from "../assets/logo/ecsc_logo_footer.png";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa6";

const discoverLinks = [
  { id: 1, name: "Home", to: "/", isExternal: false },
  { id: 2, name: "About Us", to: "/about/about-ecsc", isExternal: false },
  { id: 3, name: "Events", to: "/#events", isExternal: false },
  { id: 4, name: "News", to: "/#news", isExternal: false },
];

const learnMoreLinks = [
  { id: 1, name: "Courses", to: "#", isExternal: false },
  { id: 2, name: "Achievements", to: "#achievements", isExternal: false },
  { id: 3, name: "Gallery", to: "#", isExternal: false },
  { id: 4, name: "Contact Us", to: "/#contact", isExternal: false },
];

const socialLinks = [
  {
    id: 1,
    to: "https://www.facebook.com/profile.php?id=61550473266598",
    icon: <FaFacebook />,
    label: "Facebook",
  },
  {
    id: 2,
    to: "https://instagram.com/ecsc_uok",
    icon: <FaInstagram />,
    label: "Instagram",
  },
  {
    id: 3,
    to: "https://youtube.com/@ECSCUOK",
    icon: <FaYoutube />,
    label: "YouTube",
  },
  {
    id: 4,
    to: "https://www.linkedin.com/company/electronics-and-computer-science-club/",
    icon: <FaLinkedin />,
    label: "LinkedIn",
  },
];

export default function Footer() {
  return (
    <footer
      className="border-t border-gray-200 pt-16 pb-8 bg-white"
      id="contact"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Col 1: Branding */}
          <div className="col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 bg-gray-100 rounded-full flex items-center justify-center overflow-hidden">
                <img alt="ECSC Logo" className="h-8 w-auto" src={Logo} />
              </div>
              <span className="font-bold text-lg text-gray-800">ECSC UOK</span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed mb-6">
              Empowering the future of technology through hardware innovation
              and software excellence at the University of Kelaniya.
            </p>
            <div className="text-sm text-gray-500">
              <p>Dalugama,</p>
              <p>Kelaniya 11600,</p>
              <p>Sri Lanka.</p>
            </div>
          </div>

          {/* Col 2 & 3: Links */}
          <div className="col-span-1 md:col-span-2 grid grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Discover</h4>
              <ul className="space-y-3 text-sm text-gray-600">
                {discoverLinks.map((link) =>
                  link.isExternal ? (
                    <li key={link.id}>
                      <a
                        href={link.to}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-red-600 transition-colors"
                      >
                        {link.name}
                      </a>
                    </li>
                  ) : (
                    <li key={link.id}>
                      <Link
                        to={link.to}
                        className="hover:text-red-600 transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ),
                )}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Learn More</h4>
              <ul className="space-y-3 text-sm text-gray-600">
                {learnMoreLinks.map((link) =>
                  link.isExternal ? (
                    <li key={link.id}>
                      <a
                        href={link.to}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-red-600 transition-colors"
                      >
                        {link.name}
                      </a>
                    </li>
                  ) : (
                    <li key={link.id}>
                      <Link
                        to={link.to}
                        className="hover:text-red-600 transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ),
                )}
              </ul>
            </div>
          </div>

          {/* Col 4: Social Links */}
          <div className="col-span-1">
            <h4 className="font-semibold text-gray-900 mb-4">
              Connect with Us
            </h4>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.id}
                  href={social.to}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-sm border border-gray-200 text-gray-600 hover:bg-red-600 hover:text-white hover:border-red-600 transition-all duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© 2025 University of Kelaniya ECSC. All rights reserved.</p>
          <p className="mt-2 md:mt-0">
            Design inspired by{" "}
            <span className="text-gray-600 font-medium">
              @ Cornellionier 2022
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
