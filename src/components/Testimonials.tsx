
import React from 'react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    quote: 'The service was impeccable from start to finish. The chauffeur was professional, courteous, and the vehicle was pristine. Highly recommended for business travel.',
    author: 'Sarah L.',
    location: 'New York, USA',
  },
  {
    quote: 'Our airport transfer was seamless. The flight tracking meant our driver was waiting for us despite a delay. It took all the stress out of arriving in a new city.',
    author: 'David C.',
    location: 'London, UK',
  },
  {
    quote: 'We booked the hourly service for a special occasion and it was worth every penny. It made our night truly unforgettable. The definition of luxury.',
    author: 'Michelle T.',
    location: 'Paris, France',
  },
];

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
  <div className="bg-white border border-gray-200 p-8 rounded-lg h-full flex flex-col justify-between shadow-md">
    <div>
      <div className="text-black text-2xl mb-4">
        <i className="fas fa-quote-left"></i>
      </div>
      <p className="text-gray-700 italic mb-6">"{testimonial.quote}"</p>
    </div>
    <div>
      <p className="font-bold text-black">{testimonial.author}</p>
      <p className="text-sm text-gray-500">{testimonial.location}</p>
    </div>
  </div>
);

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black font-serif">What Our Clients Say</h2>
          <p className="text-gray-700 mt-4 max-w-2xl mx-auto">
            Our reputation is built on the satisfaction and trust of our valued clients.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
