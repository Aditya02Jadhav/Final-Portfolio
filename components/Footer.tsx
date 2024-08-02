//Correct code
import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pb-10 mb-[100px] md:mb-5" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Looking for a passionate <span className="text-purple">AI Developer and Content Creator</span> to join your team? 
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Let&apos;s connect and explore how I can contribute to your projects.
        </p>
        <a href="mailto:avjadhav489@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <div className="md:text-base text-sm md:font-normal font-light mb-4 md:mb-0">
          <p>Copyright © 2024 Aaditya Jadhav</p>
        </div>
        <div className="flex items-center md:gap-3 gap-6 mt-4 md:mt-0">
          {socialMedia.map((info) => (
            <a 
              key={info.id} 
              href={info.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;






// import { useState } from 'react';
// import emailjs from 'emailjs-com';
// import { FaLocationArrow } from "react-icons/fa6";
// import { socialMedia } from "@/data";
// import MagicButton from "./MagicButton";

// const Footer = () => {
//   const [formData, setFormData] = useState({
//     user_name: '',
//     user_email: '',
//     message: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData, 'YOUR_USER_ID')
//       .then((result) => {
//         console.log(result.text);
//         alert("Message sent successfully!");
//       }, (error) => {
//         console.log(error.text);
//         alert("Failed to send the message. Please try again later.");
//       });
//   };

//   return (
//     <footer className="w-full pt-20 pb-10" id="contact">
//       {/* background grid */}
//       <div className="w-full absolute left-0 -bottom-72 min-h-96">
//         <img
//           src="/footer-grid.svg"
//           alt="grid"
//           className="w-full h-full opacity-50 "
//         />
//       </div>

//       <div className="flex flex-col items-center">
//         <h1 className="heading lg:max-w-[45vw]">
//           Looking for a passionate <span className="text-purple">AI Developer and Content Creator</span> to join your team? 
//         </h1>
//         <p className="text-white-200 md:mt-10 my-5 text-center">
//           Let&apos;s connect and explore how I can contribute to your projects.
//         </p>
//         <form onSubmit={handleSubmit} className="flex flex-col items-center w-full max-w-md mt-8">
//           <input
//             type="text"
//             name="user_name"
//             placeholder="Your Name"
//             value={formData.user_name}
//             onChange={handleChange}
//             className="w-full p-2 mb-4 rounded-md"
//             required
//           />
//           <input
//             type="email"
//             name="user_email"
//             placeholder="Your Email"
//             value={formData.user_email}
//             onChange={handleChange}
//             className="w-full p-2 mb-4 rounded-md"
//             required
//           />
//           <textarea
//             name="message"
//             placeholder="Your Message"
//             value={formData.message}
//             onChange={handleChange}
//             className="w-full p-2 mb-4 rounded-md"
//             rows="4"
//             required
//           />
//           <button type="submit" className="btn-primary">
//             Send Message
//           </button>
//         </form>
//       </div>
//       <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
//         <p className="md:text-base text-sm md:font-normal font-light">
//           Copyright © 2024 Aaditya Jadhav
//         </p>

//         <div className="flex items-center md:gap-3 gap-6">
//           {socialMedia.map((info) => (
//             <a 
//               key={info.id} 
//               href={info.url} 
//               target="_blank" 
//               rel="noopener noreferrer"
//               className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
//             >
//               <img src={info.img} alt="icons" width={20} height={20} />
//             </a>
//           ))}
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;








// Correct code below start code basic
// import { FaLocationArrow } from "react-icons/fa6";

// import { socialMedia } from "@/data";
// import MagicButton from "./MagicButton";

// const Footer = () => {
//   return (
//     <footer className="w-full pt-20 pb-10" id="contact">
//       {/* background grid */}
//       <div className="w-full absolute left-0 -bottom-72 min-h-96">
//         <img
//           src="/footer-grid.svg"
//           alt="grid"
//           className="w-full h-full opacity-50 "
//         />
//       </div>

//       <div className="flex flex-col items-center">
//         <h1 className="heading lg:max-w-[45vw]">
//           Looking for a passionate <span className="text-purple">AI Developer and Content Creator</span> to join your team? 
//         </h1>
//         <p className="text-white-200 md:mt-10 my-5 text-center">
//           Let&apos;s connect and explore how I can contribute to your projects.
//         </p>
//         <a href="mailto:avjadhav489@gmail.com">
//           <MagicButton
//             title="Let's get in touch"
//             icon={<FaLocationArrow />}
//             position="right"
//           />
//         </a>
//       </div>
//       <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
//         <p className="md:text-base text-sm md:font-normal font-light">
//           Copyright © 2024 Aaditya Jadhav
//         </p>

//         <div className="flex items-center md:gap-3 gap-6">
//           {socialMedia.map((info) => (
//             <div
//               key={info.id}
//               className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
//             >
//               <img src={info.img} alt="icons" width={20} height={20} />
//             </div>
//           ))}
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
