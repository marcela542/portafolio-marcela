import { useEffect, useState } from "react";
import {
    FaArrowLeft,
    FaBriefcase,
    FaCheck,
    FaCode,
    FaComment,
    FaEnvelope,
    FaLightbulb,
    FaPaperPlane,
    FaRotateRight
} from "react-icons/fa6";
import marioVideo from "../assets/mario.mp4";
import marioPoster from "../assets/mario-poster.webp";
import "../styles/Contact.css";

const API_URL = import.meta.env.DEV
    ? "http://localhost/portafolio_backend/contacto/enviar.php"
    : "https://portafoliomarcela.infinityfreeapp.com/portafolio_backend/contacto/enviar.php";

function Contact() {
    const [opcionSeleccionada, setOpcionSeleccionada] = useState(null);
    const [estado, setEstado] = useState("inicio");
    const [formulario, setFormulario] = useState({
        nombre: "",
        email: "",
        mensaje: ""
    });
    const [error, setError] = useState("");

    const opciones = [
        {
            id: "proyecto",
            titulo: "TENGO UN PROYECTO",
            texto: "Hablemos de tu idea",
            icon: <FaCode />
        },
        {
            id: "trabajo",
            titulo: "QUIERO TRABAJAR CONTIGO",
            texto: "Oportunidades laborales",
            icon: <FaBriefcase />
        },
        {
            id: "idea",
            titulo: "TENGO UNA IDEA",
            texto: "Podemos explorarla",
            icon: <FaLightbulb />
        },
        {
            id: "saludo",
            titulo: "SOLO QUIERO SALUDAR",
            texto: "También puedes escribirme",
            icon: <FaComment />
        }
    ];

    const opcionActual = opciones.find(
        (opcion) => opcion.id === opcionSeleccionada
    );

    const manejarCambio = (event) => {
        const { name, value } = event.target;

        setFormulario((actual) => ({
            ...actual,
            [name]: value
        }));
    };

    const seleccionarOpcion = (id) => {
        setOpcionSeleccionada(id);
        setError("");
        setEstado("formulario");
    };

    const volverInicio = () => {
        if (estado === "enviando") return;

        setOpcionSeleccionada(null);
        setError("");
        setEstado("inicio");
    };

    useEffect(() => {
        if (estado !== "exito") return;

        const temporizador = setTimeout(() => {
            setFormulario({
                nombre: "",
                email: "",
                mensaje: ""
            });
            setOpcionSeleccionada(null);
            setError("");
            setEstado("inicio");
        }, 2200);

        return () => clearTimeout(temporizador);
    }, [estado]);

    const enviarMensaje = async (event) => {
        event.preventDefault();

        if (!opcionActual) return;

        setError("");
        setEstado("enviando");

        try {
            const response = await fetch(API_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    nombre: formulario.nombre,
                    email: formulario.email,
                    tipo_contacto: opcionActual.titulo,
                    asunto: `Contacto · ${opcionActual.titulo}`,
                    mensaje: formulario.mensaje
                })
            });

            const data = await response.json();

            if (!response.ok || !data.success) {
                throw new Error(
                    data.message || "No se pudo enviar el mensaje."
                );
            }

            await new Promise((resolve) => setTimeout(resolve, 1200));

            setFormulario({
                nombre: "",
                email: "",
                mensaje: ""
            });

            setEstado("exito");
        } catch (err) {
            setError(
                err.message || "No se pudo enviar el mensaje."
            );
            setEstado("formulario");
        }
    };

    return (
        <main className="contact-section">
            <div className="contact-window">
                <div className="contact-content">
                    <div
                        className={`contact-slider-track ${
                            estado !== "inicio" ? "show-form" : ""
                        }`}
                    >
                        <section className="contact-slide contact-home">
                            <div className="contact-intro">
                                <p className="contact-label">
                                    CONTACTO
                                </p>

                                <h1>BUZÓN ABIERTO</h1>

                                <p>
                                    Tu mensaje tiene un lugar aquí.
                                </p>
                            </div>

                            <div className="contact-visual-placeholder">
                                <video
                                    src={marioVideo}
                                    poster={marioPoster}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                />
                            </div>

                            <div className="contact-question">
                                <p>
                                    ¿QUÉ QUIERES CONTARME?
                                </p>
                            </div>

                            <div className="contact-options">
                                {opciones.map((opcion) => (
                                    <button
                                        key={opcion.id}
                                        type="button"
                                        className="contact-option"
                                        onClick={() =>
                                            seleccionarOpcion(opcion.id)
                                        }
                                    >
                                        <span className="contact-option-icon">
                                            {opcion.icon}
                                        </span>

                                        <span className="contact-option-copy">
                                            <strong>
                                                {opcion.titulo}
                                            </strong>

                                            <small>
                                                {opcion.texto}
                                            </small>
                                        </span>

                                        <span className="contact-option-arrow">
                                            →
                                        </span>
                                    </button>
                                ))}
                            </div>

                            <div className="contact-footer">
                                <span className="contact-online-dot"></span>

                                <span>
                                    BUZÓN DISPONIBLE · ESPERANDO TU MENSAJE
                                </span>
                            </div>
                        </section>

                        <section className="contact-slide contact-right-stage">
                            {estado === "formulario" &&
                                opcionActual && (
                                    <section className="contact-form-stage">
                                        <button
                                            type="button"
                                            className="contact-back-button"
                                            onClick={volverInicio}
                                        >
                                            <FaArrowLeft />
                                            Cambiar opción
                                        </button>

                                        <div className="contact-form-topline">
                                            <div>
                                                <p className="contact-label">
                                                    NUEVO MENSAJE
                                                </p>

                                                <h1>
                                                    {opcionActual.titulo}
                                                </h1>
                                            </div>

                                            <span className="contact-channel">
                                                CANAL ACTIVO
                                            </span>
                                        </div>

                                        <form
                                            className="contact-form"
                                            onSubmit={enviarMensaje}
                                        >
                                            <label>
                                                Nombre completo

                                                <input
                                                    type="text"
                                                    name="nombre"
                                                    value={formulario.nombre}
                                                    onChange={
                                                        manejarCambio
                                                    }
                                                    placeholder="Tu nombre"
                                                    required
                                                />
                                            </label>

                                            <label>
                                                Correo electrónico

                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={formulario.email}
                                                    onChange={
                                                        manejarCambio
                                                    }
                                                    placeholder="tu@correo.com"
                                                    required
                                                />
                                            </label>

                                            <label>
                                                Mensaje

                                                <textarea
                                                    name="mensaje"
                                                    value={formulario.mensaje}
                                                    onChange={
                                                        manejarCambio
                                                    }
                                                    placeholder="Cuéntame lo que tienes en mente..."
                                                    rows="5"
                                                    required
                                                />
                                            </label>

                                            {error && (
                                                <div className="contact-response error">
                                                    ! {error}
                                                </div>
                                            )}

                                            <button
                                                type="submit"
                                                className="contact-submit-button"
                                            >
                                                <FaPaperPlane />
                                                Enviar mensaje
                                            </button>
                                        </form>
                                    </section>
                                )}

                            {estado === "enviando" && (
                                <section className="contact-send-stage">
                                    <p className="contact-label">
                                        TRANSMISIÓN
                                    </p>

                                    <h1>
                                        Enviando tu mensaje
                                    </h1>

                                    <p className="contact-send-text">
                                        El mensaje está viajando hacia mi
                                        bandeja.
                                    </p>

                                    <div className="contact-send-route">
                                        <div className="send-node active">
                                            <FaEnvelope />

                                            <span>
                                                TU MENSAJE
                                            </span>
                                        </div>

                                        <div className="send-line">
                                            <span></span>
                                        </div>

                                        <div className="send-node">
                                            <div className="send-server-icon">
                                                ◆
                                            </div>

                                            <span>
                                                SERVIDOR
                                            </span>
                                        </div>

                                        <div className="send-line">
                                            <span></span>
                                        </div>

                                        <div className="send-node">
                                            <div className="send-inbox-icon">
                                                ▰
                                            </div>

                                            <span>
                                                BUZÓN
                                            </span>
                                        </div>
                                    </div>

                                    <div className="contact-progress">
                                        <div className="contact-progress-bar">
                                            <span></span>
                                        </div>

                                        <small>
                                            TRANSMITIENDO...
                                        </small>
                                    </div>
                                </section>
                            )}

                            {estado === "exito" && (
                                <section className="contact-success-stage">
                                    <div className="contact-success-icon">
                                        <FaCheck />
                                    </div>

                                    <p className="contact-label">
                                        ENTREGA COMPLETADA
                                    </p>

                                    <h1>
                                        Mensaje recibido
                                    </h1>

                                    <p>
                                        Tu mensaje llegó correctamente a mi
                                        bandeja.
                                    </p>

                                    <button
                                        type="button"
                                        className="contact-submit-button"
                                        onClick={volverInicio}
                                    >
                                        <FaRotateRight />
                                        Enviar otro mensaje
                                    </button>
                                </section>
                            )}
                        </section>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Contact;