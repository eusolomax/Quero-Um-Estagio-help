import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

import TemplateDefault from "./templates/Default"
import Home from "./pages/Home"
import Login from "./pages/user/Login"
import Register from "./pages/user/Register"

import "./styles/App.css"

export default function App() {
  return (
    <Router>
        <TemplateDefault>
          <Routes>
              <Route path="/user/login" element={<Login />} />
              <Route path="/user/register" element={<Register />} />
              <Route path="/" element={<Home />} />
          </Routes>
      </TemplateDefault>
    </Router>
  )
}