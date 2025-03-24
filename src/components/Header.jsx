import { useState } from "react";
import { Menu, X, Moon } from "lucide-react";
import "./Header.css";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar__container">

        <div className="menu-logo size">
          <span className="logo">GN</span>
        </div>

        <div className="menu-config size">
          <Moon></Moon>
          <select name="" id="">
            <option value="">Pt-br</option>
            <option value="">Eng</option>
          </select>
        </div>

        <ul className="menu-desktop">
          <li><a href="#">Experiência</a></li>
          <li><a href="#">Projetos</a></li>
          <li><a href="#">Skills</a></li>
          <li><a href="#">Contato</a></li>
        </ul>

        <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} strokeWidth={2}/> : <Menu size={28} strokeWidth={2}/>}
        </button>
      </div>

      {isOpen && (
        <div className="menu-mobile">
          <ul>
            <li><a href="#">Experiência</a></li>
            <li><a href="#">Projetos</a></li>
            <li><a href="#">Skills</a></li>
            <li><a href="#">Contato</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
}
