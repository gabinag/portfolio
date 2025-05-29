import styles from './Skills.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ReactComponent as HTMLIcon } from "../../Assets/html.svg";
import { ReactComponent as CSSIcon } from "../../Assets/css.svg";
import { ReactComponent as JSIcon } from "../../Assets/js.svg";
import { ReactComponent as ReactIcon } from "../../Assets/react.svg";
import { ReactComponent as GitIcon } from "../../Assets/git.svg";
import { ReactComponent as BootstrapIcon } from "../../Assets/bootstrap.svg";
import { ReactComponent as NodeIcon } from "../../Assets/node.svg";
import { Skill } from '../../Components/Skill/Skill';

export const Skills = () => {
  return (
    <section id='skills' className="bgColor">
      <div className='container'>
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
                <Skill skillIcon={<HTMLIcon className="iconSkill"/>} skillTitle="HTML" skillLevel="Avançado"/>
              </SwiperSlide>
              <SwiperSlide>
                <Skill skillIcon={<CSSIcon className="iconSkill"/>} skillTitle="CSS" skillLevel="Avançado"/>
              </SwiperSlide>
              <SwiperSlide>
                <Skill skillIcon={<JSIcon className="iconSkill"/>} skillTitle="JavaScript" skillLevel="Avançado"/>
              </SwiperSlide>
              <SwiperSlide>
                <Skill skillIcon={<ReactIcon className="iconSkill"/>} skillTitle="React" skillLevel="Avançado"/>
              </SwiperSlide>
              <SwiperSlide>
                <Skill skillIcon={<GitIcon className="iconSkill"/>} skillTitle="Git" skillLevel="Avançado"/>
              </SwiperSlide>
              <SwiperSlide>
                <Skill skillIcon={<BootstrapIcon className="iconSkill"/>} skillTitle="Bootstrap" skillLevel="Avançado"/>
              </SwiperSlide>
              <SwiperSlide>
                <Skill skillIcon={<NodeIcon className="iconSkill"/>} skillTitle="Node.js" skillLevel="Básico"/>
              </SwiperSlide>
          </Swiper>
      </div>
    </section>
  )
}
