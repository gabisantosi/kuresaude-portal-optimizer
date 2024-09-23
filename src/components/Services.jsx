import React from 'react';

const ServiceCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className={`text-4xl mb-4 text-blue-600 ${icon}`}></div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Nossos Serviços</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard
            icon="fas fa-laptop-medical"
            title="Telemedicina"
            description="Plataforma avançada para consultas online e monitoramento remoto de pacientes."
          />
          <ServiceCard
            icon="fas fa-chart-line"
            title="Gestão de Saúde"
            description="Soluções integradas para otimizar processos e melhorar a eficiência operacional."
          />
          <ServiceCard
            icon="fas fa-users"
            title="Consultoria Especializada"
            description="Assessoria personalizada para implementação de tecnologias e melhores práticas em saúde digital."
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
