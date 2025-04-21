import React from 'react';

interface NavLinkProps {
  href: string;
  label: string;
  isScrolled: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ href, label, isScrolled }) => {
  return (
    <a
      href={href}
      className={`transition-all duration-300 relative group ${
        isScrolled ? 'text-green-800' : 'text-white'
      }`}
    >
      {label}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
    </a>
  );
};

export default NavLink;