import React from 'react';
import logo from '../assets/abril-frutos-secos.png';

const BeneficiosPage = () => {
    return (
        <div>
            <section className="beneficios-intro" style={{ textAlign: 'center', padding: '40px 0', backgroundColor: '#0c3553', color: '#FFF' }}>
                <h2 style={{ marginBottom: '20px', fontSize: '30px' }}>Programa de Beneficios</h2>
                <p style={{ fontSize: '20px', marginBottom: '20px' }}>
                    Al ser socio del Centro Juventud Antoniana, accedés a promociones exclusivas en una amplia variedad de comercios adheridos.
                    <br />¡Aprovechá todos los beneficios que te ofrecemos!
                </p>
            </section>

            <section className="comercios-adheridos" style={{ padding: '40px 0', backgroundColor: '#F0F5F5' }}>
                <h3 style={{ textAlign: 'center', color: '#0c3553', marginBottom: '30px' }}>Comercios Adheridos</h3>
                <div className="comercios-list" style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '30px' }}>
                    {/* Comercio 1 */}
                    <div className="comercio" style={{ width: '300px', padding: '20px', border: '1px solid #ccc', borderRadius: '10px', backgroundColor: '#FFF' }}>
                        <img
                            src="https://scontent.fsla1-1.fna.fbcdn.net/v/t39.30808-6/412951552_783013200507379_8391729019907527277_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEU1rchob9t_FbEvDxEWrPZ7Ly6D-O2cc3svLoP47ZxzbI423RxG9jugjcLREJa0fE&_nc_ohc=tBv5u4-z8pkQ7kNvgGb6SDt&_nc_oc=AdhMLaeIHWTaI-2QiuSW6b5Din9bj61sEK9paogAwxMxTYn_0igNaoM8w46U2U6k9naqgBEjzHafvMQ2gZ9vt_k-&_nc_zt=23&_nc_ht=scontent.fsla1-1.fna&_nc_gid=AxDW2Hr-QhN9OlSckhrWgQ9&oh=00_AYDLEQxj46T5xVeZBSchYWw8ZYQQkkgKFdUTebD8vSchyg&oe=678B6C47"
                            alt="JOVI"
                            style={{ width: '100%', height: 'auto', borderRadius: '5px' }}
                        />
                        <h4 style={{ color: '#0c3553', marginTop: '15px' }}>RESTAURANT JOVI</h4>
                        <p style={{ color: '#333', fontSize: '16px' }}>
                            🔵 Restaurante de comidas variadas
                            <br />⚪ Exquisitos platos con la más alta calidad culinaria, en un ambiente acogedor y seguro.
                            <br />🟤 ¡Aprovechá un 10% de descuento en todos los productos!
                            <br />📍 Balcarce 601
                            <br /> ☎️   4329438
                        </p>
                    </div>

                    {/* Comercio 2 */}
                    <div className="comercio" style={{ width: '300px', padding: '20px', border: '1px solid #ccc', borderRadius: '10px', backgroundColor: '#FFF' }}>
                        <img
                            src="https://scontent.fsla1-1.fna.fbcdn.net/v/t39.30808-1/427974431_706010318399124_267945852806914109_n.jpg?stp=dst-jpg_s480x480_tt6&_nc_cat=103&ccb=1-7&_nc_sid=1d2534&_nc_eui2=AeGnO4G2gcld-xeoRnifwIUSXrAOebGCrStesA55sYKtKxP3O8Zatrp4cARrVZ-Zx4w&_nc_ohc=618R7ZI9yCwQ7kNvgFpL74U&_nc_oc=AdjT34x4inwE___Q3gy3tPLPGsObs-pOvBI-osbUNBxnhr1tapVQAdgl7w3B_NuhNsJyZuHqazpPtPBPHx8g6GkS&_nc_zt=24&_nc_ht=scontent.fsla1-1.fna&_nc_gid=AVPX9K66THUarQlJNUq4mtr&oh=00_AYDcN2JDuH-CCI17HCdWp0hUJ3pl5XInIrA7pG2T7gXQGQ&oe=678B63E6"
                            alt="NARDINI SRL"
                            style={{ width: '100%', height: 'auto', borderRadius: '5px' }}
                        />
                        <h4 style={{ color: '#0c3553', marginTop: '15px' }}>NARDINI SRL</h4>
                        <p style={{ color: '#333', fontSize: '16px' }}>
                            🔵 Concesionario oficial de ACA. Estación de servicio 24hs.
                            <br />⚪ Servicompras - Lavadero - Boxes
                            <br />🟤 Un 15% de descuento en toda la tienda para socios de CJA. ¡No te lo pierdas!
                            <br />📍Mitre 620 - Salta
                        </p>
                    </div>

                    {/* Comercio 3 */}
                    <div className="comercio" style={{ width: '300px', padding: '20px', border: '1px solid #ccc', borderRadius: '10px', backgroundColor: '#FFF' }}>
                        <img
                            src="https://scontent.fsla1-1.fna.fbcdn.net/v/t39.30808-1/305213684_515748907216882_425086654960683744_n.jpg?stp=c0.0.1268.1268a_dst-jpg_s480x480_tt6&_nc_cat=111&ccb=1-7&_nc_sid=2d3e12&_nc_eui2=AeHwbf02ytC1oqItyiUgr3tHMRyCtoUejfIxHIK2hR6N8sFi7JMugJFjj_uMwhRLadE&_nc_ohc=BUHTYjUCcpUQ7kNvgFZUNOI&_nc_oc=AdhtdijEMgRA_VY6UjRxyyzsnXgncYXvXKnMEzxMQe5vOMOjmB7St0aFl814Nzg4OReyvv8UnUsZARXC9_YbfFFe&_nc_zt=24&_nc_ht=scontent.fsla1-1.fna&_nc_gid=ACHYxTdsjUi2aj4h2ZGyoyG&oh=00_AYDJc3E2LFNoM3yPiHtaK6_JZsB6zd1LTFE2VWM8G6khPg&oe=678B57B0"
                            alt="Del Vino Hotel Boutique"
                            style={{ width: '100%', height: 'auto', borderRadius: '5px' }}
                        />
                        <h4 style={{ color: '#0c3553', marginTop: '15px' }}>DEL VINO BOUTIQUE HOTEL</h4>
                        <p style={{ color: '#333', fontSize: '16px' }}>
                            Beneficio exclusivo: hasta un 20% de descuento en productos seleccionados para socios.
                        </p>
                    </div>

                    {/* Comercio 4 */}
                    <div className="comercio" style={{ width: '300px', padding: '20px', border: '1px solid #ccc', borderRadius: '10px', backgroundColor: '#FFF' }}>
                        <img
                            src={logo}
                            alt="Abril Frutos Secos"
                            style={{ width: '100%', height: 'auto', borderRadius: '5px' }}
                        />
                        <h4 style={{ color: '#0c3553', marginTop: '15px' }}>ABRIL FRUTOS SECOS</h4>
                        <p style={{ color: '#333', fontSize: '16px' }}>
                            🔵 15% de descuento en frutos secos
                            <br /> ⚪ 10% productos de dietética en general como cereales, desecados, semillas, legumbres, repostería.
                            <br /> 📍 Córdoba 643
                            <br /> 💰 Efectivo o transferencia
                        </p>
                    </div>
                    {/* Comercio 5 */}
                    <div className="comercio" style={{ width: '300px', padding: '20px', border: '1px solid #ccc', borderRadius: '10px', backgroundColor: '#FFF' }}>
                        <img
                            src="https://scontent.fsla1-1.fna.fbcdn.net/v/t39.30808-1/305213684_515748907216882_425086654960683744_n.jpg?stp=c0.0.1268.1268a_dst-jpg_s480x480_tt6&_nc_cat=111&ccb=1-7&_nc_sid=2d3e12&_nc_eui2=AeHwbf02ytC1oqItyiUgr3tHMRyCtoUejfIxHIK2hR6N8sFi7JMugJFjj_uMwhRLadE&_nc_ohc=BUHTYjUCcpUQ7kNvgFZUNOI&_nc_oc=AdhtdijEMgRA_VY6UjRxyyzsnXgncYXvXKnMEzxMQe5vOMOjmB7St0aFl814Nzg4OReyvv8UnUsZARXC9_YbfFFe&_nc_zt=24&_nc_ht=scontent.fsla1-1.fna&_nc_gid=ACHYxTdsjUi2aj4h2ZGyoyG&oh=00_AYDJc3E2LFNoM3yPiHtaK6_JZsB6zd1LTFE2VWM8G6khPg&oe=678B57B0"
                            alt="Del Vino Hotel Boutique"
                            style={{ width: '100%', height: 'auto', borderRadius: '5px' }}
                        />
                        <h4 style={{ color: '#0c3553', marginTop: '15px' }}>DEL VINO BOUTIQUE HOTEL</h4>
                        <p style={{ color: '#333', fontSize: '16px' }}>
                            Beneficio exclusivo: hasta un 20% de descuento en productos seleccionados para socios.
                        </p>
                    </div>
                    {/* Comercio 6 */}
                    <div className="comercio" style={{ width: '300px', padding: '20px', border: '1px solid #ccc', borderRadius: '10px', backgroundColor: '#FFF' }}>
                        <img
                            src="https://scontent.fsla1-1.fna.fbcdn.net/v/t39.30808-1/305213684_515748907216882_425086654960683744_n.jpg?stp=c0.0.1268.1268a_dst-jpg_s480x480_tt6&_nc_cat=111&ccb=1-7&_nc_sid=2d3e12&_nc_eui2=AeHwbf02ytC1oqItyiUgr3tHMRyCtoUejfIxHIK2hR6N8sFi7JMugJFjj_uMwhRLadE&_nc_ohc=BUHTYjUCcpUQ7kNvgFZUNOI&_nc_oc=AdhtdijEMgRA_VY6UjRxyyzsnXgncYXvXKnMEzxMQe5vOMOjmB7St0aFl814Nzg4OReyvv8UnUsZARXC9_YbfFFe&_nc_zt=24&_nc_ht=scontent.fsla1-1.fna&_nc_gid=ACHYxTdsjUi2aj4h2ZGyoyG&oh=00_AYDJc3E2LFNoM3yPiHtaK6_JZsB6zd1LTFE2VWM8G6khPg&oe=678B57B0"
                            alt="Del Vino Hotel Boutique"
                            style={{ width: '100%', height: 'auto', borderRadius: '5px' }}
                        />
                        <h4 style={{ color: '#0c3553', marginTop: '15px' }}>DEL VINO BOUTIQUE HOTEL</h4>
                        <p style={{ color: '#333', fontSize: '16px' }}>
                            Beneficio exclusivo: hasta un 20% de descuento en productos seleccionados para socios.
                        </p>
                    </div>
                    {/* Comercio 7 */}
                    <div className="comercio" style={{ width: '300px', padding: '20px', border: '1px solid #ccc', borderRadius: '10px', backgroundColor: '#FFF' }}>
                        <img
                            src="https://scontent.fsla1-1.fna.fbcdn.net/v/t39.30808-1/305213684_515748907216882_425086654960683744_n.jpg?stp=c0.0.1268.1268a_dst-jpg_s480x480_tt6&_nc_cat=111&ccb=1-7&_nc_sid=2d3e12&_nc_eui2=AeHwbf02ytC1oqItyiUgr3tHMRyCtoUejfIxHIK2hR6N8sFi7JMugJFjj_uMwhRLadE&_nc_ohc=BUHTYjUCcpUQ7kNvgFZUNOI&_nc_oc=AdhtdijEMgRA_VY6UjRxyyzsnXgncYXvXKnMEzxMQe5vOMOjmB7St0aFl814Nzg4OReyvv8UnUsZARXC9_YbfFFe&_nc_zt=24&_nc_ht=scontent.fsla1-1.fna&_nc_gid=ACHYxTdsjUi2aj4h2ZGyoyG&oh=00_AYDJc3E2LFNoM3yPiHtaK6_JZsB6zd1LTFE2VWM8G6khPg&oe=678B57B0"
                            alt="Del Vino Hotel Boutique"
                            style={{ width: '100%', height: 'auto', borderRadius: '5px' }}
                        />
                        <h4 style={{ color: '#0c3553', marginTop: '15px' }}>DEL VINO BOUTIQUE HOTEL</h4>
                        <p style={{ color: '#333', fontSize: '16px' }}>
                            Beneficio exclusivo: hasta un 20% de descuento en productos seleccionados para socios.
                        </p>
                    </div>
                    {/* Comercio 8 */}
                    <div className="comercio" style={{ width: '300px', padding: '20px', border: '1px solid #ccc', borderRadius: '10px', backgroundColor: '#FFF' }}>
                        <img
                            src="https://scontent.fsla1-1.fna.fbcdn.net/v/t39.30808-1/305213684_515748907216882_425086654960683744_n.jpg?stp=c0.0.1268.1268a_dst-jpg_s480x480_tt6&_nc_cat=111&ccb=1-7&_nc_sid=2d3e12&_nc_eui2=AeHwbf02ytC1oqItyiUgr3tHMRyCtoUejfIxHIK2hR6N8sFi7JMugJFjj_uMwhRLadE&_nc_ohc=BUHTYjUCcpUQ7kNvgFZUNOI&_nc_oc=AdhtdijEMgRA_VY6UjRxyyzsnXgncYXvXKnMEzxMQe5vOMOjmB7St0aFl814Nzg4OReyvv8UnUsZARXC9_YbfFFe&_nc_zt=24&_nc_ht=scontent.fsla1-1.fna&_nc_gid=ACHYxTdsjUi2aj4h2ZGyoyG&oh=00_AYDJc3E2LFNoM3yPiHtaK6_JZsB6zd1LTFE2VWM8G6khPg&oe=678B57B0"
                            alt="Del Vino Hotel Boutique"
                            style={{ width: '100%', height: 'auto', borderRadius: '5px' }}
                        />
                        <h4 style={{ color: '#0c3553', marginTop: '15px' }}>DEL VINO BOUTIQUE HOTEL</h4>
                        <p style={{ color: '#333', fontSize: '16px' }}>
                            Beneficio exclusivo: hasta un 20% de descuento en productos seleccionados para socios.
                        </p>
                    </div>
                </div>
            </section>

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