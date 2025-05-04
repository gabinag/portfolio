import { useState } from "react";
import { Menu, X, Moon } from "lucide-react";
import styles from "./Header.module.css";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={`${styles.navbarContainer} container`}>
        <a href="#">
          <div className={styles.menuLogo}>
            <span className={styles.logo}>GN</span>
          </div>
        </a>
        <div className={`${styles.menuConfig} d-none d-md-flex justify-content-end`}>
          <Moon></Moon>
          {/* <select name="" id="">
            <option value="">Pt-br</option>
            <option value="">Eng</option>
          </select> */}
        </div>
        <ul className={styles.menuDesktop}>
          <li><a href="#about">Sobre mim</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projetos</a></li>
          <li><a href="#contact">Contato</a></li>
        </ul>
        <button className={styles.menuToggle} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} strokeWidth={2}/> : <Menu size={28} strokeWidth={2}/>}
        </button>
      </div>

      {isOpen && (
        <div className={styles.menuMobile}>
          <ul>
            <li><a href="#about">Sobre mim</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projetos</a></li>
            <li><a href="#contact">Contato</a></li>
            <li>
              <div className={`${styles.menuConfig} justify-content-center m-0`}>
                <div className="d-flex gap-2">
                  <Moon></Moon>
                  <p className="mb-0">Modo escuro</p>
                </div>
              </div>
          </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
