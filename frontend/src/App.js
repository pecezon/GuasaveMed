import "./App.css";
import Login from "./pages/login/Login";
import General from "./pages/general/General";
import { Route, Routes } from "react-router-dom";
import Cancel from "./pages/general/Cancel";
import Personal from "./pages/personal/Personal";
import Modif from "./pages/general/Modif";
import Confirm from "./pages/general/Confirm";

function App() {
  return (
    <Routes>
      <Route path = "/" element={<Login/>}/>
      <Route path="/cancelar" element={<Cancel/>}/>
      <Route path="/modificar" element={<Modif/>}/>
      <Route path="/confirmar" element={<Confirm/>}/>
    </Routes>
  )
}

export default App;

