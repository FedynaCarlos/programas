import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Desafios from "./pages/Desafios";
import Bambu from "./pages/Bambu";
import PiensaInfinito from "./pages/PiensaInfinito";
import Religion from "./pages/Religion";

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/desafios" element={<Desafios />} />
        <Route path="/bambu" element={<Bambu />} />
        <Route path="/piensa-infinito" element={<PiensaInfinito />} />
        <Route path="/religion" element={<Religion />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;