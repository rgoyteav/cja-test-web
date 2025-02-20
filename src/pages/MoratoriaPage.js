import React from 'react';
import bannerMoratoria from '../assets/moratoria-2025.jpg';
import { motion } from 'framer-motion';

const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 2 } }
};

const MoratoriaPage = () => {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            style={{ 
                textAlign: 'center', 
                padding: '40px 10px', // Añadimos padding lateral para móviles
                color: '#FFF' 
            }}
        >
            <img 
                src={bannerMoratoria} 
                alt="Moratoria 2025"
                style={{
                    maxWidth: '100%', // La imagen no supera el ancho de su contenedor
                    height: 'auto', // Mantiene la proporción
                    borderRadius: '8px', // Opcional, para bordes redondeados
                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)' // Opcional, sombra para que resalte
                }}
            />
        </motion.div>
    );
};

export default MoratoriaPage;