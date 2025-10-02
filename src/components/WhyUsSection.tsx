import React from 'react';
import { Shield, Clock, ThumbsUp, DollarSign } from 'lucide-react';
export const WhyUsSection = () => {
  const reasons = [{
    id: 1,
    icon: <Shield className="w-12 h-12 text-secondary" />,
    title: 'Safety First',
    description: 'All our vehicles undergo regular maintenance and safety checks. Our drivers are professionally trained.'
  }, {
    id: 2,
    icon: <Clock className="w-12 h-12 text-secondary" />,
    title: 'Punctual Service',
    description: 'We value your time and ensure our services are always on schedule, every time.'
  }, {
    id: 3,
    icon: <ThumbsUp className="w-12 h-12 text-secondary" />,
    title: 'Experienced Team',
    description: 'With 5 years in the industry, our team has the expertise to handle all transportation needs.'
  }, {
    id: 4,
    icon: <DollarSign className="w-12 h-12 text-secondary" />,
    title: 'Competitive Pricing',
    description: 'Quality transportation services at reasonable rates with no hidden charges.'
  }];
  return <section id="why-us" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Why Choose Us
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            We strive to provide the best transportation experience with our
            professional services.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map(reason => <div key={reason.id} className="p-6 border border-gray-200 rounded-lg hover:border-secondary transition-colors">
              <div className="mb-4">{reason.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {reason.title}
              </h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>)}
        </div>
      </div>
    </section>;
};