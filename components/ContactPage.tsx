import React from "react";
import Image from "next/image";
import styles from "./ui/ContactPage.module.css";

const ContactPage: React.FC = () => {
  return (
    <div className={styles.contactPageContainer}>
      <div className={styles.formContainer}>
        <h2>Chat with me</h2>
        <p>
          Need help with something? Want a demo? Get in touch with our friendly
          team and we&apos;ll get in touch within 2 hours.
        </p>

        <form className={styles.contactForm}>
          <div className={styles.formGroup}>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
          </div>
          <div className={styles.formGroup}>
            <input type="text" placeholder="Your Organization" />
            <input type="text" placeholder="Your Message" />
          </div>
          <div className={styles.formGroup}>
            <div className={styles.phoneInput}>
              <span>US</span>
              <input type="tel" placeholder="+1 (555) 000-0000" />
            </div>
          </div>
          <div className={styles.formGroup}>
            <label>Number of employees</label>
            <div className={styles.radioGroup}>
              <div className={styles.radioOption}>
                <input type="radio" id="solo" name="employees" value="solo" />
                <label htmlFor="solo">
                  <strong>I&apos;m a solo creator</strong>
                  <span>I need to set up an account for myself.</span>
                </label>
              </div>
              <div className={styles.radioOption}>
                <input type="radio" id="small" name="employees" value="small" />
                <label htmlFor="small">
                  <strong>Small (2-10)</strong>
                  <span>I need to set up an account for my small team.</span>
                </label>
              </div>
            </div>
          </div>

          <button className={styles.submitButton} type="submit">
            Submit
          </button>
        </form>
      </div>
      <div className={styles.imageContainer}>
        <Image
          src="/Linkedin Profile Photo.png"
          alt="Chat with our team"
          width={400}
          height={300}
        />
      </div>
    </div>
  );
};

export default ContactPage;



// import React from 'react';
// import Image from 'next/image';
// import styles from './ui/ContactPage.module.css';

// const ContactPage: React.FC = () => {
//   return (
//     <div className={styles.contactPageContainer}>
//       <div className={styles.formContainer}>
//         <h2>Chat with me</h2>
//         <p>Need help with something? Want a demo? Get in touch with our friendly team and we'll get in touch within 2 hours.</p>
        
//         <form className={styles.contactForm}>
//           <div className={styles.formGroup}>
//             <input type="text" placeholder="Your Name" />
//             <input type="email" placeholder="Your Email" />
//           </div>
//           <div className={styles.formGroup}>
//             <input type="text" placeholder="Your Organization" />
//             <input type="text" placeholder="Your Message" />
//           </div>
//           <div className={styles.formGroup}>
//             <div className={styles.phoneInput}>
//               <span>US</span>
//               <input type="tel" placeholder="+1 (555) 000-0000" />
//             </div>
//           </div>
//           <div className={styles.formGroup}>
//             <label>Number of employees</label>
//             <div className={styles.radioGroup}>
//               <div className={styles.radioOption}>
//                 <input type="radio" id="solo" name="employees" value="solo" />
//                 <label htmlFor="solo">
//                   <strong>I'm a solo creator</strong>
//                   <span>I need to set up an account for myself.</span>
//                 </label>
//               </div>
//               <div className={styles.radioOption}>
//                 <input type="radio" id="team" name="employees" value="team" />
//                 <label htmlFor="team">
//                   <strong>I'm part of a team</strong>
//                   <span>I need to set up an account for a team.</span>
//                 </label>
//               </div>
//             </div>
//           </div>
//           <button type="submit" className={styles.submitButton}>Get in touch</button>
//         </form>
//       </div>
//       <div className={styles.imageContainer}>
//         <img src="/Profile Photo.jpg" alt="Contact" />
//       </div>
//     </div>
//   );
// };

// export default ContactPage;




// import React from 'react';
// import Image from 'next/image';
// import styles from './ui/ContactPage.module.css';

// const ContactPage: React.FC = () => {
//   return (
//     <div className={styles.contactPageContainer}>
//       <div className={styles.formContainer}>
//         <h2>Chat to our team</h2>
//         <p>Need help with something? Want a demo? Get in touch with our friendly team and we'll get in touch within 2 hours.</p>
        
//         <form className={styles.contactForm}>
//           <div className={styles.formGroup}>
//             <input type="text" placeholder="First name" />
//             <input type="text" placeholder="Last name" />
//           </div>
//           <div className={styles.formGroup}>
//             <input type="text" placeholder="Job title" />
//             <input type="email" placeholder="Work email" />
//           </div>
//           <div className={styles.formGroup}>
//             <div className={styles.phoneInput}>
//               <span>US</span>
//               <input type="tel" placeholder="+1 (555) 000-0000" />
//             </div>
//           </div>
//           <div className={styles.formGroup}>
//             <label>Number of employees</label>
//             <div className={styles.radioGroup}>
//               <div className={styles.radioOption}>
//                 <input type="radio" id="solo" name="employees" value="solo" />
//                 <label htmlFor="solo">
//                   <strong>I'm a solo creator</strong>
//                   <span>I need to set up an account for myself.</span>
//                 </label>
//               </div>
//               <div className={styles.radioOption}>
//                 <input type="radio" id="team" name="employees" value="team" />
//                 <label htmlFor="team">
//                   <strong>I'm part of a team</strong>
//                   <span>I need to set up an account for a team.</span>
//                 </label>
//               </div>
//             </div>
//           </div>
//           <button type="submit" className={styles.submitButton}>Get in touch</button>
//         </form>
//       </div>
//       <div className={styles.imageContainer}>
//         <Image src="/Profile Photo.jpg" alt="Contact" layout="fill" objectFit="cover" />
//         <div className={styles.testimonial}>
//           <p>Untitled’s software helps us manage cash flow, financial reporting and payroll with ease. It's a great solution for startups looking for an efficient way to manage their finances all-in-one.</p>
//           <div className={styles.testimonialAuthor}>
//             <strong>Maya Rothwell</strong>
//             <span>Founder & CEO, Open Ventures</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactPage;
