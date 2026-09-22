import { useState } from "react";
import {
    FaArrowUpRightFromSquare,
    FaXmark,
    FaDatabase,
    FaCode,
    FaRobot,
    FaGoogle,
    FaBoxOpen,
} from "react-icons/fa6";
import "../styles/Experience.css";

const experiences = [
    {
        year: "2025",
        title: "Sistema de Inventario",
        subtitle: "Proyecto académico · SENA",
        description:
            "Desarrollo de un sistema web para gestionar elementos tecnológicos, préstamos, reservas y salidas.",
        technologies: ["PHP", "JavaScript", "MySQL", "Bootstrap"],
        icon: <FaBoxOpen />,
        details: {
            type: "Proyecto académico",
            text:
                "Proyecto desarrollado durante mi formación en Análisis y Desarrollo de Software en el SENA, enfocado en digitalizar la gestión de elementos tecnológicos.",
            features: [
                "Registro y consulta de elementos tecnológicos",
                "Gestión de préstamos y salidas",
                "Reservas de equipos",
                "Control del inventario",
                "Gestión de información mediante base de datos",
            ],
            stack: [
                "PHP",
                "JavaScript",
                "MySQL",
                "Bootstrap",
            ],
        },
    },
    {
        year: "2026",
        title: "Colgate-Palmolive",
        subtitle: "Práctica · Automatización y desarrollo web",
        description:
            "Desarrollo de soluciones digitales y automatizaciones para optimizar procesos internos y reducir tareas manuales.",
        technologies: [
            "Google Apps Script",
            "Google Sheets",
            "JavaScript",
        ],
        icon: <FaGoogle />,
        details: {
            type: "Práctica profesional",
            text:
                "Durante mi práctica participé en el desarrollo de soluciones digitales para apoyar diferentes procesos internos. Trabajé principalmente con Google Apps Script y Google Sheets para transformar procesos que anteriormente se realizaban de forma manual.",
            features: [
                "Desarrollo de interfaces web internas",
                "Automatización de flujos de trabajo",
                "Automatización de formularios y registros",
                "Generación y optimización de reportes",
                "Organización y control de información",
                "Participación en levantamiento de requerimientos",
            ],
            stack: [
                "JavaScript",
                "Google Apps Script",
                "Google Sheets",
                "HTML5",
                "CSS3",
            ],
        },
    },
    {
        year: "2026",
        title: "Gestión de Personal",
        subtitle: "Proyecto colaborativo · Backend",
        description:
            "Desarrollo del backend de una plataforma para gestionar personal, asistencia, horarios, novedades y cálculo de horas.",
        technologies: [
            "PHP",
            "API REST",
            "MySQL",
            "SQL",
        ],
        icon: <FaDatabase />,
        details: {
            type: "Proyecto colaborativo",
            text:
                "Proyecto desarrollado en equipo de dos personas. Mi responsabilidad estuvo enfocada en el diseño de la base de datos y el desarrollo completo del backend, mientras mi compañero trabajó el frontend y consumía las APIs que desarrollé.",
            features: [
                "Diseño de la base de datos relacional desde cero",
                "Desarrollo del backend en PHP puro, sin framework",
                "Desarrollo de APIs para comunicación con el frontend",
                "Registro y aprobación de personal",
                "Gestión de horarios por sede",
                "Control de asistencia AM/PM",
                "Carga masiva de información mediante Excel",
                "Cálculo automático de horas según reglas de negocio",
                "Gestión de novedades",
                "Reportes filtrables por trabajador, sede, supervisor y periodo",
                "Sistema de roles y permisos",
            ],
            stack: [
                "PHP",
                "MySQL",
                "SQL",
                "API REST",
                "Endpoints JSON",
            ],
        },
    },
    {
        year: "2026",
        title: "ClickTienda",
        subtitle: "Proyecto propio · Desarrollo independiente",
        description:
            "E-commerce full-stack con React, PHP, base de datos, pagos con Wompi e integración de inteligencia artificial.",
        technologies: [
            "React",
            "PHP",
            "MySQL",
            "Wompi",
            "Gemini",
        ],
        icon: <FaCode />,
        details: {
            type: "Proyecto personal de portafolio",
            text:
                "ClickTienda es una aplicación de comercio electrónico full-stack desarrollada como proyecto personal. Cuenta con un frontend en React + Vite y un backend desarrollado en PHP puro, conectado a MySQL/MariaDB.",
            features: [
                "Catálogo de productos y categorías",
                "Carrito de compras y favoritos",
                "Autenticación mediante tokens",
                "Roles de usuario y administrador",
                "Gestión de productos e inventario",
                "Creación y gestión de pedidos",
                "Control de stock y concurrencia",
                "Expiración de pedidos no pagados",
                "Integración con Wompi Sandbox",
                "Webhook para eventos de pago",
                "Verificación activa de transacciones",
                "Asistente de compras mediante IA con Gemini",
                "Generación de descripciones de productos mediante IA",
                "APIs PHP para comunicación entre frontend y backend",
                "Despliegue en hosting real",
            ],
            stack: [
                "React",
                "Vite",
                "PHP",
                "MySQL / MariaDB",
                "API REST",
                "Wompi",
                "Gemini",
            ],
        },
    },
];

