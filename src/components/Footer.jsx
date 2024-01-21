import "./Footer.css";
import { IconContext } from "react-icons";
import { FiGithub } from "react-icons/fi";
import { PiLinkedinLogoBold } from "react-icons/pi";

function Footer() {
  return (
    <div className="footer">
      <p className="copyright">
        Copyright &copy; 2024. All rights are reserved
      </p>
      <div className="footer_icons-box">
        <a href="#" target="_blank">
          <IconContext.Provider value={{ className: "footer_icon" }}>
            <div>
              <PiLinkedinLogoBold />
            </div>
          </IconContext.Provider>
        </a>
        <a
          href="https://github.com/eddybpro"
          target="_blank"
          rel="noreferrer noopener"
        >
          <IconContext.Provider value={{ className: "footer_icon" }}>
            <div>
              <FiGithub />
            </div>
          </IconContext.Provider>
        </a>
      </div>
    </div>
  );
}
export default Footer;
