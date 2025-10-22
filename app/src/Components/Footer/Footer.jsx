import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";
import logo from "../../assets/Photos/Logo.png";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <div className="footer">
      <div className="top">
        <FontAwesomeIcon className="icon" icon={faInstagram} />
        <FontAwesomeIcon className="icon" icon={faFacebookSquare} />
        <FontAwesomeIcon className="icon" icon={faXTwitter} />
      </div>

      <div className="mid">
        <img src={logo} alt="logo" className="logo-bottom" />
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <div className="ct-info">
          <div className="ct-info-align">
            <FontAwesomeIcon icon={faPhone} className="icon" />
            <a href="tel:2087460455" className="ct-l">208-746-0455</a>
          </div>
          <br />
          <div className="ct-info-align">
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
            <a className="ct-l" href="info@lcphysicaltherapy.com">info@lcphysicaltherapy.com</a>
          </div>
        </div>
      </div>

      <div className="bottom">
        <p>© 2025 All rights reserved.</p>
        <p>
          Website designed & built by{" "}
          <a className="link" href="https://ac-innovations.io" 
              target="_blank"
              rel="noreferrer noopener"
              aria-label="AC Innovations Link">
            AC Innovations
          </a>{" "}
          - Your Tech Partner
        </p>
      </div>
    </div>
  );
}

export default Footer;
