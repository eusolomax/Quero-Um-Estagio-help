import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

import { AuthProvider } from "./auth/Auth"
import { RequireAuth } from "./auth/RequireAuth"
import TemplateDefault from "./templates/Default"
import Home from "./pages/Home"
import Login from "./pages/user/Login"
import Register from "./pages/user/Register"
import Map from "./pages/projects/Map"
import FormCEP from "./pages/projects/FormCEP"
import Testeusestate from "./pages/testes/Testeusestate"


import "./styles/App.css"

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <TemplateDefault>
          <Routes>
            <Route path="/teste" element={<Testeusestate />} />
            <Route path="/user/login" element={<Login />} />
            <Route path="/user/register" element={<Register />} />
            <Route path="/projects/formcep" element={<RequireAuth> <FormCEP /> </RequireAuth>} />
            <Route path="/projects/map" element={<RequireAuth> <Map /> </RequireAuth>} />
            <Route path="/" element={<Home />} />
          </Routes>
        </TemplateDefault>
      </Router>
    </AuthProvider>
  )
}