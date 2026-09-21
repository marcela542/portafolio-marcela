import "../styles/LoadingScreen.css";

function LoadingScreen() {
    return (
        <div className="loading">
            <h1>
                Bien<span>venido</span>
            </h1>

            <div className="progress">
                <div></div>
            </div>

            <p>CARGANDO EXPERIENCIA...</p>
        </div>
    );
}

export default LoadingScreen;