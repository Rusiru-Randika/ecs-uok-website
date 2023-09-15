import PropTypes from "prop-types";
import { FaEnvelope, FaUser, FaRankingStar } from "react-icons/fa6";

export default function MemberCard({
  member_photo,
  member_role,
  member_name,
  member_linkedinUrl,
  member_email,
}) {
  return (
    <div className="flex flex-col md:flex-row md:max-h-[180px] rounded-2xl drop-shadow-md bg-white md:gap-4">
      <div className="h-full">
        <img
          src={member_photo}
          alt={`${member_role} image`}
          className="h-full object-contain rounded-t-2xl md:rounded-l-2xl md:rounded-r-none"
        />
      </div>
      <div className="flex flex-col gap-2 mx-auto md:mx-0 md:justify-center my-4 text-secondary text-base md:text-lg font-semibold">
        <div className="flex gap-4 items-center">
          <FaUser color="#0065AD" />
          <a href={member_linkedinUrl} target="_blank" rel="noreferrer">
            {member_name}
          </a>
        </div>
        <div className="flex gap-4 items-center">
          <FaRankingStar color="#0065AD" />
          <p>{member_role}</p>
        </div>
        <div className="flex gap-4 items-center">
          <FaEnvelope color="#0065AD" />
          <p>{member_email}</p>
        </div>
      </div>
    </div>
  );
}

MemberCard.propTypes = {
  member_role: PropTypes.string.isRequired,
  member_name: PropTypes.string.isRequired,
  member_photo: PropTypes.string.isRequired,
  member_linkedinUrl: PropTypes.string,
  member_email: PropTypes.string.isRequired,
};
