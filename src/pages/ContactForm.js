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
    try {
      setLoading(true);
      // Simular envío
      const response = await fetch("https://cja-web-api.azurewebsites.net/api/contact/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });
      if (response.ok) {
        alert("¡Gracias por tu mensaje!");
      } else {
        alert("Hubo un error al enviar el mensaje.");
      }
    }
    catch (error) {
      console.error("Error al enviar el mensaje:", error);
      alert("Ocurrió un problema, intenta nuevamente.");
    } finally {
      setName("");
      setEmail("");
      setMessage("");
      setLoading(false); // Finalizar la carga en cualquier caso
    }
  };

  return (
    <div className="contact-form-container">
      <h3 className="form-title">¡Contactate con nosotros!</h3>
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