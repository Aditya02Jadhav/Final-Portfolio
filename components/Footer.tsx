import React from 'react';
import './ui/Footer.css';
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <p className="footer-title">AI ML Developer | Graphic Designer | Content Creator</p>
          <div className="email-form">
            <button className="contact-button">Contact</button>
          </div>
          <p>Connect with me on social media</p>
          <div className="social-media-icons">
            <a href="#" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          </div>
        </div>
        <div className="footer-right">
          <img src="./aj-logo-removebg-preview.png" alt="Logo" className="footer-logo" />
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Aaditya Jadhav. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;





// import { FaLocationArrow } from "react-icons/fa6";
// import "./ui/Footer.css";
// import "./ui/SocialTransition.css";
// import "./ui/RollingText.css";

// const Footer = () => {
//   return (
//     <footer className="footer-section" id="contact">
//       <div className="footer-content">
//         <h1 className="heading text-white ">
//           Looking for a passionate{" "}
//           <span className="text-highlight">
//             <span style={{ color: "#F54242" }}>
//               AI Developer and Content Creator
//             </span>
//           </span>{" "}
//           to join your team?
//         </h1>
//         <p className="text-white md:mt-10 my-5">
//           Let&apos;s connect and explore how I can contribute to your projects.
//         </p>
//         <a href="mailto:avjadhav489@gmail.com">
//           <div className="rolling-text">ROLLING TEXT.</div>
//         </a>
//         <ul className="social-icons">
//           <li>
//             <a href="#">
//               <i className="fa fa-facebook" aria-hidden="true"></i>
//               <span> - Facebook</span>
//             </a>
//           </li>
//           <li>
//             <a href="#">
//               <i className="fa fa-twitter" aria-hidden="true"></i>
//               <span> - Twitter</span>
//             </a>
//           </li>
//           <li>
//             <a href="#">
//               <i className="fa fa-google-plus" aria-hidden="true"></i>
//               <span> - Google</span>
//             </a>
//           </li>
//           <li>
//             <a href="#">
//               <i className="fa fa-instagram" aria-hidden="true"></i>
//               <span> - Instagram</span>
//             </a>
//           </li>
//         </ul>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
