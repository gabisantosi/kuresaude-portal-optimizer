import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img src="/images/kure-logo.png" alt="Kure Saúde Logo" className="h-12 mr-3" />
          <span className="text-2xl font-semibold text-gray-800">Kure Saúde</span>
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li><Link to="/" className="text-gray-600 hover:text-blue-600">Início</Link></li>
            <li><Link to="#services" className="text-gray-600 hover:text-blue-600">Serviços</Link></li>
            <li><Link to="#about" className="text-gray-600 hover:text-blue-600">Sobre</Link></li>
            <li><Link to="#contact" className="text-gray-600 hover:text-blue-600">Contato</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
