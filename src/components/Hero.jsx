import React from 'react';

const Hero = () => {
  return (
    <div className="bg-blue-600 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Bem-vindo à Kure Saúde</h1>
        <p className="text-xl mb-8">Líder em saúde digital. Saúde ao toque do seu dedo.</p>
        <a href="#servicos" className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-100 transition duration-300">
          Conheça nossos serviços
        </a>
      </div>
    </div>
  );
};

export default Hero;