import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Parceiros from "./pages/Parceiros";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/parceiros"
          element={<Parceiros />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;