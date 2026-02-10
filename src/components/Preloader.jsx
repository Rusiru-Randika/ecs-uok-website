import logo from "../assets/logo/ecsc_logo_load.png";
import WavyUnderline from "./common/WavyUnderline";

export default function Preloader() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#e1eaf5]">
      <div className="text-center">
        {/* ECSC Logo */}
        <div className="mb-2">
          <img src={logo} alt="ECSC Logo" className="w-32 h-auto mx-auto" />
        </div>

        {/* Wavy Underline */}
        <div className="relative h-4 w-36 mx-auto">
          <WavyUnderline color="blue" />
        </div>
      </div>
    </div>
  );
}
