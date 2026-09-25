import { useState } from "react";
import {
    FaArrowUpRightFromSquare,
    FaGithub,
    FaLock,
    FaFileLines,
    FaCircleNotch,
    FaChevronLeft,
    FaChevronRight,
    FaFolderOpen
} from "react-icons/fa6";
import clicktiendaImg from "../assets/clicktienda.png";
import gestionpersonalImg from "../assets/gestionpersonal.png";
import pythonImg from "../assets/automatizacion.png";
import landingImg from "../assets/landing.png";
import "../styles/Projects.css";

function Projects() {
    const [proyectoActivo, setProyectoActivo] = useState(null);
    const [indiceActivo, setIndiceActivo] = useState(0);

    const proyectosDestacados = [
        {
            tipo: "Proyecto destacado",
            titulo: "ClickTienda",
            subtitulo: "E-commerce full-stack independiente",
            anio: "2026",
            descripcion:
                "Plataforma e-commerce desarrollada desde cero, integrando frontend con React, backend en PHP, base de datos, procesamiento de pagos e inteligencia artificial.",
            tecnologias: ["React", "Vite", "PHP", "MySQL", "Wompi", "IA"],
            claseImagen: "clicktienda",
            enlace: "https://clicktienda.infinityfreeapp.com",
            github: "https://github.com/marcela542/clicktienda",
            imagenAlt: "Vista de ClickTienda"
        },
        {
            tipo: "Proyecto colaborativo",
            titulo: "Gestión de Personal",
            subtitulo: "Sistema web de gestión de personal",
            anio: "2026",
            descripcion:
                "Sistema web desarrollado en equipo para gestionar personal, asistencia, horarios, novedades, roles y permisos, con backend y base de datos desarrollados desde cero.",
            tecnologias: ["PHP", "MySQL", "JavaScript", "REST API", "SQL", "JSON"],
            claseImagen: "gestion-personal",
            imagenAlt: "Sistema de Gestión de Personal"
        }
    ];

    const misProyectos = [
        {
            titulo: "Python Automation",
            descripcion:
                "Scripts y automatizaciones para tareas repetitivas y análisis de datos.",
            tecnologias: ["Python", "Automatización", "Datos"],
            claseImagen: "python",
            estado: "En desarrollo"
        },
        {
            titulo: "Tienda IA",
            descripcion:
                "Landing page con IA para atención de clientes y generación de leads.",
            tecnologias: ["HTML", "CSS", "JavaScript", "IA"],
            claseImagen: "tienda-ia",
            estado: "En desarrollo"
        },
        {
            titulo: "Landing Contacto",
            descripcion:
                "Landing page conectada a WhatsApp para manejo de contactos y cotizaciones.",
            tecnologias: ["HTML", "CSS", "JavaScript"],
            claseImagen: "landing-contacto",
            estado: "En desarrollo"
        }
    ];

    const todosLosProyectos = [
        ...proyectosDestacados.map((proyecto) => ({ ...proyecto, destacado: true })),
        ...misProyectos.map((proyecto) => ({ ...proyecto, destacado: false }))
    ];

    const abrirProyecto = (proyecto) => {
        if (proyecto.titulo === "Gestión de Personal") {
            setProyectoActivo(proyecto);
        }
    };

    const cerrarProyecto = () => setProyectoActivo(null);

    const cambiarProyecto = (direccion) => {
        setIndiceActivo((indiceActual) => {
            const siguiente = indiceActual + direccion;
            if (siguiente < 0) return todosLosProyectos.length - 1;
            if (siguiente >= todosLosProyectos.length) return 0;
            return siguiente;
        });
    };

    const obtenerPosicion = (indice) => {
        const total = todosLosProyectos.length;
        let diferencia = indice - indiceActivo;

        if (diferencia > Math.floor(total / 2)) diferencia -= total;
        if (diferencia < -Math.floor(total / 2)) diferencia += total;

        return diferencia;
    };

    return (
        <main className="projects-section">
            <header className="projects-header">
                <div className="projects-header-title">
                    <div className="projects-folder-icon">
                        <FaFolderOpen />
                    </div>
                    <div>
                        <p>PROYECTOS</p>
                        <h1>Ideas, código y soluciones en acción</h1>
                    </div>
                </div>

                <div className="projects-header-description">
                    <p>
                        Aquí puedes explorar algunos de los proyectos en los que he trabajado,
                        desde ideas personales hasta desarrollos colaborativos. Cada proyecto
                        representa una oportunidad de aprender, crear y seguir creciendo.
                    </p>
                </div>
            </header>

            <section className="projects-showcase">
                <div className="retro-dots retro-dots-left">········</div>
                <div className="retro-dots retro-dots-right">········</div>

                <button
                    type="button"
                    className="carousel-arrow carousel-arrow-left"
                    onClick={() => cambiarProyecto(-1)}
                    aria-label="Proyecto anterior"
                >
                    <FaChevronLeft />
                </button>

                <div className="carousel-stage">
                    {todosLosProyectos.map((proyecto, indice) => {
                        const posicion = obtenerPosicion(indice);
                        const esActivo = posicion === 0;
                        const esVisible = Math.abs(posicion) <= 2;

                        const imagenProyecto =
                            proyecto.claseImagen === "clicktienda"
                                ? clicktiendaImg
                                : proyecto.claseImagen === "gestion-personal"
                                    ? gestionpersonalImg
                                    : proyecto.claseImagen === "python"
                                        ? pythonImg
                                        : proyecto.claseImagen === "landing"
                                        ? landingImg
                                    : null;

                        return (
                            <article
                                key={proyecto.titulo}
                                className={`retro-project-card ${esActivo ? "is-active" : ""} ${
                                    proyecto.estado ? "is-development" : ""
                                }`}
                                style={{
                                    "--position": posicion,
                                    "--distance": Math.abs(posicion),
                                    transform: `translateX(calc(-50% + ${posicion === 0 ? 0 : (posicion === 1 ? 115 : posicion === -1 ? -115 : posicion === 2 ? 210 : -210)}px)) translateY(calc(-50% + ${Math.abs(posicion) * 26}px)) scale(${posicion === 0 ? 1 : posicion === 1 || posicion === -1 ? 0.94 : 0.88})`, 
                                    opacity: esVisible ? 1 : 0,
                                    zIndex: 30 - Math.abs(posicion),
                                    pointerEvents: esVisible ? "auto" : "none"
                                }}
                                onClick={() => {
                                    if (!esActivo && esVisible) {
                                        setIndiceActivo(indice);
                                    } else if (esActivo) {
                                        abrirProyecto(proyecto);
                                    }
                                }}
                            >
                                <div className={`retro-project-image ${proyecto.claseImagen}`}>
                                    <div className="retro-window-bar">
                                        <span></span><span></span><span></span>
                                    </div>
                                    <div className="image-placeholder">
                                        {imagenProyecto ? (
                                            <img
                                                src={imagenProyecto}
                                                alt={proyecto.imagenAlt || proyecto.titulo}
                                            />
                                        ) : (
                                            <span>{proyecto.titulo}</span>
                                        )}
                                    </div>
                                </div>

                                <div className="retro-project-body">
                                    <div className="retro-project-heading">
                                        <div>
                                            <h2>{proyecto.titulo}</h2>
                                            <p>{proyecto.subtitulo || "Proyecto personal"}</p>
                                        </div>
                                        <span className="project-year">{proyecto.anio || "2026"}</span>
                                    </div>

                                    <p className="retro-project-description">
                                        {proyecto.descripcion}
                                    </p>

                                    <div className="project-tags">
                                        {proyecto.tecnologias.map((tecnologia) => (
                                            <span key={tecnologia}>{tecnologia}</span>
                                        ))}
                                    </div>

                                    <div className="retro-project-actions">
                                        {proyecto.titulo === "ClickTienda" ? (
                                            <>
                                                <a
                                                    href={proyecto.enlace}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="project-button primary"
                                                    onClick={(event) => event.stopPropagation()}
                                                >
                                                    <FaArrowUpRightFromSquare />
                                                    Ver proyecto
                                                </a>
                                                <a
                                                    href={proyecto.github}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="project-button secondary"
                                                    onClick={(event) => event.stopPropagation()}
                                                >
                                                    <FaGithub />
                                                    Ver código
                                                </a>
                                            </>
                                        ) : proyecto.titulo === "Gestión de Personal" ? (
                                            <>
                                                <button
                                                    type="button"
                                                    className="project-button primary"
                                                    onClick={(event) => {
                                                        event.stopPropagation();
                                                        abrirProyecto(proyecto);
                                                    }}
                                                >
                                                    <FaFileLines />
                                                    Ver detalles
                                                </button>
                                                <span className="private-project">
                                                    <FaLock /> Proyecto privado
                                                </span>
                                            </>
                                        ) : (
                                            <div className="project-status">
                                                <span>
                                                    <FaCircleNotch />
                                                    {proyecto.estado}
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </div>

                <button
                    type="button"
                    className="carousel-arrow carousel-arrow-right"
                    onClick={() => cambiarProyecto(1)}
                    aria-label="Proyecto siguiente"
                >
                    <FaChevronRight />
                </button>

                <div className="carousel-indicators">
                    {todosLosProyectos.map((proyecto, indice) => (
                        <button
                            type="button"
                            key={proyecto.titulo}
                            className={indice === indiceActivo ? "active" : ""}
                            onClick={() => setIndiceActivo(indice)}
                            aria-label={`Ir a ${proyecto.titulo}`}
                        />
                    ))}
                </div>
            </section>

            {proyectoActivo && (
                <div className="project-modal-overlay" onClick={cerrarProyecto}>
                    <div className="project-modal" onClick={(e) => e.stopPropagation()}>
                        <button
                            type="button"
                            className="project-modal-close"
                            onClick={cerrarProyecto}
                            aria-label="Cerrar"
                        >
                            ×
                        </button>

                        <p className="project-modal-label">
                            PROYECTO COLABORATIVO · {proyectoActivo.anio}
                        </p>
                        <h2>{proyectoActivo.titulo}</h2>
                        <p className="project-modal-subtitle">{proyectoActivo.subtitulo}</p>

                        <p className="project-modal-text">
                            Proyecto web desarrollado de manera colaborativa durante aproximadamente dos meses.
                            Mi participación estuvo enfocada principalmente en el desarrollo completo del backend,
                            el diseño y construcción de la base de datos, la creación de APIs y la implementación de
                            funcionalidades para la gestión de la información del sistema.
                        </p>

                        <div className="project-modal-section">
                            <h3>Proceso de desarrollo</h3>
                            <div className="project-feature-list">
                                <div className="project-feature"><span>01</span><p>Análisis inicial de la documentación y del alcance funcional del sistema.</p></div>
                                <div className="project-feature"><span>02</span><p>Diseño y construcción de la estructura de la base de datos desde cero.</p></div>
                                <div className="project-feature"><span>03</span><p>Desarrollo del backend en PHP sin utilizar frameworks.</p></div>
                                <div className="project-feature"><span>04</span><p>Creación de APIs y endpoints para la comunicación con el frontend.</p></div>
                                <div className="project-feature"><span>05</span><p>Pruebas independientes de los endpoints mediante Postman.</p></div>
                                <div className="project-feature"><span>06</span><p>Validación de funcionalidades antes de llevar los cambios al entorno de producción.</p></div>
                            </div>
                        </div>

                        <div className="project-modal-section">
                            <h3>Seguridad</h3>
                            <div className="project-feature-list">
                                <div className="project-feature"><span>01</span><p>Contraseñas almacenadas mediante hash y no en texto plano.</p></div>
                                <div className="project-feature"><span>02</span><p>Implementación de autenticación mediante tokens con expiración.</p></div>
                                <div className="project-feature"><span>03</span><p>Control de roles y permisos para restringir el acceso a funcionalidades.</p></div>
                                <div className="project-feature"><span>04</span><p>Pruebas de los procesos de autenticación y operaciones CRUD desde Postman.</p></div>
                            </div>
                        </div>

                        <div className="project-modal-section">
                            <h3>Funcionalidades implementadas</h3>
                            <div className="project-feature-list">
                                <div className="project-feature"><span>01</span><p>CRUD para la gestión de usuarios y personal.</p></div>
                                <div className="project-feature"><span>02</span><p>Gestión de asistencia, horarios y novedades.</p></div>
                                <div className="project-feature"><span>03</span><p>Cálculo y procesamiento de horas trabajadas.</p></div>
                                <div className="project-feature"><span>04</span><p>Carga y manejo de imágenes y documentos.</p></div>
                                <div className="project-feature"><span>05</span><p>Importación y exportación de información mediante archivos Excel.</p></div>
                                <div className="project-feature"><span>06</span><p>Procesos de carga masiva y organización de datos.</p></div>
                            </div>
                        </div>

                        <div className="project-modal-section">
                            <h3>Mi responsabilidad</h3>
                            <p className="project-modal-text">
                                Mientras el desarrollo frontend fue realizado por mi compañero, mi responsabilidad estuvo
                                centrada en el backend y la base de datos. Esto incluyó estructurar la información,
                                desarrollar la lógica del sistema, crear y probar los endpoints, validar los procesos
                                mediante Postman y preparar la información para su funcionamiento en producción.
                            </p>
                        </div>

                        <div className="project-modal-section">
                            <h3>Tecnologías</h3>
                            <div className="project-tags">
                                {proyectoActivo.tecnologias.map((tecnologia) => (
                                    <span key={tecnologia}>{tecnologia}</span>
                                ))}
                            </div>
                        </div>

                        <div className="project-private-note">
                            <FaLock /> Proyecto colaborativo de código privado.
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
}

export default Projects;
