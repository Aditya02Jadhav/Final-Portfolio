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



// import { FaLocationArrow } from "react-icons/fa6";
// import MagicButton from "./MagicButton";
// import { TextGenerateEffect } from "./ui/TextGenerateEffect";

// const Hero = () => {
//   return (
//     <div className="pb-20 pt-36">
//       <div
//         className="h-screen w-full absolute top-0 left-0 flex items-center justify-center"
//       >
//         <div
//           className="absolute pointer-events-none inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
//         />
//       </div>

//       <div className="flex justify-center relative my-20 z-10">
//         <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
//           <p className="uppercase tracking-widest text-xs text-center max-w-90 dark:text-blue-100">
//             Unleashing digital magic with AI & Blender
//           </p>

//           <TextGenerateEffect
//             words="Bringing Ideas to Life with Cutting-Edge Technology"
//             className="text-center text-[40px] md:text-5xl lg:text-6xl"
//           />

//           <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl dark:text-white text-black">
//             Hi! I&apos;m Aaditya, an AI Developer & Content Creation Enthusiast based in India.
//           </p>

//           <a href="/Aaditya Resume.pdf" download="Aaditya_Resume.pdf">
//             <MagicButton
//               title="Download My Resume"
//               icon={<FaLocationArrow />}
//               position="right"
//             />
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;


// correct below with modified from youtube with dark mode only
// import { FaLocationArrow } from "react-icons/fa6";
// import MagicButton from "./MagicButton";
// // import { Spotlight } from "./ui/Spotlight";
// import { TextGenerateEffect } from "./ui/TextGenerateEffect";

// const Hero = () => {
//   return (
//     <div className="pb-20 pt-36">
//       {/**
//        *  UI: grid
//        *  change bg color to bg-black-100 and reduce grid color from
//        *  0.2 to 0.03
//        */}
//       <div
//         className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
//        absolute top-0 left-0 flex items-center justify-center"
//       >
//         {/* Radial gradient for the container to give a faded look */}
//         <div
//           // chnage the bg to bg-black-100, so it matches the bg color and will blend in
//           className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
//          bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
//         />
//       </div>

//       <div className="flex justify-center relative my-20 z-10">
//         <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
//           <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-90">
//            Unleashing digital magic with AI & Blender
//           </p>

//           {/**
//            *  Link: https://ui.aceternity.com/components/text-generate-effect
//            *
//            *  change md:text-6xl, add more responsive code
//            */}
//           <TextGenerateEffect
//             words="Bringing Ideas to Life with Cutting-Edge Technology"
//             className="text-center text-[40px] md:text-5xl lg:text-6xl"
//           />

//           <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2.1xl">
//             Hi! I&apos;m Aaditya, an AI Developer & Content Creation Enthusiast based in India.
//           </p>

//           <a href="/Aaditya Resume.pdf" download="Aaditya_Resume.pdf">
//             <MagicButton
//               title="Download My Resume"
//               icon={<FaLocationArrow />}
//               position="right"
//             />
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;







// Correct Code Below
// import { FaLocationArrow } from "react-icons/fa6";
// import MagicButton from "./MagicButton";
// import { Spotlight } from "./ui/Spotlight";
// import { TextGenerateEffect } from "./ui/TextGenerateEffect";

// const Hero = () => {
//   return (
//     <div className="pb-20 pt-36">
//       {/**
//        *  UI: Spotlights
//        *  Link: https://ui.aceternity.com/components/spotlight
//        */}
//       <div>
//         <Spotlight
//           className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
//           fill="white"
//         />
//         <Spotlight
//           className="h-[80vh] w-[50vw] top-10 left-full"
//           fill="purple"
//         />
//         <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
//       </div>

//       {/**
//        *  UI: grid
//        *  change bg color to bg-black-100 and reduce grid color from
//        *  0.2 to 0.03
//        */}
//       <div
//         className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
//        absolute top-0 left-0 flex items-center justify-center"
//       >
//         {/* Radial gradient for the container to give a faded look */}
//         <div
//           // chnage the bg to bg-black-100, so it matches the bg color and will blend in
//           className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
//          bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
//         />
//       </div>

//       <div className="flex justify-center relative my-20 z-10">
//         <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
//           <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-90">
//            Unleashing digital magic with AI & Blender
//           </p>

//           {/**
//            *  Link: https://ui.aceternity.com/components/text-generate-effect
//            *
//            *  change md:text-6xl, add more responsive code
//            */}
//           <TextGenerateEffect
//             words="Bringing Ideas to Life with Cutting-Edge Technology"
//             className="text-center text-[40px] md:text-5xl lg:text-6xl"
//           />

//           <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2.1xl">
//             Hi! I&apos;m Aaditya, an AI Developer & Content Creation Enthusiast based in India.
//           </p>

//           <a href="#about">
//             <MagicButton
//               title="Download My Resume"
//               icon={<FaLocationArrow />}
//               position="right"
//             />
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;