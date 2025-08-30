// frontend/src/pages/ContactPage.js
import React, { useState } from 'react';
// O componente 'Button' do react-bootstrap foi removido daqui
import { Container, Row, Col, Form, Alert } from 'react-bootstrap';
import axios from 'axios';

function ContactPage() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    mensagem: ''
  });
  
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: 'info', message: 'Enviando sua mensagem...' });

    try {
      const response = await axios.post('http://localhost:3001/api/contato', formData);
      setStatus({ type: 'success', message: response.data.mensagem });
      setFormData({ nome: '', email: '', telefone: '', mensagem: '' });
    } catch (error) {
      setStatus({ type: 'danger', message: 'Não foi possível enviar a mensagem. Por favor, tente novamente mais tarde.' });
    }
  };

  return (
    <Container className="my-5">
      <Row>
        <Col md={12} className="text-center mb-4">
          <h1 className="titulo-secao">Entre em Contato</h1>
          <p className="lead subtitulo-secao">Tire suas dúvidas ou agende uma consulta. Estamos prontos para ajudar.</p>
        </Col>
      </Row>

      <Row>
        <Col md={6} className="mb-4">
          <h4>Envie uma mensagem</h4>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formGroupName">
              <Form.Label>Nome Completo</Form.Label>
              <Form.Control type="text" name="nome" value={formData.nome} onChange={handleChange} placeholder="Seu nome completo" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} placeholder="seu@email.com" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPhone">
              <Form.Label>Telefone / WhatsApp</Form.Label>
              <Form.Control type="tel" name="telefone" value={formData.telefone} onChange={handleChange} placeholder="(XX) 99999-9999" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupMessage">
              <Form.Label>Mensagem</Form.Label>
              <Form.Control as="textarea" rows={4} name="mensagem" value={formData.mensagem} onChange={handleChange} placeholder="Descreva seu caso ou dúvida aqui" required />
            </Form.Group>
            
            {/* --- A ÚNICA ALTERAÇÃO ESTÁ AQUI --- */}
            <button type="submit" className="btn btn-primario">
              Enviar Mensagem
            </button>
            {/* ------------------------------------ */}

          </Form>
          {status && <Alert variant={status.type} className="mt-4">{status.message}</Alert>}
        </Col>
        
        <Col md={6}>
          <h4>Outras formas de contato</h4>
          <p>
            <strong>Telefone:</strong> (21) 99999-8888<br />
            <strong>Email:</strong> contato@advocaciasobrenome.com<br />
            <strong>Endereço:</strong> Av. Rio Branco, 1 - Centro, Rio de Janeiro - RJ
          </p>
          <hr />
          <h4>Localização</h4>
          <div className="ratio ratio-16x9">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.188440029837!2d-43.17490838450511!3d-22.9064137435109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997f58a6a00001%3A0x7d84a6a541604b0b!2sAv.%20Rio%20Branco%2C%201%20-%20Centro%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2020090-003!5e0!3m2!1spt-BR!2sbr!4v1661817718919!5m2!1spt-BR!2sbr"
              title="Localização do Escritório"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactPage;
