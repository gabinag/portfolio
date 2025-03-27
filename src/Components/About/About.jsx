import styles from "./About.module.css"

export const About = () => {
  return (
    <div className="container containerDiff" id="about">
        <h2 className="sectionTitle">Sobre mim</h2>
        <div className={styles.experience__wrapper}>
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
                <div className={`${styles.experience__itens} ${styles.oneItem}`}>
                    <div className={styles.experience__item}>
                        <h4>Tecnologia em Sistemas para Internet</h4>
                        <small>2021 - 2024</small>
                        <p>Fatec Rubens Lara</p>
                    </div>
                </div>
            </div>
        </div>
        <p className={styles.experienceText}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A voluptatem perferendis nihil laborum velit. Maxime ut natus hic iure totam adipisci minima dolor odit odio, minus reprehenderit labore at illo. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores ut asperiores veniam eligendi vel error. Vel fuga dolorem libero amet, corporis explicabo labore consequatur quidem, dolores consectetur harum facilis cum?</p>
    </div>
  )
}
