import React from 'react';
import { Link } from 'react-router-dom';  // Importamos Link para navegación
import logoNardini from '../assets/nardini-srl.jpeg';
import logoPunaRentals from '../assets/puna-rentals.png';
import logoHotelDelVino from '../assets/hotel-del-vino-large-2.png'
import logoAbril from '../assets/abril-frutos-secos.png';
import logoZeus from '../assets/zeus-peluqueria.jpeg';
import logoEmele from '../assets/emele-sublimaciones.jpeg';
import logoMz from '../assets/mz-construcciones.jpeg';
import logoLasMascios from '../assets/las-mascios-boutique.jpeg';
import logoSuperCasino from '../assets/super-casino.jpeg';
import logoBaruTiendaSaludable from '../assets/baru-tienda-saludable.jpeg';
import logoMapacheBar from '../assets/mapache-bar.jpeg';
import logoBooguieRetroBar from '../assets/booguie-retro-bar.jpeg';
import logoElMisterPlays from '../assets/el-mister-plays.jpeg';
import logoSEBeautique from '../assets/se-beautique.jpeg';
import logoMarianoTorresTaller from '../assets/mariano-torres-taller.jpeg';
import logoSigsas from '../assets/sigsas.png';
import logoTiendaLaFortuna from '../assets/tienda-la-fortuna.jpeg';
import logoBarberiaCastillo from '../assets/barberia-castillo.jpeg';
import logoFerreteriaGay from '../assets/ferreteria-gay.jpeg';
import logoSandwicheriaChanchin from '../assets/sandwicheria-chanchin.jpeg';
import logoSaltaLac from '../assets/saltalac.jpeg';
import logoMymCelulares from '../assets/mym-celulares.png';
import logoSuplementosNutricionales from '../assets/suplementos-nutricionales-salta.jpeg';
import logoCristianCelulares from '../assets/cristian-celulares.jpeg';
import logoMecanicaRicardoMartin from '../assets/ricardo-martin-mecanica-integral.png';
import logoNegroCopa from '../assets/lo-del-negro-copa.png';
import logoGuzmanRepuestos from '../assets/guzman-repuestos.jpeg';
import logoStarCars from '../assets/star-cars.jpeg';
import logoBateriasZarate from '../assets/baterias-zarate.jpeg';
import logoHefestoHerreria from '../assets/hefesto-herreria.jpeg';
import logoDonTomas from '../assets/kiosco-don-tomas.png';
import logoLgHerreria from '../assets/lg-herreria.jpeg';
import logoVove from '../assets/vove.jpeg';
import logoAlwaysRentACar from '../assets/always-rent-a-car.jpeg';
import logoViaBana from '../assets/heladeria-via-bana.png';
import logoMaxiPeluqueriaYBarberia from '../assets/maxi-peluqueria-barberia.png';
import logoEdinor from '../assets/edinor.jpeg';
import logoTeatroAdn from '../assets/teatro-adn.jpeg';
import logoCabanasOhana from '../assets/cabanas-ohana.jpeg';
import logoKoki from '../assets/koki.jpeg';
import logoLitoGolosinas from '../assets/lito-golosinas.jpeg';
import logoLocosPorLasGolosinas from '../assets/locos-por-las-golosinas.jpeg';
import logoQueicos from '../assets/queicos.jpeg';
import logoChiri from '../assets/lo-de-chiri.jpeg';
import logoAfrodita from '../assets/afrodita-makeup.jpeg';
import logoMatiasDaher from '../assets/matias-daher.jpeg';
import logoReservaPerfecta from '../assets/reserva-perfecta.jpeg';
import logoHotelSelina from '../assets/hotel-selina.jpeg';
import logoTroyCarRental from '../assets/troy-car-rental.jpeg';
import logoTroyCoworking from '../assets/troy-coworking.jpeg';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 2 } }
};

