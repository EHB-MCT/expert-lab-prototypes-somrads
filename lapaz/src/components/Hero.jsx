import "../style/hero.scss";
import "../style/style.scss";
import logo from "../assets/img/logo.png";

function Hero() {
  return (
    <div className="Hero">
      <div className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <a href= "#">
              <img src={logo} alt="lapaz-logo" width="120" height="40" />
            </a>
          </li>

          <li className="nav-item">
            <a href="#">Home</a>
          </li>

          <li className="nav-item">
            <a href="#">Over Ons</a>
          </li>

          <li className="nav-item">
            <a href="#">Contact</a>
          </li>

          <li className="nav-item">
            <a href="#">Reserveren</a>
          </li>
        </ul>
        <div className="banner-area">
          <div className="content-area">
            <div className="content">
            <img src={logo} alt="lapaz-logo" />
              <p>Since 2002</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
