import { useEffect, useRef, useState } from "react";

import { Outlet, useLocation, useNavigate } from "react-router-dom";

import {
    FaCertificate,
    FaFileLines,
    FaFilePdf,
    FaGear,
    FaTrashCan,
    FaXmark,
    FaFolderOpen,
    FaCheck,
    FaArrowRotateLeft,
} from "react-icons/fa6";

import Navbar from "../components/Navbar";
import fondo from "../assets/fondo.png";

import "../styles/MainLayout.css";

const ventanas = {
    "/": {
        nombre: "inicio.exe"
    },

    "/sobre-mi": {
        nombre: "sobre-mi.exe"
    },

    "/experiencia": {
        nombre: "experiencia.exe"
    },

    "/proyectos": {
        nombre: "proyectos.exe"
    },

    "/contacto": {
        nombre: "contacto.exe"
    }
};

const certificados = [
    {
        id: 1,
        nombre: "Power BI · Certificado 1",
        tipo: "Power BI",
        archivo: "/power-bi-1.pdf"
    },
    {
        id: 2,
        nombre: "Power BI · Certificado 2",
        tipo: "Power BI",
        archivo: "/power-bi-2.pdf"
    },
    {
        id: 3,
        nombre: "Power BI · Certificado 3",
        tipo: "Power BI",
        archivo: "/power-bi-3.pdf"
    },
    {
        id: 4,
        nombre: "Certificado de Electrónica · SENA",
        tipo: "Formación técnica",
        archivo: "/electronica-sena.pdf"
    },
    {
        id: 5,
        nombre: "Especificación de requisitos de software",
        tipo: "Desarrollo de software",
        archivo: "/requisitos-software.pdf"
    },
    {
        id: 6,
        nombre: "Maquetación de sitios web con HTML5 y CSS3",
        tipo: "Desarrollo web",
        archivo: "/html5-css3.pdf"
    },
    {
        id: 7,
        nombre: "Tecnólogo en Análisis y Desarrollo de Software",
        tipo: "Formación académica · SENA",
        archivo: "/tecnologo-adso.pdf"
    }
];

const fondosEscritorio = {
    cielo: {
        nombre: "Cielo",
        backgroundImage: `url(${fondo})`
    },

    atardecer: {
        nombre: "Atardecer",
        backgroundImage:
            `linear-gradient(rgba(223, 126, 181, .30), rgba(72, 47, 104, .18)), url(${fondo})`
    },

    noche: {
        nombre: "Noche",
        backgroundImage:
            `linear-gradient(rgba(25, 30, 69, .66), rgba(13, 14, 31, .74)), url(${fondo})`
    }
};

function obtenerFondoGuardado() {
    try {
        const guardado = localStorage.getItem("marcela-desktop-wallpaper");

        if (guardado && fondosEscritorio[guardado]) {
            return guardado;
        }
    } catch {
        // Si localStorage no está disponible, usamos el fondo original.
    }

    return "cielo";
}

