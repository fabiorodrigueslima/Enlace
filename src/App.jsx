import { Routes, Route } from "react-router-dom";

/* PÁGINAS */

import Home from "./pages/Home";
import Parceiros from "./pages/Parceiros";

import SececDf from "./pages/SececDf";
import ArtesanatoManualismo from "./pages/ArtesanatoManualismo";
import GastronomiaArtesanal from "./pages/GastronomiaArtesanal";
import Cursos from "./pages/Cursos";
import Feiras from "./pages/Feiras";
import Galeria from "./pages/Galeria";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/parceiros" element={<Parceiros />} />
      <Route path="/secec-df" element={<SececDf />} />
      <Route path="/artesanato-manualismo" element={<ArtesanatoManualismo />} />
      <Route path="/gastronomia-artesanal" element={<GastronomiaArtesanal />} />
      <Route path="/cursos" element={<Cursos />} />
      <Route path="/feiras" element={<Feiras />} />
      <Route path="/galeria" element={<Galeria />} />
    </Routes>
  );
}

export default App;