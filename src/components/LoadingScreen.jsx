import "../styles/LoadingScreen.css";

function LoadingScreen() {
    return (
        <div className="loading">
            <h1 className="loading-title">
                <span className="white">Bien</span>
                <span className="purple">venido</span>
            </h1>

            <div className="progress">
                <div></div>
            </div>

            <p className="loading-text">
                CARGANDO EXPERIENCIA...
            </p>
        </div>
    );
}

export default LoadingScreen;