import './App.css'; 
import { About } from './Components/About/About';
import { Header } from './Components/Header/Header';
import { Hero } from './Components/Hero/Hero';
import { Skills } from './Components/Skills/Skills';


function App() {

  return (
    <>
      <Header/>
      <Hero />
      <About />
      <Skills />
    </>
  )
}

export default App
