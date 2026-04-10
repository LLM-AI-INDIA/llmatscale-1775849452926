import React from 'react';
import { NavLink } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="hero min-h-[calc(100vh-4rem)] bg-base-200"> {/* Adjust min-h to account for navbar height */}
      <div className="hero-content flex-col lg:flex-row-reverse p-8">
        <img
          src="https://via.placeholder.com/300x300/808080/FFFFFF?text=Profile"
          className="max-w-sm rounded-lg shadow-2xl mb-8 lg:mb-0 lg:ml-8"
          alt="Profile"
        />
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Hi, I'm <span className="text-primary">Jane Doe</span>
          </h1>
          <p className="py-6 text-lg max-w-xl mx-auto lg:mx-0">
            A passionate Full-Stack Developer with expertise in crafting robust and scalable web applications.
            I love bringing ideas to life through clean and efficient code.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <NavLink to="/projects" className="btn btn-primary btn-lg">
              View My Work
            </NavLink>
            <NavLink to="/contact" className="btn btn-outline btn-lg">
              Get in Touch
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;