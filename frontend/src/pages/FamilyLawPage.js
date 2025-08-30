// frontend/src/pages/FamilyLawPage.js
import React from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function FamilyLawPage() {
  return (
    <Container className="my-5 py-5">
      <Row className="text-center mb-5">
        <Col>
          <h1 className="titulo-secao">Direito de Família</h1>
          <p className="subtitulo-secao">
            Atuação com sensibilidade e discrição para proteger os seus laços familiares e o seu património.
          </p>
        </Col>
      </Row>

      <Row>
        <Col md={7}>
          <h4 className="titulo-card">Apoio em Momentos Decisivos</h4>
          <p>
            Questões familiares estão entre as mais delicadas da vida. Envolvem não apenas aspetos legais e patrimoniais, mas também um profundo desgaste emocional. Compreendemos a complexidade destes momentos.
          </p>
          <p>
            O nosso objetivo é oferecer um suporte jurídico seguro e humano, buscando sempre que possível soluções consensuais que minimizem o conflito e preservem o bem-estar de todos os envolvidos, especialmente o dos filhos. Quando o litígio é inevitável, atuamos de forma firme para garantir os seus direitos.
          </p>
          <div className="mt-4">
            {/* BOTÃO CORRIGIDO AQUI */}
            <Link to="/contato" className="btn btn-primario">
              Agende uma Consulta
            </Link>
          </div>
        </Col>

        <Col md={5}>
          <Card>
            <Card.Header as="h5">Principais Serviços</Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item>Divórcio (Consensual e Litigioso)</ListGroup.Item>
              <ListGroup.Item>Pensão Alimentícia</ListGroup.Item>
              <ListGroup.Item>Guarda de Filhos e Visitas</ListGroup.Item>
              <ListGroup.Item>Partilha de Bens</ListGroup.Item>
              <ListGroup.Item>Inventário e Testamentos</ListGroup.Item>
              <ListGroup.Item>União Estável</ListGroup.Item>
              <ListGroup.Item>Investigação de Paternidade</ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default FamilyLawPage;
