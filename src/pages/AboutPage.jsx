import { Helmet } from "react-helmet-async";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>About - Electronics and Computer Science Club</title>
        <meta
          name="description"
          content="Learn more about the Electronics and Computer Science Club at the University of Kelaniya."
        />
        <link rel="canonical" href="/about" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">About ECSC</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-4">
            The Electronics and Computer Science Club (ECSC) is a dynamic
            student organization at the University of Kelaniya, dedicated to
            fostering innovation, creativity, and technical excellence among
            students passionate about electronics and computer science.
          </p>
          <p className="text-gray-600 mb-4">
            Our club provides a platform for students to explore emerging
            technologies, develop practical skills, and collaborate on exciting
            projects. Through workshops, competitions, and events, we aim to
            bridge the gap between theoretical knowledge and real-world
            applications.
          </p>
          <p className="text-gray-600">
            Join us to be part of a vibrant community that builds, codes, and
            innovates together!
          </p>
        </div>
      </div>
    </div>
  );
}
