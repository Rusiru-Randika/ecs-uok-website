import logo from "../assets/logo/ecsc_logo_load.png";

export default function Preloader() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#e1eaf5]">
      <div className="text-center">
        {/* ECSC Logo */}
        <div className="mb-2">
          <img src={logo} alt="ECSC Logo" className="w-32 h-auto mx-auto" />
        </div>

        {/* Wavy Underline */}
        <div className="relative h-4 w-36 mx-auto overflow-hidden">
          <div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 15'%3E%3Cpath d='M0 8 Q 12.5 2, 25 8 T 50 8 T 75 8 T 100 8' stroke='%232563eb' stroke-width='9' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")`,
              backgroundSize: "50px 12px",
              backgroundRepeat: "repeat-x",
              animation: "slideWave 1s linear infinite",
            }}
          />
        </div>
      </div>
      <style>{`
        @keyframes slideWave {
          0% { background-position: 0 0; }
          100% { background-position: 50px 0; }
        }
      `}</style>
    </div>
  );
}
