import { FacebookRounded } from "@mui/icons-material";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-wrapper">
        <div className="footer-logo-box">
          <img
            className="logo"
            src="/assets/logo/logo-no-background.png"
            alt="logo"
          />
        </div>
        <div className="footer-contact">
          <span className="contact">usuab, 123 st. slc, ut, usa</span>
          <span className="contact">usuab@utahboxing.org</span>
          <span className="contact">+1.234.567.8901</span>
          <span className="contact">
            <FacebookRounded />
          </span>
        </div>
        <div className="footer-copyright">
          copyright &copy; 2024 | usa utah amateur boxing
        </div>
      </div>
    </div>
  );
};

export default Footer;
