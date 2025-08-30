// frontend/src/components/Navbar.js
import React from 'react';
import { Navbar, Nav, Container, Image } from 'react-bootstrap';
// 1. Importamos NavLink em vez de Link
import { Link, NavLink } from 'react-router-dom';

function MenuNavegacao() {
  return (
    <Navbar variant="dark" expand="lg" sticky="top" className="navbar-custom">
      <Container>
        {/* O logo continua a usar o Link normal */}
        <Navbar.Brand as={Link} to="/">
          <Image 
            src="/logo-pedro-almeida.jpg"
            alt="Logo Pedro Almeida Soluções Jurídicas"
            className="navbar-logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {/* 2. Usamos NavLink para os itens do menu */}
            <Nav.Link as={NavLink} to="/" end>Início</Nav.Link>
            <Nav.Link as={NavLink} to="/sobre">Sobre</Nav.Link>
            <Nav.Link as={NavLink} to="/consumidor">Direito do Consumidor</Nav.Link>
            <Nav.Link as={NavLink} to="/familia">Direito de Família</Nav.Link>
            <Nav.Link as={NavLink} to="/contato">Contato</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MenuNavegacao;
