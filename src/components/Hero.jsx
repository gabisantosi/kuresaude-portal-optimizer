import React from 'react';

const Hero = () => {
  return (
    <div id="home" className="parallax first-section wow fadeIn" data-stellar-background-ratio="0.4" style={{backgroundImage: "url('/images/slider-bg.png')"}}>
      <div className="container mx-auto px-4 text-center">
        <div className="row">
          <div className="col-md-12 col-sm-12">
            <div className="text-contant">
              <h2>
                <span className="center"><span className="icon"><img src="/images/icon-logo.png" alt="Kure Saúde Icon" /></span></span>
                <a href="" className="typewrite" data-period="2000" data-type='["Bem-vindo à Kure Saúde.", "Líder em saúde digital.", "Saúde ao toque do seu dedo."]'>
                  <span className="wrap"></span>
                </a>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
