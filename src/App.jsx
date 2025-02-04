import { Routes, Route } from "react-router-dom"

import AboutUs from "./pages/AboutUs"
import Home from "./pages/Home"
import NavigationBar from "./components/Global_combonents/NavigationBar"
import Footer from "./components/Global_combonents/Footer"
import Underconstruction from "./components/Global_combonents/Underconstruction"
import Error404 from "./components/Global_combonents/Error404"
import ScrollToTop from "./components/Global_combonents/ScrollToTop"
import Contact from "./pages/Contact"
import Reservations from "./pages/Reservations"
import Menu from "./pages/Menu"

function App() {

  return (
    <>
      <NavigationBar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/reservation" element={<Reservations />} />
        <Route path="/menu" element={<Menu />} />

        <Route path="/under-construction" element={<Underconstruction />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
