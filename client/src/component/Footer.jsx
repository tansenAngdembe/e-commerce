import React, { useState } from 'react';
import { Send } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    e.preventDefault();
    // Handle newsletter subscription logic here
    setEmail('');
  };

  return (
    <footer className="bg-black text-white py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Subscribe Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">QuickKart</h2>
          <div className="space-y-2">
            <h3 className="font-medium">Subscribe</h3>
            <p className="text-sm text-gray-300">Get 10% off your first order</p>
            <form onSubmit={handleSubmit} className="flex items-center">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="bg-transparent border border-white/30 rounded-l px-4 py-2 flex-1 text-sm focus:outline-none focus:border-white"
              />
              <button
                type="submit"
                className="bg-white p-2 rounded-r hover:bg-gray-200 transition-colors"
              >
                <Send className="h-5 w-5 text-black" />
              </button>
            </form>
          </div>
        </div>

        {/* Support Section */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Support</h3>
          <div className="space-y-2 text-sm text-gray-300">
            <p>Basuki Marg, Purano</p>
            <p>Baneshwor</p>
            <p>Kathmandu 44600,</p>
            <p>Nepal.</p>
            <p className="pt-2">quickKart@gmail.com</p>
            <p>+977-1234567890</p>
          </div>
        </div>

        {/* Account Section */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Account</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#" className="hover:text-white transition-colors">My Account</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Login / Register</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Cart</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Wishlist</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Shop</a></li>
          </ul>
        </div>

        {/* Quick Link Section */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Quick Link</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Terms Of Use</a></li>
            <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/10 text-center text-sm text-gray-400">
        <p>© Copyright QuickKart 2025. All right reserved</p>
      </div>
    </footer>
  );
};

export default Footer;