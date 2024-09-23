import React from 'react';
import { Helmet } from 'react-helmet';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Kure Saúde - Consultoria em Saúde | Gestão de Produtos, Saúde Pública e Digital</title>
        <meta name="description" content="A Kure Saúde oferece consultoria especializada em gestão de produtos de saúde, saúde pública, saúde digital e palestras corporativas. Soluções inovadoras para o setor de saúde no Brasil." />
        <meta name="keywords" content="consultoria em saúde, gestão de produtos de saúde, saúde pública, saúde digital, palestras de saúde, consultoria empresarial em saúde" />
      </Helmet>

      <header className="bg-blue-600 text-white py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">Kure Saúde</h1>
          <p className="text-xl">Inovação e Excelência em Consultoria de Saúde</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Nossos Serviços</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Gestão de Produtos em Saúde</h3>
              <p>Otimizamos o ciclo de vida dos produtos de saúde, desde o desenvolvimento até a comercialização.</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Saúde Pública</h3>
              <p>Desenvolvemos estratégias para melhorar a eficiência e eficácia dos sistemas de saúde pública.</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Saúde Digital</h3>
              <p>Implementamos soluções tecnológicas inovadoras para modernizar a prestação de serviços de saúde.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Por que escolher a Kure Saúde?</h2>
          <ul className="list-disc pl-6">
            <li>Equipe de especialistas altamente qualificados</li>
            <li>Abordagem personalizada para cada cliente</li>
            <li>Soluções inovadoras baseadas em evidências</li>
            <li>Compromisso com a excelência e resultados mensuráveis</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Entre em Contato</h2>
          <p>Estamos prontos para ajudar sua organização a alcançar novos patamares na área da saúde.</p>
          <button className="bg-blue-600 text-white px-6 py-2 mt-4 rounded hover:bg-blue-700 transition-colors">
            Solicite uma Consultoria
          </button>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-4 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Kure Saúde. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
