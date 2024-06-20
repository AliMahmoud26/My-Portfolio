import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
// import Hero from "./components/About"
import Skills from "./components/Skills"
import Timeline from "./components/Timeline"
import Projects from "./components/Projects"
import Games from "./subComponents/Games"
import Footer from "./components/Footer"


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      {/* <About /> */}
      <Skills />
      <Timeline />
      <Projects />
      <Games />
      <Footer />
    </>
  )
}

export default App
