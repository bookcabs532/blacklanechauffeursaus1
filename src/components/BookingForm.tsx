
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

type RideType = 'one-way' | 'hourly';

// Initialize EmailJS with your public key
emailjs.init('mlywsDt9Mjrk166Dy');

const BookingForm: React.FC = () => {
  const [rideType, setRideType] = useState<RideType>('one-way');
  const [formData, setFormData] = useState({
    pickup: '',
    dropoff: '',
    pickup_hourly: '',
    hours: '1',
    datetime: new Date(Date.now() + 60 * 60 * 1000).toISOString().slice(0, 16),
    name: '',
    email: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const templateParams = {
        ride_type: rideType,
        pickup: rideType === 'one-way' ? formData.pickup : formData.pickup_hourly,
        dropoff: formData.dropoff,
        hours: rideType === 'hourly' ? formData.hours : 'N/A',
        datetime: formData.datetime,
        name: formData.name,
        email: formData.email,
        phone: formData.phone
      };

      await emailjs.send(
        'service_7h348ek', // Service ID - replace with actual service ID
        'template_6i8d9ea', // Template ID
        templateParams
      );

      setSubmitMessage('Booking request sent successfully! We will contact you soon.');
      // Reset form
      setFormData({
        pickup: '',
        dropoff: '',
        pickup_hourly: '',
        hours: '1',
        datetime: new Date(Date.now() + 60 * 60 * 1000).toISOString().slice(0, 16),
        name: '',
        email: '',
        phone: ''
      });
      setRideType('one-way');
    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitMessage('Error sending booking request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

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

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Ride details */}
        {rideType === 'one-way' ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div>
              <label htmlFor="pickup" className="block text-xs font-medium text-gray-300 mb-1">PICK-UP</label>
              <input
                type="text"
                id="pickup"
                name="pickup"
                value={formData.pickup}
                onChange={handleInputChange}
                placeholder="From: Airport, Hotel, Address"
                className="w-full bg-gray-800 border border-gray-600 rounded-md p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-gold"
                required
              />
            </div>
            <div>
              <label htmlFor="dropoff" className="block text-xs font-medium text-gray-300 mb-1">DROP-OFF</label>
              <input
                type="text"
                id="dropoff"
                name="dropoff"
                value={formData.dropoff}
                onChange={handleInputChange}
                placeholder="To: Airport, Hotel, Address"
                className="w-full bg-gray-800 border border-gray-600 rounded-md p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-gold"
                required
              />
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div>
              <label htmlFor="pickup-hourly" className="block text-xs font-medium text-gray-300 mb-1">PICK-UP</label>
              <input
                type="text"
                id="pickup-hourly"
                name="pickup_hourly"
                value={formData.pickup_hourly}
                onChange={handleInputChange}
                placeholder="From: Airport, Hotel, Address"
                className="w-full bg-gray-800 border border-gray-600 rounded-md p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-gold"
                required
              />
            </div>
            <div>
              <label htmlFor="hours" className="block text-xs font-medium text-gray-300 mb-1">HOURS</label>
              <select
                id="hours"
                name="hours"
                value={formData.hours}
                onChange={handleInputChange}
                className="w-full bg-gray-800 border border-gray-600 rounded-md p-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-gold"
              >
                {[...Array(12)].map((_, i) => (
                  <option key={i+1} value={i+1}>{i+1} hour{i > 0 ? 's' : ''}</option>
                ))}
              </select>
            </div>
          </div>
        )}

        {/* DateTime */}
        <div>
          <label htmlFor="datetime" className="block text-xs font-medium text-gray-300 mb-1">DATE & TIME</label>
          <input
            type="datetime-local"
            id="datetime"
            name="datetime"
            value={formData.datetime}
            onChange={handleInputChange}
            className="w-full lg:w-auto bg-gray-800 border border-gray-600 rounded-md p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-gold"
            required
          />
        </div>

        {/* Contact information */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div>
            <label htmlFor="name" className="block text-xs font-medium text-gray-300 mb-1">FULL NAME</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Your full name"
              className="w-full bg-gray-800 border border-gray-600 rounded-md p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-gold"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-xs font-medium text-gray-300 mb-1">EMAIL</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="your.email@example.com"
              className="w-full bg-gray-800 border border-gray-600 rounded-md p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-gold"
              required
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-xs font-medium text-gray-300 mb-1">PHONE</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="+61 417 833 137"
              className="w-full bg-gray-800 border border-gray-600 rounded-md p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-gold"
              required
            />
          </div>
        </div>

        {/* Submit button and message */}
        <div className="space-y-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-brand-gold text-brand-dark font-bold py-3 px-4 rounded-md hover:bg-yellow-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Sending...' : 'Send Booking Request'}
          </button>

          {submitMessage && (
            <div className={`p-3 rounded-md text-sm ${submitMessage.includes('successfully') ? 'bg-green-800 text-green-200' : 'bg-red-800 text-red-200'}`}>
              {submitMessage}
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
