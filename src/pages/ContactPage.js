import React from 'react';
import ContactForm from './ContactForm';  // Importa el formulario de contacto
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.5 } }
};

const ContactPage = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
    >
    <div>
      <ContactForm />
    </div>
    </motion.div>
  );
};

export default ContactPage;
