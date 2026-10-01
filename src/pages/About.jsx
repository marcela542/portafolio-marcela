import { useEffect, useState } from "react";

import {
    FaUser,
    FaCode,
    FaDatabase,
    FaGraduationCap,
    FaChartLine,
    FaRobot,
    FaTerminal,
    FaLocationDot,
    FaBolt,
    FaCircleCheck
} from "react-icons/fa6";

import "../styles/About.css";
import imagen1 from "../assets/imagen1.png";

function About() {
    const [tabActivo, setTabActivo] = useState("about");
    const [cargando, setCargando] = useState(true);
    const [progreso, setProgreso] = useState(0);

    useEffect(() => {
        const inicio = Date.now();
        const duracion = 1800;

        const progresoTimer = setInterval(() => {
            const porcentaje = Math.min(
                100,
                Math.round(((Date.now() - inicio) / duracion) * 100)
            );

            setProgreso(porcentaje);

            if (porcentaje >= 100) {
                clearInterval(progresoTimer);
            }
        }, 45);

        const timer = setTimeout(() => {
            setCargando(false);
        }, duracion);

        return () => {
            clearInterval(progresoTimer);
            clearTimeout(timer);
        };
    }, []);

    return (
        <main className="about-section">

            <div className="about-background" aria-hidden="true">
                <span className="about-bg-corner about-bg-corner-tl"></span>
                <span className="about-bg-corner about-bg-corner-tr"></span>
                <span className="about-bg-corner about-bg-corner-bl"></span>
                <span className="about-bg-corner about-bg-corner-br"></span>
                <span className="about-bg-mark about-bg-mark-1"></span>
                <span className="about-bg-mark about-bg-mark-2"></span>
                <span className="about-bg-mark about-bg-mark-3"></span>
                <span className="about-bg-mark about-bg-mark-4"></span>
            </div>

            <div className="about-window">

                <header className="about-window-head">

                    <div className="about-window-title">
                        <FaUser />
                        <div>
                            <strong>USER.PROFILE</strong>
                            <span>personal information</span>
                        </div>
                    </div>

                    <div className="about-window-status">
                        <span className="about-status-dot"></span>
                        ONLINE
                    </div>

                </header>

                <nav className="about-tabs">

                    <div className="about-tab-terminal">
                        <FaTerminal />
                        <span>terminal</span>
                    </div>

                    <div className="about-tab-actions">
                    <button
                        type="button"
                        className={`about-tab ${tabActivo === "about" ? "active" : ""}`}
                        onClick={() => setTabActivo("about")}
                    >
                        about.txt
                    </button>

                    <button
                        type="button"
                        className={`about-tab ${tabActivo === "skills" ? "active" : ""}`}
                        onClick={() => setTabActivo("skills")}
                    >
                        skills.json
                    </button>

                    <button
                        type="button"
                        className={`about-tab ${tabActivo === "learning" ? "active" : ""}`}
                        onClick={() => setTabActivo("learning")}
                    >
                        learning.log
                    </button>
                    </div>

                </nav>

                <div className="about-content">

                    {tabActivo === "about" && (
                        <section className="about-panel">

                            {cargando ? (
                                <div className="about-loading">

                                    <div className="about-loading-top">
                                        <span>PORTFOLIO OS</span>
                                        <span>PROFILE.SYS</span>
                                    </div>

                                    <div className="about-loading-label">
                                        INITIALIZING USER PROFILE
                                    </div>

                                    <div className="about-loading-command">
                                        <span>system&gt;</span>
                                        <strong> load --user marcela.perdomo</strong>
                                    </div>

                                    <div className="about-loading-list">

                                        <div className="about-loading-row">
                                            <span>identity</span>
                                            <div className="about-loading-track">
                                                <div
                                                    className="about-loading-fill"
                                                    style={{ width: `${Math.min(100, progreso + 15)}%` }}
                                                ></div>
                                            </div>
                                            <strong>{Math.min(100, progreso + 15)}%</strong>
                                        </div>

                                        <div className="about-loading-row">
                                            <span>experience</span>
                                            <div className="about-loading-track">
                                                <div
                                                    className="about-loading-fill"
                                                    style={{ width: `${progreso >= 35 ? Math.min(100, progreso + 8) : progreso}%` }}
                                                ></div>
                                            </div>
                                            <strong>{progreso >= 35 ? Math.min(100, progreso + 8) : progreso}%</strong>
                                        </div>

                                        <div className="about-loading-row">
                                            <span>skills</span>
                                            <div className="about-loading-track">
                                                <div
                                                    className="about-loading-fill"
                                                    style={{ width: `${Math.max(0, progreso - 5)}%` }}
                                                ></div>
                                            </div>
                                            <strong>{Math.max(0, progreso - 5)}%</strong>
                                        </div>

                                        <div className="about-loading-row">
                                            <span>environment</span>
                                            <div className="about-loading-track">
                                                <div
                                                    className="about-loading-fill"
                                                    style={{ width: `${progreso >= 70 ? 100 : progreso}%` }}
                                                ></div>
                                            </div>
                                            <strong>{progreso >= 70 ? 100 : progreso}%</strong>
                                        </div>

                                    </div>

                                    <div className="about-loading-main">

                                        <div className="about-loading-main-head">
                                            <span>PROFILE_LOAD</span>
                                            <strong>{progreso}%</strong>
                                        </div>

                                        <div className="about-loading-main-track">
                                            <div
                                                className="about-loading-main-fill"
                                                style={{ width: `${progreso}%` }}
                                            ></div>
                                        </div>

                                    </div>

                                    <div className="about-loading-status">
                                        <span className="about-loading-cursor"></span>
                                        <span>
                                            {progreso < 100
                                                ? "validating profile data..."
                                                : "profile ready."}
                                        </span>
                                    </div>

                                    <div className="about-loading-ready">
                                        <FaCircleCheck />
                                        PROFILE READY
                                    </div>

                                </div>
                            ) : (
                                <>

                                    <div className="about-profile-head">

                                        <div>
                                            <span className="about-kicker">PERSONAL PROFILE / 001</span>
                                            <h1>MARCELA.PERDOMO</h1>
                                            <p>Desarrolladora de software Full Stack · Web · Automatización</p>
                                        </div>

                                        <div className="about-profile-id">
                                            <span>STATUS</span>
                                            <strong>ONLINE</strong>
                                        </div>

                                    </div>

                                    <div className="about-profile-main">

                                        <div className="about-profile-image">
                                            <img src={imagen1} alt="Perfil de Marcela" />
                                            <span className="about-image-label">PHOTO_001</span>
                                        </div>

                                        <div className="about-profile-info">

                                            <div className="about-info-item">
                                                <span><FaBolt /> FOCUS</span>
                                                <strong>Desarrollo web · Backend · Automatización</strong>
                                            </div>

                                            <div className="about-info-item">
                                                <span><FaLocationDot /> LOCATION</span>
                                                <strong>Cali, Colombia</strong>
                                            </div>

                                            <div className="about-info-item">
                                                <span><FaGraduationCap /> EDUCATION</span>
                                                <strong>Tecnóloga en Análisis y Desarrollo de Software</strong>
                                            </div>

                                            <div className="about-info-item">
                                                <span><FaCode /> STACK</span>
                                                <strong>PHP · React · JavaScript · SQL · APIs REST</strong>
                                            </div>

                                        </div>

                                    </div>

                                    <div className="about-profile-divider">
                                        <span>ABOUT.TXT</span>
                                    </div>

                                    <div className="about-profile-text">

                                        <p>
                                            Hola, soy <strong>Marcela</strong>.
                                        </p>

                                        <p>
                                            Soy desarrolladora de software Full Stack,
                                            con formación en Análisis y Desarrollo de
                                            Software y enfoque en la creación de
                                            soluciones web y automatización de procesos.
                                        </p>

                                        <p>
                                            He trabajado en desarrollo frontend y
                                            backend, construcción y manejo de bases de
                                            datos, integración de APIs REST y desarrollo
                                            de soluciones orientadas a necesidades reales.
                                        </p>

                                        <p>
                                            Me interesa transformar procesos y necesidades
                                            concretas en soluciones funcionales, claras
                                            y útiles, mientras continúo fortaleciendo mis
                                            conocimientos en desarrollo, datos e inteligencia artificial.
                                        </p>

                                    </div>

                                    <div className="about-profile-footer">

                                        <div className="about-footer-status">
                                            <span></span>
                                            aprendiendo continuamente...
                                        </div>

                                        <div className="about-footer-meta">
                                            FULL STACK · CALI · 2026
                                        </div>

                                    </div>

                                </>
                            )}

                        </section>
                    )}

                    {tabActivo === "skills" && (
                        <section className="about-panel">

                            <div className="about-file-head">
                                <span>skills.json</span>
                                <small>structured data</small>
                            </div>

                            <div className="about-json">

                                <p><span className="about-json-bracket">&#123;</span></p>

                                <div className="about-json-group">
                                    <p>
                                        <span className="about-json-key">"backend"</span>
                                        <span>: [</span>
                                    </p>
                                    <p className="about-json-item">"PHP",</p>
                                    <p className="about-json-item">"APIs REST",</p>
                                    <p className="about-json-item">"SQL",</p>
                                    <p className="about-json-item">"MySQL"</p>
                                    <p>],</p>
                                </div>

                                <div className="about-json-group">
                                    <p>
                                        <span className="about-json-key">"frontend"</span>
                                        <span>: [</span>
                                    </p>
                                    <p className="about-json-item">"JavaScript",</p>
                                    <p className="about-json-item">"React",</p>
                                    <p className="about-json-item">"HTML",</p>
                                    <p className="about-json-item">"CSS",</p>
                                    <p className="about-json-item">"Bootstrap"</p>
                                    <p>],</p>
                                </div>

                                <div className="about-json-group">
                                    <p>
                                        <span className="about-json-key">"herramientas"</span>
                                        <span>: [</span>
                                    </p>
                                    <p className="about-json-item">"Git",</p>
                                    <p className="about-json-item">"GitHub",</p>
                                    <p className="about-json-item">"Postman",</p>
                                    <p className="about-json-item">"Google Apps Script",</p>
                                    <p className="about-json-item">"Google Sheets"</p>
                                    <p>]</p>
                                </div>

                                <p><span className="about-json-bracket">&#125;</span></p>

                            </div>

                        </section>
                    )}

                    {tabActivo === "learning" && (
                        <section className="about-panel">

                            <div className="about-file-head">
                                <span>learning.log</span>
                                <small>current learning</small>
                            </div>

                            <div className="about-learning">

                                <div className="about-learning-item">
                                    <FaGraduationCap />
                                    <div>
                                        <strong>CS50 · Harvard</strong>
                                        <p>
                                            Fortaleciendo fundamentos de programación,
                                            lógica y resolución de problemas.
                                        </p>
                                    </div>
                                </div>

                                <div className="about-learning-item">
                                    <FaChartLine />
                                    <div>
                                        <strong>Power BI</strong>
                                        <p>
                                            Aprendiendo visualización, análisis y manejo
                                            de información para la toma de decisiones.
                                        </p>
                                    </div>
                                </div>

                                <div className="about-learning-item">
                                    <FaRobot />
                                    <div>
                                        <strong>Inteligencia Artificial</strong>
                                        <p>
                                            Explorando herramientas y formas de integrar
                                            IA en soluciones digitales.
                                        </p>
                                    </div>
                                </div>

                                <div className="about-learning-item">
                                    <FaCode />
                                    <div>
                                        <strong>APIs REST</strong>
                                        <p>
                                            Continuando el aprendizaje sobre desarrollo
                                            e integración de APIs.
                                        </p>
                                    </div>
                                </div>

                                <div className="about-learning-item">
                                    <FaDatabase />
                                    <div>
                                        <strong>SQL y datos</strong>
                                        <p>
                                            Fortaleciendo consultas, manejo de datos y
                                            trabajo con bases de datos.
                                        </p>
                                    </div>
                                </div>

                            </div>

                        </section>
                    )}

                </div>

            </div>
        </main>
    );
}

export default About;
