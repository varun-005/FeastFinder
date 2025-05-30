import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../utils/UserContext";

const User = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    // Save username to context and local storage
    localStorage.setItem('userName', username);
    navigate("/main");
  };

  const handleSubmit = (event) => { event.preventDefault(); handleLogin(); };

  return (
    <div>
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center">
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-xl p-8 shadow-xl max-w-md w-full space-y-8 transform hover:scale-105 transition-all duration-500 ease-in-out">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-orange-600 dark:text-orange-400 mb-2 animate-fade-in">FeastFinder</h2>
            <p className="text-gray-600 dark:text-gray-300">Your Ultimate Food Companion</p>
          </div>
          
          <div className="flex justify-center">
            <div className="w-24 h-24 relative animate-float">
              <svg className="w-full h-full text-orange-500 dark:text-orange-400 animate-spin-slow" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12,3L4,9A2,2 0 0,0 3,11V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V11A2,2 0 0,0 20,9L12,3M12,5.5L18,10V19H6V10L12,5.5M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />
              </svg>
            </div>
          </div>
    
          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your name"
                className="w-full px-4 py-3 border border-orange-200 dark:border-orange-700 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-300"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transform hover:-translate-y-1 transition-all duration-300"
            >
              Start Your Food Journey
            </button>
          </form>
        </div>
      </div>
    
      <style jsx="true">
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
          }
          @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-float { animation: float 3s ease-in-out infinite; }
          .animate-spin-slow { animation: spin-slow 8s linear infinite; }
          .animate-fade-in { animation: fade-in 1s ease-out; }
        `}
      </style>
    </div>
  );
};

export default User;
