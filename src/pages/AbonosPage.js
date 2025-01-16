import React from 'react';

const AbonosPage = () => {
  return (
    <div className="container mt-3">
      <h1 className="text-center mb-4" style={{ color: '#0c3553' }}>Abonos para socios 2025</h1>
      <div className="mt-4">
        <p>
          ¡Te invitamos a disfrutar de los beneficios exclusivos que ofrecemos a nuestros socios con el nuevo
          programa de abonos para el 2025! Este plan está diseñado para que aproveches al máximo las actividades y eventos
          del Centro Juventud Antoniana.
        </p>

        <h2 className="mt-5" style={{ color: '#3C2713' }}>¿Qué incluye el abono?</h2>
        <ul>
          <li>Acceso exclusivo a los partidos de local.</li>
          <li>Descuentos especiales en la tienda oficial del club.</li>
          <li>Participación en eventos sociales y culturales organizados por el club.</li>
          <li>Prioridad en la reserva de entradas para partidos importantes.</li>
        </ul>

        <h2 className="mt-5" style={{ color: '#3C2713' }}>Planes de abono disponibles</h2>
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Plan</th>
              <th>Beneficios adicionales</th>
              <th>Valor Anual</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Básico</td>
              <td>Acceso a partidos y 5% en tienda</td>
              <td>$12.000</td>
            </tr>
            <tr>
              <td>Preferencial</td>
              <td>Descuento del 10% en tienda + prioridad en entradas</td>
              <td>$20.000</td>
            </tr>
            <tr>
              <td>Premium</td>
              <td>Acceso VIP en eventos + 20% en tienda</td>
              <td>$35.000</td>
            </tr>
          </tbody>
        </table>

        <h2 className="mt-5" style={{ color: '#3C2713' }}>¿Cómo adquirir tu abono?</h2>
        <p>
          Para obtener tu abono, sigue estos pasos:
        </p>
        <ol>
          <li>Ingresa a nuestra página de contacto y llena el formulario indicando el plan deseado.</li>
          <li>Realiza el pago mediante transferencia bancaria o Macro Click.</li>
          <li>Recoge tu carnet de socio en nuestra sede, listo para empezar a disfrutar.</li>
        </ol>

        <div className="text-center mt-5">
          <a 
            href="/docs/CJA - Abono para socios 2025.pdf" 
            download="CJA - Abono para socios 2025.pdf" 
            className="btn btn-secondary"
            style={{ padding: '15px 30px', fontSize: '18px', backgroundColor: '#3C2713', marginBottom: '10px' }}
          >
            Descargar Información del Abono 2025
          </a>
        </div>
      </div>
    </div>
  );
};

export default AbonosPage;