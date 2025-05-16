import './App.css'; 
import { About } from './Sections/About/About';
import { Header } from './Sections/Header/Header';
import { Hero } from './Sections/Hero/Hero';
import { Projects } from './Sections/Projects/Projects';
import { Skills } from './Sections/Skills/Skills';
import { Contact } from './Sections/Contact/Contact';
import { Footer } from './Sections/Footer/Footer';


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
