import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home";
import About from "../pages/About";
import Experience from "../pages/Experience";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";

function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/sobre-mi" element={<About />} />
                    <Route path="/experiencia" element={<Experience />} />
                    <Route path="/proyectos" element={<Projects />} />
                    <Route path="/contacto" element={<Contact />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;