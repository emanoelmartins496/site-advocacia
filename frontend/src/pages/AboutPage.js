// frontend/src/pages/AboutPage.js
import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

function AboutPage() {
  return (
    <Container className="my-5">
      <Row className="text-center mb-4">
        <Col>
          <h1>Sobre o Escritório</h1>
          <p className="lead">Conheça nossa trajetória e o compromisso que temos com cada cliente.</p>
        </Col>
      </Row>

      <Row className="align-items-center">
        {/* Coluna da Imagem */}
        <Col md={4} className="text-center mb-4 mb-md-0">
          {/* IMPORTANTE: Coloque uma foto profissional na pasta 'public' e atualize o caminho abaixo */}
          <Image 
            src="/logo-pedro-almeida.jpg" // Exemplo: /nome-da-sua-foto.jpg
            roundedCircle 
            fluid 
            alt="Foto do Dr. Pedro Almeida"
            style={{ maxWidth: '250px', border: '5px solid #f8f9fa' }}
            // Fallback em caso de erro ao carregar a imagem
            onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/250x250/EFEFEF/AAAAAA?text=Foto'; }}
          />
        </Col>

        {/* Coluna do Texto */}
        <Col md={8}>
          <h4>Dr. Pedro Almeida</h4>
          <p>
            Com uma carreira dedicada à defesa dos direitos individuais, Dr. Pedro Almeida fundou este escritório com a missão de oferecer um serviço jurídico que une excelência técnica e um atendimento verdadeiramente humano. 
            Acreditamos que cada caso é único e merece atenção total e personalizada.
          </p>
          <p>
            Nossa atuação é pautada pela ética, transparência e pela busca incansável por justiça. Entendemos os momentos delicados que envolvem questões de família e as frustrações geradas por problemas de consumo, e estamos aqui para ser seu porto seguro, guiando você a cada passo do processo.
          </p>
          <hr />
          <h5>Nossos Valores</h5>
          <ul>
            <li><strong>Compromisso com o Cliente:</strong> Sua causa é a nossa causa.</li>
            <li><strong>Excelência Técnica:</strong> Constante atualização e estudo para oferecer as melhores estratégias.</li>
            <li><strong>Atendimento Humanizado:</strong> Entendemos o lado humano de cada disputa legal.</li>
            <li><strong>Transparência:</strong> Você sempre saberá o que está acontecendo no seu caso.</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutPage;
