import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import WavyUnderline from "../components/common/WavyUnderline";
import BlobAnimation from "../components/common/BlobAnimation";

export default function AchievementsPage() {
  const [galleryImages, setGalleryImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetch("/data/achievements.json")
      .then((res) => res.json())
      .then((data) => setGalleryImages(data))
      .catch((err) => console.error("Failed to load achievements data:", err));
  }, []);

  return (
    <div className="bg-[#e1eaf5] min-h-screen pt-24">
      <Helmet>
        <title>Our Achievements - ECSC | University of Kelaniya</title>
        <meta
          name="description"
          content="Explore the achievements and milestones of the Electronics and Computer Science Club at the University of Kelaniya."
        />
        <link rel="canonical" href="/achievements" />
      </Helmet>

      <section className="py-16 lg:py-24 relative overflow-hidden">
        {/* Animated blob shapes */}
        <BlobAnimation
          color="blue"
          positionClass="left-0 bottom-0"
          style={{
            transform: "translate(-30%, 30%)",
            opacity: 0.3,
          }}
        />
        <BlobAnimation
          color="gold"
          positionClass="right-0 top-0"
          style={{
            transform: "translate(30%, -30%)",
            opacity: 0.3,
          }}
        />

        <style>{`
          .gallery-item-page {
            transition: all 0.3s ease;
            cursor: pointer;
          }
          .gallery-item-page:hover {
            transform: scale(1.05);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
          }
          .modal-backdrop {
            backdrop-filter: blur(8px);
          }
        `}</style>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our <WavyUnderline color="red">Achievements</WavyUnderline>
            </h1>
            <p className="text-lg text-gray-500 max-w-3xl mx-auto">
              Celebrating our milestones, victories, and memorable moments.
              Every achievement represents the dedication and passion of our
              ECSC community.
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image) => (
              <div
                key={image.id}
                onClick={() => setSelectedImage(image)}
                className="gallery-item-page bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="h-80 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center overflow-hidden">
                  <img
                    src={image.image}
                    alt={image.title}
                    className="w-full h-full object-cover object-top"
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
    </div>
  );
}
