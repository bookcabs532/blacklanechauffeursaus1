
import React from 'react';
import BookingForm from './BookingForm';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative h-[90vh] min-h-[600px] flex items-center justify-center text-center text-black">
      <div className="absolute inset-0 bg-white opacity-70 z-10"></div>
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/seed/chauffeur/1920/1080"
          alt="Luxury car in a city at night"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-4">
          Your Professional Chauffeur Service
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mb-8">
          Arrive in style, on time, every time. Experience the ultimate in luxury and reliability.
        </p>
        <div className="w-full max-w-4xl">
          <BookingForm />
        </div>
      </div>
    </section>
  );
};

export default Hero;
