'use client';

import { useRef, MutableRefObject, PropsWithChildren } from 'react';
import { motion } from 'framer-motion';

import { useMagnetic, cn } from '@/lib/utils';

import { MagneticItem } from './index.styled';
import { magneticVariance } from './index.variance';

interface ButtonProps {
  variant?: 'default' | 'custom'; // Restricting to 'default' and 'custom'
  size?: 'default' | 'md' | 'lg' | 'xl';
  className?: string;
  onClick?: () => void;
}

interface MagneticButtonProps extends ButtonProps {
  motionProps?: Omit<React.ComponentProps<typeof motion.button>, 'ref'>;
}

export function MagneticButton({
  children,
  className,
  variant = 'default',
  size = 'default',
  motionProps,
  ...props
}: PropsWithChildren<MagneticButtonProps>) {
  const elementRef: MutableRefObject<HTMLButtonElement | null> = useRef(null);
  const {
    position: { x, y, z }, // Now includes z-axis
    handleMagneticMove,
    handleMagneticOut,
  } = useMagnetic(elementRef);

  return (
    <motion.button
      ref={elementRef}
      className={cn(magneticVariance({ variant, size, className }))}
      animate={{ x, y, z }} // Apply the 3D transform
      style={{
        transform: `translate3d(${x}px, ${y}px, ${z}px)`, // Using translate3d
      }}
      transition={{
        type: 'spring',
        damping: 15,
        stiffness: 150,
        mass: 0.1,
      }}
      onPointerMove={handleMagneticMove}
      onPointerOut={handleMagneticOut}
      whileHover={{ scale: 1.1 }}
      {...motionProps} // Spread only motion-specific props
      {...props} // Spread remaining button props
    >
      <MagneticItem>{children}</MagneticItem>
    </motion.button>
  );
}




// 'use client';

// import { useRef, MutableRefObject, PropsWithChildren } from 'react';
// import { motion } from 'framer-motion';

// import { useMagnetic, cn } from '@/lib/utils';

// import { MagneticItem } from './index.styled';
// import { magneticVariance } from './index.variance';

// interface ButtonProps {
//   variant?: 'default' | 'primary' | 'destructive' | 'secondary' | 'ghost' | 'outline' | 'custom'; // Add "custom" here
//   size?: 'default' | 'md' | 'lg' | 'xl';
//   className?: string;
//   onClick?: () => void;
// }

// interface MagneticButtonProps extends ButtonProps {
//   motionProps?: Omit<React.ComponentProps<typeof motion.button>, 'ref'>;
// }

// export function MagneticButton({
//   children,
//   className,
//   variant = 'default',
//   size = 'default',
//   motionProps,
//   ...props
// }: PropsWithChildren<MagneticButtonProps>) {
//   const elementRef: MutableRefObject<HTMLButtonElement | null> = useRef(null);
//   const {
//     position: { x, y },
//     handleMagneticMove,
//     handleMagneticOut,
//   } = useMagnetic(elementRef);

//   return (
//     <motion.button
//       ref={elementRef}
//       className={cn(magneticVariance({ variant, size, className }))}
//       animate={{ x, y }}
//       transition={{
//         type: 'spring',
//         damping: 15,
//         stiffness: 150,
//         mass: 0.1,
//       }}
//       onPointerMove={handleMagneticMove}
//       onPointerOut={handleMagneticOut}
//       whileHover={{ scale: 1.1 }}
//       {...motionProps} // Spread only motion-specific props
//       {...props} // Spread remaining button props
//     >
//       <MagneticItem>{children}</MagneticItem>
//     </motion.button>
//   );
// }
