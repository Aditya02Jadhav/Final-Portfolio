import React from 'react';
import ContactPage from '@/components/ContactPage';

const Contact = () => {
  return (
    <main className="relative flex dark:bg-grey-100 justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div id="scroll-container" className="max-w-7xl w-full">
        <ContactPage />
      </div>
    </main>
  );
};

export default Contact;
