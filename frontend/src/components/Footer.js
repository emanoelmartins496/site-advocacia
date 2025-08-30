// frontend/src/components/Footer.js
import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom'; // 1. Importamos o useLocation

function Footer() {
  const anoAtual = new Date().getFullYear();
  const location = useLocation(); // 2. Obtemos a localização atual da página

  // 3. Verificamos se estamos na página inicial (o 'pathname' é '/')
  const isHomePage = location.pathname === '/';

  return (
    <footer className="footer-final">
      <Container>
        {/* 4. SÓ renderizamos esta parte se isHomePage for verdadeiro */}
        {isHomePage && (
          <Row className="footer-main">
            {/* Coluna 1: Navegação */}
            <Col md={3} sm={6} className="footer-col">
              <h5 className="footer-title">Navegação</h5>
              <ul className="list-unstyled footer-links">
                <li><Link to="/">Início</Link></li>
                <li><Link to="/sobre">Sobre</Link></li>
                <li><Link to="/contato">Contato</Link></li>
              </ul>
            </Col>

            {/* Coluna 2: Especialidades */}
            <Col md={4} sm={6} className="footer-col">
              <h5 className="footer-title">Especialidades</h5>
              <ul className="list-unstyled footer-links">
                <li><Link to="/consumidor">Direito do Consumidor</Link></li>
                <li><Link to="/familia">Direito de Família</Link></li>
              </ul>
            </Col>

            {/* Coluna 3: Contato */}
            <Col md={5} sm={12} className="footer-col">
              <h5 className="footer-title">Contato</h5>
              <p className="footer-contact-info">
                Sua Rua, Nº 123, Sala 404, Sua Cidade - UF<br />
                <strong>Telefone:</strong> (XX) 99999-9999<br />
                <strong>Email:</strong> email.advogado@exemplo.com
              </p>
            </Col>
          </Row>
        )}

        {/* Esta parte (a barra inferior) será renderizada em TODAS as páginas */}
        <Row className="footer-bottom-bar align-items-center">
          <Col md={6} className="text-center text-md-start">
            <p className="copyright-text">
              &copy; {anoAtual} Pedro Almeida Soluções Jurídicas. Todos os direitos reservados.
            </p>
          </Col>
          <Col md={6} className="text-center text-md-end">
             <Image 
              src="/logo-pedro-almeida.jpg" 
              alt="Logo Pedro Almeida" 
              className="footer-bottom-logo"
            />
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
