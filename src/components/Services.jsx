import React from 'react';
import { UserIcon, MobileIcon, UserMdIcon } from 'lucide-react';

const ServiceCard = ({ icon, title, description, buttonText, buttonLink }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="text-blue-600 mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <a href={buttonLink} className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
      {buttonText}
    </a>
  </div>
);

const Services = () => {
  return (
    <section id="servicos" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Nossos Serviços</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard
            icon={<UserIcon size={48} />}
            title="Consultoria em Saúde"
            description="Soluções inovadoras para otimizar seus serviços de saúde"
            buttonText="Entre em contato"
            buttonLink="mailto:info@kuresaude.com"
          />
          <ServiceCard
            icon={<MobileIcon size={48} />}
            title="App"
            description="Em breve, plataforma de atendimento digital"
            buttonText="Saiba mais"
            buttonLink="#"
          />
          <ServiceCard
            icon={<UserMdIcon size={48} />}
            title="Profissional de Saúde"
            description="Gerencie consultas, agendamentos e faturamento"
            buttonText="Cadastre-se"
            buttonLink="https://form.jotform.com/211164185449053"
          />
        </div>
      </div>
    </section>
  );
};

export default Services;