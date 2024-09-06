import React, { useState } from "react";
import styles from "./ui/SurveyForm.module.css";

const SurveyForm: React.FC = () => {
  const [step, setStep] = useState(0);
  const [selectedSections, setSelectedSections] = useState<string[]>([]);
  const [feedback, setFeedback] = useState("");

  const handleYesClick = () => {
    setStep(step + 1);
  };

  const handleNoClick = () => {
    if (step === 0) {
      setStep(1);
    } else {
      setStep(step + 1);
    }
  };

  const handleSectionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSelectedSections((prev) =>
      prev.includes(value)
        ? prev.filter((s) => s !== value)
        : [...prev, value]
    );
  };

  const handleSubmit = () => {
    // Submit the form logic here
    alert("Thank you for your feedback!");
    setStep(0);
    setSelectedSections([]);
    setFeedback("");
  };

  return (
    <div className={styles.surveyContainer}>
      {step === 0 && (
        <div className={styles.questionContainer}>
          <p>Did you like the website?</p>
          <div className={styles.emojiContainer}>
            <button onClick={handleYesClick} className={styles.emojiButton}>
              😊
            </button>
            <button onClick={handleNoClick} className={styles.emojiButton}>
              😞
            </button>
          </div>
        </div>
      )}

      {step === 1 && (
        <div className={styles.questionContainer}>
          <p>Which section(s) of the website did you visit?</p>
          <div className={styles.optionsContainer}>
            <label>
              <input
                type="checkbox"
                value="Home"
                checked={selectedSections.includes("Home")}
                onChange={handleSectionChange}
              />
              Home
            </label>
            <label>
              <input
                type="checkbox"
                value="Work"
                checked={selectedSections.includes("Work")}
                onChange={handleSectionChange}
              />
              Work
            </label>
            <label>
              <input
                type="checkbox"
                value="Creative Content"
                checked={selectedSections.includes("Creative Content")}
                onChange={handleSectionChange}
              />
              Creative Content
            </label>
            <label>
              <input
                type="checkbox"
                value="Contact"
                checked={selectedSections.includes("Contact")}
                onChange={handleSectionChange}
              />
              Contact
            </label>
          </div>
          <button onClick={handleYesClick} className={styles.nextButton}>
            Next
          </button>
        </div>
      )}

      {step === 2 && (
        <div className={styles.questionContainer}>
          <p>Did you like my projects?</p>
          <div className={styles.emojiContainer}>
            <button onClick={handleYesClick} className={styles.emojiButton}>
              😊
            </button>
            <button onClick={handleNoClick} className={styles.emojiButton}>
              😞
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className={styles.questionContainer}>
          <p>Did you like my creative content?</p>
          <div className={styles.emojiContainer}>
            <button onClick={handleYesClick} className={styles.emojiButton}>
              😊
            </button>
            <button onClick={handleNoClick} className={styles.emojiButton}>
              😞
            </button>
          </div>
        </div>
      )}

      {step === 4 && (
        <div className={styles.questionContainer}>
          <p>Would you consider hiring me?</p>
          <div className={styles.emojiContainer}>
            <button onClick={handleYesClick} className={styles.emojiButton}>
              😊
            </button>
            <button onClick={handleNoClick} className={styles.emojiButton}>
              😞
            </button>
          </div>
        </div>
      )}

      {step === 5 && (
        <div className={styles.questionContainer}>
          <p>We&apos;d love to hear your feedback (optional):</p>
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            className={styles.feedbackInput}
          />
          <div className={styles.submitContainer}>
            <button onClick={handleSubmit} className={styles.submitButton}>
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SurveyForm;




// import React, { useState } from 'react';
// import styles from './ui/SurveyForm.module.css';

// const SurveyForm: React.FC = () => {
//   const [step, setStep] = useState(0);
//   const [selectedSections, setSelectedSections] = useState<string[]>([]);
//   const [feedback, setFeedback] = useState('');

//   const handleYesClick = () => {
//     setStep(step + 1);
//   };

//   const handleNoClick = () => {
//     if (step === 0) {
//       setStep(1);
//     } else {
//       setStep(step + 1);
//     }
//   };

//   const handleSectionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const { value } = event.target;
//     setSelectedSections(prev =>
//       prev.includes(value)
//         ? prev.filter(s => s !== value)
//         : [...prev, value]
//     );
//   };

//   const handleSubmit = () => {
//     // Submit the form logic here
//     alert('Thank you for your feedback!');
//     setStep(0);
//     setSelectedSections([]);
//     setFeedback('');
//   };

//   return (
//     <div className={styles.surveyContainer}>
//       {step === 0 && (
//         <div className={styles.questionContainer}>
//           <p>Did you like the website?</p>
//           <div className={styles.emojiContainer}>
//             <button onClick={handleYesClick} className={styles.emojiButton}>
//               😊
//             </button>
//             <button onClick={handleNoClick} className={styles.emojiButton}>
//               😞
//             </button>
//           </div>
//         </div>
//       )}

//       {step === 1 && (
//         <div className={styles.questionContainer}>
//           <p>Which section(s) of the website did you visit?</p>
//           <div className={styles.optionsContainer}>
//             <label>
//               <input
//                 type="checkbox"
//                 value="Home"
//                 checked={selectedSections.includes('Home')}
//                 onChange={handleSectionChange}
//               />
//               Home
//             </label>
//             <label>
//               <input
//                 type="checkbox"
//                 value="Work"
//                 checked={selectedSections.includes('Work')}
//                 onChange={handleSectionChange}
//               />
//               Work
//             </label>
//             <label>
//               <input
//                 type="checkbox"
//                 value="Creative Content"
//                 checked={selectedSections.includes('Creative Content')}
//                 onChange={handleSectionChange}
//               />
//               Creative Content
//             </label>
//             <label>
//               <input
//                 type="checkbox"
//                 value="Contact"
//                 checked={selectedSections.includes('Contact')}
//                 onChange={handleSectionChange}
//               />
//               Contact
//             </label>
//           </div>
//           <button onClick={handleYesClick} className={styles.nextButton}>
//             Next
//           </button>
//         </div>
//       )}

//       {step === 2 && (
//         <div className={styles.questionContainer}>
//           <p>Did you like my projects?</p>
//           <div className={styles.emojiContainer}>
//             <button onClick={handleYesClick} className={styles.emojiButton}>
//               😊
//             </button>
//             <button onClick={handleNoClick} className={styles.emojiButton}>
//               😞
//             </button>
//           </div>
//         </div>
//       )}

//       {step === 3 && (
//         <div className={styles.questionContainer}>
//           <p>Did you like my creative content?</p>
//           <div className={styles.emojiContainer}>
//             <button onClick={handleYesClick} className={styles.emojiButton}>
//               😊
//             </button>
//             <button onClick={handleNoClick} className={styles.emojiButton}>
//               😞
//             </button>
//           </div>
//         </div>
//       )}

//       {step === 4 && (
//         <div className={styles.questionContainer}>
//           <p>Would you consider hiring me?</p>
//           <div className={styles.emojiContainer}>
//             <button onClick={handleYesClick} className={styles.emojiButton}>
//               😊
//             </button>
//             <button onClick={handleNoClick} className={styles.emojiButton}>
//               😞
//             </button>
//           </div>
//         </div>
//       )}

//       {step === 5 && (
//         <div className={styles.questionContainer}>
//           <p>We'd love to hear your feedback (optional):</p>
//           <textarea
//             value={feedback}
//             onChange={(e) => setFeedback(e.target.value)}
//             className={styles.feedbackInput}
//           />
//           <div className={styles.submitContainer}>
//             <button onClick={handleSubmit} className={styles.submitButton}>
//               Submit
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SurveyForm;
