import { useState } from "react";
import {
    FaArrowLeft,
    FaArrowRight,
    FaArrowUpRightFromSquare,
    FaXmark,
    FaDatabase,
    FaCode,
    FaGoogle,
    FaBoxOpen,
    FaFolderOpen,
    FaCalendarDays,
    FaUser
} from "react-icons/fa6";
import black from "../assets/catblack.png";
import white from "../assets/catwhite.png";
import inventarioImg from "../assets/inventario.png";
import appsscriptImg from "../assets/appsscript.png";
import gestionpersonalImg from "../assets/gestionpersonal2.png";
import clicktiendaImg from "../assets/clicktienda1.png";
import "../styles/Experience.css";

const experiences = [
    {
        year: "2025",
        type: "Proyecto académico",
        title: "Sistema de Inventario",
        subtitle: "Proyecto académico · SENA",
        summary: "Primer acercamiento al desarrollo de una aplicación web para organizar y digitalizar la gestión de elementos tecnológicos, préstamos y reservas.",
        technologies: ["PHP", "JavaScript", "MySQL", "Bootstrap"],
        icon: <FaBoxOpen />,
        details: {
            type: "Proyecto académico · SENA",
            text: "Durante mi formación en Análisis y Desarrollo de Software en el SENA trabajé en un sistema de inventario para pasar procesos manuales a una aplicación web. La experiencia me permitió integrar interfaz, lógica y base de datos en un mismo desarrollo y entender cómo estructurar un sistema a partir de necesidades funcionales.",
            features: [
                "Comprensión y organización de requerimientos para el sistema.",
                "Diseño de la estructura de datos para la información del inventario.",
                "Desarrollo de la lógica de registro y consulta de información.",
                "Trabajo con préstamos, reservas, salidas y devoluciones como flujos del sistema.",
                "Validación de datos y control de la información registrada.",
                "Integración entre PHP, JavaScript y MySQL.",
                "Aprendizaje sobre cómo convertir procesos manuales en una solución web.",
                "Aplicación de buenas prácticas de organización durante el desarrollo."
            ],
            stack: ["PHP", "JavaScript", "MySQL", "Bootstrap"]
        }
    },
    {
        year: "2026",
        type: "Práctica / Automatización",
        title: "Colgate-Palmolive",
        subtitle: "Práctica · Automatización y desarrollo web",
        summary: "Experiencia orientada al análisis de procesos, desarrollo con JavaScript y automatización mediante Google Apps Script y Google Sheets.",
        technologies: ["JavaScript", "Google Apps Script", "Google Sheets"],
        icon: <FaGoogle />,
        details: {
            type: "Práctica profesional",
            text: "Durante mi práctica profesional trabajé con procesos internos que requerían registro, seguimiento y organización de información. Mi aprendizaje estuvo muy ligado al análisis de cómo se realizaban los procesos y a la búsqueda de formas de digitalizarlos y automatizarlos utilizando JavaScript, Google Apps Script y Google Sheets.",
            features: [
                "Análisis de procesos antes de plantear una solución técnica.",
                "Aprendizaje y aplicación de JavaScript dentro de Google Apps Script.",
                "Automatización de formularios, registros y flujos de trabajo.",
                "Organización y manejo de información en Google Sheets.",
                "Construcción y ajuste de soluciones para reducir tareas manuales.",
                "Desarrollo de interfaces web internas con HTML5, CSS3 y JavaScript.",
                "Participación en levantamiento de requerimientos con áreas usuarias.",
                "Optimización y generación de reportes según las necesidades del proceso."
            ],
            stack: ["JavaScript", "Google Apps Script", "Google Sheets", "HTML5", "CSS3"]
        }
    },
    {
        year: "2026",
        type: "Proyecto colaborativo",
        title: "Gestión de Personal",
        subtitle: "Proyecto colaborativo · Backend",
        summary: "Primer proyecto colaborativo en el que trabajé de forma profunda el backend, el diseño de base de datos y la comunicación mediante APIs internas.",
        technologies: ["PHP", "API REST", "MySQL", "Postman"],
        icon: <FaDatabase />,
        details: {
            type: "Proyecto colaborativo · Backend",
            text: "Este proyecto fue una experiencia importante en mi aprendizaje de backend. Trabajé en equipo con un compañero que desarrolló el frontend, mientras yo diseñé la base de datos relacional desde cero y desarrollé el backend en PHP puro, incluyendo las APIs y endpoints que posteriormente eran consumidos desde el frontend.",
            features: [
                "Diseño de la base de datos relacional desde cero a partir de las necesidades del proyecto.",
                "Desarrollo del backend en PHP puro, sin framework.",
                "Creación de APIs internas y endpoints para comunicación con el frontend.",
                "Trabajo con respuestas estructuradas en JSON.",
                "Pruebas y validación de endpoints durante el desarrollo.",
                "Primer trabajo profundo con lógica de backend y reglas de negocio.",
                "Implementación de relaciones entre personal, sedes, supervisores y horarios.",
                "Desarrollo de lógica para asistencia, jornadas, novedades y cálculo de horas.",
                "Carga masiva de asistencia mediante Excel y validación de información.",
                "Generación de reportes y manejo de roles y permisos.",
                "Aprendizaje sobre la coordinación entre backend y frontend dentro de un proyecto colaborativo."
            ],
            stack: ["PHP", "MySQL", "SQL", "API REST", "JSON", "Postman", "Excel"]
        }
    },
    {
        year: "2026",
        type: "Proyecto independiente",
        title: "ClickTienda",
        subtitle: "Proyecto propio · Desarrollo independiente",
        summary: "Una experiencia de aprendizaje intensiva alrededor de backend, APIs externas, autenticación, pagos, seguridad, debugging e integración de IA.",
        technologies: ["React", "PHP", "MySQL", "Wompi", "Gemini", "Postman"],
        icon: <FaCode />,
        details: {
            type: "Proyecto personal de portafolio",
            text: "ClickTienda fue una experiencia especialmente enfocada en aprender integración entre sistemas. Además de desarrollar el producto, tuve que investigar y resolver problemas relacionados con autenticación, APIs, pagos electrónicos, comunicación con servicios externos, seguridad y funcionamiento del backend en un hosting real. El proyecto me obligó a trabajar con pruebas controladas, revisar documentación y entender cada parte del flujo antes de modificarla.",
            features: [
                "Aprendizaje y aplicación de comunicación entre frontend React y backend PHP mediante HTTP y JSON.",
                "Desarrollo y prueba de endpoints internos del backend.",
                "Uso de autenticación mediante Bearer token para endpoints protegidos.",
                "Trabajo con consultas preparadas mediante PDO, transacciones y control de concurrencia.",
                "Integración de Wompi mediante Web Checkout y generación de referencias y firma de integridad.",
                "Implementación y validación del webhook de Wompi con checksum.",
                "Investigación y resolución del problema en el que Wompi aprobaba un pago pero ClickTienda no recibía correctamente la actualización automática.",
                "Diseño de una verificación activa desde el backend consultando la API de Wompi como mecanismo complementario.",
                "Pruebas controladas y pruebas reales de integración, incluyendo validaciones del flujo completo y regresión.",
                "Uso de Postman y herramientas de desarrollo para comprobar respuestas, peticiones y comportamiento de los endpoints.",
                "Integración de un asistente de compras con IA mediante la API de Gemini para interpretar necesidades y presupuesto del cliente y orientar recomendaciones de productos.",
                "Aprendizaje sobre manejo de secretos mediante variables de entorno, CORS, idempotencia y validaciones de seguridad.",
                "Trabajo con el backend en un hosting real, manteniendo respaldos y realizando cambios de forma incremental."
            ],
            stack: ["React", "Vite", "JavaScript", "PHP", "MySQL / MariaDB", "PDO", "API REST", "JSON", "Wompi", "Gemini", "Postman"],
            additional: "Uno de los aprendizajes centrales fue entender que una integración no se resuelve solamente haciendo que una llamada funcione: fue necesario investigar el flujo completo, formular hipótesis, probarlas por separado, analizar la evidencia y después implementar la solución. En el caso de Wompi, esto llevó a conservar el webhook y añadir una verificación activa desde el backend."
        }
    }
];

