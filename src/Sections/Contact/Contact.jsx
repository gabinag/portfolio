import { ContactWrapper, ContactLinks } from './ContactStyles';
import { Section } from "../../Styles/Section";
import { Container } from "../../Styles/Container";
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export const Contact = () => {
  return (
    <Section id="contact">
        <Container>
            <ContactWrapper>
                <h2>Contato</h2>
                <p>Se nossos interesses se alinham ou você tem uma ideia que gostaria de discutir, estou à disposição. <br />
                <strong>Vamos nos conectar!</strong></p>
            </ContactWrapper>
            <ContactLinks>
                <a href="https://github.com/gabinag" target="__blank">
                    <FaGithub className="contactIcon" />
                </a>
                <a href="https://www.linkedin.com/in/gabriela-nagamuta/" target="__blank">
                    <FaLinkedin className="contactIcon" />
                </a>
                <a href="mailto:gabriela.nagamuta@gmail.com">
                    <FaEnvelope className="contactIcon" />
                </a>
            </ContactLinks>
        </Container>
    </Section>
  )
}
