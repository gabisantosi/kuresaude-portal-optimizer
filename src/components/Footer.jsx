import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer id="footer" className="footer-area wow fadeIn">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="logo padding">
              <Link to="/"><img src="/images/logo.png" alt="Kure Saúde Logo" /></Link>
              <p>Transformando o acesso à saúde através da tecnologia e inovação.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="footer-info padding">
              <h3>Contato</h3>
              <p><i className="fa fa-paper-plane" aria-hidden="true"></i> info@kuresaude.com</p>
              <p><i className="fa fa-map-marker" aria-hidden="true"></i> São Paulo, SP - Brasil</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="subcriber-info">
              <h3>Newsletter</h3>
              <p>Receba novidades e atualizações da Kure Saúde</p>
              <div className="subcriber-box">
                <form id="mc-form" className="mc-form">
                  <div className="newsletter-form">
                    <input type="email" autoComplete="off" id="mc-email" placeholder="Seu e-mail" className="form-control" name="EMAIL" />
                    <button className="mc-submit" type="submit"><i className="fa fa-paper-plane"></i></button> 
                    <div className="clearfix"></div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-area wow fadeIn">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="footer-text">
                <p>© 2024 Kure Saúde. Todos os direitos reservados.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="social">
                <ul className="social-links">
                  <li><a href="https://www.linkedin.com/company/kure-sa%C3%BAde" target="_blank"><i className="fa fa-linkedin"></i></a></li>
                  <li><a href="https://www.facebook.com/kuresaude" target="_blank"><i className="fa fa-facebook"></i></a></li>
                  <li><a href="https://www.instagram.com/cs_gestao_em_saude/" target="_blank"><i className="fa fa-instagram"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
