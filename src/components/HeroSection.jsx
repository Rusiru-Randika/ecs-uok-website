import { useState, useEffect } from "react";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative bg-[#e1eaf5] min-h-screen overflow-hidden flex items-center pt-20">
      {/* CSS Animation Keyframes */}
      <style>{`
        @keyframes morphShape {
          0% {
            border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
          }
          25% {
            border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
          }
          50% {
            border-radius: 50% 60% 30% 60% / 30% 40% 70% 60%;
          }
          75% {
            border-radius: 60% 40% 60% 30% / 70% 30% 40% 60%;
          }
          100% {
            border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
          }
        }
        
        .animated-blob {
          animation: morphShape 8s ease-in-out infinite;
          background: #0a42bdff;
        }
        
        .wavy-underline {
          position: relative;
          display: inline-block;
        }
        
        @keyframes waveMove {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 50px 0;
          }
        }
        
        .wavy-underline::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -6px;
          width: 100%;
          height: 12px;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 15'%3E%3Cpath d='M0 8 Q 12.5 2, 25 8 T 50 8 T 75 8 T 100 8' stroke='%23dc2626' stroke-width='9' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");
          background-size: 50px 12px;
          background-repeat: repeat-x;
          animation: waveMove 3s linear infinite;
        }
        
        @keyframes bounceUp {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .swipe-up-icon {
          animation: bounceUp 1.5s ease-in-out infinite;
        }
      `}</style>

      {/* Decorative background blur */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-72 h-72 bg-red-50 rounded-full blur-3xl opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column: Content */}
          <div
            className={`relative text-center lg:text-left space-y-8 z-10 transform transition-all duration-1000 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-10 opacity-0"
            }`}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 leading-[1.2]">
              Let's Embrace the world of{" "}
              <span className="text-blue-800 wavy-underline">Hardware</span> and{" "}
              <span className="text-blue-800 wavy-underline">Software</span>, to
              create a sustainable future
            </h1>

            <p className="text-lg text-gray-600 max-w-2xl mx-auto lg:mx-0">
              Join the premier Electronics and Computer Science Club at the
              University of Kelaniya. We build, we code, and we innovate
              together.
            </p>

            {/* Swipe Up Indicator */}
            <a
              href="#about"
              className="inline-flex flex-col items-center gap-2 text-gray-500 hover:text-blue-600 transition-colors cursor-pointer group mt-20"
            >
              <div className="swipe-up-icon flex flex-col items-center">
                <svg
                  className="w-8 h-8 rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </div>
              <span className="text-sm font-medium tracking-wide uppercase">
                Swipe Up to Explore
              </span>
            </a>
          </div>

          {/* Right Column: Image with Blob Shape */}
          <div
            className={`relative flex justify-center lg:justify-end transform transition-all duration-1000 delay-300 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0"
            }`}
          >
            {/* Animated decorative blob behind image */}
            <div className="animated-blob absolute w-[350px] h-[350px] md:w-[420px] md:h-[420px] lg:w-[480px] lg:h-[480px] -right-16 md:-right-20 lg:-right-24 top-1/2 -translate-y-1/2 z-0" />

            {/* Image Container with Blob Shape */}
            <div
              className="relative w-full max-w-md aspect-square shadow-2xl bg-gray-100 z-10 overflow-hidden transition-all duration-500 hover:shadow-3xl"
              style={{
                borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
              }}
            >
              <img
                src="/images/hero_image.jpg"
                alt="ECSC Students working together"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
