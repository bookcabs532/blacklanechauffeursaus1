
import React, { useState } from 'react';

type RideType = 'one-way' | 'hourly';

const BookingForm: React.FC = () => {
  const [rideType, setRideType] = useState<RideType>('one-way');

  return (
    <div id="booking" className="bg-white bg-opacity-95 p-6 md:p-8 rounded-lg shadow-2xl w-full border border-gray-200">
      <div className="flex border-b border-gray-300 mb-6">
        <button
          onClick={() => setRideType('one-way')}
          className={`px-4 py-3 text-sm md:text-base font-semibold transition-colors w-1/2 ${
            rideType === 'one-way'
              ? 'text-black border-b-2 border-black'
              : 'text-gray-600 hover:text-black'
          }`}
        >
          One-way
        </button>
        <button
          onClick={() => setRideType('hourly')}
          className={`px-4 py-3 text-sm md:text-base font-semibold transition-colors w-1/2 ${
            rideType === 'hourly'
              ? 'text-black border-b-2 border-black'
              : 'text-gray-600 hover:text-black'
          }`}
        >
          Hourly
        </button>
      </div>

      <form className="grid grid-cols-1 lg:grid-cols-5 gap-4 items-end">
        {rideType === 'one-way' ? (
          <>
            <div className="lg:col-span-2">
              <label htmlFor="pickup" className="block text-xs font-medium text-gray-700 mb-1">PICK-UP</label>
              <input type="text" id="pickup" placeholder="From: Airport, Hotel, Address" className="w-full bg-white border border-gray-300 rounded-md p-3 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black" />
            </div>
            <div className="lg:col-span-2">
              <label htmlFor="dropoff" className="block text-xs font-medium text-gray-700 mb-1">DROP-OFF</label>
              <input type="text" id="dropoff" placeholder="To: Airport, Hotel, Address" className="w-full bg-white border border-gray-300 rounded-md p-3 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black" />
            </div>
          </>
        ) : (
          <>
            <div className="lg:col-span-3">
              <label htmlFor="pickup-hourly" className="block text-xs font-medium text-gray-700 mb-1">PICK-UP</label>
              <input type="text" id="pickup-hourly" placeholder="From: Airport, Hotel, Address" className="w-full bg-white border border-gray-300 rounded-md p-3 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black" />
            </div>
            <div>
              <label htmlFor="hours" className="block text-xs font-medium text-gray-700 mb-1">HOURS</label>
              <select id="hours" className="w-full bg-white border border-gray-300 rounded-md p-3 text-black focus:outline-none focus:ring-2 focus:ring-black">
                {[...Array(12)].map((_, i) => <option key={i+1} value={i+1}>{i+1} hour{i > 0 ? 's' : ''}</option>)}
              </select>
            </div>
          </>
        )}
        <div className="lg:col-span-1">
          <button type="submit" className="w-full bg-black text-white font-bold py-3 px-4 rounded-md hover:bg-gray-700 transition-colors">
            See Prices
          </button>
        </div>
      </form>
      <div className="mt-4">
        <input type="datetime-local" className="w-full lg:w-auto bg-white border border-gray-300 rounded-md p-3 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black" defaultValue={new Date(Date.now() + 60 * 60 * 1000).toISOString().slice(0, 16)} />
      </div>
    </div>
  );
};

export default BookingForm;
