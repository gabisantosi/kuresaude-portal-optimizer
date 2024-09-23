import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="clinic_version">
      <Helmet>
        <title>Kure Saúde - Consultoria Especializada em Saúde Digital | Telemedicina e Gestão de Saúde</title>
        <meta name="description" content="A Kure Saúde oferece soluções inovadoras em saúde digital, incluindo telemedicina, consultoria em gestão de saúde e tecnologia para profissionais e pacientes. Conectamos pacientes e serviços de saúde de forma eficiente e acessível." />
        <meta name="keywords" content="telemedicina, saúde digital, consultoria em saúde, gestão de saúde, atendimento online, plano de saúde, app de saúde" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
      </Helmet>
      <Header />
      <Hero />
      <Services />
      <Footer />
    </div>
  );
};

export default Index;
