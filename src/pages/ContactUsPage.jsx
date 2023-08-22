import ContactUsCard from "../components/ContactUsCard";
import GoogleMap from "../components/GoogleMap";
import ECSCLogo from "../assets/ecsc_logo.png";
import ContactUsPhoto from "../assets/members/chamith_contact.jpg";
import ContactUsForm from "../components/ContactUsForm";

export default function ContactUsPage() {
  return (
    <>
      <div className="bg-primary py-12 px-48 mt-20">
        <div className="flex gap-6">
          <span className="text-white text-5xl font-bold">Connect With Us</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 512 512"
            className="h-12 w-12 fill-white"
          >
            <path d="M256 48C141.1 48 48 141.1 48 256v40c0 13.3-10.7 24-24 24s-24-10.7-24-24V256C0 114.6 114.6 0 256 0S512 114.6 512 256V400.1c0 48.6-39.4 88-88.1 88L313.6 488c-8.3 14.3-23.8 24-41.6 24H240c-26.5 0-48-21.5-48-48s21.5-48 48-48h32c17.8 0 33.3 9.7 41.6 24l110.4 .1c22.1 0 40-17.9 40-40V256c0-114.9-93.1-208-208-208zM144 208h16c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H144c-35.3 0-64-28.7-64-64V272c0-35.3 28.7-64 64-64zm224 0c35.3 0 64 28.7 64 64v48c0 35.3-28.7 64-64 64H352c-17.7 0-32-14.3-32-32V240c0-17.7 14.3-32 32-32h16z" />
          </svg>
        </div>
        <div className="mt-4 w-2/5">
          <p className="text-lg text-white font-medium">
            If you are interested on Electronics or Computer Science or both, we
            are more than happy to help you out. Or else if you need to clarify
            your doubts regarding the degree program, we are always here.
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center bg-gray-100 py-8 gap-40">
        <div className="">
          <ContactUsCard
            image={ECSCLogo}
            linkType="mailto:"
            text="ecs.uok@gmail.com"
          />
          <ContactUsCard
            image={ContactUsPhoto}
            name="Chamith Dilshan"
            linkType="tel:"
            text="+94782563766"
          />

          <GoogleMap />
        </div>

        <div>
          <ContactUsForm />
        </div>
      </div>
    </>
  );
}
