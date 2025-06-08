import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">

      <main className="flex-grow">
        {/* Hero section with logo */}
        <section className="flex flex-col items-center justify-center text-center py-20 bg-gray-100">
          <img
            src="/images/placeholder-logo-bg.png"
            alt="Background placeholder"
            className="absolute inset-0 object-cover w-full h-full opacity-10 z-0"
          />
          <div className="relative z-10">
            <h1 className="text-5xl font-bold mb-4">JM</h1>
            <h2 className="text-xl font-medium">Remodeling & Custom Framing</h2>
          </div>
        </section>

        {/* Company Summary */}
        <section className="px-6 md:px-20 py-12 text-center">
          <h3 className="text-blue-600 text-lg font-semibold mb-2">Distinguished Craft</h3>
          <p className="text-gray-700 max-w-2xl mx-auto">
            With over 20+ years of experience in residential construction, JM Construction brings expertise, precision, and a commitment to quality that sets us apart.
          </p>
        </section>
      </main>

    </div>
  );
};

export default Home;
