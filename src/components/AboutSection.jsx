import { FaCheckCircle, FaPlay } from "react-icons/fa";

export default function AboutSection() {
  const videoId = "S1aoZpfbOcI";
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  const videoUrl = `https://youtu.be/${videoId}`;

  return (
    <section className="py-16 bg-gray-50 scroll-mt-24" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Wavy underline style */}
        <style>{`
          .wavy-underline-about {
            position: relative;
            display: inline-block;
          }
          .wavy-underline-about::after {
            content: '';
            position: absolute;
            left: 0;
            bottom: -6px;
            width: 100%;
            height: 12px;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 15'%3E%3Cpath d='M0 8 Q 12.5 2, 25 8 T 50 8 T 75 8 T 100 8' stroke='%23dc2626' stroke-width='9' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");
            background-size: 50px 12px;
            background-repeat: repeat-x;
          }
        `}</style>

        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            <span className="wavy-underline-about">About Us</span> &amp; Our
            Mission
          </h2>
        </div>

        {/* Two Column Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-gray-600 text-lg leading-relaxed">
          <div>
            <p className="mb-6">
              The Electronics and Computer Science Club (ECSC) is the primary
              student body of the Department of Electronics and Computer Science
              at the University of Kelaniya. We are a vibrant community
              dedicated to bridging the gap between theoretical knowledge and
              practical application.
            </p>
            <p>
              Founded on the principles of open-source collaboration and peer
              learning, we strive to create an environment where students from
              diverse backgrounds can come together to explore the fascinating
              worlds of embedded systems, software engineering, and robotics.
            </p>
          </div>
          <div>
            <p className="mb-6">
              Our mission is to empower undergraduates with the technical
              skills, soft skills, and industry exposure needed to thrive in the
              modern tech landscape. Through workshops, hackathons, and
              collaborative projects, we nurture the next generation of
              innovators.
            </p>
            <ul className="space-y-3 mt-4">
              <li className="flex items-center">
                <FaCheckCircle className="text-blue-600 mr-3 flex-shrink-0" />
                <span>Fostering Innovation</span>
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-blue-600 mr-3 flex-shrink-0" />
                <span>Bridging Hardware &amp; Software</span>
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-blue-600 mr-3 flex-shrink-0" />
                <span>Community Driven Learning</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Video Section */}
        <div className="mt-12">
          <a
            href={videoUrl}
            target="_blank"
            rel="noreferrer"
            className="relative block w-full max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-xl group"
          >
            {/* Thumbnail */}
            <img
              src={thumbnailUrl}
              alt="ECSC Video"
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300" />

            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center shadow-2xl transform transition-transform duration-300 group-hover:scale-110">
                <FaPlay className="text-white text-2xl ml-1" />
              </div>
            </div>

            {/* Watch Video Text */}
            <div className="absolute bottom-4 left-4 right-4 text-center">
              <span className="text-white font-semibold text-lg drop-shadow-lg">
                Watch Our Story
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
