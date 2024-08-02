"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import ThemeToggle from "@/app/ThemeToggle"; // Ensure the correct import path

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  const { theme } = useTheme();

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    const direction = current - scrollYProgress.getPrevious()!;
    setVisible(scrollYProgress.get() < 0.05 || direction < 0);
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1, y: -100 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className={cn(
          "flex max-w-fit md:min-w-[70vw] lg:min-w-fit fixed z-[5000] top-10 inset-x-0 mx-auto px-10 py-5 rounded-lg border items-center justify-center space-x-4",
          className,
          theme === "dark" ? "bg-black text-white" : "bg-white text-black"
        )}
        style={{
          backdropFilter: "blur(16px) saturate(180%)",
          backgroundColor: theme === "dark" ? "rgba(17, 25, 40, 0.75)" : "rgba(255, 255, 255, 0.75)",
          borderRadius: "12px",
          border: "1px solid rgba(255, 255, 255, 0.125)",
        }}
      >
        {navItems.map((navItem, idx) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn("relative items-center flex space-x-1", theme === "dark" ? "text-white" : "text-black")}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="text-sm !cursor-pointer">{navItem.name}</span>
          </Link>
        ))}
        <ThemeToggle /> {/* Add the ThemeToggle component here */}
      </motion.div>
    </AnimatePresence>
  );
};




// "use client";
// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
// import Link from "next/link";
// import { cn } from "@/lib/utils";
// import { useTheme } from "next-themes";

// export const FloatingNav = ({
//   navItems,
//   className,
// }: {
//   navItems: {
//     name: string;
//     link: string;
//     icon?: JSX.Element;
//   }[];
//   className?: string;
// }) => {
//   const { scrollYProgress } = useScroll();
//   const [visible, setVisible] = useState(true);
//   const { theme } = useTheme();

//   useMotionValueEvent(scrollYProgress, "change", (current) => {
//     const direction = current - scrollYProgress.getPrevious()!;
//     setVisible(scrollYProgress.get() < 0.05 || direction < 0);
//   });

//   useEffect(() => {
//     // Ensure theme is set correctly on initial load
//     document.documentElement.classList.toggle("dark", theme === "dark");
//   }, [theme]);

//   return (
//     <AnimatePresence mode="wait">
//       <motion.div
//         initial={{ opacity: 1, y: -100 }}
//         animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
//         transition={{ duration: 0.2 }}
//         className={cn(
//           "flex max-w-fit md:min-w-[70vw] lg:min-w-fit fixed z-[5000] top-10 inset-x-0 mx-auto px-10 py-5 rounded-lg border items-center justify-center space-x-4",
//           className,
//           theme === "dark" ? "bg-black text-white" : "bg-white text-black"
//         )}
//         style={{
//           backdropFilter: "blur(16px) saturate(180%)",
//           backgroundColor: theme === "dark" ? "rgba(17, 25, 40, 0.75)" : "rgba(255, 255, 255, 0.75)",
//           borderRadius: "12px",
//           border: "1px solid rgba(255, 255, 255, 0.125)",
//         }}
//       >
//         {navItems.map((navItem, idx) => (
//           <Link
//             key={`link=${idx}`}
//             href={navItem.link}
//             className={cn("relative items-center flex space-x-1", theme === "dark" ? "text-white" : "text-black")}
//           >
//             <span className="block sm:hidden">{navItem.icon}</span>
//             <span className="text-sm !cursor-pointer">{navItem.name}</span>
//           </Link>
//         ))}
//       </motion.div>
//     </AnimatePresence>
//   );
// };




// Code below work correctly for light and dark toggle
// "use client";
// import React, { useState } from "react";
// import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
// import Link from "next/link";
// import { cn } from "@/lib/utils";

// export const FloatingNav = ({
//   navItems,
//   className,
// }: {
//   navItems: {
//     name: string;
//     link: string;
//     icon?: JSX.Element;
//   }[];
//   className?: string;
// }) => {
//   const { scrollYProgress } = useScroll();
//   const [visible, setVisible] = useState(true);
//   const [theme, setTheme] = useState(typeof window !== "undefined" ? localStorage.theme || "light" : "light");

