import React from 'react';
import { Car, Truck, Bus, Package } from 'lucide-react';
export const ServicesSection = () => {
  const services = [{
    id: 1,
    icon: <Car size={48} className="text-secondary mb-4" />,
    title: 'Cars',
    description: 'Comfortable sedans and premium cars for personal and business travel needs.'
  }, {
    id: 2,
    icon: <Bus size={48} className="text-secondary mb-4" />,
    title: 'Vans',
    description: 'Spacious vans ideal for group travel, airport transfers, and family outings.'
  }, {
    id: 3,
    icon: <Bus size={48} className="text-secondary mb-4" />,
    title: 'Bus',
    description: 'Large capacity buses perfect for corporate events, school trips, and large group transportation.'
  }, {
    id: 4,
    icon: <Truck size={48} className="text-secondary mb-4" />,
    title: 'Lorry',
    description: 'Reliable lorry services for moving goods, furniture, and commercial cargo transportation.'
  }];
  return <section id="services" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            We offer a comprehensive range of transportation solutions to meet
            all your needs.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map(service => <div key={service.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>)}
        </div>
      </div>
    </section>;
};