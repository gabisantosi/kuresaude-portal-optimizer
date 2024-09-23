import React from 'react';
import { Link } from 'react-router-dom';
import { LinkedinIcon, FacebookIcon, InstagramIcon } from 'lucide-react';

const Footer = () => {
  return (
    <footer>
      <div id="footer" className="footer-area">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="logo padding">
                <Link to="/"><img src="/images/logo.png" alt="Kure Saúde Logo" className="h-12 mb-4" /></Link>
                <p>Transformando o acesso à saúde através da tecnologia e inovação.</p>
              </div>
            </div>
            <div>
              <div className="footer-info padding">
                <h3 className="text-xl font-semibold mb-4">Contato</h3>
                <p><i className="fa fa-paper-plane"></i> info@kuresaude.com</p>
                <p><i className="fa fa-map-marker"></i> São Paulo, SP - Brasil</p>
              </div>
            </div>
            <div>
              <div className="subcriber-info">
                <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
                <p>Receba novidades e atualizações da Kure Saúde</p>
                <form className="mt-4">
                  <input type="email" placeholder="Seu e-mail" className="w-full px-4 py-2 rounded-l-md" />
                  <button type="submit" className="bg-white text-blue-600 px-4 py-2 rounded-r-md hover:bg-gray-100 transition duration-300">
                    <i className="fa fa-paper-plane"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-area">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="footer-text">
              <p>© 2024 Kure Saúde. Todos os direitos reservados.</p>
            </div>
            <div className="social mt-4 md:mt-0">
              <ul className="flex space-x-4">
                <li>
                  <a href="https://www.linkedin.com/company/kure-sa%C3%BAde" target="_blank" rel="noopener noreferrer">
                    <LinkedinIcon className="text-white hover:text-gray-300" />
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/kuresaude" target="_blank" rel="noopener noreferrer">
                    <FacebookIcon className="text-white hover:text-gray-300" />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/cs_gestao_em_saude/" target="_blank" rel="noopener noreferrer">
                    <InstagramIcon className="text-white hover:text-gray-300" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
