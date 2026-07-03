import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import PiensaInfinito from "../pages/PiensaInfinito";
import Bambu from "../pages/Bambu";
import Desafios from "../pages/Desafios";
import Religion from "../pages/Religion";

function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />

                <Route
                    path="/piensa-infinito"
                    element={<PiensaInfinito />}
                />

                <Route
                    path="/bambu"
                    element={<Bambu />}
                />

                <Route
                    path="/desafios"
                    element={<Desafios />}
                />

                <Route
                    path="/religion"
                    element={<Religion />}
                />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;