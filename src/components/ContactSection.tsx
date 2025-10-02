import React from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
export const ContactSection = () => {
  return <section id="contact" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Contact Us
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            Get in touch with us for bookings and inquiries. We're available
            24/7 to assist you.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Get In Touch
            </h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <MapPin className="w-6 h-6 text-secondary" />
                </div>
                <div className="ml-4">
                  <h4 className="font-medium text-gray-800">Address</h4>
                  <p className="text-gray-600">
                    1267/1, Millagahawatta Road
                    <br />
                    Kottawa
                    <br />
                    Pannipitiya
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Phone className="w-6 h-6 text-secondary" />
                </div>
                <div className="ml-4">
                  <h4 className="font-medium text-gray-800">Hot Line</h4>
                  <p className="text-gray-600">
                    <a href="tel:0718707606" className="hover:text-secondary">
                      0718 707 606
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Mail className="w-6 h-6 text-secondary" />
                </div>
                <div className="ml-4">
                  <h4 className="font-medium text-gray-800">Email</h4>
                  <p className="text-gray-600">
                    <a href="mailto:info@arrowcabs.lk" className="hover:text-secondary">
                      info@arrowcabs.lk
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Send Message
            </h3>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 mb-2">
                  Name
                </label>
                <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent" placeholder="Your Name" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  Email
                </label>
                <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent" placeholder="Your Email" />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block text-gray-700 mb-2">
                  Phone
                </label>
                <input type="tel" id="phone" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent" placeholder="Your Phone" />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  Message
                </label>
                <textarea id="message" rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent" placeholder="Your Message"></textarea>
              </div>
              <button type="submit" className="w-full bg-secondary hover:bg-yellow-600 text-white font-medium py-2 px-4 rounded-md transition-colors flex items-center justify-center">
                <Send size={18} className="mr-2" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>;
};