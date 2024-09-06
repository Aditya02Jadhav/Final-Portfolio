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



// import { cva } from 'class-variance-authority';

// export const magneticVariance = cva(
//   'relative inline-flex items-center justify-center overflow-hidden rounded-full font-medium ring-offset-background transition-colors before:absolute before:left-0 before:top-full before:h-full before:w-full before:translate-y-full before:bg-black before:rounded-full before:transition-transform before:duration-[2s] before:ease-in-out before:content-[""] hover:before:top-0 hover:before:translate-y-0 after:absolute after:inset-0 after:h-full after:w-full after:bg-blue-600 after:translate-y-full after:rounded-full after:transition-transform after:duration-[2s] after:ease-in-out after:content-[""] hover:after:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
//   {
//     variants: {
//       variant: {
//         default: 'bg-transparent before:bg-transparent after:bg-transparent',
//         primary:
//           'bg-primary text-background before:bg-primary-foreground after:bg-primary-foreground',
//         destructive:
//           'bg-background text-destructive-foreground before:bg-destructive after:bg-destructive',
//         secondary:
//           'bg-background text-secondary-foreground before:bg-secondary after:bg-secondary',
//         ghost:
//           'bg-foreground text-background before:bg-primary after:bg-primary',
//         outline: 'border border-solid before:bg-primary after:bg-primary',
//         custom: 'text-white', // Using before and after for background transition
//       },
//       size: {
//         default: 'p-2 text-sm',
//         md: 'px-8 py-10 text-base',
//         lg: 'px-8 py-16 text-lg lg:px-12 lg:py-20',
//         xl: 'px-10 py-16 text-lg lg:px-14 lg:py-20',
//       },
//     },
//     defaultVariants: {
//       variant: 'default',
//       size: 'default',
//     },
//   },
// );
