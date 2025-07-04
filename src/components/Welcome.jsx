import React from 'react';

const Welcome = () => {
  const handleScroll = () => {
    const section = document.getElementById('input-sec');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="flex flex-col page-pt items-center justify-center min-h-[30vh] bg-gradient-to-br from-blue-50 to-blue-100 px-4 py-12">
      <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700 mb-4 text-center drop-shadow">
        Welcome to ShoppyGlobe
      </h1>
      <button
        onClick={handleScroll}
        className="inline-block cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow transition-colors duration-200"
      >
        Start Shopping
      </button>
    </section>
  );
};

export default Welcome;