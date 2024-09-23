import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="bg-blue-600 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Transformando a Saúde Digital</h1>
            <p className="text-xl mb-8">Soluções inovadoras em telemedicina e gestão de saúde para profissionais e instituições.</p>
            <Link to="#contact" className="bg-white text-blue-600 py-3 px-6 rounded-full font-semibold hover:bg-blue-100 transition duration-300">
              Fale Conosco
            </Link>
          </div>
          <div className="md:w-1/2">
            <img src="https://via.placeholder.com/600x400.png?text=Saude+Digital" alt="Saúde Digital" className="rounded-lg shadow-xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
