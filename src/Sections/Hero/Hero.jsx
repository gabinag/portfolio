import styles from "./Hero.module.css";
import avatar from "../../Assets/avatar.png";
import { Download } from "lucide-react";
import { ReactComponent as Stars } from "../../Assets/stars.svg";

export const Hero = () => {
  return (
    <section className="bgColor pb-0">
      <div className={`${styles.hero} container`} id="hero">
          <div className={styles.avatarWrapper}>
            <img src={avatar} alt="avatar" className={styles.avatar} />
            <Stars className={styles.stars} />
          </div>
          <div>
              <h1>Hello World, I'm <br /><strong>Gabriela Nagamuta</strong></h1>
              <h2>Front-end Developer</h2>
              <p>Tecnóloga em Sistemas para Internet pela FATEC Rubens Lara, atuo como Desenvolvedora Front-end Júnior, transformando interfaces em experiências intuitivas e funcionais. Estou em constante aprendizado e sempre em busca de novos desafios para evoluir como profissional.</p>
              <a href="CV-Gabriela-Nagamuta.pdf" download="CV-Gabriela-Nagamuta.pdf"><Download size={18} />Download CV</a>
          </div>
      </div>
    </section>
  )
}
