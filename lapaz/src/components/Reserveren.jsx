import "../style/style.scss";
import "../style/form.scss";
import GALLERY from "../assets/img/gallerij";

function Reserveren() {
  return (
    <div className="Reserveren">
      <div className="form">
        <form>
          <label>
            Naam
            <input type="text" name="name" placeholder="Jouw naam" />
          </label>

          <label>
            Voornaam
            <input type="text" name="first-name" placeholder="Jouw voornaam" />
          </label>

          <label>
            E-mail
            <input type="email" name="email" placeholder="Jouw email adres" />
          </label>

          <label>
            Boodschap
            <textarea rows="10" placeholder="Typ hier je boodschap"></textarea>
          </label>

          <button className="button">Verstuur</button>
        </form>
      </div>
      <div className="reserveren-wrap">
        <div className="reserveren-container">
          <h1 className="PageTitleRight">Reserveren</h1>
          <div className="content-description">
            Wil je onze <span className="highlight">zaaltje huren</span>? Vul
            dan zeker onze formulier in voor een <br /> reservatie. Wij zullen u
            dan verder contacteren over de nodige details!
          </div>
        </div>
        <div className="gallerij">
          <div className="gallerij-container">
            <h1 className="PageTitleLeft">Gallerij</h1>
            <div className="image-grid">
              <img src={GALLERY.toog} alt="toog" />
              <img src={GALLERY.mensen} alt="mensen" />
              <img src={GALLERY.mensen2} alt="mensen2" />
              <img src={GALLERY.flessen} alt="flessen" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reserveren;
