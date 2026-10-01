import { useState } from "react";
import { NavLink } from "react-router-dom";
import homeIcon from "../assets/navbar-icons/home.png";
import userIcon from "../assets/navbar-icons/user.png";
import briefcaseIcon from "../assets/navbar-icons/briefcase.png";
import folderIcon from "../assets/navbar-icons/folder.png";
import mailIcon from "../assets/navbar-icons/mail.png";
import sunIcon from "../assets/navbar-icons/sun.png";
import moonIcon from "../assets/navbar-icons/moon.png";
import "../styles/Navbar.css";

const enlaces = [
    {
        ruta: "/",
        etiqueta: "Inicio",
        icono: homeIcon,
        end: true
    },
    {
        ruta: "/sobre-mi",
        etiqueta: "Sobre mí",
        icono: userIcon
    },
    {
        ruta: "/experiencia",
        etiqueta: "Experiencia",
        icono: briefcaseIcon
    },
    {
        ruta: "/proyectos",
        etiqueta: "Proyectos",
        icono: folderIcon
    },
    {
        ruta: "/contacto",
        etiqueta: "Contacto",
        icono: mailIcon
    }
];

function Navbar({ estadoVentanas, abrirVentana }) {
    const [modoOscuro, setModoOscuro] = useState(() =>
        document.documentElement.classList.contains("dark")
    );

    const cambiarTema = () => {
        setModoOscuro((estado) => !estado);
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
            />
        );
    };

    return (
        <aside className="navbar">
            <div className="navbar-top">
                <div className="navbar-title-window">
                    <span className="navbar-title-main">
                        PORTAFOLIO MARCELA
                    </span>
                    <span className="navbar-title-line" />
                </div>
            </div>

            <nav
                className="nav-links"
                aria-label="Navegación principal"
            >
                {enlaces.map((enlace) => (
                    <NavLink
                        key={enlace.ruta}
                        to={enlace.ruta}
                        end={enlace.end}
                        onClick={() => abrirVentana(enlace.ruta)}
                        className={({ isActive }) =>
                            isActive &&
                            estadoVentanas[enlace.ruta] === "open"
                                ? "nav-item active"
                                : "nav-item"
                        }
                    >
                        <span className="nav-item-icon">
                            <img
                                src={enlace.icono}
                                alt=""
                                draggable="false"
                            />
                        </span>

                        <span className="nav-item-label">
                            {enlace.etiqueta}
                        </span>

                        {indicadorVentana(enlace.ruta)}
                    </NavLink>
                ))}
            </nav>

            <div className="nav-theme">
                <div className="nav-theme-rule">
                    <span />
                    <span />
                </div>

                <button
                    type="button"
                    className="theme-switch"
                    onClick={cambiarTema}
                    aria-label="Cambiar entre tema claro y oscuro"
                >
                    <span
                        className={
                            !modoOscuro
                                ? "theme-side selected"
                                : "theme-side"
                        }
                    >
                        <img
                            src={sunIcon}
                            alt=""
                            draggable="false"
                        />
                    </span>

                    <span className="theme-separator" />

                    <span
                        className={
                            modoOscuro
                                ? "theme-side selected"
                                : "theme-side"
                        }
                    >
                        <img
                            src={moonIcon}
                            alt=""
                            draggable="false"
                        />
                    </span>
                </button>

                <span className="theme-caption">
                    TEMA
                </span>
            </div>
        </aside>
    );
}

export default Navbar;