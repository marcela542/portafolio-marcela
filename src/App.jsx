import { useEffect, useState } from "react";
import LoadingScreen from "./components/LoadingScreen";
import AppRouter from "./router/AppRouter";

// La funcion 
function App() {
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        const tiempo = setTimeout(() => {
            setCargando(false);
        }, 2000);

        return () => clearTimeout(tiempo);
    }, []);

    return cargando ? <LoadingScreen /> : <AppRouter />;
}

export default App;