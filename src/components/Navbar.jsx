import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
    FaCat,
    FaSun,
    FaMoon,
} from "react-icons/fa6";
import "../styles/Navbar.css";

function Navbar() {
    const [modoOscuro, setModoOscuro] = useState(false);

    const cambiarTema = () => {
        setModoOscuro(!modoOscuro);
        document.documentElement.classList.toggle("dark");
    };

    return (
        <nav className="navbar">
            <NavLink to="/" className="logo">
                <FaCat />

                <div className="logo-name">
                    <span>MARCELA</span>
                    <small>PERDOMO YELA</small>
                </div>
            </NavLink>

            <div className="nav-links">
                <NavLink
                    to="/"
                    end
                    className={({ isActive }) =>
                        isActive ? "active" : ""
                    }
                >
                    Inicio
                </NavLink>

                <NavLink
                    to="/sobre-mi"
                    className={({ isActive }) =>
                        isActive ? "active" : ""
                    }
                >
                    Sobre mí
                </NavLink>

                <NavLink
                    to="/experiencia"
                    className={({ isActive }) =>
                        isActive ? "active" : ""
                    }
                >
                    Experiencia
                </NavLink>

                <NavLink
                    to="/proyectos"
                    className={({ isActive }) =>
                        isActive ? "active" : ""
                    }
                >
                    Proyectos
                </NavLink>

                <NavLink
                    to="/contacto"
                    className={({ isActive }) =>
                        isActive ? "active" : ""
                    }
                >
                    Contacto
                </NavLink>
            </div>

            <div className="nav-actions">
                <a
                    href="/CV-Marcela-Perdomo.pdf"
                    className="cv-button"
                    download
                >
                    Descargar CV
                </a>

                <button
                    className="theme-button"
                    onClick={cambiarTema}
                    aria-label="Cambiar tema"
                >
                    {modoOscuro ? <FaMoon /> : <FaSun />}
                </button>
            </div>
        </nav>
    );
}

export default Navbar;