
import React from 'react';

const steps = [
  {
    number: '01',
    title: 'Book Your Ride',
    description: 'Enter your pickup and destination details, choose your vehicle, and book in seconds.',
  },
  {
    number: '02',
    title: 'Meet Your Chauffeur',
    description: 'Receive your chauffeur\'s details beforehand. They will greet you at the specified pickup location.',
  },
  {
    number: '03',
    title: 'Enjoy the Journey',
    description: 'Sit back, relax, and enjoy a safe and comfortable ride to your destination.',
  },
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Effortless Travel in Three Steps</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {steps.map((step, index) => (
            <div key={index} className="relative p-8">
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 left-full transform -translate-y-1/2 w-1/2 -ml-4">
                  <div className="border-t-2 border-dashed border-gray-600"></div>
                </div>
              )}
              <div className="text-5xl font-bold text-brand-gold mb-4">{step.number}</div>
              <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
