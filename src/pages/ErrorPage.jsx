import React from 'react';
import { NavLink } from 'react-router-dom';

export default function ErrorPage() {
  return (
    <div className="bg-zinc-500 w-screen h-screen flex items-center justify-center">
      <div className="text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-6xl sm:text-8xl font-bold text-black">404</h1>
        <p className="text-lg sm:text-2xl mt-4 text-white">UH OH! You're Lost.</p>
        <p className="text-sm sm:text-xl mt-2 text-white max-w-xl mx-auto">
          The page you are looking for doesn't exist. Go back to the home page by clicking the button below.
        </p>
        <NavLink to="/">
          <button className="mt-6 px-6 py-2 bg-red-700 text-white font-semibold rounded-md border-2 border-black hover:bg-red-800 transition-all">
            Home
          </button>
        </NavLink>
      </div>
    </div>
  );
}
