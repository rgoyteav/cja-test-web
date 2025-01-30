import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import '../styles/ContactForm.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Simular envío
    setTimeout(() => {
      console.log('Enviando mensaje:', { name, email, message });
      alert('¡Gracias por tu mensaje!');
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="contact-form-container">
      <h3 className="form-title">Contacto</h3>
      <Form onSubmit={handleSubmit} className="contact-form">
        <Form.Group className="mb-4" controlId="formName">
          <Form.Label className="form-label">Nombre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Tu nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-control-custom"
            required
          />
        </Form.Group>

        <Form.Group className="mb-4" controlId="formEmail">
          <Form.Label className="form-label">Correo Electrónico</Form.Label>
          <Form.Control
            type="email"
            placeholder="Tu correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control-custom"
            required
          />
        </Form.Group>

        <Form.Group className="mb-4" controlId="formMessage">
          <Form.Label className="form-label">Mensaje</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            placeholder="Escribe tu mensaje aquí..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="form-control-custom"
            required
          />
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          className="submit-button"
          disabled={loading}
        >
          {loading ? 'Enviando...' : 'Enviar'}
        </Button>

      </Form>
    </div>
  );
};

export default ContactForm;