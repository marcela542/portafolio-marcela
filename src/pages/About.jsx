import { useState } from "react";

import {
    FaTerminal,
    FaCode,
    FaDatabase,
    FaGraduationCap,
    FaChartLine,
    FaRobot
} from "react-icons/fa6";

import "../styles/About.css";
import imagen1 from "../assets/imagen1.jpg";

function About() {
    const [tabActivo, setTabActivo] = useState("about");

    return (
        <main className="about-section">
            <div className="about-layout">

                <div className="about-image-area">
                    <div className="about-image-placeholder">
                        <img
                            src={imagen1}
                            alt="Mario Pixeleado"
                        />
                    </div>
                </div>

                <div className="about-terminal">

                    <div className="terminal-top">

                        <div className="terminal-title">
                            <FaTerminal />
                            <span>terminal</span>
                        </div>

                        <div className="terminal-tabs">

                            <button
                                type="button"
                                className={`terminal-tab ${
                                    tabActivo === "about" ? "active" : ""
                                }`}
                                onClick={() => setTabActivo("about")}
                            >
                                about.txt
                            </button>

                            <button
                                type="button"
                                className={`terminal-tab ${
                                    tabActivo === "skills" ? "active" : ""
                                }`}
                                onClick={() => setTabActivo("skills")}
                            >
                                skills.json
                            </button>

                            <button
                                type="button"
                                className={`terminal-tab ${
                                    tabActivo === "learning" ? "active" : ""
                                }`}
                                onClick={() => setTabActivo("learning")}
                            >
                                learning.log
                            </button>

                        </div>

                    </div>

                    <div className="terminal-content">

                        {tabActivo === "about" && (
                            <section className="terminal-panel">

                                <div className="terminal-command">
                                    <span>C:\Marcela\about&gt;</span>
                                    <strong> whoami</strong>
                                </div>

                                <p className="terminal-output terminal-name">
                                    marcela.perdomo
                                </p>


                                <div className="terminal-command">
                                    <span>C:\Marcela\about&gt;</span>
                                    <strong> type about.txt</strong>
                                </div>

                                <div className="terminal-text">

                                    <p>
                                        Hola, soy <strong>Marcela</strong>.
                                    </p>

                                    <p>
                                        Soy desarrolladora de software Full Stack,
                                        con formación en Análisis y Desarrollo de
                                        Software.
                                    </p>

                                    <p>
                                        He trabajado en desarrollo frontend y
                                        backend, construcción de bases de datos,
                                        APIs REST y automatización de procesos.
                                    </p>

                                    <p>
                                        Me interesa convertir necesidades reales
                                        en soluciones funcionales y seguir
                                        fortaleciendo mis conocimientos en
                                        desarrollo, datos e inteligencia
                                        artificial.
                                    </p>

                                </div>


                                <div className="terminal-command">
                                    <span>C:\Marcela\about&gt;</span>
                                    <strong> status</strong>
                                </div>

                                <div className="terminal-status">

                                    <span className="status-dot"></span>

                                    <span>
                                        aprendiendo continuamente...
                                    </span>

                                </div>


                                <div className="terminal-command terminal-cursor-line">
                                    <span>C:\Marcela\about&gt;</span>
                                    <strong> _</strong>
                                </div>

                            </section>
                        )}


                        {tabActivo === "skills" && (
                            <section className="terminal-panel">

                                <div className="terminal-command">
                                    <span>C:\Marcela\about&gt;</span>
                                    <strong> type skills.json</strong>
                                </div>


                                <div className="json-content">

                                    <p>
                                        <span className="json-bracket">&#123;</span>
                                    </p>


                                    <div className="json-group">

                                        <p>
                                            <span className="json-key">
                                                "backend"
                                            </span>
                                            <span>: [</span>
                                        </p>

                                        <p className="json-item">
                                            "PHP",
                                        </p>

                                        <p className="json-item">
                                            "APIs REST",
                                        </p>

                                        <p className="json-item">
                                            "SQL",
                                        </p>

                                        <p className="json-item">
                                            "MySQL",
                                        </p>

                                        <p>],</p>

                                    </div>


                                    <div className="json-group">

                                        <p>
                                            <span className="json-key">
                                                "frontend"
                                            </span>
                                            <span>: [</span>
                                        </p>

                                        <p className="json-item">
                                            "JavaScript",
                                        </p>

                                        <p className="json-item">
                                            "React",
                                        </p>

                                        <p className="json-item">
                                            "HTML",
                                        </p>

                                        <p className="json-item">
                                            "CSS",
                                        </p>

                                        <p className="json-item">
                                            "Bootstrap"
                                        </p>

                                        <p>],</p>

                                    </div>


                                    <div className="json-group">

                                        <p>
                                            <span className="json-key">
                                                "herramientas"
                                            </span>
                                            <span>: [</span>
                                        </p>

                                        <p className="json-item">
                                            "Git",
                                        </p>

                                        <p className="json-item">
                                            "GitHub",
                                        </p>

                                        <p className="json-item">
                                            "Postman"
                                        </p>

                                        <p className="json-item">
                                            "Google Apps Script",
                                        </p>

                                        <p className="json-item">
                                            "Google Sheets"
                                        </p>

                                        <p>]</p>

                                    </div>


                                    <p>
                                        <span className="json-bracket">&#125;</span>
                                    </p>

                                </div>


                                <div className="terminal-command terminal-cursor-line">
                                    <span>C:\Marcela\about&gt;</span>
                                    <strong> _</strong>
                                </div>

                            </section>
                        )}


                        {tabActivo === "learning" && (
                            <section className="terminal-panel">

                                <div className="terminal-command">
                                    <span>C:\Marcela\about&gt;</span>
                                    <strong> type learning.log</strong>
                                </div>


                                <div className="learning-content">

                                    <div className="learning-item">

                                        <FaGraduationCap />

                                        <div>
                                            <strong>
                                                CS50 · Harvard
                                            </strong>

                                            <p>
                                                Fortaleciendo fundamentos de
                                                programación, lógica y resolución
                                                de problemas.
                                            </p>
                                        </div>

                                    </div>


                                    <div className="learning-item">

                                        <FaChartLine />

                                        <div>
                                            <strong>
                                                Power BI
                                            </strong>

                                            <p>
                                                Aprendiendo visualización,
                                                análisis y manejo de información
                                                para la toma de decisiones.
                                            </p>
                                        </div>

                                    </div>


                                    <div className="learning-item">

                                        <FaRobot />

                                        <div>
                                            <strong>
                                                Inteligencia Artificial
                                            </strong>

                                            <p>
                                                Explorando herramientas y formas
                                                de integrar IA en soluciones
                                                digitales.
                                            </p>
                                        </div>

                                    </div>


                                    <div className="learning-item">

                                        <FaCode />

                                        <div>
                                            <strong>
                                                APIs REST
                                            </strong>

                                            <p>
                                                Continuando el aprendizaje sobre
                                                desarrollo e integración de APIs.
                                            </p>
                                        </div>

                                    </div>


                                    <div className="learning-item">

                                        <FaDatabase />

                                        <div>
                                            <strong>
                                                SQL y datos
                                            </strong>

                                            <p>
                                                Fortaleciendo consultas, manejo de
                                                datos y trabajo con bases de
                                                datos.
                                            </p>
                                        </div>

                                    </div>

                                </div>


                                <div className="terminal-command terminal-cursor-line">
                                    <span>C:\Marcela\about&gt;</span>
                                    <strong> _</strong>
                                </div>

                            </section>
                        )}

                    </div>

                </div>

            </div>
        </main>
    );
}

export default About;