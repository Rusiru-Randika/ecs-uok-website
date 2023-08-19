import { Link } from "react-router-dom";
import ECSCFooterLogo from "../assets/ecsc_logo_footer.png";

export default function Footer() {
  return (
    <>
      <div className="py-8 px-40 grid grid-cols-3 gap-80">
        <div>
          <img className="h-full w-full" src={ECSCFooterLogo}></img>
          <p className="text-lg font-semibold">
            &ldquo;Let&apos;s Embrace the world of Hardware and Software, to
            creat a sustainable future&ldquo;
          </p>
        </div>

        <div>
          <h1 className="text-3xl font-bold">Site Map</h1>
          <div className="mt-12">
            <Link to={"/"}>
              <p className="text-xl font-semibold mt-4">Home</p>
            </Link>
            <Link to={"/"}>
              <p className="text-xl font-semibold mt-4">Purpose</p>
            </Link>
            <Link to={"/"}>
              <p className="text-xl font-semibold mt-4">Events</p>
            </Link>
            <Link to={"/about"}>
              <p className="text-xl font-semibold mt-4">About</p>
            </Link>
            <Link to={"/contact-us"}>
              <p className="text-xl font-semibold mt-4">Contact Us</p>
            </Link>
          </div>
        </div>

        <div>
          <h1 className="text-3xl font-bold">Other Links</h1>
          <div className="mt-12">
            <Link to={"/"}>
              <p className="text-xl font-semibold mt-4">Message from Dean</p>
            </Link>
            <Link to={"/"}>
              <p className="text-xl font-semibold mt-4">Our Leadership</p>
            </Link>
            <Link to={"/"}>
              <p className="text-xl font-semibold mt-4">Recent News</p>
            </Link>
            <Link to={"/"}>
              <p className="text-xl font-semibold mt-4">Recent Events</p>
            </Link>
          </div>
        </div>
      </div>

      <hr className="mt-16" />

      <div className="flex gap-20 justify-center items-center my-6">
        <a href="www.linkedin.com">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 448 512"
            className="h-10 w-10 fill-black hover:fill-blue-700 duration-500"
          >
            <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
          </svg>
        </a>

        <a href="www.twitter.com">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 448 512"
            className="h-10 w-10 fill-black hover:fill-red-800 duration-500"
          >
            <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm297.1 84L257.3 234.6 379.4 396H283.8L209 298.1 123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5L313.6 116h47.5zM323.3 367.6L153.4 142.9H125.1L296.9 367.6h26.3z" />
          </svg>
        </a>

        <a href="www.instagram.com">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 448 512"
            className="h-10 w-10 fill-black hover:fill-pink-700 duration-500"
          >
            <path d="M224,202.66A53.34,53.34,0,1,0,277.36,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54,54,0,0,0-30.41-30.41c-21-8.29-71-6.43-94.3-6.43s-73.25-1.93-94.31,6.43a54,54,0,0,0-30.41,30.41c-8.28,21-6.43,71.05-6.43,94.33S91,329.26,99.32,350.33a54,54,0,0,0,30.41,30.41c21,8.29,71,6.43,94.31,6.43s73.24,1.93,94.3-6.43a54,54,0,0,0,30.41-30.41c8.35-21,6.43-71.05,6.43-94.33S357.1,182.74,348.75,161.67ZM224,338a82,82,0,1,1,82-82A81.9,81.9,0,0,1,224,338Zm85.38-148.3a19.14,19.14,0,1,1,19.13-19.14A19.1,19.1,0,0,1,309.42,189.74ZM400,32H48A48,48,0,0,0,0,80V432a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V80A48,48,0,0,0,400,32ZM382.88,322c-1.29,25.63-7.14,48.34-25.85,67s-41.4,24.63-67,25.85c-26.41,1.49-105.59,1.49-132,0-25.63-1.29-48.26-7.15-67-25.85s-24.63-41.42-25.85-67c-1.49-26.42-1.49-105.61,0-132,1.29-25.63,7.07-48.34,25.85-67s41.47-24.56,67-25.78c26.41-1.49,105.59-1.49,132,0,25.63,1.29,48.33,7.15,67,25.85s24.63,41.42,25.85,67.05C384.37,216.44,384.37,295.56,382.88,322Z" />
          </svg>
        </a>

        <a href="www.facebook.com">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 448 512"
            className="h-10 w-10 fill-black hover:fill-blue-500 duration-500"
          >
            <path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z" />
          </svg>
        </a>

        <a href="www.youtube.com">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 448 512"
            className="h-10 w-10 fill-black hover:fill-red-700 duration-500"
          >
            <path d="M186.8 202.1l95.2 54.1-95.2 54.1V202.1zM448 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zm-42 176.3s0-59.6-7.6-88.2c-4.2-15.8-16.5-28.2-32.2-32.4C337.9 128 224 128 224 128s-113.9 0-142.2 7.7c-15.7 4.2-28 16.6-32.2 32.4-7.6 28.5-7.6 88.2-7.6 88.2s0 59.6 7.6 88.2c4.2 15.8 16.5 27.7 32.2 31.9C110.1 384 224 384 224 384s113.9 0 142.2-7.7c15.7-4.2 28-16.1 32.2-31.9 7.6-28.5 7.6-88.1 7.6-88.1z" />
          </svg>
        </a>
      </div>

      <div className="bg-black text-white py-1 flex justify-center">
        ©Copyright 2023 by Electronics and Computer Science Club. All Rights
        Reserved.
      </div>
    </>
  );
}
