
import React from 'react';
import { Vehicle } from '../types';

const fleet: Vehicle[] = [
  {
    className: 'Business Class',
    name: 'Mercedes-Benz E-Class or similar',
    description: 'The perfect choice for business travel and airport transfers, combining comfort and style.',
    imageUrl: 'https://www.motortrend.com/uploads/2023/04/2024-Mercedes-Benz-E-Class-sedan-exterior-6.jpg',
    passengers: 3,
    luggage: 2,
  },
  {
    className: 'Luxury SUV',
    name: 'Audi Q7 or similar',
    description: 'Spacious and versatile, ideal for group travel, families, and those with extra luggage.',
    imageUrl: 'https://picsum.photos/seed/audi-q7/800/600',
    passengers: 5,
    luggage: 4,
  },
  {
    className: 'First Class',
    name: 'Mercedes-Benz S-Class or similar',
    description: 'Experience the pinnacle of luxury and sophistication. The ultimate choice for special occasions.',
    imageUrl: 'https://picsum.photos/seed/mercedes-s-class/800/600',
    passengers: 3,
    luggage: 2,
  },
];

const FleetCard: React.FC<{ vehicle: Vehicle }> = ({ vehicle }) => (
  <div className="bg-white border border-gray-200 rounded-lg overflow-hidden group shadow-md">
    <div className="overflow-hidden">
      <img src={vehicle.imageUrl} alt={vehicle.name} className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500" />
    </div>
    <div className="p-6">
      <h3 className="text-2xl font-bold text-black">{vehicle.className}</h3>
      <p className="text-black mb-4">{vehicle.name}</p>
      <p className="text-gray-700 mb-6">{vehicle.description}</p>
      <div className="flex items-center space-x-6 text-gray-700">
        <div className="flex items-center">
          <i className="fas fa-users mr-2"></i>
          <span>{vehicle.passengers}</span>
        </div>
        <div className="flex items-center">
          <i className="fas fa-suitcase-rolling mr-2"></i>
          <span>{vehicle.luggage}</span>
        </div>
      </div>
    </div>
  </div>
);


const Fleet: React.FC = () => {
  return (
    <section id="fleet" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black font-serif">Our Premium Fleet</h2>
          <p className="text-gray-700 mt-4 max-w-2xl mx-auto">
            Travel in the comfort and safety of our meticulously maintained, high-spec vehicles.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {fleet.map((vehicle) => (
            <FleetCard key={vehicle.className} vehicle={vehicle} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Fleet;