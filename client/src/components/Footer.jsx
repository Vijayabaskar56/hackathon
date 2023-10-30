import "./FooterStyles.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <p>© All Rights Reserved</p>
        <Link
          to="/"
          className="nav-link">
          {" "}
          vj2k02@gmail.com
        </Link>
      </div>
    </div>
  );
};

export default Footer;
