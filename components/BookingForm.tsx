
import React, { useState } from 'react';

type RideType = 'one-way' | 'hourly';

const BookingForm: React.FC = () => {
  const [rideType, setRideType] = useState<RideType>('one-way');

  return (
    <div id="booking" className="bg-brand-dark bg-opacity-80 p-6 md:p-8 rounded-lg shadow-2xl w-full">
      <div className="flex border-b border-gray-700 mb-6">
        <button
          onClick={() => setRideType('one-way')}
          className={`px-4 py-3 text-sm md:text-base font-semibold transition-colors w-1/2 ${
            rideType === 'one-way'
              ? 'text-brand-gold border-b-2 border-brand-gold'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          One-way
        </button>
        <button
          onClick={() => setRideType('hourly')}
          className={`px-4 py-3 text-sm md:text-base font-semibold transition-colors w-1/2 ${
            rideType === 'hourly'
              ? 'text-brand-gold border-b-2 border-brand-gold'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          Hourly
        </button>
      </div>

      <form className="grid grid-cols-1 lg:grid-cols-5 gap-4 items-end">
        {rideType === 'one-way' ? (
          <>
            <div className="lg:col-span-2">
              <label htmlFor="pickup" className="block text-xs font-medium text-gray-300 mb-1">PICK-UP</label>
              <input type="text" id="pickup" placeholder="From: Airport, Hotel, Address" className="w-full bg-gray-800 border border-gray-600 rounded-md p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-gold" />
            </div>
            <div className="lg:col-span-2">
              <label htmlFor="dropoff" className="block text-xs font-medium text-gray-300 mb-1">DROP-OFF</label>
              <input type="text" id="dropoff" placeholder="To: Airport, Hotel, Address" className="w-full bg-gray-800 border border-gray-600 rounded-md p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-gold" />
            </div>
          </>
        ) : (
          <>
            <div className="lg:col-span-3">
              <label htmlFor="pickup-hourly" className="block text-xs font-medium text-gray-300 mb-1">PICK-UP</label>
              <input type="text" id="pickup-hourly" placeholder="From: Airport, Hotel, Address" className="w-full bg-gray-800 border border-gray-600 rounded-md p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-gold" />
            </div>
            <div>
              <label htmlFor="hours" className="block text-xs font-medium text-gray-300 mb-1">HOURS</label>
              <select id="hours" className="w-full bg-gray-800 border border-gray-600 rounded-md p-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-gold">
                {[...Array(12)].map((_, i) => <option key={i+1} value={i+1}>{i+1} hour{i > 0 ? 's' : ''}</option>)}
              </select>
            </div>
          </>
        )}
        <div className="lg:col-span-1">
          <button type="submit" className="w-full bg-brand-gold text-brand-dark font-bold py-3 px-4 rounded-md hover:bg-yellow-300 transition-colors">
            See Prices
          </button>
        </div>
      </form>
      <div className="mt-4">
        <input type="datetime-local" className="w-full lg:w-auto bg-gray-800 border border-gray-600 rounded-md p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-gold" defaultValue={new Date(Date.now() + 60 * 60 * 1000).toISOString().slice(0, 16)} />
      </div>
    </div>
  );
};

export default BookingForm;
