import { FaTrophy } from "react-icons/fa";

export default function AchievementsSection() {
  const achievements = [
    {
      id: 1,
      title: "National CTF Champions",
      description: "Consistently ranking top across island-wide competitions.",
    },
    {
      id: 2,
      title: "Best Hardware Project Award",
      description: "Awarded for innovation in embedded systems design.",
    },
    {
      id: 3,
      title: "200+ Active Members",
      description: "A growing family of tech enthusiasts and innovators.",
    },
    {
      id: 4,
      title: "Top Tech Club 2023",
      description: "Recognized for outstanding contribution to student life.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <h2 className="text-3xl font-bold text-center mb-16 tracking-wide uppercase text-gray-900">
          Our Achievements
        </h2>

        {/* Achievements Layout */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-center">
          {/* Left achievements */}
          <div className="flex flex-col md:flex-row gap-8">
            {achievements.slice(0, 2).map((achievement) => (
              <div key={achievement.id} className="max-w-[200px]">
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  {achievement.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>

          {/* Trophy Icon */}
          <div className="text-6xl text-yellow-500 mx-8">
            <FaTrophy />
          </div>

          {/* Right achievements */}
          <div className="flex flex-col md:flex-row gap-8">
            {achievements.slice(2, 4).map((achievement) => (
              <div key={achievement.id} className="max-w-[200px]">
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  {achievement.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
