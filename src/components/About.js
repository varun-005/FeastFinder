import { useOutletContext } from "react-router-dom";
import React from "react";



const About = () => {
  const [darkMode] = useOutletContext() || [false];

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'} transition-colors duration-300`}>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">Delivering happiness, one meal at a time</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="rounded-xl overflow-hidden shadow-lg transform transition-transform duration-500 hover:scale-105">
            <img 
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
              alt="Delicious Food" 
              className="w-full h-64 object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-4">Our Story</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Founded in 2025, our food delivery platform was born from a simple idea: everyone deserves access to delicious food from their favorite local restaurants, delivered quickly and reliably.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              What started as a small team of food enthusiasts has grown into a nationwide service connecting customers with the best restaurants in their area.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Our Mission</h2>
          <div className="bg-orange-50 dark:bg-gray-800 p-8 rounded-xl shadow-md">
            <p className="text-xl text-center text-gray-700 dark:text-gray-300 italic">
              "To transform the way people experience food delivery by providing unparalleled convenience, quality, and service while supporting local restaurants and communities."
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Why Choose Us?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className={`p-6 rounded-xl shadow-md ${darkMode ? 'bg-gray-800' : 'bg-white'} transition-transform duration-300 hover:-translate-y-2`}>
              <div className="text-orange-500 text-4xl mb-4">🍔</div>
              <h3 className="text-xl font-bold mb-2">Wide Selection</h3>
              <p className="text-gray-700 dark:text-gray-300">From local favorites to international cuisine, we offer thousands of restaurants to choose from.</p>
            </div>
            <div className={`p-6 rounded-xl shadow-md ${darkMode ? 'bg-gray-800' : 'bg-white'} transition-transform duration-300 hover:-translate-y-2`}>
              <div className="text-orange-500 text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-2">Fast Delivery</h3>
              <p className="text-gray-700 dark:text-gray-300">Our efficient delivery network ensures your food arrives hot and fresh, every time.</p>
            </div>
            <div className={`p-6 rounded-xl shadow-md ${darkMode ? 'bg-gray-800' : 'bg-white'} transition-transform duration-300 hover:-translate-y-2`}>
              <div className="text-orange-500 text-4xl mb-4">💯</div>
              <h3 className="text-xl font-bold mb-2">Quality Guaranteed</h3>
              <p className="text-gray-700 dark:text-gray-300">We partner only with the best restaurants that meet our strict quality standards.</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Journey</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            We're constantly evolving and improving our service. Whether you're a food lover, restaurant owner, or potential team member, we'd love to have you be part of our story.
          </p>
          <button className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg transition-colors duration-300 transform hover:scale-105">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
