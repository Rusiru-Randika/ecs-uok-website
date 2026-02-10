import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function ContactSection() {
  return (
    <section className="py-16 lg:py-24 bg-white scroll-mt-20" id="contact">
      {/* Wavy underline animation */}
      <style>{`
        .wavy-underline-contact {
          position: relative;
          display: inline-block;
        }
        @keyframes waveMoveContact {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 50px 0;
          }
        }
        .wavy-underline-contact::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -8px;
          width: 100%;
          height: 12px;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 15'%3E%3Cpath d='M0 8 Q 12.5 2, 25 8 T 50 8 T 75 8 T 100 8' stroke='%23dc2626' stroke-width='9' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");
          background-size: 50px 12px;
          background-repeat: repeat-x;
          animation: waveMoveContact 3s linear infinite;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            <span className="wavy-underline-contact">Contact</span> Us
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Get in touch with us. We'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Get In Touch
              </h3>

              {/* Contact Details */}
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaMapMarkerAlt className="text-blue-600 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Location
                    </h4>
                    <p className="text-gray-600">
                      Department of Electronics and Computer Science
                      <br />
                      University of Kelaniya
                      <br />
                      Kelaniya, Sri Lanka
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaEnvelope className="text-blue-600 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                    <a
                      href="mailto:contact@ecsc-uok.com"
                      className="text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      contact@ecsc-uok.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Follow Us For Latest Updates
              </h3>
              <p className="text-gray-600 mb-4">
                Stay connected with us on social media for the latest news,
                events, and updates from ECSC.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://www.facebook.com/ecsc.uok"
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors shadow-md hover:shadow-lg"
                  title="Follow us on Facebook for latest information"
                >
                  <FaFacebook className="text-white text-2xl" />
                </a>
                <a
                  href="https://www.instagram.com/ecsc_uok"
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-full flex items-center justify-center transition-colors shadow-md hover:shadow-lg"
                >
                  <FaInstagram className="text-white text-2xl" />
                </a>
                <a
                  href="https://www.linkedin.com/company/ecsc-uok"
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 bg-blue-700 hover:bg-blue-800 rounded-full flex items-center justify-center transition-colors shadow-md hover:shadow-lg"
                >
                  <FaLinkedin className="text-white text-2xl" />
                </a>
              </div>
              <p className="text-sm text-gray-500 mt-3">
                💙 Follow us on <strong>Facebook</strong> for the latest
                information and updates!
              </p>
            </div>
          </div>

          {/* Google Maps */}
          <div className="h-[500px] rounded-2xl overflow-hidden shadow-lg border-2 border-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d547.6962975440712!2d79.91465077732589!3d6.9722657739371545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae259507b373883%3A0xcc2c463d17920fb9!2sA7%20Building!5e0!3m2!1sen!2slk!4v1692283526637!5m2!1sen!2slk"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="A7 Building - ECSC Department Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
