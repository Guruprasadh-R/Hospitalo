import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Appointment from "./pages/Appointment";  
import Hospital from "./pages/Hospital";
import MedicinesPage from "./pages/MedicinesPage";
import EmergencyPage from "./pages/EmergencyPage";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/appointment" element={<Appointment />} />
      <Route path="/hospitals" element={<Hospital />} />
      <Route path="/medicines" element={<MedicinesPage />} />
      <Route path="/emergency" element={<EmergencyPage />} />
    </Routes>
  );
}

export default App;
