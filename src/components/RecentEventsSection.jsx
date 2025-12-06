import { FaNewspaper } from "react-icons/fa6";
// import FacebookFeed from "./FacebookFeed";
import { useEffect } from "react";

export default function RecentEventsSection() {
  useEffect(() => {
    // Load the Elfsight script dynamically
    const script = document.createElement("script");
    script.src = "https://elfsightcdn.com/platform.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount if necessary
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <>
      <div className="bg-primary py-6 md:py-12 mt-8 px-10 w-full md:px-48 transition-all duration-1000">
        <div className="flex items-center gap-2 md:gap-4 text-white">
          <FaNewspaper className="w-6 h-8 md:w-8 md:h-10" />
          <span className="text-white text-3xl md:text-4xl">
            Latest Updates
          </span>
        </div>
        <div className="text-base md:text-lg text-white pt-2">
          Latest news, recent events and upcoming events
        </div>
      </div>
      <div className="w-full flex justify-center my-8 px-16">
        <div className="w-full">
          <div
            className="elfsight-app-80ce087a-7296-4bf6-889d-6b488cec4074"
            data-elfsight-app-lazy
          ></div>
        </div>
      </div>
    </>
  );
}
