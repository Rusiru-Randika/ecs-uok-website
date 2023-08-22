import AboutHeaderImage from "../assets/about_header.jpg";

export default function AboutECS() {
  return (
    <div className="bg-gray-100 p-12" id="aboutusPage">
      <h1 className="text-5xl font-bold font-sans text-center">
        Electronics and Computer Science Club
      </h1>
      <img
        className="mt-8 w-full h-[360px] object-cover"
        loading="lazy"
        src={AboutHeaderImage}
      />
      <div className="text-xl font-semibold">
        <p className="my-6">
          Electronics and Computer Science Club was established by the
          undergraduates of the degree program of BSc (Hons) in Electronics and
          Computer Science. All the undergraduates of the particular degree
          program are having the membership of the club. Mainly, this degree
          program of BSc (Hons)in Electronics and Computer Science is offering
          by the Department of Electronics, Department of Computer Science and
          Department of Mathematics.
        </p>
        <p className="my-6">
          The Department of Physics at the University of Kelaniya, established
          in 1967, is one of eight departments in the Faculty of Science. It has
          continuously updated academic programs and improved lab facilities. In
          2019, it was renamed the Department of Physics and Electronics.
          Similarly, the Department of Statistics & Computer Science was founded
          in 1999 to address growing education needs in those fields. The
          Department of Mathematics has been teaching since the
          university&apos;s inception in 1959, formally establishing in 1967
          under the Faculty of Science, offering both Pure and Applied
          Mathematics for the Bachelor of Science degree.
        </p>
        <p className="my-6">
          As the degree program Electronics and Computer Science initially
          started recently (in the year 2022 for 2020 A/L students), this club
          will be a great platform to increase the visibility of our
          undergraduates.
          <br />
          We are here to generate more ideas to the industry through our members
          and to make a great bond with the industry. Through our club, we wish
          to improve the skills of our undergraduates through workshop series,
          Robotic Battle Competitions and Electronics and Computer Science based
          competitions.
        </p>
      </div>
    </div>
  );
}
