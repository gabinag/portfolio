import styles from "./About.module.css"

export const About = () => {
  return (
    <section id="about" className="bgColor">
        <div className="container">
            <h2 className="sectionTitle">Sobre mim</h2>
            <div className={`${styles.experience__wrapper} d-flex flex-column flex-md-row align-items-center justify-content-center`}>
                <div className={styles.experience__container}>
                    <h3>Experiência</h3>
                    <div className={styles.experience__itens}>
                        <div className={styles.experience__item}>
                            <h4>Analista de Testes - Estágio</h4>
                            <small>2022 - 2024</small>
                            <p>Agência Elefant</p>
                        </div>
                        <div className={styles.experience__item}>
                            <h4>Desenvolvedora Front-End - Júnior</h4>
                            <small>2024 - presente</small>
                            <p>Agência Elefant</p>
                        </div>
                    </div>
                </div>
                <div className={styles.experience__container}>
                    <h3>Educação</h3>
                    <div className={`${styles.experience__itens} mt-md-3 d-flex flex-column justify-content-center`}>
                        <div className={styles.experience__item}>
                            <h4>Tecnologia em Sistemas para Internet</h4>
                            <small>2021 - 2024</small>
                            <p>Fatec Rubens Lara</p>
                        </div>
                    </div>
                </div>
            </div>
            <p className={styles.experienceText}>Trabalho na construção de interfaces web modernas, responsivas e focadas na melhor experiência do usuário. Ao longo da minha jornada, desenvolvi projetos que envolvem desde o consumo de APIs até a criação de componentes reutilizáveis com React, aplicação de boas práticas com HTML, CSS, JavaScript. Utilizo ferramentas como Git, Figma e Bootstrap. Além disso, estou constantemente me dedicando ao aprendizado de tecnologias voltadas para testes de qualidade e desenvolvimento back-end, com o objetivo de evoluir para uma atuação Full Stack.</p>
        </div>
    </section>
  )
}
