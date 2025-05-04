import styles from './Skills.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import html from '../../Assets/html.png';
import css from '../../Assets/css.png';
import js from '../../Assets/js.png';
import react from '../../Assets/react.png';
import git from '../../Assets/git.png';

export const Skills = () => {
  return (
    <div className='container containerDiffMobile' id='skills'>
        <h2 className="sectionTitle">Skills</h2>
        <Swiper className={styles.swiperSkills}
            modules={[Navigation, Pagination, Autoplay]}
            autoplay={{
              delay: 2000, 
              disableOnInteraction: false, 
            }}
            loop={true} 
            centeredSlides={true}
            spaceBetween={10} 
            slidesPerView={3} 
            breakpoints={{
              640: {
                spaceBetween: 20,
                slidesPerView: 5,
              },
              998: {
                spaceBetween: 30,
                slidesPerView: 5,
              }
            }}
            >
            <SwiperSlide >
              <div className={styles.skillItem}>
                <img src={html} alt="Ícone HTML" />
                <h3>HTML</h3>
                <p>Avançado</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.skillItem}>
                <img src={css} alt="Ícone CSS" />
                <h3>CSS</h3>
                <p>Avançado</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.skillItem}>
                <img src={js} alt="Ícone JavaScript" />
                <h3>JavaScript</h3>
                <p>Avançado</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.skillItem}>
                <img src={react} alt="Ícone React" />
                <h3>React</h3>
                <p>Avançado</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.skillItem}>
                <img src={git} alt="Ícone Git" />
                <h3>Git</h3>
                <p>Avançado</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.skillItem}>
                <img src={git} alt="Ícone Git" />
                <h3>Git</h3>
                <p>Avançado</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.skillItem}>
                <img src={git} alt="Ícone Git" />
                <h3>Git</h3>
                <p>Avançado</p>
              </div>
            </SwiperSlide>
        </Swiper>
    </div>
  )
}
