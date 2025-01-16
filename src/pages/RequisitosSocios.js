// src/components/RequisitosSocios.js

import React from 'react';
// import './RequisitosSocios.css'; // Si tienes un archivo CSS para estilos específicos

const RequisitosSocios = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center" style={{ color: '#0c3553' }}>Requisitos para ser socio</h1>
      <div className="mt-4">
        <p>Para ser socio del Centro Juventud Antoniana, es necesario cumplir con ciertos requisitos. Ser socio te permitirá disfrutar de todas las actividades y beneficios exclusivos del club, además de formar parte de una comunidad activa y comprometida con el deporte y la cultura.</p>
        <p>A continuación, te detallamos los pasos para unirte:</p>
        <ul>
          <li>Ser mayor de edad (18 años o más).</li>
          <li>Contar con una dirección de correo electrónico válida para recibir actualizaciones e información del club.</li>
          <li>Realizar el pago de la cuota de ingreso, la cual cubre los costos administrativos y operativos.</li>
          <li>Presentar una foto reciente para tu ficha de socio y tu carnet personal.</li>
          <li>Firmar el reglamento interno del club, comprometiéndote a respetar las normas y valores del CJA.</li>
        </ul>
        <p>Una vez cumplidos estos requisitos, podrás disfrutar de una serie de beneficios, entre ellos el acceso a nuestras instalaciones deportivas, eventos exclusivos, y descuentos en actividades y productos del club. Además, tendrás voz y voto en las asambleas y en la toma de decisiones importantes.</p>
        <p>Te invitamos a ser parte de nuestra familia, un lugar de crecimiento personal y comunitario. ¡Unite al CJA y forma parte de nuestra historia!</p>
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
  );
};


export default RequisitosSocios;