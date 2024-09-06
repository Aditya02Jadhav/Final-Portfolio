import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { useState, useCallback } from 'react';

// Function to merge Tailwind CSS classes
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * A hook that provides magnetic effect functionality for a given HTML element.
 * @param elementRef A mutable ref object pointing to an HTML element.
 * @returns Object containing the magnetic position and event handlers.
 */
export function useMagnetic(elementRef: React.MutableRefObject<HTMLElement | null>) {
  const [position, setPosition] = useState({ x: 0, y: 0, z: 0 }); // Added z-axis state

  const handleMagneticMove = useCallback(
    (event: React.PointerEvent<HTMLButtonElement>) => {
      const rect = elementRef.current?.getBoundingClientRect();
      if (!rect) return;

      const moveX = (event.clientX - rect.left - rect.width / 2) / 4;
      const moveY = (event.clientY - rect.top - rect.height / 2) / 4;
      const moveZ = (Math.abs(moveX) + Math.abs(moveY)) / 8; // Adding some depth effect based on x and y

      setPosition({ x: moveX, y: moveY, z: moveZ });
    },
    [elementRef]
  );

  const handleMagneticOut = useCallback(() => {
    setPosition({ x: 0, y: 0, z: 0 });
  }, []);

  return {
    position,
    handleMagneticMove,
    handleMagneticOut,
  };
}



// import { type ClassValue, clsx } from "clsx";
// import { twMerge } from "tailwind-merge";
// import { useState, useCallback } from 'react';

// // Function to merge Tailwind CSS classes
// export function cn(...inputs: ClassValue[]) {
//   return twMerge(clsx(inputs));
// }

// /**
//  * A hook that provides magnetic effect functionality for a given HTML element.
//  * @param elementRef A mutable ref object pointing to an HTML element.
//  * @returns Object containing the magnetic position and event handlers.
//  */
// export function useMagnetic(elementRef: React.MutableRefObject<HTMLElement | null>) {
//   const [position, setPosition] = useState({ x: 0, y: 0 });

//   const handleMagneticMove = useCallback(
//     (event: React.PointerEvent<HTMLButtonElement>) => {
//       const rect = elementRef.current?.getBoundingClientRect();
//       if (!rect) return;

//       const moveX = (event.clientX - rect.left - rect.width / 2) / 4;
//       const moveY = (event.clientY - rect.top - rect.height / 2) / 4;

//       setPosition({ x: moveX, y: moveY });
//     },
//     [elementRef]
//   );

//   const handleMagneticOut = useCallback(() => {
//     setPosition({ x: 0, y: 0 });
//   }, []);

//   return {
//     position,
//     handleMagneticMove,
//     handleMagneticOut,
//   };
// }


// Correct Code below before Magnetic Button
// import { type ClassValue, clsx } from "clsx";
// import { twMerge } from "tailwind-merge";

// export function cn(...inputs: ClassValue[]) {
//   return twMerge(clsx(inputs));
// }



