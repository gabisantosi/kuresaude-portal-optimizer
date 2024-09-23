import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <img src="/images/about-image.jpg" alt="Equipe Kure Saúde" className="rounded-lg shadow-xl" />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-3xl font-bold mb-6">Sobre a Kure Saúde</h2>
            <p className="text-gray-600 mb-4">
              A Kure Saúde é líder em soluções de saúde digital, dedicada a transformar o acesso e a qualidade dos cuidados de saúde através da tecnologia e inovação.
            </p>
            <p className="text-gray-600 mb-4">
              Nossa equipe de especialistas combina conhecimento médico com expertise tecnológica para desenvolver soluções personalizadas que atendem às necessidades específicas de profissionais e instituições de saúde.
            </p>
            <p className="text-gray-600">
              Estamos comprometidos em melhorar a experiência de cuidados de saúde para todos, tornando-a mais acessível, eficiente e centrada no paciente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;