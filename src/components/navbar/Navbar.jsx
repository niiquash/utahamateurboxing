import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-wrapper">
        <div className="navbar-logo-box">
          <span className="logo">USA Utah Amateur Boxing</span>
        </div>
        <div className="navbar-menu-box">
          <ul className="navbar-menu-list">
            <li className="menu-item">Leadership</li>
            <li className="menu-item">Membership</li>
            <li className="menu-item">Shows</li>
            <li className="menu-item">Shop</li>
            <li className="menu-item">Contact Us</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
