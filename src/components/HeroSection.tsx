import React from 'react';
import { PhoneIcon } from 'lucide-react';
export const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="home" className="relative bg-primary text-white py-20 md:py-32">
      <div className="absolute inset-0 bg-black opacity-50 z-0" style={{
      backgroundImage: "url('https://images.unsplash.com/photo-1590362891991-f776e747a588?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      mixBlendMode: 'multiply'
    }}></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Your Reliable Transportation Partner
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            From cars to lorries, we provide professional transportation
            services for all your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button onClick={scrollToContact} className="bg-secondary hover:bg-yellow-600 text-white px-6 py-3 rounded-md font-medium text-lg transition-colors flex items-center justify-center">
              Book Now
            </button>
            <a href="tel:0718707606" className="bg-white hover:bg-gray-100 text-primary px-6 py-3 rounded-md font-medium text-lg transition-colors flex items-center justify-center">
              <PhoneIcon size={20} className="mr-2" />
              0718 707 606
            </a>
          </div>
        </div>
      </div>
    </section>;
};