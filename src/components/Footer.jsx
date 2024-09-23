import React from 'react';
import { Link } from 'react-router-dom';
import { LinkedinIcon, FacebookIcon, InstagramIcon } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <img src="/images/logo-white.png" alt="Kure Saúde Logo" className="h-12 mb-4" />
            <p>Conectando pacientes e profissionais de saúde de forma eficiente.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contato</h3>
            <p>Email: info@kuresaude.com</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
            <form className="flex">
              <input type="email" placeholder="Seu e-mail" className="flex-grow px-4 py-2 rounded-l-md" />
              <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700 transition duration-300">
                Inscrever
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; 2024 Kure Saúde. Todos os direitos reservados.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="https://www.linkedin.com/company/kure-sa%C3%BAde" target="_blank" rel="noopener noreferrer">
              <LinkedinIcon className="text-white hover:text-blue-400" />
            </a>
            <a href="https://www.facebook.com/kuresaude" target="_blank" rel="noopener noreferrer">
              <FacebookIcon className="text-white hover:text-blue-400" />
            </a>
            <a href="https://www.instagram.com/cs_gestao_em_saude/" target="_blank" rel="noopener noreferrer">
              <InstagramIcon className="text-white hover:text-blue-400" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;