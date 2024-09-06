import { useEffect, useState } from 'react';
import './ui/Preloader.css';

type Star = {
  x: number;
  y: number;
  radius: number;
  dx: number;
  dy: number;
};

const PreloaderAnimation = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [starsReady, setStarsReady] = useState(false);

  useEffect(() => {
    const canvas = document.getElementById('constellation') as HTMLCanvasElement;

    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const stars: Star[] = [];
      const fps = 60;

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      class Star {
        x: number;
        y: number;
        radius: number;
        dx: number;
        dy: number;

        constructor(x: number, y: number, radius: number) {
          this.x = x;
          this.y = y;
          this.radius = radius;
          this.dx = Math.random() * 0.5;
          this.dy = Math.random() * 0.5;
        }
      }

      const draw = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#ffffff';
        stars.forEach((star) => {
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
          ctx.closePath();
          ctx.fill();
        });
      };

      const update = () => {
        stars.forEach((star) => {
          star.x += star.dx;
          star.y += star.dy;

          if (star.x > canvas.width || star.x < 0) star.dx = -star.dx;
          if (star.y > canvas.height || star.y < 0) star.dy = -star.dy;
        });
      };

      const animate = () => {
        draw();
        update();
        requestAnimationFrame(animate);
      };

      for (let i = 0; i < 100; i++) {
        stars.push(new Star(Math.random() * canvas.width, Math.random() * canvas.height, Math.random() * 2));
      }

      animate();

      // Indicate that stars animation is ready
      setStarsReady(true);

      // Simulate loading and hide preloader after 3 seconds
      setTimeout(() => {
        setIsLoaded(true);
      }, 3000);
    }
  }, []);

  return (
    <div className={`preloader-container ${isLoaded ? 'loaded' : ''}`}>
      <canvas id="constellation"></canvas>
      {starsReady && (
        <div className="origami">
          <svg width="100" height="100" viewBox="0 0 100 100">
            <polygon points="50,15 90,80 10,80" className="origami-shape" />
          </svg>
        </div>
      )}
    </div>
  );
};

export default PreloaderAnimation;
