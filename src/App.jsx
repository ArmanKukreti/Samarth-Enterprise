import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Services from "./pages/Services"
import Gallery from "./pages/Gallery"
import Contact from "./pages/Contact"
import Clients from "./pages/Clients"

function App() {

  return (
    <>
    <Navbar />
    <Routes>
      <Route element={<Home/>} path="/"></Route>
      <Route element={<About/>} path="/about"></Route>
      <Route element={<Services/>} path="/services"></Route>
      <Route element={<Clients/>} path="/clients"></Route>
      <Route element={<Gallery/>} path="/gallery"></Route>
      <Route element={<Contact/>} path="/contact"></Route>
    </Routes>
    </>
  )
}

export default App
