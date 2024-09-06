import React from 'react';
import styles from './ui/CaseStudies.module.css';
import Image from 'next/image';

const CaseStudies: React.FC = () => {
  return (
    <div className={styles.caseStudies}>
      <h2>Case Study</h2>
      <div className={styles.cards}>
        <div className={styles.card}>
          <Image src="./Speech-Snap.png" alt="Speech Snap" />
          <h3>Speech Snap</h3>
          <p className={styles.category}>ML & Web Dev, Case Study</p>
          <p className={styles.description}>
            Supported people to generate captions using speechsnap through ML and Web Dev techniques.
          </p>
        </div>
        <div className={styles.card}>
          <Image src="./Micrograd.png" alt="Micrograd" />
          <h3>Micrograd</h3>
          <p className={styles.category}>ML, Case Study</p>
          <p className={styles.description}>
            Developed a NN from scratch to imitate the underhood function of pytorch library.
          </p>
        </div>
        <div className={styles.card}>
          <Image src="./Chatbot.png" alt="Chatbot" />
          <h3>Chatbot</h3>
          <p className={styles.category}>Streamlit, API</p>
          <p className={styles.description}>
            Developed a chatbot using API and streamlit for users.
          </p>
        </div>
        <div className={styles.card}>
          <Image src="./Panorama Stitching.png" alt="Panorama Stitching" />
          <h3>Panorama Stitching</h3>
          <p className={styles.category}>Computer Vision, Case Study</p>
          <p className={styles.description}>
            Implemented SIFT, RANSAC, Homography matrix and used OpenCV.
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default CaseStudies;
