import React, { useEffect } from "react";
import "./ui/HowCanIHelp.css";

const cardsData = [
  {
    title: "Certifications",
    description: "Explore my certifications and how they support my expertise.",
    image: "/Certificate-Help.jpg",
  },
  {
    title: "Blogs",
    description: "Read my latest articles on AI, technology, and more.",
    image: "/Blog-Help.jpg",
  },
  {
    title: "Content Creation",
    description: "See my work as a content creator and the impact it has.",
    image: "/Content-Creation-Help.jpg",
  },
];

const HowCanIHelp: React.FC = () => {
  useEffect(() => {
    const cards = document.querySelectorAll<HTMLElement>(".card");

    cards.forEach((card) => {
      const handleMouseMove = (event: MouseEvent) => {
        const e = -(card.clientWidth / 2 - event.offsetX) / 30;
        const n = (card.clientHeight / 2 - event.offsetY) / 10;
        card.style.transform = `rotateY(${e}deg) rotateX(${n}deg)`;
      };

      const handleMouseLeave = () => {
        card.style.transform = `rotateY(0deg) rotateX(0deg)`;
      };

      card.addEventListener("mousemove", handleMouseMove);
      card.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        card.removeEventListener("mousemove", handleMouseMove);
        card.removeEventListener("mouseleave", handleMouseLeave);
      };
    });
  }, []);

  return (
    <div id="howCanIHelpSection" className="how-can-i-help-section pb-20">
      <h2 className="text-4xl font-bold text-center mb-10">How Can I Help You?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-10xl mx-auto px-6 md:px-12 py-3">
        {cardsData.map((card, index) => (
          <div key={index} className="perspective">
            <div className="card">
              <div
                className="thumb"
                style={{ backgroundImage: `url(${card.image})` }}
              ></div>
              <h2>{card.title}</h2>
              <span>{card.description}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowCanIHelp;
