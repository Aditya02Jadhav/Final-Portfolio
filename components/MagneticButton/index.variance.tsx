import { cva } from 'class-variance-authority';
import styles from './MagneticButton.module.css';

export const magneticVariance = cva(
  `${styles['magnetic-button']}`, // Base class
  {
    variants: {
      variant: {
        default: styles['magnetic-button-variant-default'],
        custom: styles['magnetic-button-variant-custom'], // Ensure custom is correctly referenced
      },
      size: {
        default: styles['magnetic-button-size-default'],
        md: styles['magnetic-button-size-md'],
        lg: styles['magnetic-button-size-lg'],
        xl: styles['magnetic-button-size-xl'],
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);



