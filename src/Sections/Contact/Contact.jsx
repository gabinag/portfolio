import { Github, Linkedin, Mail } from "lucide-react"

export const Contact = () => {
  return (
    <section id='contact' className="bgColor">
        <div className="container">
            <div className="text-center">
                <h2 className="contactTitle">Contato</h2>
                <p className="contactText">Se nossos interesses se alinham ou você tem uma ideia que gostaria de discutir, estou à disposição. <br />
                <strong>Vamos nos conectar!</strong></p>
            </div>
            <div className="contactLinks d-flex justify-content-center">
                <a href="https://github.com/gabinag" target="__blank">
                    <Github className="contactIcon" />
                </a>
                <a href="https://www.linkedin.com/in/gabriela-nagamuta/" target="__blank">
                    <Linkedin className="contactIcon" />
                </a>
                <a href="mailto:gabriela.nagamuta@gmail.com">
                    <Mail className="contactIcon" />
                </a>
            </div>
        </div>
    </section>
  )
}
