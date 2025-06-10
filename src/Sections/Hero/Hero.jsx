import avatar from "../../Assets/avatar.png";
import { Download } from "lucide-react";
import { ReactComponent as Stars } from "../../Assets/icons/stars.svg";
import { HeroContainer, HeroContent, HeroWrapper } from "./HeroStyles";
import { SectionHero } from "../../Styles/Section";
import { Container } from "../../Styles/Container";

export const Hero = () => {
  return (
    <SectionHero id="hero">
      <Container>
        <HeroContainer>
            <HeroWrapper>
              <img src={avatar} alt="avatar" />
              <Stars className="stars" />
            </HeroWrapper>
            <HeroContent>
                <h1>Hello World, I'm <br /><strong>Gabriela Nagamuta</strong></h1>
                <h2>Front-end Developer</h2>
                <p>Tecnóloga em Sistemas para Internet pela FATEC Rubens Lara, atuo como Desenvolvedora Front-end Júnior, transformando interfaces em experiências intuitivas e funcionais. Estou em constante aprendizado e sempre em busca de novos desafios para evoluir como profissional.</p>
                <a href="CV-Gabriela-Nagamuta.pdf" download="CV-Gabriela-Nagamuta.pdf"><Download size={18} />Download CV</a>
            </HeroContent>
        </HeroContainer>
      </Container>
    </SectionHero>
  )
}
