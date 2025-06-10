import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ReactComponent as HTMLIcon } from "../../Assets/icons/html.svg";
import { ReactComponent as CSSIcon } from "../../Assets/icons/css.svg";
import { ReactComponent as JSIcon } from "../../Assets/icons/js.svg";
import { ReactComponent as ReactIcon } from "../../Assets/icons/react.svg";
import { ReactComponent as GitIcon } from "../../Assets/icons/git.svg";
import { ReactComponent as BootstrapIcon } from "../../Assets/icons/bootstrap.svg";
import { ReactComponent as NodeIcon } from "../../Assets/icons/node.svg";
import { Skill } from '../../Components/Skill/Skill';
import { SectionTitle } from '../../Styles/SectionTitle';
import { Container } from '../../Styles/Container';
import { Section } from '../../Styles/Section';

export const Skills = () => {
  const iconSkill = {
    fill: 'var(--body-color)',
    width: '4.5rem',
    height: '4.5rem'
  };

  return (
    <Section id="skills">
      <Container>
          <SectionTitle>Skills</SectionTitle>
          <Swiper
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
                <Skill skillIcon={<HTMLIcon style={iconSkill}/>} skillTitle="HTML" skillLevel="Avançado"/>
              </SwiperSlide>
              <SwiperSlide>
                <Skill skillIcon={<CSSIcon style={iconSkill}/>} skillTitle="CSS" skillLevel="Avançado"/>
              </SwiperSlide>
              <SwiperSlide>
                <Skill skillIcon={<JSIcon style={iconSkill}/>} skillTitle="JavaScript" skillLevel="Avançado"/>
              </SwiperSlide>
              <SwiperSlide>
                <Skill skillIcon={<ReactIcon style={iconSkill}/>} skillTitle="React" skillLevel="Intermediário"/>
              </SwiperSlide>
              <SwiperSlide>
                <Skill skillIcon={<GitIcon style={iconSkill}/>} skillTitle="Git" skillLevel="Avançado"/>
              </SwiperSlide>
              <SwiperSlide>
                <Skill skillIcon={<BootstrapIcon style={iconSkill}/>} skillTitle="Bootstrap" skillLevel="Avançado"/>
              </SwiperSlide>
              <SwiperSlide>
                <Skill skillIcon={<NodeIcon style={iconSkill}/>} skillTitle="Node.js" skillLevel="Básico"/>
              </SwiperSlide>
          </Swiper>
      </Container>
    </Section>
  )
}
