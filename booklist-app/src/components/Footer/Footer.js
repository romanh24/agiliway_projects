import "./Footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <span className="text-muted">Copyright ⓒ {year}</span>
        <ul className="social-footer-icons">
          <li className="social-icon">
            <FontAwesomeIcon icon={faFacebook} />
          </li>
          <li className="social-icon">
            <FontAwesomeIcon icon={faInstagram} />
          </li>
          <li className="social-icon">
            <FontAwesomeIcon icon={faTwitter} />
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
