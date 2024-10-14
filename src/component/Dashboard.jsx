import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate(); // Initialize useNavigate for navigation

  const handleLogout = () => {
    navigate('/login'); // Navigate to the login page
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      <nav className="w-full lg:w-64 bg-gray-800 text-white p-4 flex-shrink-0">
        <div className="flex flex-col lg:flex-row items-center justify-between bg-gray-900 rounded-lg shadow-md p-2">
          {/* Company Name Section */}
          <div className="flex items-center justify-center w-full lg:w-24 h-12 text-lg font-semibold text-white bg-gray-900 p-3 rounded-md shadow m-2">
            TechCorp
          </div>
          <div className="flex items-center justify-center w-full lg:w-48 h-12 bg-gray-900 rounded-md shadow m-2">
            <img
              src="/cartoon.png"
              alt="User Avatar"
              className="w-10 h-10 rounded-full border-2 border-indigo-500"
            />
          </div>
        </div>

        {/* Sidebar Menu */}
        <ul className="flex flex-col items-center justify-center space-y-4 flex-grow mt-10"> {/* Centered the items vertically and horizontally */}
          <li>
            <a href="#" className="hover:bg-gray-700 p-2 block rounded text-center w-full">
              Dashboard
            </a>
          </li>
          <li>
            <a href="#" className="hover:bg-gray-700 p-2 block rounded text-center w-full">
              Profile
            </a>
          </li>
          <li>
            <a href="#" className="hover:bg-gray-700 p-2 block rounded text-center w-full">
              Settings
            </a>
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <div className="flex-1 p-6 lg:p-10 bg-gray-100">
        <header className="flex flex-col lg:flex-row items-center justify-between">
          <h1 className="text-2xl lg:text-3xl font-bold mb-4 lg:mb-0">
            Welcome, User
          </h1>
          <div>
            <button
              onClick={handleLogout} // Call handleLogout on button click
              className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-500 transition"
            >
              Logout
            </button>
          </div>
        </header>

        {/* Content goes here */}
        <div className="flex flex-col items-center justify-center h-full"> {/* Centering the content vertically and horizontally */}
          <p className="text-lg text-gray-700">This is where dynamic content will be displayed.</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
