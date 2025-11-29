import React from 'react';

const benefits = [
  {
    icon: <i className="fas fa-shield-alt text-brand-gold text-2xl"></i>,
    title: 'Peace of Mind',
    description: 'Travel with confidence knowing all our rides are carbon-neutral, and our chauffeurs are licensed and insured.',
  },
  {
    icon: <i className="fas fa-tags text-brand-gold text-2xl"></i>,
    title: 'All-Inclusive Rates',
    description: 'Your rate is confirmed before you book, and includes all taxes, fees, and gratuities.',
  },
  {
    icon: <i className="fas fa-user-tie text-brand-gold text-2xl"></i>,
    title: 'Professional Chauffeurs',
    description: 'Our chauffeurs are hand-picked for their experience, professionalism, and local knowledge.',
  },
  {
    icon: <i className="fas fa-car-side text-brand-gold text-2xl"></i>,
    title: 'Premium Fleet',
    description: 'Choose from a range of high-end, impeccably maintained vehicles for your journey.',
  },
];

const BenefitCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="flex items-start space-x-4">
    <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-lg bg-gray-800">
      {icon}
    </div>
    <div>
      <h3 className="text-lg font-bold text-white">{title}</h3>
      <p className="mt-1 text-gray-400">{description}</p>
    </div>
  </div>
);

const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-us" className="py-20 bg-brand-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-brand-gold font-semibold">THE BLACKLANEAUS DIFFERENCE</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-6">Uncompromising Quality and Reliability</h2>
            <p className="text-gray-400 mb-8">
              We are dedicated to providing a first-class experience from start to finish. Our commitment to excellence ensures every ride is a seamless journey tailored to your needs.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit) => (
                <BenefitCard key={benefit.title} {...benefit} />
              ))}
            </div>
          </div>
          <div className="hidden lg:block">
            <img 
              src="https://picsum.photos/seed/chauffeur2/600/700"
              alt="Chauffeur opening a car door" 
              className="rounded-lg shadow-2xl object-cover h-full w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;