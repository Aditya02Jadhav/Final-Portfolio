"use client";

import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import Navbar from '@/components/ui/Navbar';
import CaseStudies from '@/components/CaseStudies';
import CreativeProjects from '@/components/CreativeProject';
import SurveyForm from '@/components/SurveyForm';

const Home = () => {
  return (
    <main className="relative flex dark:bg-grey-100 justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      {/* <PreloaderAnimation /> */}
      <div id="scroll-container" className="max-w-7xl w-full">
        <Navbar />
        <Hero />
        <CaseStudies />
        <CreativeProjects />
        <SurveyForm />
        {/* <CoreCompetencies /> */}
        {/* Insert ParallaxSection below or above other sections */}
        {/* <ParallaxSection items={parallaxItems} /> */}
        {/* <RecentProjects /> */}
        {/* <HowCanIHelp /> */}
        <Footer />
      </div>
    </main>
  );
};

export default Home;





// "use client";

// import { useEffect } from 'react';
// import Scrollbar from 'smooth-scrollbar';
// // import PreloaderAnimation from '@/components/Preloader';
// import Hero from '@/components/Hero';
// import Footer from '@/components/Footer';
// import Navbar from '@/components/ui/Navbar';
// // import CoreCompetencies from '@/components/CoreCompetencies';
// // import ParallaxSection from '@/components/ParallaxSection'; // Import the ParallaxSection component
// import CaseStudies from '@/components/CaseStudies';
// import CreativeProjects from '@/components/CreativeProject';
// import SurveyForm from '@/components/SurveyForm';





// const Home = () => {
//   useEffect(() => {
//     const body = document.querySelector('body');
//     if (body) {
//         Scrollbar.init(body);
//     }
//   }, []);

//   // const parallaxItems = [
//   //   { id: 0, state: 'About', city: '', imageUrl: '/aj-logo-removebg-preview.png' },
//   //   { id: 1, state: 'Work', city: '', imageUrl: '/images/nyc.jpg' },
//   //   { id: 2, state: 'AI Art', city: '', imageUrl: '/images/chicago.jpg' },
//   //   { id: 3, state: 'Blogs', city: '', imageUrl: '/images/chicago.jpg' },
//   //   { id: 4, state: 'Blender', city: '', imageUrl: '/images/chicago.jpg' },
//   //   // Add more items as needed
//   // ];

//   return (
//     <main className="relative flex dark:bg-grey-100 justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
//       {/* <PreloaderAnimation /> */}
//       <div id="scroll-container" className="max-w-7xl w-full">
//         <Navbar />
//         <Hero />
//         <CaseStudies />
//         <CreativeProjects />
//         <SurveyForm />
//         {/* <CoreCompetencies /> */}
//         {/* Insert ParallaxSection below or above other sections */}
//         {/* <ParallaxSection items={parallaxItems} /> */}
//         {/* <RecentProjects /> */}
//         {/* <HowCanIHelp /> */}
//         <Footer />
//       </div>
//     </main>
//   );
// };

// export default Home;
