import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <img src="/images/kure-logo-white.png" alt="Kure Saúde Logo" className="h-12 mb-4" />
            <p className="text-gray-400">Transformando o acesso à saúde através da tecnologia e inovação.</p>
          </div>
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white">Início</Link></li>
              <li><Link to="#services" className="text-gray-400 hover:text-white">Serviços</Link></li>
              <li><Link to="#about" className="text-gray-400 hover:text-white">Sobre</Link></li>
              <li><Link to="#contact" className="text-gray-400 hover:text-white">Contato</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <p className="text-gray-400 mb-2"><i className="fas fa-envelope mr-2"></i> info@kuresaude.com</p>
            <p className="text-gray-400 mb-4"><i className="fas fa-map-marker-alt mr-2"></i> São Paulo, SP - Brasil</p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/kure-sa%C3%BAde" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <i className="fab fa-linkedin fa-lg"></i>
              </a>
              <a href="https://www.facebook.com/kuresaude" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <i className="fab fa-facebook fa-lg"></i>
              </a>
              <a href="https://www.instagram.com/cs_gestao_em_saude/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <i className="fab fa-instagram fa-lg"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">&copy; 2024 Kure Saúde. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
