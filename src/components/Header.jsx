import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img src="/images/logo.png" alt="Kure Saúde Logo" className="h-12" />
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li><Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link></li>
            <li><Link to="/sobre" className="text-gray-700 hover:text-blue-600">Sobre nós</Link></li>
            <li><Link to="/servicos" className="text-gray-700 hover:text-blue-600">Serviços</Link></li>
            <li><Link to="/contato" className="text-gray-700 hover:text-blue-600">Contato</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;