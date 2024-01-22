import "./home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-wrapper">
        <div className="hero-img-container">
          <img
            className="hero-img"
            src="/assets/hanging-gloves.jpg"
            alt="boxing"
          />
          <div className="hero-text-wrapper">
            <h4 className="hero-text">Welcome to USA Utah Amateur Boxing</h4>
          </div>
          <div className="hero-link-container">
            <a className="hero-link" href="#">
              find out more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
