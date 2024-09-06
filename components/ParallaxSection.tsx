// components/ParallaxSection/index.tsx

import React, { useEffect } from 'react';
import styles from './ui/ParallaxSection.module.css';

interface ParallaxSectionProps {
  items: { id: number; state: string; city: string; imageUrl: string }[];
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({ items }) => {
  useEffect(() => {
    const VerticalMouseDrivenCarousel = require('./ui/VerticalMouseDrivenCarousel').default;
    new VerticalMouseDrivenCarousel();
  }, []);

  return (
    <div className={styles.container}>
      <header className={`${styles.header} ${styles['header--project-list']}`}>
        <div className={`${styles.carousel} js-carousel ${styles['media-wrapper']}`}>
          <ul className={`${styles['carousel-list']} js-carousel-list`}>
            {items.map((item) => (
              <li key={item.id} className={`${styles['carousel-list-item']} js-carousel-list-item`} data-item-id={item.id}>
                <a href="#">
                  <p className={`${styles['carousel-eyebrow']} u-b4`}>
                    <span>{`0${item.id + 1}`}</span> {item.state}
                  </p>
                  <p className={`${styles['carousel-title']} u-a5`}>{item.city}</p>
                </a>
              </li>
            ))}
          </ul>
          {items.map((item) => (
            <i key={item.id} className={`${styles['carousel-bg-img']} js-carousel-bg-img`} style={{ backgroundImage: `url('${item.imageUrl}')` }}></i>
          ))}
          <i className={styles['gradient-overlay']}></i>
        </div>
      </header>
    </div>
  );
};

export default ParallaxSection;
