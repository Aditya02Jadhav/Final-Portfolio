import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";

const Hero = () => {
  return (
    <div>
      <div className="h-screen w-full flex items-center justify-center relative">
        {/* Updated to stack on mobile view */}
        <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto w-full px-6 md:px-12 space-y-8 md:space-y-0 md:space-x-10">
          {/* Left side - Text content */}
          <div className="flex flex-col items-start justify-center max-w-lg space-y-6">
            <p className="uppercase tracking-widest text-xs dark:text-blue-100">
              Unleashing digital magic with AI & Blender
            </p>

            <h1 className="text-left text-[40px] md:text-5xl lg:text-6xl font-bold">
              Hey Friends — {/* Bolder text and long dark black hyphen */}
            </h1>

            <p className="text-left md:tracking-wider text-sm md:text-lg lg:text-2xl dark:text-white text-black">
              I&apos;m Aaditya, an{" "}
              <span className="text-[#f54242] dark:text-[#f54242]">
                AI Developer
              </span>{" "}
              & part-time{" "}
              <span className="text-[#f54242] dark:text-[#f54242]">
                Content Creator
              </span>{" "}
              from India.
            </p>

            <a href="/Aaditya Resume.pdf" download="Aaditya_Resume.pdf">
              <MagicButton
                title="Download My Resume"
                icon={<FaLocationArrow />}
                position="right"
                className="text-[#f54242] dark:text-[#f54242] border-[#f54242] dark:border-[#f54242] hover:bg-[#f54242] hover:text-white dark:hover:bg-[#f54242] dark:hover:text-black"
              />
            </a>
          </div>

          {/* Right side - Image */}
          <div className="flex items-center justify-center">
            <img
              src="/Profile Photo.jpg"
              alt="Aaditya"
              className="w-[320px] h-[320px] rounded-[12px] object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
