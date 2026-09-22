import { Link } from "react-router-dom";
import {
    FaArrowRight,
    FaEnvelope,
    FaGithub,
    FaLinkedinIn,
    FaReact,
    FaPhp,
    FaDatabase,
    FaBriefcase,
    FaJs,
    FaJava
} from "react-icons/fa6";

import {
    SiMysql,
    SiVite,
    SiPython,
    SiPostgresql
} from "react-icons/si";

import rocky from "../assets/rocky.png";
import milo from "../assets/milo.png";
import marcela from "../assets/perfil.png";

import "../styles/Home.css";

function Home() {
    return (
        <main className="home-page">
            <section className="home-hero">
                <div className="hero-left">

                    <p className="hero-label">
                        <span></span>
                        // DESARROLLADORA DE SOFTWARE · FULL STACK
                    </p>

                    <h1>
                        HOLA, SOY
                        <span>MARCELA</span>
                    </h1>

                    <p className="hero-description">
                        Desarrolladora de software Full Stack enfocada en crear soluciones funcionales de extremo a extremo: interfaces con React y JavaScript, backend y APIs con PHP, bases de datos SQL y automatización de procesos.
                    </p>

                    <div className="hero-terminal">
                        <span>&gt;</span>
                        {"const solution = await buildSolution({ code, data, ideas });"}
                        <b></b>
                    </div>

                    <div className="hero-buttons">
                        <Link to="/proyectos" className="pixel-button primary">
                            VER PROYECTOS
                            <FaArrowRight />
                        </Link>

                        <Link to="/contacto" className="pixel-button secondary">
                            <FaEnvelope />
                            CONTACTARME
                        </Link>
                    </div>

                    <div className="social-links">

                        <a
                            href="https://github.com/marcela542"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="GitHub"
                        >
                            <FaGithub />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/marcela-perdomo-yela-800677266/"
                            target="_blank"
                            rel="noreferrer"
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

                    <div className="hero-stats">

                        <div className="stat-card purple">
                            <FaDatabase />
                            <strong>FULL STACK</strong>
                            <span>FRONTEND<br />+ BACKEND</span>
                        </div>

                        <div className="stat-card yellow">
                            <FaBriefcase />
                            <span className="stat-number">1</span>
                            <span>AÑO DE<br />EXPERIENCIA</span>
                        </div>

                        <div className="stat-card white">
                            <FaPhp />
                            <strong>PHP</strong>
                            <span>LENGUAJE<br />PRINCIPAL</span>
                        </div>

                    </div>

                </div>

                <div className="hero-right">

                    <div className="profile-window">

                        <div className="window-header">
                            <strong>Marcela.exe</strong>

                            <div className="window-controls">
                                <span>−</span>
                                <span>□</span>
                                <span>×</span>
                            </div>
                        </div>

                        <div className="profile-placeholder">
                            <img
                                src={marcela}
                                alt="Marcela en pixel art"
                                className="profile-image"
                            />
                        </div>

                        <div className="profile-status">
                            <span>
                                <i></i>
                                Online
                            </span>

                            <span>
                                <b>●</b>
                                Cali, Colombia
                            </span>
                        </div>

                    </div>

                    <div className="focus-window">

                        <div className="small-window-header">
                            <strong>current.focus</strong>

                            <div>
                                <span>−</span>
                                <span>□</span>
                                <span>×</span>
                            </div>
                        </div>

                        <div className="focus-list">

                            <label>
                                <input type="checkbox" checked readOnly />
                                Aprender
                            </label>

                            <label>
                                <input type="checkbox" checked readOnly />
                                Desarrollar
                            </label>

                            <label>
                                <input type="checkbox" checked readOnly />
                                Crear
                            </label>

                            <label>
                                <input type="checkbox" checked readOnly />
                                Mejorar
                            </label>

                            <label>
                                <input type="checkbox" />
                                Seguir creciendo...
                            </label>

                        </div>

                    </div>

                    <div className="cat-message">
                        print ("
                        <br />
                        Hola, 
                        Mundo
                        ")
                        <br />
                    </div>

                    <div className="my-cats">
                        
                        <img
                            src={milo}
                            alt="Milo en pixel art"
                        />

                        <img
                            src={rocky}
                            alt="Rocky en pixel art"
                        />
                    </div>

                    <div className="tech-window">

                        <div className="small-window-header">
                            <strong>tech.stack</strong>

                            <div>
                                <span>−</span>
                                <span>□</span>
                                <span>×</span>
                            </div>
                        </div>

                        <div className="tech-icons">
                            <div className="tech-icons-track">
                                <FaReact />
                                <FaPhp />
                                <SiMysql />
                                <FaJs />
                                <SiVite />
                                <FaDatabase />
                                <FaGithub />
                                <SiPython />
                                <FaJava />
                                <SiPostgresql />

                                <FaReact />
                                <FaPhp />
                                <SiMysql />
                                <FaJs />
                                <SiVite />
                                <FaDatabase />
                                <FaGithub />
                                <SiPython />
                                <FaJava />
                                <SiPostgresql />
                            </div>
                        </div>

                        <p>y más...</p>

                    </div>

                </div>
            </section>
        </main>
    );
}

export default Home;