//   const toggleTheme = () => {
//     const newTheme = theme === "light" ? "dark" : "light";
//     document.documentElement.classList.toggle("dark", newTheme === "dark");
//     localStorage.setItem("theme", newTheme);
//     setTheme(newTheme);
//   };

//   useMotionValueEvent(scrollYProgress, "change", (current) => {
//     const direction = current - scrollYProgress.getPrevious()!;
//     setVisible(scrollYProgress.get() < 0.05 || direction < 0);
//   });

//   return (
//     <AnimatePresence mode="wait">
//       <motion.div
//         initial={{ opacity: 1, y: -100 }}
//         animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
//         transition={{ duration: 0.2 }}
//         className={cn(
//           "flex max-w-fit md:min-w-[70vw] lg:min-w-fit fixed z-[5000] top-10 inset-x-0 mx-auto px-10 py-5 rounded-lg border border-black/.1 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] items-center justify-center space-x-4",
//           className
//         )}
//         style={{
//           backdropFilter: "blur(16px) saturate(180%)",
//           backgroundColor: "rgba(17, 25, 40, 0.75)",
//           borderRadius: "12px",
//           border: "1px solid rgba(255, 255, 255, 0.125)",
//         }}
//       >
//         {navItems.map((navItem, idx) => (
//           <Link
//             key={`link=${idx}`}
//             href={navItem.link}
//             className={cn("relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500")}
//           >
//             <span className="block sm:hidden">{navItem.icon}</span>
//             <span className="text-sm !cursor-pointer">{navItem.name}</span>
//           </Link>
//         ))}
//         {/* <button onClick={toggleTheme} className="px-4 py-2 bg-gray-800 text-white dark:bg-white dark:text-black rounded">
//           Toggle {theme === "light" ? "Dark" : "Light"} Mode
//         </button> */}
//       </motion.div>
//     </AnimatePresence>
//   );
// };


// Correct without the light and dark mode modification
// "use client";
// import React, { useEffect, useState } from "react";
// import {
//   motion,
//   AnimatePresence,
//   useScroll,
//   useMotionValueEvent,
// } from "framer-motion";
// import Link from "next/link";
// import { cn } from "@/lib/utils";

// export const FloatingNav = ({
//   navItems,
//   className,
// }: {
//   navItems: {
//     name: string;
//     link: string;
//     icon?: JSX.Element;
//   }[];
//   className?: string;
// }) => {
//   const { scrollYProgress } = useScroll();
//   const [visible, setVisible] = useState(true);
//   const [theme, setTheme] = useState("light");

//   useEffect(() => {
//     if (
//       localStorage.theme === "dark" ||
//       (!("theme" in localStorage) &&
//         window.matchMedia("(prefers-color-scheme: dark)").matches)
//     ) {
//       document.documentElement.classList.add("dark");
//       setTheme("dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//       setTheme("light");
//     }
//   }, []);

//   const toggleTheme = () => {
//     if (theme === "light") {
//       document.documentElement.classList.add("dark");
//       localStorage.setItem("theme", "dark");
//       setTheme("dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//       localStorage.setItem("theme", "light");
//       setTheme("light");
//     }
//   };

//   useMotionValueEvent(scrollYProgress, "change", (current) => {
//     if (typeof current === "number") {
//       let direction = current - scrollYProgress.getPrevious()!;
//       if (scrollYProgress.get() < 0.05) {
//         setVisible(true);
//       } else {
//         if (direction < 0) {
//           setVisible(true);
//         } else {
//           setVisible(false);
//         }
//       }
//     }
//   });

