import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Portfolio from "./components/Portfolio"
import Skill from "./components/Skill"
import Tools from "./components/Tools"
import "./components/style.css"

function App() {

  return (
    <>
      <Header />
      <Hero />
      <About />
      <Skill />
      <Tools/>
      <Portfolio/>
      <Contact/>
      <Footer />
    </>
  )
}

export default App
