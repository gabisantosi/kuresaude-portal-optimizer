import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="bg-gray-50">
      <Helmet>
        <title>Kure Saúde - Consultoria Especializada em Saúde Digital</title>
        <meta name="description" content="A Kure Saúde oferece soluções inovadoras em saúde digital, incluindo telemedicina e consultoria em gestão de saúde para profissionais e instituições." />
        <meta name="keywords" content="telemedicina, saúde digital, consultoria em saúde, gestão de saúde, tecnologia em saúde" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
      </Helmet>
      <Header />
      <Hero />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
