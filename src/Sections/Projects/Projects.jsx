import styles from "./Projects.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";
import { Project } from "../../Components/Project/Project";
import devsburger from "../../Assets/projects/devsburger.png";
import fintech from "../../Assets/projects/fintech.png";
import litoralUnido from "../../Assets/projects/litoral-unido.png";
import stopflix from "../../Assets/projects/stopflix.png";
import nlwConnect from "../../Assets/projects/nlw-connect-node.png";
import snacks from "../../Assets/projects/snacks-react-native.png";

export const Projects = () => {
  return (
    <section id="projects" className="bgColor">
      <div className="container">
        <h2 className="sectionTitle">Projetos</h2>
        <div className={styles.swiperProjects}>
          <div className="customPrev">◀</div>
          <div className="customNext">▶</div>
          <Swiper
            className={styles.swiper}
            modules={[Navigation, Pagination]}
            navigation={{
              nextEl: ".customNext",
              prevEl: ".customPrev",
            }}
            loop={true}
            centeredSlides={true}
            spaceBetween={10}
            slidesPerView="auto"
            breakpoints={{
              770: {
                spaceBetween: 20,
                slidesPerView: 3,
                slidesPerGroup: 3,
                centeredSlides: false,
              },
            }}
          >
            <SwiperSlide>
              <Project
                projectImg={fintech}
                projectTitle="Fintech"
                projectDesc="Dashboard de análise de vendas. Desenvolvido durante o curso de React com TypeScript da Origamid, com o objetivo de aplicar na prática os conceitos ensinados no curso."
                projectGitHub="https://github.com/gabinag/fintech"
                projectDemo="https://fintech-gabinags-projects.vercel.app/"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Project
                projectImg={litoralUnido}
                projectTitle="Litoral Unido"
                projectDesc='Plataforma para facilitar a coleta de doações de itens essenciais durante o calor extremo. Desenvolvido para o hackathon "Tecnologia Contra Crises Climáticas" da Kipper Dev.'
                projectGitHub="https://github.com/gabinag/litoral-unido"
                projectDemo="https://litoral-unido.vercel.app/"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Project
                projectImg={devsburger}
                projectTitle="Devs Burger"
                projectDesc="Sistema de pedidos, onde os usuários podem adicionar seus pedidos ao carrinho, inserir informações do pedido e acompanhar o status do pedido em tempo real."
                projectGitHub="https://github.com/gabinag/devsburger"
                projectDemo="https://devsburger.vercel.app/"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Project
                projectImg={snacks}
                projectTitle="Snacks React Native"
                projectDesc="Mini apps desenvolvidos em React Native com Expo durante a aula de Desenvolvimento para Dispositivos Móveis II - Sistemas para Internet (Fatec Rubens Lara)"
                projectGitHub="https://github.com/gabinag/snacks-react-native"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Project
                projectImg={nlwConnect}
                projectTitle="NLW Connect - Node.js"
                projectDesc="API RESTful para um sistema de indicações de eventos online, explorando banco de dados SQL, Fastify, documentação com Swagger e validação de dados."
                projectGitHub="https://github.com/gabinag/nlw-connect---trilha-nodejs"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Project
                projectImg={stopflix}
                projectTitle="Stopflix"
                projectDesc='Projeto do curso "Recriando a Interface do Netflix" da Digital Innovation One. A versão criada neste repositório faz referência ao "stop motion".'
                projectGitHub="https://github.com/gabinag/stopflix"
                projectDemo="https://stopflix.vercel.app/"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};