//   return (
//     <AnimatePresence mode="wait">
//       <motion.div
//         initial={{
//           opacity: 1,
//           y: -100,
//         }}
//         animate={{
//           y: visible ? 0 : -100,
//           opacity: visible ? 1 : 0,
//         }}
//         transition={{
//           duration: 0.2,
//         }}
//         className={cn(
//           "flex max-w-fit md:min-w-[70vw] lg:min-w-fit fixed z-[5000] top-10 inset-x-0 mx-auto px-10 py-5 rounded-lg border border-black/.1 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] items-center justify-center space-x-4",
//           className
//         )}
//         style={{
//           backdropFilter: "blur(16px) saturate(180%)",
//           backgroundColor: "rgba(17, 25, 40, 0.75)",
//           borderRadius: "12px",
//           border: "1px solid rgba(255, 255, 255, 0.125)",
//         }}
//       >
//         {navItems.map((navItem, idx) => (
//           <Link
//             key={`link=${idx}`}
//             href={navItem.link}
//             className={cn(
//               "relative dark:text-neutral-50 items-center  flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
//             )}
//           >
//             <span className="block sm:hidden">{navItem.icon}</span>
//             <span className=" text-sm !cursor-pointer">{navItem.name}</span>
//           </Link>
//         ))}
//         <button
//           onClick={toggleTheme}
//           className="px-4 py-2 bg-gray-800 text-white dark:bg-white dark:text-black rounded"
//         >
//           Toggle {theme === "light" ? "Dark" : "Light"} Mode
//         </button>
//       </motion.div>
//     </AnimatePresence>
//   );
// };



// Correct code below
// "use client";
// import React, { useState } from "react";
// import {
//   motion,
//   AnimatePresence,
//   useScroll,
//   useMotionValueEvent,
// } from "framer-motion";
// import Link from "next/link";
// import { cn } from "@/lib/utils";

// export const FloatingNav = ({
//   navItems,
//   className,
// }: {
//   navItems: {
//     name: string;
//     link: string;
//     icon?: JSX.Element;
//   }[];
//   className?: string;
// }) => {
//   const { scrollYProgress } = useScroll();

//   // set true for the initial state so that nav bar is visible in the hero section
//   const [visible, setVisible] = useState(true);

//   useMotionValueEvent(scrollYProgress, "change", (current) => {
//     // Check if current is not undefined and is a number
//     if (typeof current === "number") {
//       let direction = current! - scrollYProgress.getPrevious()!;

//       if (scrollYProgress.get() < 0.05) {
//         // also set true for the initial state
//         setVisible(true);
//       } else {
//         if (direction < 0) {
//           setVisible(true);
//         } else {
//           setVisible(false);
//         }
//       }
//     }
//   });

//   return (
//     <AnimatePresence mode="wait">
//       <motion.div
//         initial={{
//           opacity: 1,
//           y: -100,
//         }}
//         animate={{
//           y: visible ? 0 : -100,
//           opacity: visible ? 1 : 0,
//         }}
//         transition={{
//           duration: 0.2,
//         }}
//         className={cn(
//           // change rounded-full to rounded-lg
//           // remove dark:border-white/[0.2] dark:bg-black bg-white border-transparent
//           // change  pr-2 pl-8 py-2 to px-10 py-5
//           "flex max-w-fit md:min-w-[70vw] lg:min-w-fit fixed z-[5000] top-10 inset-x-0 mx-auto px-10 py-5 rounded-lg border border-black/.1 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] items-center justify-center space-x-4",
//           className
//         )}
//         style={{
//           backdropFilter: "blur(16px) saturate(180%)",
//           backgroundColor: "rgba(17, 25, 40, 0.75)",
//           borderRadius: "12px",
//           border: "1px solid rgba(255, 255, 255, 0.125)",
//         }}
//       >
//         {navItems.map((navItem: any, idx: number) => (
//           <Link
//             key={`link=${idx}`}
//             href={navItem.link}
//             className={cn(
//               "relative dark:text-neutral-50 items-center  flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
//             )}
//           >
//             <span className="block sm:hidden">{navItem.icon}</span>
//             {/* add !cursor-pointer */}
//             {/* remove hidden sm:block for the mobile responsive */}
//             <span className=" text-sm !cursor-pointer">{navItem.name}</span>
//           </Link>
//         ))}
//       </motion.div>
//     </AnimatePresence>
//   );
// };
