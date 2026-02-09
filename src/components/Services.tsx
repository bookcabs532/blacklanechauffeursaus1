import React from 'react';

const services = [
  {
    icon: <i className="fas fa-plane-departure text-black text-3xl"></i>,
    title: 'Airport Transfers',
    description: 'Reliable and punctual transfers to and from all major airports. Flight tracking included.',
  },
  {
    icon: <i className="fas fa-road text-black text-3xl"></i>,
    title: 'City-to-City',
    description: 'Travel comfortably and productively between cities in our premium vehicles.',
  },
  {
    icon: <i className="fas fa-clock text-black text-3xl"></i>,
    title: 'Hourly Service',
    description: 'Book a chauffeur by the hour for maximum flexibility, perfect for business meetings or events.',
  },
];

const ServiceCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="bg-white border border-gray-200 p-8 rounded-lg text-center transform hover:-translate-y-2 transition-transform duration-300 shadow-md">
    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-gray-100 mx-auto mb-6">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-2 text-black">{title}</h3>
    <p className="text-gray-700">{description}</p>
  </div>
);


const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black font-serif">Our Australian Chauffeur Service</h2>
          <p className="text-gray-700 mt-4 max-w-2xl mx-auto">
            Wherever your journey takes you, count on our professional chauffeurs for a safe and comfortable ride.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;