import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="header-top">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link to="/" className="navbar-brand">
            <img src="/images/logo.png" alt="Kure Saúde Logo" className="h-12" />
          </Link>
          <div className="right-header">
            <div className="header-info">
              <span className="icontop"><i className="fa fa-envelope"></i></span>
              <span className="iconcont"><a href="mailto:info@kuresaude.com" className="text-primary hover:text-primary-dark">info@kuresaude.com</a></span>	
            </div>
          </div>
        </div>
      </div>
      <div className="header-bottom">
        <div className="container mx-auto px-4">
          <nav className="main-menu">
            <ul className="flex justify-center space-x-6 py-4">
              <li><Link to="/" className="text-white hover:text-gray-200">Home</Link></li>
              <li><Link to="/sobre" className="text-white hover:text-gray-200">Sobre nós</Link></li>
              <li><Link to="/servicos" className="text-white hover:text-gray-200">Serviços</Link></li>
              <li><Link to="/contato" className="text-white hover:text-gray-200">Contato</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
