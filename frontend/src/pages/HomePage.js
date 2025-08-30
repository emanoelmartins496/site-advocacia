// frontend/src/pages/HomePage.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <>
      <section className="hero">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={9}>
              <h1 className="titulo-hero">Defendendo Seus Direitos, Cuidando da Sua Família</h1>
              <p className="subtitulo-hero">
                Atuação especializada em Direito do Consumidor e Direito de Família com foco em soluções ágeis e atendimento humanizado.
              </p>
              <div className="botoes-hero">
                <Link to="/contato" className="btn btn-primario">Entre em Contato</Link>
                <a href="https://wa.me/5522991046153" target="_blank" rel="noopener noreferrer" className="btn btn-fantasma">
                  Fale Pelo WhatsApp
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="secao-especialidades">
        <Container>
          <Row className="text-center">
            <Col>
              <h2 className="titulo-secao">Nossas Especialidades</h2>
              <p className="subtitulo-secao">
                Soluções jurídicas personalizadas para proteger o que mais importa para você.
              </p>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col md={6} className="mb-4">
              <div className="card-especialidade">
                <h4 className="titulo-card">Direito do Consumidor</h4>
                <p className="texto-card">
                  Defendemos seus direitos contra práticas abusivas, produtos defeituosos, cobranças indevidas e outros problemas nas relações de consumo.
                </p>
                <Link to="/consumidor" className="btn-card">Saiba Mais</Link>
              </div>
            </Col>
            <Col md={6} className="mb-4">
              <div className="card-especialidade">
                <h4 className="titulo-card">Direito de Família</h4>
                <p className="texto-card">
                  Oferecemos suporte em questões sensíveis como divórcio, pensão alimentícia, guarda de filhos e partilha de bens, com discrição e empatia.
                </p>
                <Link to="/familia" className="btn-card">Saiba Mais</Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default HomePage;
