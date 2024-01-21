import "./Header.css";
import Navbar from "./Navbar";
import { IconContext } from "react-icons";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { html, css, js, react, vite, git } from "../assets";

function Header() {
  return (
    <div className="header" id="home">
      <Navbar />
      <div className="header_wrapper">
        <div className="hero-img-container">
          <button className="skill skill-1">HTML</button>
          <button className="skill skill-2">CSS</button>
          <button className="skill skill-3">JS</button>
          <button className="skill skill-4">Vite</button>
          <button className="skill skill-5">ReactJS</button>
          <button className="skill skill-6">npm</button>
          <button className="skill skill-7">netlify</button>
          <button className="skill skill-8">Frontend</button>
          <button className="skill skill-9">VueJS</button>
          <button className="skill skill-10">TS</button>
          <button className="skill skill-11">Angular</button>
          <button className="skill skill-12">SQL</button>
          <button className="skill skill-13">PHP</button>
          <button className="skill skill-14">Backend</button>
          <button className="skill skill-15">Fullstack</button>
          <button className="skill skill-16">Figma</button>
          <button className="skill skill-17">SCSS</button>
          <button className="skill skill-18">JQuery</button>
          <button className="skill skill-19">Firebase</button>
          <button className="skill skill-20">Bootstrap</button>
          <button className="skill skill-21">git</button>
          <button className="skill skill-22">nodeJS</button>
          <button className="skill skill-23">Python</button>
          <button className="skill skill-24">vercel</button>
        </div>
        <div className="txt-container">
          <h1 className="title">Front-End React Developer 👋</h1>
          <p className="para">
            Hi, I&apos;m Abdelilah Eddyb. A passionate Front-end React Developer
            based in Fez, Morocco. 📍
          </p>
          <div className="links">
            <a href="#" target="_blank">
              <IconContext.Provider value={{ className: "social-icon" }}>
                <div>
                  <FaLinkedin />
                </div>
              </IconContext.Provider>
            </a>
            <a
              href="https://github.com/eddybpro"
              target="_blank"
              rel="noreferrer noopener"
            >
              <IconContext.Provider value={{ className: "social-icon" }}>
                <div>
                  <FaGithub />
                </div>
              </IconContext.Provider>
            </a>
          </div>
        </div>

        <div className="tech-stack-box">
          <h2 className="sub-title">Tech Stack</h2>
          <div className="skill-box">
            <img className="skill-box_img" src={html} alt="html" />
            <img className="skill-box_img" src={css} alt="css" />
            <img className="skill-box_img" src={js} alt="js" />
            <img className="skill-box_img" src={react} alt="react" />
            <img className="skill-box_img" src={vite} alt="vite" />
            <img className="skill-box_img" src={git} alt="git" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;
