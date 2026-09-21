import {
    FaGithub,
    FaLinkedinIn,
    FaEnvelope,
} from "react-icons/fa6";

import {
    SiPhp,
    SiJavascript,
    SiReact,
    SiMysql,
    SiHtml5,
    SiGit,
    SiGithub,
    SiPython,
} from "react-icons/si";

import fotoPerfil from "../assets/perfil.png";
import "../styles/Home.css";
import { Link } from "react-router-dom";

function Home() {
    return (
        <main>
            <section id="inicio" className="hero">
                <div className="hero-text">
                    <p className="saludo">HOLA, SOY</p>

                    <h1>
                        Marcela
                        <span>Perdomo Yela</span>
                    </h1>

                    <h2>DESARROLLADORA DE SOFTWARE</h2>

                    <p className="descripcion">
                        Me apasiona la tecnología, el aprendizaje constante y crear
                        soluciones que generen un impacto real.
                    </p>

                    <div className="hero-buttons">
                        <Link to="/proyectos">Ver mis proyectos</Link>
                        <Link to="/contacto">Contáctame</Link>
                    </div>

                    <p className="social-title">CONECTA CONMIGO</p>

                    <div className="social-links">
                        <a
                            href="https://github.com/marcela542"
                            aria-label="GitHub"
                        >
                            <FaGithub />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/marcela-perdomo-yela-800677266/"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedinIn />
                        </a>

                        <a
                            href="mailto:perdomoyelamarcela@gmail.com"
                            aria-label="Correo"
                        >
                            <FaEnvelope />
                        </a>
                    </div>
                </div>

                <div className="hero-image">
                    <img
                        src={fotoPerfil}
                        alt="Ilustración de perfil de Marcela"
                    />

                    <div className="profile-cards">
                        <div className="profile-card">
                            <span className="card-icon">◷</span>

                            <div>
                                <strong>2+ Años de experiencia</strong>
                                <small>Desarrollo de software</small>
                            </div>
                        </div>

                        <div className="profile-card">
                            <span className="card-icon">&lt;/&gt;</span>

                            <div>
                                <strong>PHP</strong>
                                <small>Lenguaje principal</small>
                            </div>
                        </div>

                        <div className="profile-card">
                            <span className="card-icon">JS</span>

                            <div>
                                <strong>JavaScript</strong>
                                <small>Tecnologías web</small>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="tech-stack">
                <p className="tech-title">STACK TECNOLÓGICO</p>

                <div className="tech-slider">
                    <div className="tech-track">

                        <div className="tech-group">
                            <div className="tech-item">
                                <SiPhp />
                                <span>PHP</span>
                            </div>

                            <div className="tech-item">
                                <SiJavascript />
                                <span>JavaScript</span>
                            </div>

                            <div className="tech-item">
                                <SiReact />
                                <span>React</span>
                            </div>

                            <div className="tech-item">
                                <SiPython />
                                <span>Python</span>
                            </div>

                            <div className="tech-item">
                                <span>Java</span>
                            </div>

                            <div className="tech-item">
                                <span>SQL</span>
                            </div>

                            <div className="tech-item">
                                <SiMysql />
                                <span>MySQL</span>
                            </div>

                            <div className="tech-item">
                                <span>REST API</span>
                            </div>

                            <div className="tech-item">
                                <SiHtml5 />
                                <span>HTML5</span>
                            </div>

                            <div className="tech-item">
                                <SiGit />
                                <span>Git</span>
                            </div>

                            <div className="tech-item">
                                <SiGithub />
                                <span>GitHub</span>
                            </div>
                        </div>

                        <div className="tech-group">
                            <div className="tech-item">
                                <SiPhp />
                                <span>PHP</span>
                            </div>

                            <div className="tech-item">
                                <SiJavascript />
                                <span>JavaScript</span>
                            </div>

                            <div className="tech-item">
                                <SiReact />
                                <span>React</span>
                            </div>

                            <div className="tech-item">
                                <SiPython />
                                <span>Python</span>
                            </div>

                            <div className="tech-item">
                                <span>Java</span>
                            </div>

                            <div className="tech-item">
                                <span>SQL</span>
                            </div>

                            <div className="tech-item">
                                <SiMysql />
                                <span>MySQL</span>
                            </div>

                            <div className="tech-item">
                                <span>REST API</span>
                            </div>

                            <div className="tech-item">
                                <SiHtml5 />
                                <span>HTML5</span>
                            </div>

                            <div className="tech-item">
                                <SiGit />
                                <span>Git</span>
                            </div>

                            <div className="tech-item">
                                <SiGithub />
                                <span>GitHub</span>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </main>
    );
}

export default Home;