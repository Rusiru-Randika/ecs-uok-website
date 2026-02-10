import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function AchievementsSection() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [galleryImages, setGalleryImages] = useState([]);

  useEffect(() => {
    fetch("/data/achievements.json")
      .then((res) => res.json())
      .then((data) => setGalleryImages(data.slice(0, 3)))
      .catch((err) => console.error("Failed to load achievements data:", err));
  }, []);

  return (
    <section
      className="py-16 lg:py-24 bg-[#e1eaf5] scroll-mt-20 relative overflow-hidden"
      id="achievements"
    >
      {/* Animated blob shapes */}
      {/* Blue blob - bottom left */}
      <div
        className="absolute left-0 bottom-0 w-[400px] h-[400px] opacity-30 pointer-events-none hidden md:block"
        style={{
          background: "rgba(59, 130, 246, 0.4)",
          borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
          animation: "morphBlobAch1 8s ease-in-out infinite",
          transform: "translate(-30%, 30%)",
        }}
      />
      {/* Gold blob - top right */}
      <div
        className="absolute right-0 top-0 w-[400px] h-[400px] opacity-30 pointer-events-none hidden md:block"
        style={{
          background: "rgba(234, 179, 8, 0.4)",
          borderRadius: "30% 60% 70% 40% / 50% 60% 30% 60%",
          animation: "morphBlobAch2 8s ease-in-out infinite",
          transform: "translate(30%, -30%)",
        }}
      />
      {/* Wavy underline animation */}
      <style>{`
        .wavy-underline-achievements {
          position: relative;
          display: inline-block;
        }
        @keyframes waveMoveAchievements {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 50px 0;
          }
        }
        .wavy-underline-achievements::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -8px;
          width: 100%;
          height: 12px;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 15'%3E%3Cpath d='M0 8 Q 12.5 2, 25 8 T 50 8 T 75 8 T 100 8' stroke='%23dc2626' stroke-width='9' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");
          background-size: 50px 12px;
          background-repeat: repeat-x;
          animation: waveMoveAchievements 3s linear infinite;
        }
        
        .gallery-item {
          transition: all 0.3s ease;
          cursor: pointer;
        }
        .gallery-item:hover {
          transform: scale(1.05);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }
        
        .modal-backdrop {
          backdrop-filter: blur(8px);
        }
        
        @keyframes morphBlobAch1 {
          0% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
          25% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
          50% { border-radius: 50% 60% 30% 60% / 30% 40% 70% 60%; }
          75% { border-radius: 60% 40% 60% 30% / 70% 30% 40% 60%; }
          100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
        }
        
        @keyframes morphBlobAch2 {
          0% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
          25% { border-radius: 50% 60% 30% 60% / 30% 40% 70% 60%; }
          50% { border-radius: 60% 40% 60% 30% / 70% 30% 40% 60%; }
          75% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
          100% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our{" "}
            <span className="wavy-underline-achievements">Achievements</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Celebrating our milestones and memorable moments.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              onClick={() => setSelectedImage(image)}
              className="gallery-item bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="h-64 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center overflow-hidden">
                <img
                  src={image.image}
                  alt={image.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.parentElement.innerHTML = `<div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100"><div class="text-center p-6"><div class="text-4xl mb-2">🏆</div><div class="text-gray-600 font-semibold">${image.title}</div></div></div>`;
                  }}
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  {image.title}
                </h3>
                <p className="text-sm text-gray-600">{image.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            to="/achievements"
            className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
          >
            View All Achievements
          </Link>
        </div>
      </div>

      {/* Modal for full image view */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75 modal-backdrop"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
            >
              <svg
                className="w-6 h-6 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Image */}
            <div className="bg-gray-100">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[70vh] object-contain"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.parentElement.innerHTML = `<div class="w-full h-96 flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100"><div class="text-center p-8"><div class="text-6xl mb-4">🏆</div><div class="text-2xl text-gray-700 font-bold">${selectedImage.title}</div></div></div>`;
                }}
              />
            </div>

            {/* Image details */}
            <div className="p-6 bg-white">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {selectedImage.title}
              </h3>
              <p className="text-gray-600">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
