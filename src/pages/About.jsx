import { FaGraduationCap } from "react-icons/fa6";

import imagenSobreMi from "../assets/sobremi.png";
import "../styles/About.css";

function About() {
    return (
        <main>
            <section className="about-section">
                <div className="about-content">

                    <div className="about-image">
                        <img
                            src={imagenSobreMi}
                            alt="Marcela programando"
                        />
                    </div>

                    <div className="about-info">
                        <p className="about-label">SOBRE MÍ</p>

                        <h2>
                            Desarrolladora de software
                            <span>en constante aprendizaje</span>
                        </h2>

                        <p className="about-text">
                            Tengo formación en Análisis y Desarrollo de Software y me
                            apasiona aprender, practicar e implementar nuevas tecnologías.
                            Me interesa crear soluciones funcionales y seguir creciendo
                            a través de nuevos retos.
                        </p>

                        <p className="about-text">
                            Actualmente continúo fortaleciendo mis conocimientos con
                            formación en áreas como CS50 de Harvard, Power BI e
                            Inteligencia Artificial, además de desarrollo web y APIs REST.
                        </p>

                        <div className="about-interests">
                            <p>ÁREAS QUE ESTOY EXPLORANDO</p>

                            <div className="interest-list">
                                <span><FaGraduationCap /> CS50 · Harvard</span>
                                <span>Power BI</span>
                                <span>Inteligencia Artificial</span>
                                <span>APIs REST</span>
                                <span>SQL</span>
                                <span>Python</span>
                                <span>Java</span>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </main>
    );
}

export default About;