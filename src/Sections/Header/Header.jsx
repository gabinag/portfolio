import { useState } from "react";
import { Menu, X } from "lucide-react";
import { DarkMode } from "../../Components/DarkMode/DarkMode";
import { HeaderContainer, HeaderWrapper, MenuMobile } from "./HeaderStyles";
import { Container } from "../../Styles/Container";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <HeaderContainer>
      <Container>
        <HeaderWrapper>
          <a href="#">
            <span>GN</span>
          </a>
          <ul>
            <li><a href="#about">Sobre mim</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projetos</a></li>
            <li><a href="#contact">Contato</a></li>
          </ul>
          <div className="buttonsWrapper">
            <div className="darkModeDesktop">
              <DarkMode />
            </div>
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={28} strokeWidth={2} color="var(--detail-3)"/> : <Menu size={28} strokeWidth={2} color="var(--detail-3)"/>}
            </button>
          </div>
        </HeaderWrapper>
      </Container>

      {isOpen && (
        <MenuMobile>
          <ul>
            <li><a href="#about">Sobre mim</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projetos</a></li>
            <li><a href="#contact">Contato</a></li>
          </ul>
        </MenuMobile>
      )}
    </HeaderContainer>
  );
}
