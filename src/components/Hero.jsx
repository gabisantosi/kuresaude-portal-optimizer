import React from 'react';

const Hero = () => {
  return (
    <div className="first-section">
      <div className="container mx-auto px-4 text-center">
        <div className="text-contant">
          <h2 className="mb-4">
            <span className="center">
              <span className="icon"><img src="/images/icon-logo.png" alt="Kure Saúde Icon" className="inline-block mb-2" /></span>
            </span>
            <span className="typewrite" data-period="2000" data-type='["Bem-vindo à Kure Saúde.", "Líder em saúde digital.", "Saúde ao toque do seu dedo."]'>
              <span className="wrap"></span>
            </span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Hero;
