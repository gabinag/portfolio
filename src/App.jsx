import './App.css'; 
import { About } from './Components/About/About';
import { Header } from './Components/Header/Header';
import { Hero } from './Components/Hero/Hero';
import { Projects } from './Components/Projects/Projects';
import { Skills } from './Components/Skills/Skills';
import { Contact } from './Components/Contact/Contact';
import { Footer } from './Components/Footer/Footer';


function App() {

  return (
    <>
      <Header/>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App
