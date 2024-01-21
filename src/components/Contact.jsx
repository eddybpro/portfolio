import "./Contact.css";
import { IconContext } from "react-icons";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";

function Contact() {
  return (
    <div className="contact" id="contact">
      <h4 className="contact_subtitle">Contact</h4>
      <h1 className="contact_title">Don&apos;t be shy! Hit me up! 👇</h1>
      <div className="contact-container">
        <div className="contact-box">
          <IconContext.Provider value={{ className: "contact-icon" }}>
            <div>
              <FaMapLocationDot />
            </div>
          </IconContext.Provider>
          <div>
            <h4 className="contact-name">Location</h4>
            <p className="contact-type">Fez, Morocco</p>
          </div>
        </div>
        <div className="contact-box">
          <IconContext.Provider value={{ className: "contact-icon" }}>
            <div>
              <MdOutlineMail />
            </div>
          </IconContext.Provider>
          <div>
            <h4 className="contact-name">Mail</h4>
            <p className="contact-type">abdelilaheddyb@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;
