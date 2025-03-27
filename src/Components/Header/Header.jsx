import { useState } from "react";
import { Menu, X, Moon } from "lucide-react";
import styles from "./Header.module.css";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <a href="#">
          <div className={styles.menuLogo}>
            <span>GN</span>
          </div>
        </a>
        <div className={styles.menuConfig}>
          <Moon></Moon>
          <select name="" id="">
            <option value="">Pt-br</option>
            <option value="">Eng</option>
          </select>
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
          </ul>
        </div>
      )}
    </nav>
  );
}
