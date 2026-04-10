import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-neutral text-neutral-content">
      <aside>
        <p className="font-bold text-lg">
          My Portfolio <br />Providing reliable service since 2023
        </p>
        <p>Copyright © {new Date().getFullYear()} - All rights reserved</p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="link link-hover">
            <Github className="h-6 w-6" />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="link link-hover">
            <Linkedin className="h-6 w-6" />
          </a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="link link-hover">
            <Twitter className="h-6 w-6" />
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;