import { useState } from "react";
import {
    FaCat,
    FaGithub,
    FaLinkedinIn,
    FaEnvelope,
    FaSun,
    FaMoon,
} from "react-icons/fa6";
import fotoPerfil from "../assets/perfil.png";
import "../styles/Home.css";

function Home() {
    const [modoOscuro, setModoOscuro] = useState(false);

    const cambiarTema = () => {
        setModoOscuro(!modoOscuro);
        document.documentElement.classList.toggle("dark");
    };

    return (
        <main>
            <nav className="navbar">
                <a href="#inicio" className="logo">
                    <FaCat />

                    <div className="logo-name">
                        <span>MARCELA</span>
                        <small>PERDOMO YELA</small>
                    </div>
                </a>

                <div className="nav-links">
                    <a href="#inicio">Inicio</a>
                    <a href="#sobre-mi">Sobre mí</a>
                    <a href="#experiencia">Experiencia</a>
                    <a href="#proyectos">Proyectos</a>
                    <a href="#contacto">Contacto</a>
                </div>

                <div className="nav-actions">
                    <a
                        href="/CV-Marcela-Perdomo.pdf"
                        className="cv-button"
                        download
                    >
                        Descargar CV
                    </a>

                    <button
                        className="theme-button"
                        onClick={cambiarTema}
                        aria-label="Cambiar tema"
                    >
                        {modoOscuro ? <FaMoon /> : <FaSun />}
                    </button>
                </div>
            </nav>

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
                        <a href="#proyectos">Ver mis proyectos →</a>
                        <a href="#contacto">Contáctame</a>
                    </div>

                    <p className="social-title">CONECTA CONMIGO</p>

                    <div className="social-links">
                        <a href="https://github.com/marcela542" aria-label="GitHub">
                        <FaGithub />
                        </a>

                        <a href="https://www.linkedin.com/in/marcela-perdomo-yela-800677266/" aria-label="LinkedIn">
                        <FaLinkedinIn />
                        </a>

                        <a href="mailto:perdomoyelamarcela@gmail.com" aria-label="Correo">
                        <FaEnvelope />
                        </a>
                    </div>
                </div>

                <div className="hero-image">
                    <img src={fotoPerfil} alt="Ilustración de perfil de Marcela" />

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
        </main>
    );
}

export default Home;