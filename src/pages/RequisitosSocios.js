// src/components/RequisitosSocios.js

import React from 'react';
// import './RequisitosSocios.css'; // Si tienes un archivo CSS para estilos específicos
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.8 } }
};

const RequisitosSocios = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
    >
      <div className="container mt-5">
        <h1 className="text-center" style={{ color: '#0c3553' }}>Requisitos para ser socio</h1>
        <div className="mt-4">
          <p>Para ser socio del Centro Juventud Antoniana, es necesario cumplir con ciertos requisitos mínimos. Ser socio te
            permitirá disfrutar de todos los beneficios exclusivos del club, además de formar parte de una comunidad activa
            y comprometida con el deporte y la cultura.</p>
          <p>Podés asociarte en la secretaría del club (Lerma 601) o vía AccessFan</p>
          <p>Para asociarte de manera presencial debés contar con los siguiente requisitos:</p>
          <ul>
            <li>Ser mayor de edad (18 años o más).</li>
            <li>DNI original y fotocopia.</li>
            <li>Contar con una dirección de correo electrónico válida y/o número de celular para recibir actualizaciones e
              información del club.</li>
            <li>Realizar el pago de la cuota de ingreso, la cual cubre los costos administrativos y operativos.</li>
          </ul>
          <p>Una vez cumplidos estos requisitos, podrás disfrutar de una serie de beneficios, entre ellos el acceso a nuestras instalaciones deportivas, eventos exclusivos, y descuentos en actividades y productos del club como así también en locales comerciales. Además, tendrás voz y voto en las asambleas y en la toma de decisiones importantes.</p>

          <p>Para asociarte vía AccessFan desde cualquier parte del país, hacé click en el botón de abajo.</p>
        </div>

        <div className="text-center mt-5">
          <a href="https://juventudantoniana.accessfan.ar" style={{
            backgroundColor: '#3C2713', color: '#FFF', padding: '15px 30px', fontSize: '18px',
            textDecoration: 'none', borderRadius: '5px', transition: 'background-color 0.3s'
          }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#255a7b'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#3C2713'}
            target="_blank"
            className="btn btn-secondary">
            Asociate ahora a través de AccessFan
          </a>
        </div>
        <br />
      </div>
    </motion.div>
  );
};


export default RequisitosSocios;