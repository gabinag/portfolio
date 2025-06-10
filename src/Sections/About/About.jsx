import { Container } from "../../Styles/Container"
import { Section } from "../../Styles/Section"
import { SectionTitle } from "../../Styles/SectionTitle"
import { AboutContainer, AboutItens, AboutOneItem, AboutText, AboutWrapper } from "./AboutStyles"

export const About = () => {
  return (
    <Section id="about">
        <Container>
            <SectionTitle>Sobre mim</SectionTitle>
            <AboutContainer>
                <AboutWrapper>
                    <h3>Experiência</h3>
                    <AboutItens>
                        <div>
                            <h4>Analista de Testes - Estágio</h4>
                            <small>2022 - 2024</small>
                            <p>Agência Elefant</p>
                        </div>
                        <div>
                            <h4>Desenvolvedora Front-End - Júnior</h4>
                            <small>2024 - presente</small>
                            <p>Agência Elefant</p>
                        </div>
                    </AboutItens>
                </AboutWrapper>
                <AboutWrapper>
                    <h3>Educação</h3>
                    <AboutOneItem>
                        <div>
                            <h4>Tecnologia em Sistemas para Internet</h4>
                            <small>2021 - 2024</small>
                            <p>Fatec Rubens Lara</p>
                        </div>
                    </AboutOneItem>
                </AboutWrapper>
            </AboutContainer>
            <AboutText>Trabalho na construção de interfaces web modernas, responsivas e focadas na melhor experiência do usuário. Ao longo da minha jornada, desenvolvi projetos que envolvem desde o consumo de APIs até a criação de componentes reutilizáveis com React, aplicação de boas práticas com HTML, CSS, JavaScript. Utilizo ferramentas como Git, Figma e Bootstrap. Além disso, estou constantemente me dedicando ao aprendizado de tecnologias voltadas para testes de qualidade e desenvolvimento back-end, com o objetivo de evoluir para uma atuação Full Stack.</AboutText>
        </Container>
    </Section>
  )
}
