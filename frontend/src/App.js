import "./App.css";
import Login from "./pages/login/Login";
import General from "./pages/general/General";
import { Route, Routes } from "react-router-dom";
import Cancel from "./pages/general/Cancel";
import Personal from "./pages/personal/Personal";
import Modif from "./pages/general/Modif";
import Confirm from "./pages/general/Confirm";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./utils/theme";
import Medic from "./pages/medic/Medic";
import PacienteFunctionsTesting from "./pages/testing/PacienteFunctionsTesting";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Medic />} />
        <Route path="/cancelar" element={<Cancel />} />
        <Route path="/modificar" element={<Modif />} />
        <Route path="/confirmar" element={<Confirm />} />
        <Route path="/test/paciente" element={<PacienteFunctionsTesting />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