const años = ["2025", "2026"];

function Experience() {
    const [añoActivo, setAñoActivo] = useState("2025");
    const [indiceProyecto, setIndiceProyecto] = useState(0);
    const [modalAbierto, setModalAbierto] = useState(false);

    const experienciasDelAño = experiences.filter(
        (experience) => experience.year === añoActivo
    );

    const experienciaSeleccionada = experienciasDelAño[indiceProyecto] || experienciasDelAño[0];

    const cambiarAño = (año) => {
        setAñoActivo(año);
        setIndiceProyecto(0);
        setModalAbierto(false);
    };

    const cambiarProyecto = (direccion) => {
        setIndiceProyecto((indiceActual) => {
            const total = experienciasDelAño.length;
            if (total <= 1) return 0;
            const siguiente = indiceActual + direccion;
            if (siguiente < 0) return total - 1;
            if (siguiente >= total) return 0;
            return siguiente;
        });
    };

    const abrirModal = () => setModalAbierto(true);
    const cerrarModal = () => setModalAbierto(false);

    return (
        <main className="experience-section">
            <header className="experience-header">
                <div className="experience-title">
                    <div className="experience-title-icon">
                        <FaFolderOpen />
                    </div>

                    <div>
                        <h1>EXPERIENCIA</h1>
                        <p>Proyectos, práctica y aprendizaje</p>
                    </div>
                </div>

                <div className="experience-intro">
                    Aquí puedes ver mi recorrido por año. Cada experiencia representa una etapa importante en mi formación y desarrollo.
                </div>

                <div className="experience-header-icon">
                    <FaCode />
                </div>
            </header>

            <section className="experience-content">
                <aside className="experience-years">
                    <div className="experience-years-line"></div>

                    {años.map((año) => {
                        const cantidad = experiences.filter(
                            (experience) => experience.year === año
                        ).length;

                        return (
                            <button
                                type="button"
                                key={año}
                                className={`experience-year-tab ${
                                    añoActivo === año ? "active" : ""
                                }`}
                                onClick={() => cambiarAño(año)}
                            >
                                <span className="experience-year-icon">
                                    <img
                                        src={año === "2025" ? black : white}
                                        alt={año === "2025" ? "Milo" : "Rocky"}
                                    />
                                </span>

                                <span className="experience-year-content">
                                    <strong>{año}</strong>
                                    <small>
                                        {cantidad}{" "}
                                        {cantidad === 1 ? "proyecto" : "proyectos"}
                                    </small>
                                </span>

                                <span className="experience-year-arrow">
                                    <FaArrowRight />
                                </span>
                            </button>
                        );
                    })}
                </aside>

                <section className="experience-main-card">
                    <div className="experience-main-top">
                        <div className="experience-main-index">
                            <span>
                                {String(indiceProyecto + 1).padStart(2, "0")}
                            </span>

                            {experienciasDelAño.length > 1 && (
                                <small>
                                    / {String(experienciasDelAño.length).padStart(2, "0")}
                                </small>
                            )}
                        </div>

                        <div className="experience-main-title">
                            <div className="experience-main-icon">
                                {experienciaSeleccionada.icon}
                            </div>

                            <div>
                                <h2>{experienciaSeleccionada.title}</h2>
                                <p>{experienciaSeleccionada.subtitle}</p>
                            </div>
                        </div>

                        <div className="experience-main-year">
                            <FaCalendarDays />
                            <span>
                                <small>Año</small>
                                <strong>{experienciaSeleccionada.year}</strong>
                            </span>
                        </div>
                    </div>

                    <div className="experience-main-content">
                        <div className="experience-visual">
                            <div className="experience-visual-bar">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>

                            <div className="experience-image-placeholder">
                                {experienciaSeleccionada.title === "Sistema de Inventario" ? (
                                    <img
                                        src={inventarioImg}
                                        alt="Sistema de Inventario"
                                    />
                                ) : experienciaSeleccionada.title === "Colgate-Palmolive" ? (
                                    <img
                                        src={appsscriptImg}
                                        alt="Automatización con Google Apps Script y Google Sheets"
                                    />
                                ) : experienciaSeleccionada.title === "Gestión de Personal" ? (
                                    <img
                                        src={gestionpersonalImg}
                                        alt="Gestión de Personal"
                                    />
                                ) : experienciaSeleccionada.title === "ClickTienda" ? (
                                    <img
                                        src={clicktiendaImg}
                                        alt="ClickTienda"
                                    />
                                ) : (
                                    <div>
                                        <span>{experienciaSeleccionada.title}</span>
                                        <small>Imagen del proyecto</small>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="experience-information">
                            <section className="experience-information-block">
                                <h3>Descripción</h3>
                                <p>{experienciaSeleccionada.summary}</p>
                            </section>

                            <section className="experience-information-block">
                                <h3>Tecnologías utilizadas</h3>
                                <div className="experience-stack">
                                    {experienciaSeleccionada.technologies.map(
                                        (technology) => (
                                            <span key={technology}>{technology}</span>
                                        )
                                    )}
                                </div>
                            </section>

                            <div className="experience-facts">
                                <div>
                                    <FaUser />
                                    <span>
                                        <small>Tipo de proyecto</small>
                                        <strong>{experienciaSeleccionada.type}</strong>
                                    </span>
                                </div>

                                <div>
                                    <FaFolderOpen />
                                    <span>
                                        <small>Institución</small>
                                        <strong>
                                            {experienciaSeleccionada.year === "2025"
                                                ? "SENA"
                                                : experienciaSeleccionada.title ===
                                                  "Colgate-Palmolive"
                                                    ? "Colgate-Palmolive"
                                                    : "Proyecto independiente"}
                                        </strong>
                                    </span>
                                </div>
                            </div>

                            <div className="experience-main-bottom">
                                {experienciasDelAño.length > 1 ? (
                                    <div className="experience-project-switcher">
                                        <button
                                            type="button"
                                            onClick={() => cambiarProyecto(-1)}
                                            aria-label="Experiencia anterior"
                                        >
                                            <FaArrowLeft />
                                        </button>

                                        <span>
                                            {indiceProyecto + 1} / {experienciasDelAño.length}
                                        </span>

                                        <button
                                            type="button"
                                            onClick={() => cambiarProyecto(1)}
                                            aria-label="Siguiente experiencia"
                                        >
                                            <FaArrowRight />
                                        </button>
                                    </div>
                                ) : (
                                    <span></span>
                                )}

                                <button
                                    type="button"
                                    className="experience-detail-button"
                                    onClick={abrirModal}
                                >
                                    <FaArrowUpRightFromSquare />
                                    Ver detalles completos
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </section>

            {modalAbierto && (
                <div className="experience-modal-overlay" onClick={cerrarModal}>
                    <div
                        className="experience-modal"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <button
                            type="button"
                            className="experience-modal-close"
                            onClick={cerrarModal}
                            aria-label="Cerrar detalle"
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

                        <div className="experience-modal-section">
                            <h3>Descripción</h3>
                            <p className="experience-modal-text">
                                {experienciaSeleccionada.details.text}
                            </p>
                        </div>

                        <div className="experience-modal-section">
                            <h3>Retos, proceso y aprendizaje</h3>
                            <div className="experience-modal-feature-list">
                                {experienciaSeleccionada.details.features.map(
                                    (feature) => (
                                        <div
                                            className="experience-modal-feature"
                                            key={feature}
                                        >
                                            <span>✓</span>
                                            <p>{feature}</p>
                                        </div>
                                    )
                                )}
                            </div>
                        </div>

                        {experienciaSeleccionada.details.additional && (
                            <div className="experience-modal-section">
                                <h3>Aprendizajes técnicos</h3>
                                <p className="experience-modal-text">
                                    {experienciaSeleccionada.details.additional}
                                </p>
                            </div>
                        )}

                        <div className="experience-modal-section">
                            <h3>Herramientas y tecnologías</h3>
                            <div className="experience-modal-tags">
                                {experienciaSeleccionada.details.stack.map(
                                    (technology) => (
                                        <span key={technology}>{technology}</span>
                                    )
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </main>
    )
}

export default Experience;
