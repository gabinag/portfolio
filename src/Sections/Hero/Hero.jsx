import styles from "./Hero.module.css";
import avatar from "../../Assets/avatar.png";
import { Download } from "lucide-react";

export const Hero = () => {
  return (
    <section className="bgColor pb-0">
      <div className={`${styles.hero} container`} id="hero">
          <img src={avatar} alt="avatar" />
          <div>
              <h1>Hello World, I'm <br /><strong>Gabriela Nagamuta</strong></h1>
              <h2>Front-end Developer</h2>
              <p>Tecnóloga em Sistemas para Internet pela Fatec Rubens Lara e atuo como Desenvolvedora Front-end Júnior. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit nam magni quas odio aliquam optio doloremque ea consequuntur.</p>
              <a href="CV-Gabriela-Nagamuta.pdf" download="CV-Gabriela-Nagamuta.pdf"><Download size={18} />Resume</a>
          </div>
      </div>
    </section>
  )
}
