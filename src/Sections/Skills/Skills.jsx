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
import { Skill } from '../../Components/Skill/Skill';

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
              <Skill skillIcon={html} skillTitle="html" skillLevel="Avançado"/>
            </SwiperSlide>
            <SwiperSlide>
              <Skill skillIcon={css} skillTitle="css" skillLevel="Avançado"/>
            </SwiperSlide>
            <SwiperSlide>
              <Skill skillIcon={js} skillTitle="js" skillLevel="Avançado"/>
            </SwiperSlide>
            <SwiperSlide>
              <Skill skillIcon={react} skillTitle="react" skillLevel="Avançado"/>
            </SwiperSlide>
            <SwiperSlide>
              <Skill skillIcon={git} skillTitle="git" skillLevel="Avançado"/>
            </SwiperSlide>
            <SwiperSlide>
              <Skill skillIcon={git} skillTitle="git" skillLevel="Avançado"/>
            </SwiperSlide>
            <SwiperSlide>
              <Skill skillIcon={git} skillTitle="git" skillLevel="Avançado"/>
            </SwiperSlide>
            <SwiperSlide>
              <Skill skillIcon={git} skillTitle="git" skillLevel="Avançado"/>
            </SwiperSlide>
        </Swiper>
    </div>
  )
}
