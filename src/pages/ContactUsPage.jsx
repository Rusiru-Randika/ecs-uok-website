import ContactUsCard from "../components/ContactUsCard";
import GoogleMap from "../components/GoogleMap";
import ECSCLogo from "../assets/ecsc_logo.png";
import ContactUsPhoto from "../assets/members/chamith_contact.jpg";
import ContactUsForm from "../components/ContactUsForm";
import { Helmet } from "react-helmet-async";
import { HeadphonesIcon } from "../assets/Icon";

export default function ContactUsPage() {
  return (
    <div>
      <Helmet>
        <title>Contact Us - Electronics and Computer Science Club</title>
        <meta
          name="description"
          content="Stay updated with our tech-related activities and events."
        />
        <link rel="canonical" href="/contact-us" />
      </Helmet>
      <div className="bg-primary py-12 px-48">
        <div className="flex gap-6">
          <span className="text-white text-5xl font-bold">Connect With Us</span>
          <HeadphonesIcon />
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
    </div>
  );
}
