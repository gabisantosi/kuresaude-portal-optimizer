import React from 'react';

const ServiceCard = ({ icon, title, description, buttonText, buttonLink, color }) => (
  <div className={`col-lg-4 col-md-4 col-sm-12 col-xs-12`}>
    <div className={`row`}>
      <div className={`service-time ${color}`}>
        <span className="info-icon"><i className={`fa ${icon}`} aria-hidden="true"></i></span>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="center">
          <a href={buttonLink} className="btn btn-light btn-radius btn-brd grd1 effect-1">{buttonText}</a>
        </div>
      </div>
    </div>
  </div>
);

const Services = () => {
  return (
    <div id="time-table" className="time-table-section">
      <div className="container">
        <div className="row">
          <ServiceCard
            icon="fa-user"
            title="Consultoria em Saúde Digital"
            description="Soluções inovadoras para otimizar seus serviços de saúde"
            buttonText="Entre em contato"
            buttonLink="mailto:info@kuresaude.com"
            color="one"
          />
          <ServiceCard
            icon="fa-mobile"
            title="Telemedicina"
            description="Consultas online via smartphone ou tablet"
            buttonText="Saiba mais"
            buttonLink="#"
            color="middle"
          />
          <ServiceCard
            icon="fa-user-md"
            title="Para Profissionais de Saúde"
            description="Gerencie consultas, agendamentos e faturamento"
            buttonText="Cadastre-se"
            buttonLink="https://form.jotform.com/211164185449053"
            color="three"
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
