import { BrowserRouter, Routes, Route } from "react-router-dom";

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

    <BrowserRouter>

      <Routes>

        {/* HOME */}
        <Route
          path="/"
          element={<Home />}
        />

        {/* PARCEIROS */}
        <Route
          path="/parceiros"
          element={<Parceiros />}
        />

        {/* SECEC DF */}
        <Route
          path="/secec-df"
          element={<SececDf />}
        />

        {/* ARTESANATO */}
        <Route
          path="/artesanato-manualismo"
          element={<ArtesanatoManualismo />}
        />

        {/* GASTRONOMIA */}
        <Route
          path="/gastronomia-artesanal"
          element={<GastronomiaArtesanal />}
        />

        {/* CURSOS */}
        <Route
          path="/cursos"
          element={<Cursos />}
        />

        {/* FEIRAS */}
        <Route
          path="/feiras"
          element={<Feiras />}
        />

        {/* GALERIA */}
        <Route
          path="/galeria"
          element={<Galeria />}
        />

      </Routes>

    </BrowserRouter>

  );
}

export default App;