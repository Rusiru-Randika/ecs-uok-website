import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

export default function TeamPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const allTeamMembers = [
    {
      id: 1,
      name: "John Doe",
      role: "President",
      image: "/images/team/member1.jpg",
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "Vice President",
      image: "/images/team/member2.jpg",
    },
    {
      id: 3,
      name: "Mike Johnson",
      role: "Secretary",
      image: "/images/team/member3.jpg",
    },
    {
      id: 4,
      name: "Sarah Williams",
      role: "Treasurer",
      image: "/images/team/member4.jpg",
    },
    {
      id: 5,
      name: "David Brown",
      role: "Technical Lead",
      image: "/images/team/member5.jpg",
    },
    {
      id: 6,
      name: "Emily Davis",
      role: "Events Coordinator",
      image: "/images/team/member6.jpg",
    },
    {
      id: 7,
      name: "Chris Wilson",
      role: "Media Manager",
      image: "/images/team/member7.jpg",
    },
    {
      id: 8,
      name: "Lisa Anderson",
      role: "Community Outreach",
      image: "/images/team/member8.jpg",
    },
  ];

  return (
    <div className="bg-white min-h-screen pt-24">
      <Helmet>
        <title>Our Team - ECSC | University of Kelaniya</title>
        <meta
          name="description"
          content="Meet the dedicated team members of the Electronics and Computer Science Club at the University of Kelaniya."
        />
        <link rel="canonical" href="/team" />
      </Helmet>

      <section className="py-16 lg:py-24 bg-white">
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
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Meet Our <span className="wavy-underline-team">Team</span>
            </h1>
            <p className="text-lg text-gray-500 max-w-3xl mx-auto">
              The passionate individuals driving innovation and excellence at
              ECSC. Our team works tirelessly to create opportunities for
              learning, collaboration, and growth in the tech community.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {allTeamMembers.map((member) => (
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
                      e.target.parentElement.innerHTML = `<div class="w-24 h-24 rounded-full bg-blue-600 flex items-center justify-center text-white text-3xl font-bold">${member.name.charAt(
                        0,
                      )}</div>`;
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
        </div>
      </section>
    </div>
  );
}