function Experience() {
    const [experienciaSeleccionada, setExperienciaSeleccionada] =
        useState(null);

    const cerrarModal = () => {
        setExperienciaSeleccionada(null);
    };

    return (
        <main className="experience-section">
            <div className="experience-header">
                <p>TRAYECTORIA</p>

                <h1>
                    Experiencia
                    <span>y desarrollo</span>
                </h1>
            </div>

            <div className="experience-timeline">
                {experiences.map((experience) => (
                    <article className="experience-item" key={experience.title}>
                        <div className="experience-year">
                            {experience.year}
                        </div>

                        <div className="experience-dot"></div>

                        <div className="experience-card">
                            <div className="experience-card-content">
                                <div className="experience-card-top">
                                    <div className="experience-icon">
                                        {experience.icon}
                                    </div>

                                    <div>
                                        <h2>{experience.title}</h2>
                                        <p>{experience.subtitle}</p>
                                    </div>
                                </div>

                                <p className="experience-description">
                                    {experience.description}
                                </p>

                                <div className="experience-tags">
                                    {experience.technologies.map((technology) => (
                                        <span key={technology}>
                                            {technology}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <button
                                className="experience-button"
                                onClick={() =>
                                    setExperienciaSeleccionada(experience)
                                }
                                aria-label={`Ver detalles de ${experience.title}`}
                            >
                                <FaArrowUpRightFromSquare />
                            </button>
                        </div>
                    </article>
                ))}
            </div>

            {experienciaSeleccionada && (
                <div
                    className="experience-modal-overlay"
                    onClick={cerrarModal}
                >
                    <div
                        className="experience-modal"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <button
                            className="experience-modal-close"
                            onClick={cerrarModal}
                            aria-label="Cerrar"
                        >
                            <FaXmark />
                        </button>

                        <p className="experience-modal-label">
                            {experienciaSeleccionada.year} ·{" "}
                            {experienciaSeleccionada.details.type}
                        </p>

                        <h2>{experienciaSeleccionada.title}</h2>

                        <p className="experience-modal-subtitle">
                            {experienciaSeleccionada.subtitle}
                        </p>

                        <p className="experience-modal-text">
                            {experienciaSeleccionada.details.text}
                        </p>

                        <div className="experience-modal-section">
                            <h3>Lo que desarrollé</h3>

                            <div className="experience-feature-list">
                                {experienciaSeleccionada.details.features.map(
                                    (feature) => (
                                        <div
                                            className="experience-feature"
                                            key={feature}
                                        >
                                            <span>✓</span>
                                            <p>{feature}</p>
                                        </div>
                                    )
                                )}
                            </div>
                        </div>

                        <div className="experience-modal-section">
                            <h3>Herramientas y tecnologías</h3>

                            <div className="experience-modal-tags">
                                {experienciaSeleccionada.details.stack.map(
                                    (technology) => (
                                        <span key={technology}>
                                            {technology}
                                        </span>
                                    )
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
}

export default Experience;