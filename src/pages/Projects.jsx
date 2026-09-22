import { useState } from "react";
import {
    FaArrowUpRightFromSquare,
    FaGithub,
    FaLock,
    FaFileLines,
    FaCircleNotch,
    FaEllipsisVertical
} from "react-icons/fa6";
import "../styles/Projects.css";

function Projects() {
    const [proyectoActivo, setProyectoActivo] = useState(null);

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

    const abrirProyecto = (proyecto) => {
        setProyectoActivo(proyecto);
    };

    const cerrarProyecto = () => {
        setProyectoActivo(null);
    };

    return (
        <main className="projects-section">

            {/* CABECERA */}
            <header className="projects-header">
                <div className="projects-header-title">
                    <p>PROYECTOS</p>

                    <h1>
                        Proyectos
                        <span>que he desarrollado</span>
                    </h1>
                </div>

                <div className="projects-header-description">
                    <p>
                        Aquí encontrarás algunos de los proyectos en los que he trabajado,
                        desde ideas personales hasta desarrollos colaborativos. Cada proyecto
                        representa una oportunidad de aprender, crear y seguir creciendo.
                    </p>
                </div>
            </header>

            {/* PROYECTOS DESTACADOS */}
            <section className="featured-projects">

                {proyectosDestacados.map((proyecto) => (
                    <article className="featured-card" key={proyecto.titulo}>

                        <div className={`project-image ${proyecto.claseImagen}`}>
                            <span className="project-badge">
                                {proyecto.tipo}
                            </span>

                            <div className="image-placeholder">
                                <span>IMAGEN DEL PROYECTO</span>
                            </div>
                        </div>

                        <div className="featured-card-body">

                            <div className="featured-card-title">
                                <div>
                                    <h2>{proyecto.titulo}</h2>
                                    <p>{proyecto.subtitulo}</p>
                                </div>

                                <span className="project-year">
                                    {proyecto.anio}
                                </span>
                            </div>

                            <p className="featured-description">
                                {proyecto.descripcion}
                            </p>

                            <div className="project-tags">
                                {proyecto.tecnologias.map((tecnologia) => (
                                    <span key={tecnologia}>
                                        {tecnologia}
                                    </span>
                                ))}
                            </div>

                            <div className="featured-actions">

                                {proyecto.titulo === "ClickTienda" ? (
                                    <>
                                        <a
                                            href={proyecto.enlace}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="project-button primary"
                                        >
                                            <FaArrowUpRightFromSquare />
                                            Ver proyecto
                                        </a>

                                        <a
                                            href={proyecto.github}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="project-button secondary"
                                        >
                                            <FaGithub />
                                            Ver código
                                        </a>
                                    </>
                                ) : (
                                    <>
                                        <button
                                            type="button"
                                            className="project-button primary"
                                            onClick={() => abrirProyecto(proyecto)}
                                        >
                                            <FaFileLines />
                                            Ver detalles
                                        </button>

                                        <span className="private-project">
                                            <FaLock />
                                            Proyecto privado
                                        </span>
                                    </>
                                )}

                            </div>

                        </div>

                    </article>
                ))}

            </section>

            {/* MIS PROYECTOS */}
            <section className="other-projects">

                <div className="other-projects-header">
                    <h2>Mis Proyectos</h2>
                    <p>
                        Algunos proyectos personales en los que he trabajado.
                    </p>
                </div>

                <div className="projects-grid">

                    {misProyectos.map((proyecto) => (
                        <article className="small-project-card" key={proyecto.titulo}>

                            <div className={`small-project-image ${proyecto.claseImagen}`}>
                                <div className="image-placeholder">
                                    <span>IMAGEN</span>
                                </div>
                            </div>

                            <div className="small-project-body">

                                <h3>{proyecto.titulo}</h3>

                                <p>
                                    {proyecto.descripcion}
                                </p>

                                <div className="project-tags small-tags">
                                    {proyecto.tecnologias.map((tecnologia) => (
                                        <span key={tecnologia}>
                                            {tecnologia}
                                        </span>
                                    ))}
                                </div>

                                <div className="project-status">
                                    <span>
                                        <FaCircleNotch />
                                        {proyecto.estado}
                                    </span>

                                    <FaEllipsisVertical />
                                </div>

                            </div>

                        </article>
                    ))}

                </div>

            </section>

            {/* MODAL GESTIÓN DE PERSONAL */}
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

                        <p className="project-modal-subtitle">
                            {proyectoActivo.subtitulo}
                        </p>

                        <p className="project-modal-text">
                            Proyecto web desarrollado de manera colaborativa durante
                            aproximadamente dos meses. Mi participación estuvo enfocada
                            principalmente en el desarrollo completo del backend, el diseño
                            y construcción de la base de datos, la creación de APIs y la
                            implementación de funcionalidades para la gestión de la
                            información del sistema.
                        </p>

                        <div className="project-modal-section">
                            <h3>Proceso de desarrollo</h3>

                            <div className="project-feature-list">

                                <div className="project-feature">
                                    <span>01</span>
                                    <p>
                                        Análisis inicial de la documentación y del alcance
                                        funcional del sistema.
                                    </p>
                                </div>

                                <div className="project-feature">
                                    <span>02</span>
                                    <p>
                                        Diseño y construcción de la estructura de la base
                                        de datos desde cero.
                                    </p>
                                </div>

                                <div className="project-feature">
                                    <span>03</span>
                                    <p>
                                        Desarrollo del backend en PHP sin utilizar
                                        frameworks.
                                    </p>
                                </div>

                                <div className="project-feature">
                                    <span>04</span>
                                    <p>
                                        Creación de APIs y endpoints para la comunicación
                                        con el frontend.
                                    </p>
                                </div>

                                <div className="project-feature">
                                    <span>05</span>
                                    <p>
                                        Pruebas independientes de los endpoints mediante
                                        Postman.
                                    </p>
                                </div>

                                <div className="project-feature">
                                    <span>06</span>
                                    <p>
                                        Validación de funcionalidades antes de llevar los
                                        cambios al entorno de producción.
                                    </p>
                                </div>

                            </div>
                        </div>

                        <div className="project-modal-section">
                            <h3>Seguridad</h3>

                            <div className="project-feature-list">

                                <div className="project-feature">
                                    <span>01</span>
                                    <p>
                                        Contraseñas almacenadas mediante hash y no en texto
                                        plano.
                                    </p>
                                </div>

                                <div className="project-feature">
                                    <span>02</span>
                                    <p>
                                        Implementación de autenticación mediante tokens con
                                        expiración.
                                    </p>
                                </div>

                                <div className="project-feature">
                                    <span>03</span>
                                    <p>
                                        Control de roles y permisos para restringir el acceso
                                        a funcionalidades.
                                    </p>
                                </div>

                                <div className="project-feature">
                                    <span>04</span>
                                    <p>
                                        Pruebas de los procesos de autenticación y operaciones
                                        CRUD desde Postman.
                                    </p>
                                </div>

                            </div>
                        </div>

                        <div className="project-modal-section">
                            <h3>Funcionalidades implementadas</h3>

                            <div className="project-feature-list">

                                <div className="project-feature">
                                    <span>01</span>
                                    <p>
                                        CRUD para la gestión de usuarios y personal.
                                    </p>
                                </div>

                                <div className="project-feature">
                                    <span>02</span>
                                    <p>
                                        Gestión de asistencia, horarios y novedades.
                                    </p>
                                </div>

                                <div className="project-feature">
                                    <span>03</span>
                                    <p>
                                        Cálculo y procesamiento de horas trabajadas.
                                    </p>
                                </div>

                                <div className="project-feature">
                                    <span>04</span>
                                    <p>
                                        Carga y manejo de imágenes y documentos.
                                    </p>
                                </div>

                                <div className="project-feature">
                                    <span>05</span>
                                    <p>
                                        Importación y exportación de información mediante
                                        archivos Excel.
                                    </p>
                                </div>

                                <div className="project-feature">
                                    <span>06</span>
                                    <p>
                                        Procesos de carga masiva y organización de datos.
                                    </p>
                                </div>

                            </div>
                        </div>

                        <div className="project-modal-section">

                            <h3>Mi responsabilidad</h3>

                            <p className="project-modal-text">
                                Mientras el desarrollo frontend fue realizado por mi
                                compañero, mi responsabilidad estuvo centrada en el
                                backend y la base de datos. Esto incluyó estructurar la
                                información, desarrollar la lógica del sistema, crear y
                                probar los endpoints, validar los procesos mediante
                                Postman y preparar la información para su funcionamiento
                                en producción.
                            </p>

                        </div>

                        <div className="project-modal-section">

                            <h3>Tecnologías</h3>

                            <div className="project-tags">
                                {proyectoActivo.tecnologias.map((tecnologia) => (
                                    <span key={tecnologia}>
                                        {tecnologia}
                                    </span>
                                ))}
                            </div>

                        </div>

                        <div className="project-private-note">
                            <FaLock />
                            Proyecto colaborativo de código privado.
                        </div>

                    </div>
                </div>
            )}

        </main>
    );
}

export default Projects;