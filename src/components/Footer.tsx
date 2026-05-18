import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-gray-400">
      <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="col-span-2 lg:col-span-1 mb-8 md:mb-0">
            <h3 className="text-xl font-bold text-brand-gold tracking-wider mb-4">BLACKLANEAUS</h3>
            <p className="text-sm">Your Australian professional chauffeur service.</p>
            <div className="mt-6 mb-4">
              <p className="text-sm"><strong>Phone:</strong> +61 417 833 137</p>
              <p className="text-sm"><strong>Email:</strong> info@blacklanechauffeurs.com.au</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors"><i className="fab fa-twitter fa-lg"></i></a>
              <a href="#" className="hover:text-white transition-colors"><i className="fab fa-facebook-f fa-lg"></i></a>
              <a href="#" className="hover:text-white transition-colors"><i className="fab fa-instagram fa-lg"></i></a>
              <a href="#" className="hover:text-white transition-colors"><i className="fab fa-linkedin-in fa-lg"></i></a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="hover:text-brand-gold transition-colors">Airport Transfer</a></li>
              <li><a href="#services" className="hover:text-brand-gold transition-colors">City-to-City</a></li>
              <li><a href="#services" className="hover:text-brand-gold transition-colors">Hourly Service</a></li>
              <li><a href="#fleet" className="hover:text-brand-gold transition-colors">Fleet</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#why-us" className="hover:text-brand-gold transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Press</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-brand-gold transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
           <div className="col-span-2 md:col-span-1">
             <h4 className="font-semibold text-white mb-4">Get the App</h4>
             <div className="space-y-3">
              <a href="#" className="inline-block"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/2560px-Download_on_the_App_Store_Badge.svg.png" alt="Download on the App Store" className="h-10"/></a>
              <a href="#" className="inline-block"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png" alt="Get it on Google Play" className="h-10"/></a>
             </div>
           </div>
        </div>
        <div className="mt-16 pt-8 border-t border-gray-800 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} BLACKLANEAUS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
