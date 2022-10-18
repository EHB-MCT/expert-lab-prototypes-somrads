import "../style/style.scss";
import facebook from "../assets/img/facebook.png";

function Contact() {
  return (
    <div className="Contact" id="Contact">
      <div className="background-color">
        <h1 className="PageTitleCenter">Contact</h1>
        <div className="content-description">
          <div className="uren">
            <p>
              {" "}
              <span className="highlight"> 7/7 open</span> vanaf 11 uur
            </p>
          </div>
          <div className="adres">
            <ul>
              <li>Tiensestraat 73</li>
              <span className="adress ">
                <li>3000 Leuven</li>
              </span>
            </ul>
          </div>
          <div className="socials">
            <ul>
              <li>016 20 01 01</li>
              <li className="fb-logo">
                <img src={facebook} alt="facebook-logo" />
              </li>
            </ul>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Contact;
