import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="mb-4">
              <img src="/logo.png" alt="Arrow Cabs Logo" className="h-14 w-auto" />
            </div>
            <p className="mb-4">
              Your reliable transportation partner providing professional
              services for all your travel needs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-secondary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-secondary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-secondary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-secondary transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-secondary transition-colors" onClick={e => {
                e.preventDefault();
                document.getElementById('home')?.scrollIntoView({
                  behavior: 'smooth'
                });
              }}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-secondary transition-colors" onClick={e => {
                e.preventDefault();
                document.getElementById('about')?.scrollIntoView({
                  behavior: 'smooth'
                });
              }}>
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-secondary transition-colors" onClick={e => {
                e.preventDefault();
                document.getElementById('services')?.scrollIntoView({
                  behavior: 'smooth'
                });
              }}>
                  Services
                </a>
              </li>
              <li>
                <a href="#why-us" className="text-gray-300 hover:text-secondary transition-colors" onClick={e => {
                e.preventDefault();
                document.getElementById('why-us')?.scrollIntoView({
                  behavior: 'smooth'
                });
              }}>
                  Why Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-secondary transition-colors" onClick={e => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({
                  behavior: 'smooth'
                });
              }}>
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <address className="not-italic text-gray-300 space-y-3">
              <p>
                1267/1, Millagahawatta Road
                <br />
                Kottawa, Pannipitiya
              </p>
              <p>
                <a href="tel:0718707606" className="hover:text-secondary">
                  0718 707 606
                </a>
              </p>
              <p>
                <a href="mailto:info@arrowcabs.lk" className="hover:text-secondary">
                  info@arrowcabs.lk
                </a>
              </p>
            </address>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>&copy; {currentYear} Arrow Cabs. All rights reserved. Developed by <a className="text-fuchsia-300" href="">Econnexsl PVT LTD</a></p>
        </div>
      </div>
    </footer>;
};