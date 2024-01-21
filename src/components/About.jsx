import "./About.css";
import { laptop, laptop2 } from "../assets";

function About() {
  return (
    <div className="about" id="about">
      <picture>
        <source media="(max-width:900px)" srcSet={laptop} />
        <source media="(min-width:901px)" srcSet={laptop2} />
        <img src={laptop} alt="" className="about-img" />
      </picture>

      <div className="about_txt">
        <h3 className="about_subtitle">About Me</h3>
        <h1 className="about_title">
          Front-end Developer based in Fez, Morocco 📍
        </h1>
        <p className="about_para">
          Hey, my name is Abdelilah, and I&apos;m a Frontend Developer. My
          passion is to create and develop a clean UI/UX for my users.
        </p>
      </div>
    </div>
  );
}
export default About;
