import React from 'react';
import { useNavigate } from 'react-router';
import { AlertTriangle, WifiOff, PhoneOutgoing } from 'lucide-react';

const Error = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white px-6">
      <div className="bg-gray-700 p-8 rounded-2xl shadow-lg flex flex-col items-center max-w-md text-center">
        <AlertTriangle size={48} className="text-yellow-400 mb-4" />
        {/* <PhoneOutgoing className='text-red-800' /> */}
        <h1 className="text-4xl font-bold mb-2">Oops! Something went wrong</h1>
        <p className="text-gray-300 mb-6">
          We couldn’t process your request. Please check back later or return to the homepage.
        </p>
        <button
          onClick={() => navigate('/')}
          className="px-6 py-2 rounded-full bg-yellow-400 text-gray-900 font-semibold hover:bg-yellow-300 transition duration-300"
        >
          Go Home
        </button>
      </div>
      <p className="mt-8 text-sm text-gray-400 tracking-wide">
        ⚙️ Powered by automation & reliability – Nexgen Automations
      </p>
    </div>
  );
};

export default Error;
