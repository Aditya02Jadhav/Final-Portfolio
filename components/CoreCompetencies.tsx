import React from 'react';
import './ui/CoreCompetencies.css';
import { FaBrain, FaCloud, FaLaptopCode, FaGamepad, FaCubes, FaPalette } from 'react-icons/fa';

const CoreCompetencies = () => {
  return (
    <section className="core-competencies">
      <h1 className="section-title">Core Competencies</h1>
      <p className="section-subtitle">A snapshot of my primary skills as a tech developer.</p>
      <div className="competency-cards">
        <div className="competency-card">
          <FaBrain className="icon" />
          <h3>AI ML</h3>
          <p>Projects Completed</p>
          <p>Completed in various AI ML fields like natural language processing, computer vision, etc.</p>
          <a href="#" className="read-more">Read more <span>→</span></a>
        </div>
        {/* <div className="competency-card">
          <FaCloud className="icon" />
          <h3>Azure Cloud</h3>
          <p>Technologies Used</p>
          <p>Learned to use pipelines, ML designer, auto ML, etc., in the Certified Course of AI-900 by Microsoft.</p>
          <a href="#" className="read-more">Read more <span>→</span></a>
        </div> */}
        <div className="competency-card">
          <FaLaptopCode className="icon" />
          <h3>Frontend</h3>
          <p>Figma, TeleportHQ, Wordpress</p>
          <p>This portfolio website is an example of my low-code web development tool.</p>
          <a href="#" className="read-more">Read more <span>→</span></a>
        </div>
        {/* <div className="competency-card">
          <FaGamepad className="icon" />
          <h3>Unity</h3>
          <p>Created a game</p>
          <p>Created a game in Unity with the help of an inbuilt game kit.</p>
          <a href="#" className="read-more">Read more <span>→</span></a>
        </div> */}
        <div className="competency-card">
          <FaCloud className="icon" />
          <h3>Blender</h3>
          <p>Created animation in Blender</p>
          <p>Created a perfume animation, car shoot in Blender with rendered video.</p>
          <a href="#" className="read-more">Read more <span>→</span></a>
        </div>
        <div className="competency-card">
          <FaPalette className="icon" />
          <h3>Creations</h3>
          <p>Digital Content creation</p>
          <p>Created some digital content by leveraging technologies like Stable Diffusion, etc.</p>
          <a href="#" className="read-more">Read more <span>→</span></a>
        </div>
      </div>
    </section>
  );
};

export default CoreCompetencies;
