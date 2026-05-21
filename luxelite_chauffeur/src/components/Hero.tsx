
import React from 'react';
import BookingForm from './BookingForm';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center text-center text-black overflow-y-auto" style={{ minHeight: '-webkit-fill-available' }}>
      <div className="absolute inset-0 bg-white opacity-70 z-10"></div>
      <div className="absolute inset-0 z-0">
        <img
          src="/Background.JPG"
          alt="Luxury car in a city at night"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col items-center">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight mb-4 font-serif">
          Australia's Chauffeur Service
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mb-8">
			Experience the Luxelite difference with premium transfers, tours and event transport.
        </p>
        <div className="w-full max-w-4xl">
          <BookingForm />
        </div>
      </div>
    </section>
  );
};

export default Hero;
