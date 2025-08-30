// frontend/src/pages/ConsumerLawPage.js
import React from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function ConsumerLawPage() {
  return (
    <Container className="my-5 py-5">
      <Row className="text-center mb-5">
        <Col>
          <h1 className="titulo-secao">Direito do Consumidor</h1>
          <p className="subtitulo-secao">
            Protegemos você contra práticas abusivas e garantimos que seus direitos como consumidor sejam respeitados.
          </p>
        </Col>
      </Row>

      <Row>
        <Col md={7}>
          <h4 className="titulo-card">Entendendo a Área</h4>
          <p>
            As relações de consumo estão presentes no nosso dia a dia, desde a compra de um produto até a contratação de um serviço. O Direito do Consumidor é o ramo da lei que assegura que essas relações sejam justas e equilibradas, protegendo a parte mais vulnerável: você.
          </p>
          <p>
            Nosso escritório possui vasta experiência na área, atuando de forma estratégica para resolver conflitos de maneira rápida e eficaz, seja de forma extrajudicial ou por meio de ações judiciais.
          </p>
          <div className="mt-4">
            {/* BOTÃO CORRIGIDO AQUI */}
            <Link to="/contato" className="btn btn-primario">
              Fale com um Especialista
            </Link>
          </div>
        </Col>

        <Col md={5}>
          <Card>
            <Card.Header as="h5">Principais Serviços</Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item>Golpes na OLX e Mercado Livre</ListGroup.Item>
              <ListGroup.Item>Problemas com Companhias Aéreas</ListGroup.Item>
              <ListGroup.Item>Negativação Indevida (Nome Sujo)</ListGroup.Item>
              <ListGroup.Item>Produtos com Defeito ou Vício</ListGroup.Item>
              <ListGroup.Item>Cobranças Abusivas e Dívidas</ListGroup.Item>
              <ListGroup.Item>Publicidade Enganosa</ListGroup.Item>
              <ListGroup.Item>Questões com Bancos e Financeiras</ListGroup.Item>
              <ListGroup.Item>Contratos com Cláusulas Abusivas</ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ConsumerLawPage;
