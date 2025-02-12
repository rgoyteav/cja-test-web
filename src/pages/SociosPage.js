import React from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 2 } }
};

const SociosPage = () => {
  return (
    <div>
      <h2>Sección de Socios</h2>
      <p>Todo lo que necesitas saber sobre cómo asociarte al club.</p>
    </div>
  );
};

export default SociosPage;