import { useEffect, useRef, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";

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

            <main className="desktop">

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

            </main>

        </div>
    );
}

export default MainLayout;