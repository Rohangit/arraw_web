import React from 'react';
import { Award, Users, Clock } from 'lucide-react';
export const AboutSection = () => {
  return <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            About Us
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <img src="https://images.unsplash.com/photo-1551522435-a13afa10f103?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" alt="Arrow Cabs Team" className="rounded-lg shadow-lg w-full h-auto object-cover" />
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Your Trusted Transportation Partner Since 2018
            </h3>
            <p className="text-gray-600 mb-6">
              Arrow Cabs has been providing exceptional transportation services
              for the past 5 years. We take pride in our fleet of
              well-maintained vehicles and our team of professional drivers who
              are committed to providing safe, reliable, and comfortable
              transportation solutions.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-lg">
                <Award size={32} className="text-secondary mb-2" />
                <h4 className="font-semibold text-gray-800">5+ Years</h4>
                <p className="text-sm text-gray-600">Experience</p>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-lg">
                <Users size={32} className="text-secondary mb-2" />
                <h4 className="font-semibold text-gray-800">1000+</h4>
                <p className="text-sm text-gray-600">Happy Clients</p>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-lg">
                <Clock size={32} className="text-secondary mb-2" />
                <h4 className="font-semibold text-gray-800">24/7</h4>
                <p className="text-sm text-gray-600">Service</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};