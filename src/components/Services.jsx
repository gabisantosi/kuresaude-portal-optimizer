import React from 'react';
import { UserIcon, MobileIcon, UserMdIcon } from 'lucide-react';

const ServiceCard = ({ icon, title, description, buttonText, buttonLink, color }) => (
  <div className={`service-time ${color} p-6 rounded-lg shadow-md text-white`}>
    <span className="info-icon mb-4">{icon}</span>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="mb-4">{description}</p>
    <div className="center">
      <a href={buttonLink} className="inline-block bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-100 transition duration-300">
        {buttonText}
      </a>
    </div>
  </div>
);

const Services = () => {
  return (
    <section id="time-table" className="time-table-section py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard
            icon={<UserIcon size={48} />}
            title="Consultoria em Saúde Digital"
            description="Soluções inovadoras para otimizar seus serviços de saúde"
            buttonText="Entre em contato"
            buttonLink="mailto:info@kuresaude.com"
            color="one"
          />
          <ServiceCard
            icon={<MobileIcon size={48} />}
            title="Telemedicina"
            description="Consultas online via smartphone ou tablet"
            buttonText="Saiba mais"
            buttonLink="#"
            color="middle"
          />
          <ServiceCard
            icon={<UserMdIcon size={48} />}
            title="Para Profissionais de Saúde"
            description="Gerencie consultas, agendamentos e faturamento"
            buttonText="Cadastre-se"
            buttonLink="https://form.jotform.com/211164185449053"
            color="three"
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
