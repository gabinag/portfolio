import styles from './Projects.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import teste from '../../Assets/teste.png';

export const Projects = () => {
  return (
    <div className='container containerDiffMobile' id='projects'>
        <h2 className="sectionTitle">Projetos</h2>
        <div className={styles.swiperProjects}>
            <div className="customPrev">◀</div>
            <div className="customNext">▶</div>
            <Swiper
                className={styles.swiper}
                modules={[Navigation, Pagination, Autoplay]}
                navigation={{
                    nextEl: ".customNext",
                    prevEl: ".customPrev",
                }}
                loop={true}
                autoplay={{
                    delay: 5000, 
                    disableOnInteraction: false, 
                }}
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
                <SwiperSlide >
                    <a href="#">
                    <div className={styles.itemProject}>
                        <img src={teste} />
                        <h3>Example</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti tempora aspernatur rem fuga enim at quis delectus unde adipisci natus, animi consequuntur eius quibusdam. Dolore quasi necessitatibus iure repudiandae commodi.</p>
                        <div className={styles.wrapButtons}>
                            <button>Github</button>
                            <button>Live Demo</button>
                        </div>
                    </div>
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="#">
                    <div className={styles.itemProject}>
                        <img src={teste} />
                        <h3>Example</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti tempora aspernatur rem fuga enim at quis delectus unde adipisci natus, animi consequuntur eius quibusdam. Dolore quasi necessitatibus iure repudiandae commodi.</p>
                        <div className={styles.wrapButtons}>
                            <button>Github</button>
                            <button>Live Demo</button>
                        </div>
                    </div>
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="#">
                    <div className={styles.itemProject}>
                        <img src={teste} />
                        <h3>Example</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti tempora aspernatur rem fuga enim at quis delectus unde adipisci natus, animi consequuntur eius quibusdam. Dolore quasi necessitatibus iure repudiandae commodi.</p>
                        <div className={styles.wrapButtons}>
                            <button>Github</button>
                            <button>Live Demo</button>
                        </div>
                    </div>
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="#">
                    <div className={styles.itemProject}>
                        <img src={teste} />
                        <h3>Example</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti tempora aspernatur rem fuga enim at quis delectus unde adipisci natus, animi consequuntur eius quibusdam. Dolore quasi necessitatibus iure repudiandae commodi.</p>
                        <div className={styles.wrapButtons}>
                            <button>Github</button>
                            <button>Live Demo</button>
                        </div>
                    </div>
                    </a>
                </SwiperSlide>
            </Swiper>
        </div>
    </div>
  )
}
