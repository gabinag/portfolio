import styles from './Projects.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination} from "swiper/modules";
import teste from '../../Assets/teste.png';
import { Project } from '../../Components/Project/Project';

export const Projects = () => {
  return (
    <div className='container containerDiffMobile' id='projects'>
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
                  },
                }}
                >
                <SwiperSlide>
                    <Project projectImg={teste} projectTitle="teste" projectDesc="teste" projectGitHub="https://github.com/gabinag/devsburger" projectDemo="https://github.com/gabinag/devsburger"/>
                </SwiperSlide>
                <SwiperSlide>
                    <Project projectImg={teste} projectTitle="teste" projectDesc="teste" projectGitHub="https://github.com/gabinag/devsburger" projectDemo="https://github.com/gabinag/devsburger"/>
                </SwiperSlide>
                <SwiperSlide>
                    <Project projectImg={teste} projectTitle="teste" projectDesc="teste" projectGitHub="https://github.com/gabinag/devsburger" projectDemo="https://github.com/gabinag/devsburger"/>
                </SwiperSlide>
                <SwiperSlide>
                    <Project projectImg={teste} projectTitle="teste" projectDesc="teste" projectGitHub="https://github.com/gabinag/devsburger" projectDemo="https://github.com/gabinag/devsburger"/>
                </SwiperSlide>
                <SwiperSlide>
                    <Project projectImg={teste} projectTitle="teste" projectDesc="teste" projectGitHub="https://github.com/gabinag/devsburger" projectDemo="https://github.com/gabinag/devsburger"/>
                </SwiperSlide>
            </Swiper>
        </div>
    </div>
  )
}
