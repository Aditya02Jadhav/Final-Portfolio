import React from 'react';
import styles from './ui/CreativeProjects.module.css';

const CreativeProjects: React.FC = () => {
  return (
    <div className={styles.creativeProjects}>
      <h2>Creative Projects: AI Art, Blender, Game OF Unity Video</h2>
      <div className={styles.cards}>
        <div className={styles.card}>
          <img src="/Coming Soon.png" alt="AI Art Project" />
          <h3>AI Art</h3>
          <p className={styles.category}>AI Design, Art</p>
          <p className={styles.description}>
            Explored the creative possibilities of AI-generated art, blending technology with creativity to produce unique visual pieces.
          </p>
        </div>
        <div className={styles.card}>
          <img src="/Coming Soon.png" alt="Blender Project" />
          <h3>Blender</h3>
          <p className={styles.category}>3D Modeling, Animation</p>
          <p className={styles.description}>
            Developed 3D models and animations using Blender, showcasing the potential of open-source tools in creating high-quality content.
          </p>
        </div>
         <div className={styles.card}>
          <img src="/Coming Soon.png" alt="Blender Project" />
          <h3>Blender</h3>
          <p className={styles.category}>3D Modeling, Animation</p>
          <p className={styles.description}>
            Developed 3D models and animations using Blender, showcasing the potential of open-source tools in creating high-quality content.
          </p>
        </div>
         <div className={styles.card}>
          <img src="/Coming Soon.png" alt="Blender Project" />
          <h3>Blender</h3>
          <p className={styles.category}>3D Modeling, Animation</p>
          <p className={styles.description}>
            Developed 3D models and animations using Blender, showcasing the potential of open-source tools in creating high-quality content.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CreativeProjects;
