import React from 'react';
import { Helmet } from 'react-helmet';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Kure Saúde - Consultoria Especializada em Saúde | Gestão, Inovação e Soluções</title>
        <meta name="description" content="A Kure Saúde oferece consultoria especializada em gestão de produtos de saúde, saúde pública, saúde digital e palestras corporativas. Soluções inovadoras e personalizadas para o setor de saúde no Brasil." />
        <meta name="keywords" content="consultoria em saúde, gestão de produtos de saúde, saúde pública, saúde digital, palestras de saúde, consultoria empresarial em saúde, inovação em saúde, soluções em saúde" />
        <link rel="canonical" href="https://www.kuresaude.com" />
      </Helmet>

      <header className="bg-blue-600 text-white py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">Kure Saúde</h1>
          <p className="text-xl mt-2">Inovação e Excelência em Consultoria de Saúde no Brasil</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">Nossos Serviços Especializados</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-3">Gestão de Produtos em Saúde</h3>
              <p>Otimizamos o ciclo de vida completo dos produtos de saúde, desde o desenvolvimento até a comercialização, garantindo eficiência e conformidade regulatória.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-3">Saúde Pública</h3>
              <p>Desenvolvemos estratégias inovadoras para melhorar a eficiência e eficácia dos sistemas de saúde pública, focando em prevenção e acesso equitativo.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-3">Saúde Digital</h3>
              <p>Implementamos soluções tecnológicas de ponta para modernizar a prestação de serviços de saúde, incluindo telemedicina e sistemas de gestão integrados.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-3">Palestras Corporativas</h3>
              <p>Oferecemos palestras especializadas sobre saúde e bem-estar para empresas, promovendo a saúde ocupacional e a produtividade.</p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">Por que escolher a Kure Saúde?</h2>
          <ul className="list-disc pl-6 space-y-3">
            <li>Equipe de especialistas altamente qualificados com vasta experiência no setor de saúde brasileiro</li>
            <li>Abordagem personalizada e soluções sob medida para cada cliente</li>
            <li>Metodologias inovadoras baseadas em evidências científicas e melhores práticas globais</li>
            <li>Compromisso com a excelência e resultados mensuráveis para nossos parceiros</li>
            <li>Conhecimento profundo das regulamentações e desafios do setor de saúde no Brasil</li>
          </ul>
        </section>

        <section className="bg-blue-50 p-8 rounded-lg">
          <h2 className="text-3xl font-semibold mb-6">Entre em Contato</h2>
          <p className="mb-4">Estamos prontos para ajudar sua organização a alcançar novos patamares na área da saúde. Agende uma consulta gratuita hoje mesmo.</p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
            Solicite uma Consultoria
          </button>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-xl font-semibold mb-4">Kure Saúde</h3>
              <p>Transformando a saúde no Brasil através de consultoria especializada e soluções inovadoras.</p>
            </div>
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-xl font-semibold mb-4">Contato</h3>
              <p>Email: contato@kuresaude.com</p>
              <p>Telefone: (11) 1234-5678</p>
            </div>
            <div className="w-full md:w-1/3">
              <h3 className="text-xl font-semibold mb-4">Siga-nos</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-blue-400">LinkedIn</a>
                <a href="#" className="hover:text-blue-400">Twitter</a>
                <a href="#" className="hover:text-blue-400">Facebook</a>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>&copy; 2024 Kure Saúde. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
