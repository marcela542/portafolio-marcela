import { useState } from "react";
import {
    FaCat,
    FaSun,
    FaMoon,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

import "../styles/Navbar.css";

function Navbar() {
    const [modoOscuro, setModoOscuro] = useState(false);

    const cambiarTema = () => {
        setModoOscuro(!modoOscuro);
        document.documentElement.classList.toggle("dark");
    };

    return (
        <nav className="navbar">
            <Link to="/" className="logo">
                <FaCat />

                <div className="logo-name">
                    <span>MARCELA</span>
                    <small>PERDOMO YELA</small>
                </div>
            </Link>

            <div className="nav-links">
                <Link to="/">Inicio</Link>
                <Link to="/sobre-mi">Sobre mí</Link>
                <Link to="/experiencia">Experiencia</Link>
                <Link to="/proyectos">Proyectos</Link>
                <Link to="/contacto">Contacto</Link>
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