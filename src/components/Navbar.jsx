import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="navbar bg-base-100 shadow-sm sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </div>
          {isOpen && (
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) => (isActive ? 'active' : '')}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          )}
        </div>
        <NavLink to="/" className="btn btn-ghost text-xl font-bold text-primary">
          My Portfolio
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                className={({ isActive }) => (isActive ? 'font-semibold text-primary' : 'hover:text-primary-focus')}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end">
        <NavLink to="/contact" className="btn btn-primary btn-sm md:btn-md">
          Hire Me
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;