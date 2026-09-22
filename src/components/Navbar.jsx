import { useState } from "react";
import { NavLink } from "react-router-dom";

import {
    FaHouse,
    FaUser,
    FaBriefcase,
    FaFolder,
    FaEnvelope,
    FaFileArrowDown,
    FaSun,
    FaMoon
} from "react-icons/fa6";

import "../styles/Navbar.css";

function Navbar({ estadoVentanas, abrirVentana }) {
    const [modoOscuro, setModoOscuro] = useState(false);

    const cambiarTema = () => {
        setModoOscuro(!modoOscuro);
        document.documentElement.classList.toggle("dark");
    };

    const indicadorVentana = (ruta) => {
        if (estadoVentanas[ruta] !== "minimized") {
            return null;
        }

        return (
            <span
                className="window-minimized-indicator"
                aria-label="Ventana minimizada"
            ></span>
        );
    };

    const claseEnlace = (ruta, isActive) => {
        if (
            isActive &&
            estadoVentanas[ruta] === "open"
        ) {
            return "active";
        }

        return "";
    };

    return (
        <aside className="navbar">

            <nav className="nav-links">

                <NavLink
                    to="/"
                    end
                    onClick={() => abrirVentana("/")}
                    className={({ isActive }) =>
                        claseEnlace("/", isActive)
                    }
                >
                    <FaHouse />
                    <span>Inicio</span>
                    {indicadorVentana("/")}
                </NavLink>

                <NavLink
                    to="/sobre-mi"
                    onClick={() => abrirVentana("/sobre-mi")}
                    className={({ isActive }) =>
                        claseEnlace("/sobre-mi", isActive)
                    }
                >
                    <FaUser />
                    <span>Sobre mí</span>
                    {indicadorVentana("/sobre-mi")}
                </NavLink>

                <NavLink
                    to="/experiencia"
                    onClick={() => abrirVentana("/experiencia")}
                    className={({ isActive }) =>
                        claseEnlace("/experiencia", isActive)
                    }
                >
                    <FaBriefcase />
                    <span>Experiencia</span>
                    {indicadorVentana("/experiencia")}
                </NavLink>

                <NavLink
                    to="/proyectos"
                    onClick={() => abrirVentana("/proyectos")}
                    className={({ isActive }) =>
                        claseEnlace("/proyectos", isActive)
                    }
                >
                    <FaFolder />
                    <span>Proyectos</span>
                    {indicadorVentana("/proyectos")}
                </NavLink>

                <NavLink
                    to="/contacto"
                    onClick={() => abrirVentana("/contacto")}
                    className={({ isActive }) =>
                        claseEnlace("/contacto", isActive)
                    }
                >
                    <FaEnvelope />
                    <span>Contacto</span>
                    {indicadorVentana("/contacto")}
                </NavLink>

            </nav>

            <div className="nav-actions">

                <a
                    href="/CV-Marcela-Perdomo.pdf"
                    className="cv-button"
                    download
                >
                    <FaFileArrowDown />
                    <span>Descargar CV</span>
                </a>

                <button
                    className="theme-button"
                    onClick={cambiarTema}
                    aria-label="Cambiar tema"
                >
                    {modoOscuro ? <FaMoon /> : <FaSun />}
                </button>

            </div>

        </aside>
    );
}

export default Navbar;