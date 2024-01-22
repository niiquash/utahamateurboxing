import { FacebookRounded } from "@mui/icons-material";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-wrapper">
        <div className="navbar-logo-box">
          <img
            className="logo"
            src="/assets/logo/logo-no-background.png"
            alt="logo"
          />
        </div>
        <div className="navbar-menu-box">
          <ul className="navbar-menu-list">
            <li className="menu-item">Home</li>
            <li className="menu-item">Leadership</li>
            <li className="menu-item">Membership</li>
            <li className="menu-item">Shows</li>
            <li className="menu-item">Shop</li>
            <li className="menu-item">Contact Us</li>
          </ul>
        </div>
        <div className="navbar-socials-box">
          <a className="socials-link" href="https://facebook.com">
            <FacebookRounded className="socials-link-icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
