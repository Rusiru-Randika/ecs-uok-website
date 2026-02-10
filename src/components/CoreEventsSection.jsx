export default function CoreEventsSection() {
  const events = [
    {
      id: 1,
      title: "UOK Robot Battles",
      description:
        "An intense competition where engineering meets creativity. Students design, build, and program autonomous and manual robots to compete in various arena challenges. Test your hardware skills in the ultimate showdown.",
      image: "/images/robot-battles.jpg",
      link: "https://robotbattles.ecsc-uok.com/",
      color: "purple",
    },
    {
      id: 2,
      title: "Medusa - Inter University CTF",
      description:
        "Sri Lanka's premier Capture The Flag competition organized by ECSC. A grueling test of cybersecurity skills involving cryptography, reverse engineering, web exploitation, and forensics.",
      image: "/images/medusa.jpg",
      link: "https://medusa.ecsc-uok.com/",
      color: "green",
    },
  ];

  return (
    <section
      className="py-16 lg:py-24 bg-[#e1eaf5] scroll-mt-20 relative overflow-hidden"
      id="events"
    >
      {/* Animated blob shapes at section corners */}
      {/* Purple blob - top left */}
      <div
        className="absolute left-0 top-0 w-[400px] h-[400px] opacity-30 pointer-events-none hidden md:block"
        style={{
          background: "rgba(127, 0, 247, 0.4)",
          borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
          animation: "morphBlob1 8s ease-in-out infinite",
          transform: "translate(-30%, -30%)",
        }}
      />
      {/* Green blob - bottom right */}
      <div
        className="absolute right-0 bottom-0 w-[400px] h-[400px] opacity-30 pointer-events-none hidden md:block"
        style={{
          background: "rgba(34, 197, 94, 0.4)",
          borderRadius: "30% 60% 70% 40% / 50% 60% 30% 60%",
          animation: "morphBlob2 8s ease-in-out infinite",
          transform: "translate(30%, 30%)",
        }}
      />

      {/* Neon glow styles */}
      <style>{`
        .event-card {
          transition: all 0.3s ease;
        }
        .event-card-purple:hover {
          transform: translateY(-8px);
          box-shadow: 0 0 20px rgba(147, 51, 234, 0.4), 
                      0 0 40px rgba(147, 51, 234, 0.2),
                      0 0 60px rgba(147, 51, 234, 0.1);
          border-color: rgba(147, 51, 234, 0.6);
        }
        .event-card-green:hover {
          transform: translateY(-8px);
          box-shadow: 0 0 20px rgba(34, 197, 94, 0.4), 
                      0 0 40px rgba(34, 197, 94, 0.2),
                      0 0 60px rgba(34, 197, 94, 0.1);
          border-color: rgba(34, 197, 94, 0.6);
        }
        .wavy-underline-core {
          position: relative;
          display: inline-block;
        }
        @keyframes waveMoveCore {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 50px 0;
          }
        }
        .wavy-underline-core::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -8px;
          width: 100%;
          height: 12px;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 15'%3E%3Cpath d='M0 8 Q 12.5 2, 25 8 T 50 8 T 75 8 T 100 8' stroke='%23dc2626' stroke-width='9' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");
          background-size: 50px 12px;
          background-repeat: repeat-x;
          animation: waveMoveCore 3s linear infinite;
        }
        
        @keyframes morphBlob1 {
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
        
        @keyframes morphBlob2 {
          0% {
            border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
          }
          25% {
            border-radius: 50% 60% 30% 60% / 30% 40% 70% 60%;
          }
          50% {
            border-radius: 60% 40% 60% 30% / 70% 30% 40% 60%;
          }
          75% {
            border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
          }
          100% {
            border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
          }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Main <span className="wavy-underline-core">Events</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Discover the competitions and gatherings that define our academic
            year.
          </p>
        </div>

        {/* Event Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {events.map((event) => (
            <article
              key={event.id}
              className={`event-card event-card-${event.color} bg-white rounded-2xl shadow-lg border-2 border-gray-100 overflow-hidden flex flex-col h-full relative z-10`}
            >
              {/* Image Area */}
              <div className="bg-gray-100 h-48 flex items-center justify-center overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {event.title}
                </h3>
                <p className="text-gray-600 mb-6 flex-grow">
                  {event.description}
                </p>
                <a
                  href={event.link}
                  target="_blank"
                  rel="noreferrer"
                  className={`w-full inline-block text-center px-6 py-3 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg border-0 ${
                    event.color === "purple"
                      ? "bg-purple-600 hover:bg-purple-700"
                      : "bg-green-600 hover:bg-green-700"
                  }`}
                >
                  View Event Details
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
