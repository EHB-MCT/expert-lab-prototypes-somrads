import "../style/style.scss";
import logo from "../assets/img/logo.png";
import facebook from "../assets/img/facebook-f.svg";

function Footer() {
  return (
    <div className="Footer">
      <div className="container-footer">
        <ul className="logo">
          <li>
            <img src={logo} alt="lapas logo" />
          </li>
          <span className="since"><li>Since 2002</li></span>
        </ul>

        <ul>
          <li className="footer-title">Home</li>
          <li>Over Ons</li>
          <li>Contact</li>
          <li>Reserveren</li>
        </ul>

        <ul>
          <li className="footer-title">Contacteer Ons</li>
          <li>016 20 01 01</li>
          <li className="fb">
            <img src={facebook} alt="facebook logo" />
          </li>
        </ul>

        <ul>
          <li className="footer-title">Openings uren</li>
          <li>7/7 open vanaf 11 uur</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
