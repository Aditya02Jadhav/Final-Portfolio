import { FaLocationArrow } from "react-icons/fa6";
import { MagneticButton } from "@/components/MagneticButton/index";
import Image from "next/image";

const Hero = () => {
  return (
    <div>
      <div
        className="h-screen w-full flex items-center justify-center relative bg-[#f1f1f1]"
        style={{
          width: "100vw",
          marginLeft: "calc(-50vw + 50%)",
          // backgroundImage: "url('/background-image.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto w-full px-6 md:px-12 space-y-8 md:space-y-0 md:space-x-10">
          <div className="flex flex-col items-start justify-center max-w-lg space-y-6">
            <p className="uppercase tracking-widest text-xs dark:text-blue-100">
              Unleashing digital magic with AI & Blender
            </p>

            <h1 className="text-left text-[40px] md:text-5xl lg:text-6xl font-bold">
              Hey Friends —
            </h1>

            <p className="text-left md:tracking-wider text-sm md:text-lg lg:text-2xl dark:text-white text-black">
              I&apos;m Aaditya, an{" "}
              <span className="text-[#fC423D] dark:text-[#f54242]">
                AI Developer
              </span>{" "}
              &amp; part-time{" "}
              <span className="text-[#fC423D] dark:text-[#f54242]">
                Content Creator
              </span>{" "}
              from India.
            </p>

            <a href="/Aaditya_Resume.pdf" download="Aaditya_Resume.pdf">
              <MagneticButton
                variant="custom" // use the custom variant
                size="lg"
              >
                Download <br /> Resume
              </MagneticButton>
            </a>
          </div>

          <div className="flex items-center justify-center">
            <Image
              src="/Linkedin Profile Photo.png"
              alt="Aaditya"
              className="w-[400px] h-[400px] rounded-[12px] object-cover"
              width={500} 
              height={300}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;



// import { FaLocationArrow } from "react-icons/fa6";
// import { MagneticButton } from "@/components/MagneticButton/index";

// const Hero = () => {
//   return (
//     <div>
//       <div
//         className="h-screen w-full flex items-center justify-center relative bg-[#f1f1f1]"
//         style={{
//           width: "100vw",
//           marginLeft: "calc(-50vw + 50%)",
//           backgroundImage: "url('/path/to/your/background-image.jpg')",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           backgroundBlendMode: "overlay"
//         }}
//       >
//         <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto w-full px-6 md:px-12 space-y-8 md:space-y-0 md:space-x-10">
//           <div className="flex flex-col items-start justify-center max-w-lg space-y-6">
//             <p className="uppercase tracking-widest text-xs dark:text-blue-100">
//               Unleashing digital magic with AI & Blender
//             </p>

//             <h1 className="text-left text-[40px] md:text-5xl lg:text-6xl font-bold">
//               Hey Friends —
//             </h1>

//             <p className="text-left md:tracking-wider text-sm md:text-lg lg:text-2xl dark:text-white text-black">
//               I'm Aaditya, an{" "}
//               <span className="text-[#fC423D] dark:text-[#f54242]">
//                 AI Developer
//               </span>{" "}
//               & part-time{" "}
//               <span className="text-[#fC423D] dark:text-[#f54242]">
//                 Content Creator
//               </span>{" "}
//               from India.
//             </p>

//             <a href="/Aaditya Resume.pdf" download="Aaditya_Resume.pdf">
//               <MagneticButton
//                 variant="custom" // use the custom variant
//                 size="lg"
//               >
//                 Download <br /> Resume
//               </MagneticButton>
//             </a>
//           </div>

//           <div className="flex items-center justify-center">
//             <img
//               src="/Linkedin Profile Photo.png"
//               alt="Aaditya"
//               className="w-[400px] h-[400px] rounded-[12px] object-cover"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;