const BeneficiosPage = () => {
    return (
        <div>
            <motion.div
                className="beneficios-intro" 
                style={{ textAlign: 'center', padding: '40px 0', backgroundColor: '#0c3553', color: '#FFF' }}
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
            >
                <h2 style={{ marginBottom: '20px', fontSize: '30px' }}>Programa de Beneficios</h2>
                <p style={{ fontSize: '20px', marginBottom: '20px' }}>
                    Al ser socio del Centro Juventud Antoniana, accedés a promociones exclusivas en una amplia variedad de comercios adheridos.
                    <br />¡Aprovechá todos los beneficios que te ofrecemos!
                </p>
                <p>Si tenés un comercio y querés formar parte del Programa de Beneficios del Centro Juventud Antoniana, 
                    llená el <Link to="/contacto" style={{ color: '#F0F5F5' }}>formulario de contacto</Link> o envianos un 
                    email a <a href="mailto:institucional@juventudantoniana.com.ar" style={{ color: '#F0F5F5' }}>institucional@juventudantoniana.com.ar</a>,
                    y te contactaremos a la brevedad para contarte los beneficios que tenemos para vos y tu negocio.
                </p>
            </motion.div>

            <motion.div
                className="comercios-adheridos" 
                style={{ padding: '40px 0', backgroundColor: '#F0F5F5' }}
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
            > 
                <h3 style={{ textAlign: 'center', color: '#0c3553', marginBottom: '30px' }}>Comercios Adheridos</h3>
                <div className="comercios-list" style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '30px' }}>
                    {/* Comercio 3 */}
                    <div className="comercio" style={{ width: '300px', padding: '20px', border: '1px solid #ccc', borderRadius: '10px', backgroundColor: '#FFF' }}>
                        <img
                            src={logoHotelDelVino}
                            alt="Del Vino Hotel Boutique"
                            style={{ width: '100%', height: 'auto', borderRadius: '5px' }}
                        />
                        <h4 style={{ color: '#0c3553', marginTop: '15px' }}>DEL VINO HOTEL BOUTIQUE</h4>
                        <p style={{ color: '#333', fontSize: '16px' }}>
                            📍Ameghino 555
                            <br />💰20% de descuento en alojamiento.
                            <br />💵10% de descuento en vinería del hotel.
                        </p>
                    </div>
                    {/* Comercio 3 */}
                    <div className="comercio" style={{ width: '300px', padding: '20px', border: '1px solid #ccc', borderRadius: '10px', backgroundColor: '#FFF' }}>
                        <img
                            src={logoPunaRentals}
                            alt="Puna Rentals"
                            style={{ width: '100%', height: 'auto', borderRadius: '5px' }}
                        />
                        <h4 style={{ color: '#0c3553', marginTop: '15px' }}>PUNA RENTALS</h4>
                        <p style={{ color: '#333', fontSize: '16px' }}>
                            📍Ameghino 555
                            <br />💰15% de descuento en alquiler de automotores.
                        </p>
                    </div>
                    {/* Comercio 2 */}
                    <div className="comercio" style={{ width: '300px', padding: '20px', border: '1px solid #ccc', borderRadius: '10px', backgroundColor: '#FFF' }}>
                        <img
                            src={logoNardini}
                            alt="Nardini SRL"
                            style={{ width: '100%', height: 'auto', borderRadius: '5px' }}
                        />
                        <h4 style={{ color: '#0c3553', marginTop: '15px' }}>NARDINI SRL</h4>
                        <p style={{ color: '#333', fontSize: '16px' }}>
                            📍Mitre 620 - Salta
                            <br />💰10% de descuento en lavadero.
                            <br />💵5% de descuento en lubricantes o cambio de aceite.
                            <br />💲5% de descuento en confitería.
                            <br /> ✅Si te asocias al A.C.A, tenés un lavado de carrocería e interior gratis.
                        </p>
                    </div>
                    {/* Comercio 3 */}
                    <div className="comercio" style={{ width: '300px', padding: '20px', border: '1px solid #ccc', borderRadius: '10px', backgroundColor: '#FFF' }}>
                        <img
                            src={logoNardini}
                            alt="Hostería Anillaco"
                            style={{ width: '100%', height: 'auto', borderRadius: '5px' }}
                        />
                        <h4 style={{ color: '#0c3553', marginTop: '15px' }}>HOSTERÍA ANILLACO</h4>
                        <p style={{ color: '#333', fontSize: '16px' }}>
                            📍Av de los terebintos s/N esquina Coronel Barros - Anillaco, La Rioja
                            <br />💰15% de descuento en Hostería.
                            <br />💵20% de descuento en restaurante.
                        </p>
                    </div>
                    {/* Comercio 1 */}
                    <div className="comercio" style={{ width: '300px', padding: '20px', border: '1px solid #ccc', borderRadius: '10px', backgroundColor: '#FFF' }}>
                        <img
                            src={logoZeus}
                            alt="Zeus Peluquería"
                            style={{ width: '100%', height: 'auto', borderRadius: '5px' }}
                        />
                        <h4 style={{ color: '#0c3553', marginTop: '15px' }}>ZEUS PELUQUERÍA</h4>
                        <p style={{ color: '#333', fontSize: '16px' }}>
                            📍Avenida del bicentenario 889
                            <br />💰20% de descuento en efectivo o transferencia
                        </p>
                    </div>
                    {/* Comercio 4 */}
                    <div className="comercio" style={{ width: '300px', padding: '20px', border: '1px solid #ccc', borderRadius: '10px', backgroundColor: '#FFF' }}>
                        <img
                            src={logoAbril}
                            alt="Abril Frutos Secos"
                            style={{ width: '100%', height: 'auto', borderRadius: '5px' }}
                        />
                        <h4 style={{ color: '#0c3553', marginTop: '15px' }}>ABRIL FRUTOS SECOS</h4>
                        <p style={{ color: '#333', fontSize: '16px' }}>
                            📍Córdoba 643
                            <br /> 💵10% productos de dietética en general como cereales, desecados, semillas, legumbres, repostería.
                            <br /> 💲15% de descuento en frutos secos
                            <br /> 💰Efectivo o transferencia
                        </p>
                    </div>
                    {/* Comercio 6 */}
                    <div className="comercio" style={{ width: '300px', padding: '20px', border: '1px solid #ccc', borderRadius: '10px', backgroundColor: '#FFF' }}>
                        <img
                            src={logoEmele}
                            alt="Emele Sublimacion & Gráfica"
                            style={{ width: '100%', height: 'auto', borderRadius: '5px' }}
                        />
                        <h4 style={{ color: '#0c3553', marginTop: '15px' }}>EMELE - SUBLIMACIÓN & GRÁFICA</h4>
                        <p style={{ color: '#333', fontSize: '16px' }}>
                            📍Córdoba 823
                            <br /> 💰15 % de descuento en efectivo o transferencia
                        </p>
                    </div>
                    {/* Comercio 7 */}
                    <div className="comercio" style={{ width: '300px', padding: '20px', border: '1px solid #ccc', borderRadius: '10px', backgroundColor: '#FFF' }}>
                        <img
                            src={logoMz}
                            alt="MZ Construcciones"
                            style={{ width: '100%', height: 'auto', borderRadius: '5px' }}
                        />
                        <h4 style={{ color: '#0c3553', marginTop: '15px' }}>MZ CONSTRUCCIONES</h4>
                        <p style={{ color: '#333', fontSize: '16px' }}>
                            📍General Paz 558
                            <br /> 💰10 % de descuento en efectivo en servicios de construcción
                        </p>
                    </div>
                    {/* Comercio 8 */}
                    <div className="comercio" style={{ width: '300px', padding: '20px', border: '1px solid #ccc', borderRadius: '10px', backgroundColor: '#FFF' }}>
                        <img
                            src={logoLasMascios}
                            alt="Las Mascio's Boutique"
                            style={{ width: '100%', height: 'auto', borderRadius: '5px' }}
                        />
                        <h4 style={{ color: '#0c3553', marginTop: '15px' }}>LAS MASCIO'S BOUTIQUE</h4>
                        <p style={{ color: '#333', fontSize: '16px' }}>
                            📍Balcarce 39 Local 38 Galeria La Continental
                            <br /> 💰10 % de descuento en efectivo en indumentaria femenina
                        </p>
                    </div>
                    {/* Comercio 9 */}
                    <div className="comercio" style={{ width: '300px', padding: '20px', border: '1px solid #ccc', borderRadius: '10px', backgroundColor: '#FFF' }}>
                        <img
                            src={logoSuperCasino}
                            alt="Super Casino"
                            style={{ width: '100%', height: 'auto', borderRadius: '5px' }}
                        />
                        <h4 style={{ color: '#0c3553', marginTop: '15px' }}>SÚPER CASINO</h4>
                        <p style={{ color: '#333', fontSize: '16px' }}>
                            📍Avenida República de Líbano 956
                            <br /> 💰10% de descuento en efectivo exceptuando productos en oferta
                        </p>
                    </div>
                    {/* Comercio 10 */}
                    <div className="comercio" style={{ width: '300px', padding: '20px', border: '1px solid #ccc', borderRadius: '10px', backgroundColor: '#FFF' }}>
                        <img
                            src={logoBaruTiendaSaludable}
                            alt="Barú Tienda Saludable"
                            style={{ width: '100%', height: 'auto', borderRadius: '5px' }}
                        />
                        <h4 style={{ color: '#0c3553', marginTop: '15px' }}>BARÚ TIENDA SALUDABLE</h4>
                        <p style={{ color: '#333', fontSize: '16px' }}>
                            📍Almirante Brown 311
                            <br /> 💰10% de descuento en efectivo o transferencia en compras superiores a $10.000
                        </p>
                    </div>
                    {/* Comercio 11 */}
                    <div className="comercio" style={{ width: '300px', padding: '20px', border: '1px solid #ccc', borderRadius: '10px', backgroundColor: '#FFF' }}>
                        <img
                            src={logoMapacheBar}
                            alt="Mapache Bar"
                            style={{ width: '100%', height: 'auto', borderRadius: '5px' }}
                        />
                        <h4 style={{ color: '#0c3553', marginTop: '15px' }}>MAPACHE BAR</h4>
                        <p style={{ color: '#333', fontSize: '16px' }}>
                            📍Avenida Entre Ríos 1933
                            <br /> 💰15 % de descuento en bebidas y comidas en efectivo o transferencia
                        </p>
                    </div>
                    {/* Comercio 12 */}
                    <div className="comercio" style={{ width: '300px', padding: '20px', border: '1px solid #ccc', borderRadius: '10px', backgroundColor: '#FFF' }}>
                        <img
                            src={logoBooguieRetroBar}
                            alt="Booguie Retro Bar"
                            style={{ width: '100%', height: 'auto', borderRadius: '5px' }}
                        />
                        <h4 style={{ color: '#0c3553', marginTop: '15px' }}>BOOGUIE RETRO BAR</h4>
                        <p style={{ color: '#333', fontSize: '16px' }}>
                            📍Ayacucho 133
                            <br /> 💰15% de descuento en comidas y bebidas en efectivo o transferencia
                        </p>
                    </div>
                    {/* Comercio 13 */}
                    <div className="comercio" style={{ width: '300px', padding: '20px', border: '1px solid #ccc', borderRadius: '10px', backgroundColor: '#FFF' }}>
                        <img
                            src={logoElMisterPlays}
                            alt="El Mister Plays"
                            style={{ width: '100%', height: 'auto', borderRadius: '5px' }}
                        />
                        <h4 style={{ color: '#0c3553', marginTop: '15px' }}>El Mister Plays SAS</h4>
                        <p style={{ color: '#333', fontSize: '16px' }}>
                            📍Alberdi 534 - General Güemes
                            <br /> 💰10% de descuento en efectivo en artículos gamer y deportivos
                        </p>
                    </div>
                    {/* Comercio 14 */}
                    <div className="comercio" style={{ width: '300px', padding: '20px', border: '1px solid #ccc', borderRadius: '10px', backgroundColor: '#FFF' }}>
                        <img
                            src={logoSEBeautique}
                            alt="SE Beautique SAS"
                            style={{ width: '100%', height: 'auto', borderRadius: '5px' }}
                        />
                        <h4 style={{ color: '#0c3553', marginTop: '15px' }}>SE BEAUTIQUE SAS</h4>
                        <p style={{ color: '#333', fontSize: '16px' }}>
                            📍Alberdi 532 - General Güemes
                            <br /> 💰10% de descuento en efectivo en productos de estetica
                        </p>
                    </div>
                    {/* Comercio 15 */}
                    <div className="comercio" style={{ width: '300px', padding: '20px', border: '1px solid #ccc', borderRadius: '10px', backgroundColor: '#FFF' }}>
                        <img
                            src={logoMarianoTorresTaller}
                            alt="Mariano Torres - Taller de Automotores"
                            style={{ width: '100%', height: 'auto', borderRadius: '5px' }}
                        />
                        <h4 style={{ color: '#0c3553', marginTop: '15px' }}>TALLER DE AUTOMOTORES MARIANO TORRES</h4>
                        <p style={{ color: '#333', fontSize: '16px' }}>
                            📍12 de Octubre 840
                            <br /> 💰20% en un solo pago en efectivo y 10% con tarjeta en chapa y pintura
                        </p>
                    </div>
                    {/* Comercio 16 */}
                    <div className="comercio" style={{ width: '300px', padding: '20px', border: '1px solid #ccc', borderRadius: '10px', backgroundColor: '#FFF' }}>
                        <img
                            src={logoSigsas}
                            alt="SIGSAS"
                            style={{ width: '100%', height: 'auto', borderRadius: '5px' }}
                        />
                        <h4 style={{ color: '#0c3553', marginTop: '15px' }}>SIGSAS</h4>
                        <p style={{ color: '#333', fontSize: '16px' }}>
                            📍Talcahuano 411
                            <br /> 💰20% de descuento en efectivo en servicios de consulta empresarial
                        </p>
                    </div>
                    {/* Comercio 17
                    <div className="comercio" style={{ width: '300px', padding: '20px', border: '1px solid #ccc', borderRadius: '10px', backgroundColor: '#FFF' }}>
                        <img
                            src={logoMrMagoo}
                            alt="Mr. Magoo"
                            style={{ width: '100%', height: 'auto', borderRadius: '5px' }}
                        />
                        <h4 style={{ color: '#0c3553', marginTop: '15px' }}>MR. MAGOO</h4>
                        <p style={{ color: '#333', fontSize: '16px' }}>
                            📍 España 910
                            <br /> 💰 ⁠15 % de descuento en efectivo en sandwicheria, confitería y bebidas
                        </p>
                    </div> */}
                    {/* Comercio 18 */}
                    <div className="comercio" style={{ width: '300px', padding: '20px', border: '1px solid #ccc', borderRadius: '10px', backgroundColor: '#FFF' }}>
                        <img
                            src={logoTiendaLaFortuna}
                            alt="Tienda La Fortuna"
                            style={{ width: '100%', height: 'auto', borderRadius: '5px' }}
                        />
                        <h4 style={{ color: '#0c3553', marginTop: '15px' }}>TIENDA LA FORTUNA</h4>
                        <p style={{ color: '#333', fontSize: '16px' }}>
                            📍Avenida San Martin 821
                            <br /> 💰10% de descuento en efectivo o transferencia en artículos e indumentaria del gaucho en general
                        </p>
                    </div>
                    {/* Comercio 19 */}
                    <div className="comercio" style={{ width: '300px', padding: '20px', border: '1px solid #ccc', borderRadius: '10px', backgroundColor: '#FFF' }}>
                        <img
                            src={logoBarberiaCastillo}
                            alt="Barbería Castillo"
                            style={{ width: '100%', height: 'auto', borderRadius: '5px' }}
                        />
                        <h4 style={{ color: '#0c3553', marginTop: '15px' }}>BARBERÍA CASTILLO</h4>
                        <p style={{ color: '#333', fontSize: '16px' }}>
                            📍San Luis 1406
                            <br /> 💵15 % de descuento los días Lunes, Viernes y Sábados
                            <br /> 💲30 % de descuento los días Martes, Miércoles y Jueves
                            <br /> 💰Efectivo o transferencia
                        </p>
                    </div>
                    {/* Comercio 20 */}
                    <div className="comercio" style={{ width: '300px', padding: '20px', border: '1px solid #ccc', borderRadius: '10px', backgroundColor: '#FFF' }}>
                        <img
                            src={logoFerreteriaGay}
                            alt="Ferretería Gay"
                            style={{ width: '100%', height: 'auto', borderRadius: '5px' }}
                        />
                        <h4 style={{ color: '#0c3553', marginTop: '15px' }}>FERRETERÍA GAY</h4>
                        <p style={{ color: '#333', fontSize: '16px' }}>
                            📍Jujuy 591
                            <br /> 💰25% de descuento de contado, débito y una cuota sin interés
                            <br /> 💲10% de descuento en 3 cuotas sin interés con VISA y MasterCard bancarizadas
                            <br/> 💵Promoción no acumulable con otras disponibles.
                        </p>
                    </div>
                    {/* Comercio 21 */}
                    <div className="comercio" style={{ width: '300px', padding: '20px', border: '1px solid #ccc', borderRadius: '10px', backgroundColor: '#FFF' }}>
                        <img
                            src={logoSandwicheriaChanchin}
                            alt="Sandwichería Chanchín"
                            style={{ width: '100%', height: 'auto', borderRadius: '5px' }}
                        />
                        <h4 style={{ color: '#0c3553', marginTop: '15px' }}>SANDWICHERÍA CHANCHÍN</h4>
                        <p style={{ color: '#333', fontSize: '16px' }}>
                            📍Alvarado 1939
                            <br /> 💰15 % de descuento en efectivo o transferencia en bebidas y sandwiches
                        </p>
                    </div>
                    {/* Comercio 22 */}
                    <div className="comercio" style={{ width: '300px', padding: '20px', border: '1px solid #ccc', borderRadius: '10px', backgroundColor: '#FFF' }}>
                        <img
                            src={logoSaltaLac}
                            alt="SALTALAC"
                            style={{ width: '100%', height: 'auto', borderRadius: '5px' }}
                        />
                        <h4 style={{ color: '#0c3553', marginTop: '15px' }}>SALTALAC</h4>
                        <p style={{ color: '#333', fontSize: '16px' }}>
                            📍Tavella 2231
                            <br /> 💰10 % de descuento en efectivo
                        </p>
                    </div>
                    {/* Comercio 23 */}
                    <div className="comercio" style={{ width: '300px', padding: '20px', border: '1px solid #ccc', borderRadius: '10px', backgroundColor: '#FFF' }}>
                        <img
                            src={logoMymCelulares}
                            alt="M&M Celulares"
                            style={{ width: '100%', height: 'auto', borderRadius: '5px' }}
                        />
                        <h4 style={{ color: '#0c3553', marginTop: '15px' }}>M&M CELULARES</h4>
                        <p style={{ color: '#333', fontSize: '16px' }}>
                            📍Florida 398
                            <br /> 💰10% de descuento en efectivo en compra de accesorios, servicio técnico y compra de equipos nuevos y usados
                        </p>
                    </div>
                    {/* Comercio 26 */}
                    <div className="comercio" style={{ width: '300px', padding: '20px', border: '1px solid #ccc', borderRadius: '10px', backgroundColor: '#FFF' }}>
                        <img
                            src={logoGuzmanRepuestos}
                            alt="Guzmán Repuestos"
                            style={{ width: '100%', height: 'auto', borderRadius: '5px' }}
                        />
                        <h4 style={{ color: '#0c3553', marginTop: '15px' }}>GUZMÁN REPUESTOS</h4>
                        <p style={{ color: '#333', fontSize: '16px' }}>
                            📍Coronel Vidt 98
                            <br /> 💰15% de descuento en efectivo, transferencia y débito.
                        </p>
                    </div>
                    {/* Comercio 24 */}
                    <div className="comercio" style={{ width: '300px', padding: '20px', border: '1px solid #ccc', borderRadius: '10px', backgroundColor: '#FFF' }}>
                        <img
                            src={logoSuplementosNutricionales}
                            alt="Suplementos Nutricionales Salta"
                            style={{ width: '100%', height: 'auto', borderRadius: '5px' }}
                        />
                        <h4 style={{ color: '#0c3553', marginTop: '15px' }}>SUPLEMENTOS NUTRICIONALES SALTA</h4>
                        <p style={{ color: '#333', fontSize: '16px' }}>
                            📍<b>Suc. Centro:</b> 25 de mayo 249
                            <br />📍<b>Suc. Zona Shopping:</b> Alsina 151
                            <br />📍<b>Suc. Zona Sur:</b> Avenida ex Combatientes de Malvinas 3814
                            <br /> 💰10% de descuento en efectivo o transferencia y 3 cuotas sin interes a precio de lista con tarjeta.
                        </p>
                    </div>
                    {/* Comercio 25 */}
                    <div className="comercio" style={{ width: '300px', padding: '20px', border: '1px solid #ccc', borderRadius: '10px', backgroundColor: '#FFF' }}>
                        <img
                            src={logoCristianCelulares}
                            alt="Cristian Celulares"
                            style={{ width: '100%', height: 'auto', borderRadius: '5px' }}
                        />
                        <h4 style={{ color: '#0c3553', marginTop: '15px' }}>CRISTIAN CELULARES</h4>
                        <p style={{ color: '#333', fontSize: '16px' }}>
                            📍Local 5 sector A Mercado San Miguel
                            <br /> 💰10% de descuento en efectivo transferencia en servicio técnico y 15 % de descuento en compra de  nuevos o usados efectivo o transferencia.
                        </p>
                    </div>
                    {/* Comercio 26 */}
                    <div className="comercio" style={{ width: '300px', padding: '20px', border: '1px solid #ccc', borderRadius: '10px', backgroundColor: '#FFF' }}>
                        <img
                            src={logoMecanicaRicardoMartin}
                            alt="Mecánica Integral Ricardo Martin"
                            style={{ width: '100%', height: 'auto', borderRadius: '5px' }}
                        />
                        <h4 style={{ color: '#0c3553', marginTop: '15px' }}>MECÁNICA INTEGRAL RICARDO MARTIN</h4>
                        <p style={{ color: '#333', fontSize: '16px' }}>
                            📍Los Lanceros 1486
                            <br /> 💰20% de descuento en efectivo o transferencia.
                        </p>
                    </div>
                    {/* Comercio 26 */}
                    <div className="comercio" style={{ width: '300px', padding: '20px', border: '1px solid #ccc', borderRadius: '10px', backgroundColor: '#FFF' }}>
                        <img
                            src={logoNegroCopa}
                            alt="Lo del Negro Copa"
                            style={{ width: '100%', height: 'auto', borderRadius: '5px' }}
                        />
                        <h4 style={{ color: '#0c3553', marginTop: '15px' }}>LO DEL NEGRO COPA</h4>
                        <p style={{ color: '#333', fontSize: '16px' }}>
                            📍12 de Octubre 581
                            <br /> 💰10% de descuento en efectivo, transferencia y débito.
                        </p>
                    </div>
                    {/* Comercio 26 */}
                    <div className="comercio" style={{ width: '300px', padding: '20px', border: '1px solid #ccc', borderRadius: '10px', backgroundColor: '#FFF' }}>
                        <img
                            src={logoStarCars}
                            alt="Star Cars Mecánica"
                            style={{ width: '100%', height: 'auto', borderRadius: '5px' }}
                        />
                        <h4 style={{ color: '#0c3553', marginTop: '15px' }}>STAR CARS MECÁNICA</h4>
                        <p style={{ color: '#333', fontSize: '16px' }}>
                            📍Zuviría 1708
                            <br /> 💰20% de descuento en trabajos de mecánica en general abonando con efectivo, transferencia, débito y crédito.
                        </p>
                    </div>
                    {/* Comercio 26 */}
                    <div className="comercio" style={{ width: '300px', padding: '20px', border: '1px solid #ccc', borderRadius: '10px', backgroundColor: '#FFF' }}>
                        <img
                            src={logoBateriasZarate}
                            alt="Baterías Zárate"
                            style={{ width: '100%', height: 'auto', borderRadius: '5px' }}
                        />
                        <h4 style={{ color: '#0c3553', marginTop: '15px' }}>BATERÍAS ZÁRATE</h4>
                        <p style={{ color: '#333', fontSize: '16px' }}>
                            📍San Luis 1207
                            <br/>📍Zuviria 1472
                            <br /> 💰15 % de descuento abonando en efectivo y 6 cuotas sin interés visa o MasterCard bancarizadas.
                        </p>
                    </div>
                    {/* Comercio 26 */}
                    <div className="comercio" style={{ width: '300px', padding: '20px', border: '1px solid #ccc', borderRadius: '10px', backgroundColor: '#FFF' }}>
                        <img
                            src={logoHefestoHerreria}
                            alt="Hefesto Herrería"
                            style={{ width: '100%', height: 'auto', borderRadius: '5px' }}
                        />
                        <h4 style={{ color: '#0c3553', marginTop: '15px' }}>HEFESTO HERRERÏA</h4>
                        <p style={{ color: '#333', fontSize: '16px' }}>
                            📍Avenida Entre Ríos 241
                            <br /> 💰15 % de descuento abonando en efectivo o transferencia.
                        </p>
                    </div>
                    {/* Comercio 26 */}
                    <div className="comercio" style={{ width: '300px', padding: '20px', border: '1px solid #ccc', borderRadius: '10px', backgroundColor: '#FFF' }}>
                        <img
                            src={logoDonTomas}
                            alt="Kiosco Don Tomás"
                            style={{ width: '100%', height: 'auto', borderRadius: '5px' }}
                        />
                        <h4 style={{ color: '#0c3553', marginTop: '15px' }}>KIOSCO DON TOMÁS</h4>
                        <p style={{ color: '#333', fontSize: '16px' }}>
                            📍Zuviría 2350
                            <br/>📍Zuviría 2663
                            <br /> 💰15% de descuento en efectivo o transferencia.
                        </p>
                    </div>
                    {/* Comercio 26 */}
                    <div className="comercio" style={{ width: '300px', padding: '20px', border: '1px solid #ccc', borderRadius: '10px', backgroundColor: '#FFF' }}>
                        <img
                            src={logoLgHerreria}
                            alt="LG Herrería"
                            style={{ width: '100%', height: 'auto', borderRadius: '5px' }}
                        />
                        <h4 style={{ color: '#0c3553', marginTop: '15px' }}>LG HERRERÍA</h4>
                        <p style={{ color: '#333', fontSize: '16px' }}>
                            📍Pasaje Martin Castañeres 547 - B° Ceferino
                            <br /> 💰20% de descuento abonando en efectivo.
                        </p>
                    </div>
                    {/* Comercio 26 */}
                    <div className="comercio" style={{ width: '300px', padding: '20px', border: '1px solid #ccc', borderRadius: '10px', backgroundColor: '#FFF' }}>
                        <img
                            src={logoVove}
                            alt="VOVE"
                            style={{ width: '100%', height: 'auto', borderRadius: '5px' }}
                        />
                        <h4 style={{ color: '#0c3553', marginTop: '15px' }}>VOVE</h4>
                        <p style={{ color: '#333', fontSize: '16px' }}>
                            📍Vicente López 498
                            <br /> 💰15% de descuento abonando en efectivo.
                        </p>
                    </div>
                    {/* Comercio 26 */}
                    <div className="comercio" style={{ width: '300px', padding: '20px', border: '1px solid #ccc', borderRadius: '10px', backgroundColor: '#FFF' }}>
                        <img
                            src={logoAlwaysRentACar}
                            alt="Always Rent A Car"
                            style={{ width: '100%', height: 'auto', borderRadius: '5px' }}
                        />
                        <h4 style={{ color: '#0c3553', marginTop: '15px' }}>ALWAYS RENT A CAR</h4>
                        <p style={{ color: '#333', fontSize: '16px' }}>
                            📍Caseros 1642
                            <br/>  💰30% de descuento efectivo, transferencia, crédito y débito.
                        </p>
                    </div>
                    {/* Comercio 26 */}
                    <div className="comercio" style={{ width: '300px', padding: '20px', border: '1px solid #ccc', borderRadius: '10px', backgroundColor: '#FFF' }}>
                        <img
                            src={logoViaBana}
                            alt="Heladería Via Vana"
                            style={{ width: '100%', height: 'auto', borderRadius: '5px' }}
                        />
                        <h4 style={{ color: '#0c3553', marginTop: '15px' }}>HELADERÍA VIA VANA</h4>
                        <p style={{ color: '#333', fontSize: '16px' }}>
                            📍Manzana X casa nro 11 - Barrio Santa Cecilia.
                            <br/>  💰10% de descuento en efectivo.
                        </p>
                    </div>
                    {/* Comercio 26 */}
                    <div className="comercio" style={{ width: '300px', padding: '20px', border: '1px solid #ccc', borderRadius: '10px', backgroundColor: '#FFF' }}>
                        <img
                            src={logoMaxiPeluqueriaYBarberia}
                            alt="MAXI Peluquería y Barbería"
                            style={{ width: '100%', height: 'auto', borderRadius: '5px' }}
                        />
                        <h4 style={{ color: '#0c3553', marginTop: '15px' }}>MAXI PELUQUERÍA Y BARBERÍA</h4>
                        <p style={{ color: '#333', fontSize: '16px' }}>
                            📍Armada Argentina 309 - Ciudad del Milagro.
                            <br/>💰15% de descuento en efectivo o transferencia.
                        </p>
                    </div>
                    {/* Comercio 26 */}
                    <div className="comercio" style={{ width: '300px', padding: '20px', border: '1px solid #ccc', borderRadius: '10px', backgroundColor: '#FFF' }}>
                        <img
                            src={logoEdinor}
                            alt="EDINOR"
                            style={{ width: '100%', height: 'auto', borderRadius: '5px' }}
                        />
                        <h4 style={{ color: '#0c3553', marginTop: '15px' }}>EDINOR</h4>
                        <p style={{ color: '#333', fontSize: '16px' }}>
                            📍Etapa 6 Manzana 11 casa 23 Barrio Parque Belgrano.
                            <br/> 💰15% de descuento en artículos personalizados sublimados.
                            <br/> 💲10% de descuento en servicio técnico de PC e impresoras.
                        </p>
                    </div>
                    {/* Comercio 26 */}
                    <div className="comercio" style={{ width: '300px', padding: '20px', border: '1px solid #ccc', borderRadius: '10px', backgroundColor: '#FFF' }}>
                        <img
                            src={logoTeatroAdn}
                            alt="Teatro ADN"
                            style={{ width: '100%', height: 'auto', borderRadius: '5px' }}
                        />
                        <h4 style={{ color: '#0c3553', marginTop: '15px' }}>TEATRO ADN</h4>
                        <p style={{ color: '#333', fontSize: '16px' }}>
                            📍25 de mayo 102.
                            <br/> 💰35% de descuento en producciones locales.
                        </p>
                    </div>
                    {/* Comercio 26 */}
                    <div className="comercio" style={{ width: '300px', padding: '20px', border: '1px solid #ccc', borderRadius: '10px', backgroundColor: '#FFF' }}>
                        <img
                            src={logoCabanasOhana}
                            alt="Cabañas Ohana"
                            style={{ width: '100%', height: 'auto', borderRadius: '5px' }}
                        />
                        <h4 style={{ color: '#0c3553', marginTop: '15px' }}>CABAÑAS OHANA</h4>
                        <p style={{ color: '#333', fontSize: '16px' }}>
                            📍Campo Quijano, Salta.
                            <br/> 📞3875342564
                            <br/> 💰20% de descuento en efectivo o transferencia.
                        </p>
                    </div>
                    {/* Comercio 26 */}
                    <div className="comercio" style={{ width: '300px', padding: '20px', border: '1px solid #ccc', borderRadius: '10px', backgroundColor: '#FFF' }}>
                        <img
                            src={logoKoki}
                            alt="KOKI 24 horas"
                            style={{ width: '100%', height: 'auto', borderRadius: '5px' }}
                        />
                        <h4 style={{ color: '#0c3553', marginTop: '15px' }}>KOKI 24 HORAS</h4>
                        <p style={{ color: '#333', fontSize: '16px' }}>
                            📍Jujuy 770.
                            <br/> 💰10 % de descuento en efectivo.
                        </p>
                    </div>
                    {/* Comercio 26 */}
                    <div className="comercio" style={{ width: '300px', padding: '20px', border: '1px solid #ccc', borderRadius: '10px', backgroundColor: '#FFF' }}>
                        <img
                            src={logoLitoGolosinas}
                            alt="Lito Golosinas"
                            style={{ width: '100%', height: 'auto', borderRadius: '5px' }}
                        />
                        <h4 style={{ color: '#0c3553', marginTop: '15px' }}>LITO GOLOSINAS</h4>
                        <p style={{ color: '#333', fontSize: '16px' }}>
                            📍Cortada de Israel 91 - Córdoba Capital.
                            <br/> 💰10% de descuento en efectivo (excepto cigarrillos).
                        </p>
                    </div>
                    {/* Comercio 26 */}
                    <div className="comercio" style={{ width: '300px', padding: '20px', border: '1px solid #ccc', borderRadius: '10px', backgroundColor: '#FFF' }}>
                        <img
                            src={logoLocosPorLasGolosinas}
                            alt="Locos por las Golosinas"
                            style={{ width: '100%', height: 'auto', borderRadius: '5px' }}
                        />
                        <h4 style={{ color: '#0c3553', marginTop: '15px' }}>LOCOS POR LAS GOLOSINAS</h4>
                        <p style={{ color: '#333', fontSize: '16px' }}>
                            📍Sarmiento 22 - Córdoba Capital.
                            <br/> 💰10% de descuento en efectivo (excepto cigarrillos).
                        </p>
                    </div>
                    {/* Comercio 26 */}
                    <div className="comercio" style={{ width: '300px', padding: '20px', border: '1px solid #ccc', borderRadius: '10px', backgroundColor: '#FFF' }}>
                        <img
                            src={logoQueicos}
                            alt="Queicos Juice Bar"
                            style={{ width: '100%', height: 'auto', borderRadius: '5px' }}
                        />
                        <h4 style={{ color: '#0c3553', marginTop: '15px' }}>QUEICOS JUICE BAR</h4>
                        <p style={{ color: '#333', fontSize: '16px' }}>
                            📍Belgrano 1078.
                            <br/> 💰15 % de descuento en todos los productos y servicios en efectivo.
                        </p>
                    </div>
                    {/* Comercio 26 */}
                    <div className="comercio" style={{ width: '300px', padding: '20px', border: '1px solid #ccc', borderRadius: '10px', backgroundColor: '#FFF' }}>
                        <img
                            src={logoChiri}
                            alt="Lo de Chiri Empanadas"
                            style={{ width: '100%', height: 'auto', borderRadius: '5px' }}
                        />
                        <h4 style={{ color: '#0c3553', marginTop: '15px' }}>LO DE CHIRI EMPANADAS</h4>
                        <p style={{ color: '#333', fontSize: '16px' }}>
                            📍Ruta 51 k 3 1/2
                            <br/> 💰10% de descuento en efectivo y transferencia.
                        </p>
                    </div>
                    {/* Comercio 26 */}
                    <div className="comercio" style={{ width: '300px', padding: '20px', border: '1px solid #ccc', borderRadius: '10px', backgroundColor: '#FFF' }}>
                        <img
                            src={logoAfrodita}
                            alt="Afrodita MakeUp"
                            style={{ width: '100%', height: 'auto', borderRadius: '5px' }}
                        />
                        <h4 style={{ color: '#0c3553', marginTop: '15px' }}>AFRODITA MAKE UP</h4>
                        <p style={{ color: '#333', fontSize: '16px' }}>
                            📍Catamarca 284
                            <br/> 💰15% de descuento en efectivo o transferencia.
                        </p>
                    </div>
                    {/* Comercio 26 */}
                    <div className="comercio" style={{ width: '300px', padding: '20px', border: '1px solid #ccc', borderRadius: '10px', backgroundColor: '#FFF' }}>
                        <img
                            src={logoMatiasDaher}
                            alt="Matías Daher Productor Asesor de Seguros"
                            style={{ width: '100%', height: 'auto', borderRadius: '5px' }}
                        />
                        <h4 style={{ color: '#0c3553', marginTop: '15px' }}>MATÍAS DAHER PRODUCTOR ASESOR DE SEGUROS</h4>
                        <p style={{ color: '#333', fontSize: '16px' }}>
                            📞3874885725
                            <br/> 💰15% de descuento (débito automático) en el seguro de tu auto con compañías líderes.
                        </p>
                    </div>
                    {/* Comercio 26 */}
                    <div className="comercio" style={{ width: '300px', padding: '20px', border: '1px solid #ccc', borderRadius: '10px', backgroundColor: '#FFF' }}>
                        <img
                            src={logoReservaPerfecta}
                            alt="Reserva Perfecta"
                            style={{ width: '100%', height: 'auto', borderRadius: '5px' }}
                        />
                        <h4 style={{ color: '#0c3553', marginTop: '15px' }}>RESERVA PERFECTA</h4>
                        <p style={{ color: '#333', fontSize: '16px' }}>
                            📞3874122407
                            <br/> 💰10% de descuento en efectivo o transferencia en alojamientos temporales en Salta capital y alrededores.
                        </p>
                    </div>
                    {/* Comercio 26 */}
                    <div className="comercio" style={{ width: '300px', padding: '20px', border: '1px solid #ccc', borderRadius: '10px', backgroundColor: '#FFF' }}>
                        <img
                            src={logoTroyCarRental}
                            alt="Troy Car Rental"
                            style={{ width: '100%', height: 'auto', borderRadius: '5px' }}
                        />
                        <h4 style={{ color: '#0c3553', marginTop: '15px' }}>TROY CAR RENTAL</h4>
                        <p style={{ color: '#333', fontSize: '16px' }}>
                            📍España 307
                            <br/> 💰10% descuento pago en efectivo.
                        </p>
                    </div>
                    {/* Comercio 26 */}
                    <div className="comercio" style={{ width: '300px', padding: '20px', border: '1px solid #ccc', borderRadius: '10px', backgroundColor: '#FFF' }}>
                        <img
                            src={logoTroyCoworking}
                            alt="Troy Coworking"
                            style={{ width: '100%', height: 'auto', borderRadius: '5px' }}
                        />
                        <h4 style={{ color: '#0c3553', marginTop: '15px' }}>TROY COWORKING</h4>
                        <p style={{ color: '#333', fontSize: '16px' }}>
                            📍España 307
                            <br/> 💰10% descuento pago en efectivo.
                        </p>
                    </div>
                    {/* Comercio 26 */}
                    <div className="comercio" style={{ width: '300px', padding: '20px', border: '1px solid #ccc', borderRadius: '10px', backgroundColor: '#FFF' }}>
                        <img
                            src={logoHotelSelina}
                            alt="Hotel Selina"
                            style={{ width: '100%', height: 'auto', borderRadius: '5px' }}
                        />
                        <h4 style={{ color: '#0c3553', marginTop: '15px' }}>HOTEL SELINA</h4>
                        <p style={{ color: '#333', fontSize: '16px' }}>
                            📍Balcarce 460
                            <br/> 💰10% descuento pago en efectivo.
                        </p>
                    </div>
                </div>
            </motion.div>

            <section className="como-acceder" style={{ padding: '40px 0', marginBottom: '80px', color: '#0c3553', textAlign: 'center' }}>
                <h3 style={{ textAlign: 'center', marginBottom: '20px' }}>¿Cómo acceder a los beneficios?</h3>
                <p style={{ fontSize: '18px', marginBottom: '20px' }}>
                    Para acceder a todos estos beneficios, solo tenés que ser socio del Centro Juventud Antoniana. Si aún no lo sos, ¡hacelo ahora!
                </p>
                <div>
                    <a href="https://juventudantoniana.accessfan.ar" style={{
                        backgroundColor: '#3C2713', color: '#FFF', padding: '15px 30px', fontSize: '18px',
                        textDecoration: 'none', borderRadius: '5px', transition: 'background-color 0.3s'
                    }}
                        onMouseEnter={(e) => e.target.style.backgroundColor = '#255a7b'}
                        onMouseLeave={(e) => e.target.style.backgroundColor = '#3C2713'}
                        target="_blank">
                        Asociate ahora a través de AccessFan
                    </a>
                </div>
            </section>

        </div>
    );
};

export default BeneficiosPage;