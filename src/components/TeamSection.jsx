import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function TeamSection() {
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    fetch("/data/team.json")
      .then((res) => res.json())
      .then((data) => setTeamMembers(data.slice(0, 4)))
      .catch((err) => console.error("Failed to load team data:", err));
  }, []);

  return (
    <section className="py-16 lg:py-24 bg-white scroll-mt-20" id="team">
      {/* Wavy underline animation */}
      <style>{`
        .wavy-underline-team {
          position: relative;
          display: inline-block;
        }
        @keyframes waveMoveTeam {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 50px 0;
          }
        }
        .wavy-underline-team::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -8px;
          width: 100%;
          height: 12px;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 15'%3E%3Cpath d='M0 8 Q 12.5 2, 25 8 T 50 8 T 75 8 T 100 8' stroke='%23dc2626' stroke-width='9' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");
          background-size: 50px 12px;
          background-repeat: repeat-x;
          animation: waveMoveTeam 3s linear infinite;
        }
        
        .team-card {
          transition: all 0.3s ease;
        }
        .team-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet Our <span className="wavy-underline-team">Team</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            The passionate individuals driving innovation and excellence at
            ECSC.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="team-card bg-white rounded-2xl shadow-lg border-2 border-gray-100 overflow-hidden"
            >
              {/* Member Image */}
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 h-64 flex items-center justify-center overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.parentElement.innerHTML = `<div class="w-24 h-24 rounded-full bg-blue-600 flex items-center justify-center text-white text-3xl font-bold">${member.name.charAt(0)}</div>`;
                  }}
                />
              </div>

              {/* Member Info */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium">{member.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            to="/team"
            className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
          >
            View All Team Members
          </Link>
        </div>
      </div>
    </section>
  );
}