function MainLayout() {
    const { pathname } = useLocation();
    const navigate = useNavigate();

    const [estadoVentanas, setEstadoVentanas] = useState(() => ({
        "/": pathname === "/" ? "open" : "closed",
        "/sobre-mi": pathname === "/sobre-mi" ? "open" : "closed",
        "/experiencia": pathname === "/experiencia" ? "open" : "closed",
        "/proyectos": pathname === "/proyectos" ? "open" : "closed",
        "/contacto": pathname === "/contacto" ? "open" : "closed"
    }));

    const [ventanaMaximizada, setVentanaMaximizada] = useState(false);
    const [fondoEscritorio, setFondoEscritorio] = useState(obtenerFondoGuardado);

    const [appEscritorioAbierta, setAppEscritorioAbierta] = useState(null);
    const [certificadoSeleccionado, setCertificadoSeleccionado] = useState(null);

    const rutaAnterior = useRef(pathname);

    useEffect(() => {
        const anterior = rutaAnterior.current;

        if (anterior !== pathname) {
            setEstadoVentanas((estado) => {
                const nuevoEstado = { ...estado };

                if (nuevoEstado[anterior] === "open") {
                    nuevoEstado[anterior] = "minimized";
                }

                nuevoEstado[pathname] = "open";

                return nuevoEstado;
            });

            setVentanaMaximizada(false);
            rutaAnterior.current = pathname;
        }
    }, [pathname]);

    useEffect(() => {
        try {
            localStorage.setItem(
                "marcela-desktop-wallpaper",
                fondoEscritorio
            );
        } catch {
            // La interfaz sigue funcionando aunque el navegador no permita guardar.
        }
    }, [fondoEscritorio]);

    const abrirVentana = (ruta) => {
        setEstadoVentanas((estado) => {
            const nuevoEstado = { ...estado };

            Object.keys(ventanas).forEach((rutaActual) => {
                if (
                    rutaActual !== ruta &&
                    nuevoEstado[rutaActual] === "open"
                ) {
                    nuevoEstado[rutaActual] = "minimized";
                }
            });

            nuevoEstado[ruta] = "open";

            return nuevoEstado;
        });

        setVentanaMaximizada(false);

        if (pathname !== ruta) {
            navigate(ruta);
        }
    };

    const minimizarVentana = () => {
        setEstadoVentanas((estado) => ({
            ...estado,
            [pathname]: "minimized"
        }));

        setVentanaMaximizada(false);
    };

    const cerrarVentana = () => {
        setEstadoVentanas((estado) => ({
            ...estado,
            [pathname]: "closed"
        }));

        setVentanaMaximizada(false);
    };

    const maximizarVentana = () => {
        setVentanaMaximizada((estado) => !estado);
    };

    const abrirAplicacionEscritorio = (aplicacion) => {
        setAppEscritorioAbierta(aplicacion);
    };

    const cerrarAplicacionEscritorio = () => {
        setAppEscritorioAbierta(null);
        setCertificadoSeleccionado(null);
    };

    const cambiarFondo = (fondo) => {
        if (!fondosEscritorio[fondo]) {
            return;
        }

        setFondoEscritorio(fondo);
    };

    const restaurarFondo = () => {
        setFondoEscritorio("cielo");
    };

    const ventanaActual = ventanas[pathname];

    const mostrarVentana =
        ventanaActual &&
        estadoVentanas[pathname] === "open";

    return (
        <div className="app-layout">
            <Navbar
                estadoVentanas={estadoVentanas}
                abrirVentana={abrirVentana}
            />

            <main
                className="desktop"
                style={{
                    backgroundImage:
                        fondosEscritorio[fondoEscritorio].backgroundImage
                }}
            >
                <div className="desktop-icons" aria-label="Elementos del escritorio">

                    <button
                        type="button"
                        className="desktop-icon"
                        onClick={() => abrirAplicacionEscritorio("certificados")}
                        aria-label="Abrir carpeta Certificados"
                    >
                        <span className="desktop-icon-art folder">
                            <FaFolderOpen />
                        </span>

                        <span className="desktop-icon-name">
                            Certificados
                        </span>
                    </button>

                    <button
                        type="button"
                        className="desktop-icon"
                        onClick={() => abrirAplicacionEscritorio("cv")}
                        aria-label="Abrir hoja de vida"
                    >
                        <span className="desktop-icon-art pdf">
                            <FaFilePdf />
                        </span>

                        <span className="desktop-icon-name">
                            Marcela-CV.pdf
                        </span>
                    </button>

                    <button
                        type="button"
                        className="desktop-icon"
                        onClick={() => abrirAplicacionEscritorio("readme")}
                        aria-label="Abrir README"
                    >
                        <span className="desktop-icon-art file">
                            <FaFileLines />
                        </span>

                        <span className="desktop-icon-name">
                            README.txt
                        </span>
                    </button>

                    <button
                        type="button"
                        className="desktop-icon"
                        onClick={() => abrirAplicacionEscritorio("papelera")}
                        aria-label="Abrir Papelera"
                    >
                        <span className="desktop-icon-art trash">
                            <FaTrashCan />
                        </span>

                        <span className="desktop-icon-name">
                            Papelera
                        </span>
                    </button>
                    <button
                        type="button"
                        className="desktop-icon"
                        onClick={() => abrirAplicacionEscritorio("settings")}
                        aria-label="Abrir configuración"
                    >
                        <span className="desktop-icon-art settings">
                            <FaGear />
                        </span>

                        <span className="desktop-icon-name">
                            settings.exe
                        </span>
                    </button>

                </div>

                {mostrarVentana && (
                    <section
                        className={`main-window ${
                            ventanaMaximizada ? "maximized" : ""
                        }`}
                    >
                        <div className="main-window-header">
                            <strong>
                                {ventanaActual.nombre}
                            </strong>

                            <div className="main-window-controls">
                                <button
                                    type="button"
                                    aria-label="Minimizar ventana"
                                    onClick={minimizarVentana}
                                >
                                    −
                                </button>

                                <button
                                    type="button"
                                    aria-label="Maximizar ventana"
                                    onClick={maximizarVentana}
                                >
                                    □
                                </button>

                                <button
                                    type="button"
                                    aria-label="Cerrar ventana"
                                    onClick={cerrarVentana}
                                >
                                    ×
                                </button>
                            </div>
                        </div>

                        <div className="main-window-content">
                            <Outlet />
                        </div>
                    </section>
                )}

                {appEscritorioAbierta === "settings" && (
                    <section className="desktop-app-overlay">
                        <div className="desktop-app settings-app">
                            <div className="desktop-app-header">
                                <strong>settings.exe</strong>

                                <button
                                    type="button"
                                    onClick={cerrarAplicacionEscritorio}
                                    aria-label="Cerrar configuración"
                                >
                                    <FaXmark />
                                </button>
                            </div>

                            <div className="desktop-app-body">
                                <div className="desktop-app-eyebrow">
                                    PERSONALIZACIÓN DEL ESCRITORIO
                                </div>

                                <h2>
                                    Fondo de escritorio
                                </h2>

                                <p className="desktop-app-description">
                                    Elige el ambiente que quieres usar en tu
                                    escritorio. La selección se guarda para
                                    cuando vuelvas a entrar.
                                </p>

                                <div className="wallpaper-grid">
                                    {Object.entries(fondosEscritorio).map(
                                        ([id, fondo]) => (
                                            <button
                                                key={id}
                                                type="button"
                                                className={`wallpaper-option ${
                                                    fondoEscritorio === id
                                                        ? "selected"
                                                        : ""
                                                }`}
                                                onClick={() => cambiarFondo(id)}
                                            >
                                                <span
                                                    className={`wallpaper-preview ${id}`}
                                                ></span>

                                                <span className="wallpaper-option-text">
                                                    <strong>
                                                        {fondo.nombre}
                                                    </strong>

                                                    <small>
                                                        {fondoEscritorio === id
                                                            ? "Seleccionado"
                                                            : "Usar este fondo"}
                                                    </small>
                                                </span>

                                                {fondoEscritorio === id && (
                                                    <FaCheck className="wallpaper-check" />
                                                )}
                                            </button>
                                        )
                                    )}
                                </div>

                                <button
                                    type="button"
                                    className="desktop-app-reset"
                                    onClick={restaurarFondo}
                                >
                                    <FaArrowRotateLeft />
                                    Restaurar cielo original
                                </button>
                            </div>
                        </div>
                    </section>
                )}

                {appEscritorioAbierta === "certificados" && (
                    <section className="desktop-app-overlay">
                        <div className="desktop-app certificates-app">
                            <div className="desktop-app-header">
                                <strong>certificados.exe</strong>

                                <button
                                    type="button"
                                    onClick={cerrarAplicacionEscritorio}
                                    aria-label="Cerrar certificados"
                                >
                                    <FaXmark />
                                </button>
                            </div>

                            {!certificadoSeleccionado ? (
                                <div className="certificate-folder-body">
                                    <div className="certificate-folder-toolbar">
                                        <span>Marcela &gt; Certificados</span>
                                        <span>7 elementos</span>
                                    </div>

                                    <div className="certificate-folder-grid">
                                        {certificados.map((certificado) => (
                                            <button
                                                type="button"
                                                className="certificate-file"
                                                key={certificado.id}
                                                onClick={() =>
                                                    setCertificadoSeleccionado(certificado)
                                                }
                                            >
                                                <span className="certificate-file-icon">
                                                    <FaFilePdf />
                                                </span>

                                                <span className="certificate-file-name">
                                                    {certificado.nombre}
                                                </span>

                                                <span className="certificate-file-type">
                                                    PDF · {certificado.tipo}
                                                </span>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                <div className="certificate-viewer">
                                    <div className="certificate-viewer-toolbar">
                                        <button
                                            type="button"
                                            className="certificate-back"
                                            onClick={() =>
                                                setCertificadoSeleccionado(null)
                                            }
                                        >
                                            ← Certificados
                                        </button>

                                        <strong>
                                            {certificadoSeleccionado.nombre}
                                        </strong>

                                        <a
                                            href={certificadoSeleccionado.archivo}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="certificate-viewer-open"
                                        >
                                            Abrir PDF
                                        </a>

                                        <a
                                            href={certificadoSeleccionado.archivo}
                                            download
                                            className="certificate-viewer-download"
                                        >
                                            Descargar
                                        </a>
                                    </div>

                                    <iframe
                                        src={certificadoSeleccionado.archivo}
                                        title={certificadoSeleccionado.nombre}
                                        className="certificate-pdf-preview"
                                    ></iframe>
                                </div>
                            )}
                        </div>
                    </section>
                )}

                {appEscritorioAbierta === "cv" && (
                    <section className="desktop-app-overlay">
                        <div className="desktop-app cv-app">
                            <div className="desktop-app-header">
                                <strong>Marcela-CV.pdf</strong>

                                <button
                                    type="button"
                                    onClick={cerrarAplicacionEscritorio}
                                    aria-label="Cerrar hoja de vida"
                                >
                                    <FaXmark />
                                </button>
                            </div>

                            <div className="cv-app-body">
                                <div className="cv-app-toolbar">
                                    <span>DOCUMENTO / HOJA DE VIDA</span>

                                    <a
                                        href="/CV-Marcela-Perdomo.pdf"
                                        download
                                        className="cv-app-download"
                                    >
                                        Descargar PDF
                                    </a>
                                </div>

                                <iframe
                                    src="/CV-Marcela-Perdomo.pdf"
                                    title="Hoja de vida de Marcela Perdomo"
                                    className="cv-preview"
                                ></iframe>
                            </div>
                        </div>
                    </section>
                )}

                {appEscritorioAbierta === "readme" && (
                    <section className="desktop-app-overlay">
                        <div className="desktop-app readme-app">
                            <div className="desktop-app-header">
                                <strong>README.txt</strong>

                                <button
                                    type="button"
                                    onClick={cerrarAplicacionEscritorio}
                                    aria-label="Cerrar README"
                                >
                                    <FaXmark />
                                </button>
                            </div>

                            <div className="readme-terminal">
                                <p>
                                    <span>C:\Marcela\Desktop&gt;</span>{" "}
                                    type README.txt
                                </p>

                                <p>Hola, soy Marcela.</p>

                                <p>
                                    Este portafolio está construido como un
                                    pequeño sistema operativo personal.
                                </p>

                                <p>
                                    La barra lateral contiene las aplicaciones
                                    principales y el escritorio guarda
                                    documentos y utilidades.
                                </p>

                                <p>
                                    <span className="readme-green">STATUS:</span>{" "}
                                    aprendiendo continuamente...
                                </p>

                                <p>
                                    <span>C:\Marcela\Desktop&gt;</span> _
                                </p>
                            </div>
                        </div>
                    </section>
                )}

                {appEscritorioAbierta === "papelera" && (
                    <section className="desktop-app-overlay">
                        <div className="desktop-app trash-app">
                            <div className="desktop-app-header">
                                <strong>papelera.exe</strong>

                                <button
                                    type="button"
                                    onClick={cerrarAplicacionEscritorio}
                                    aria-label="Cerrar papelera"
                                >
                                    <FaXmark />
                                </button>
                            </div>

                            <div className="trash-empty">
                                <FaTrashCan />

                                <strong>
                                    La papelera está vacía
                                </strong>

                                <span>
                                    0 elementos
                                </span>
                            </div>
                        </div>
                    </section>
                )}
            </main>
        </div>
    );
}

export default MainLayout;
