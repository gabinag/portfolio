import "./Hero.css";
import avatar from "../assets/avatar.png";
import { Download } from "lucide-react";

export const Hero = () => {
  return (
    <div className="container">
        <div className="hero">
            <img src={avatar} alt="avatar" />
            <div>
                <h1>Hello World, I'm <strong>Gabriela Nagamuta</strong></h1>
                <h2>Front-end Developer</h2>
                <p>Tecnóloga em Sistemas para Internet pela Fatec Rubens Lara e atuo como Desenvolvedora Front-end Júnior. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit nam magni quas odio aliquam optio doloremque ea consequuntur.</p>
                <button><Download size={18} />Resume</button>
            </div>
        </div>
    </div>
  )
}
