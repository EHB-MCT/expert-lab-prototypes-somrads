import "../style/style.scss";
import "../style/form.scss";

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
            Email
            <input type="email" name="email" placeholder="Jouw email adres" />
          </label>

          <label>
            Boodschap
            <textarea rows="10" placeholder="Typ hier je boodschap"></textarea>
          </label>

          <button className="button">Verstuur</button>
        </form>
      </div>
      <div className="reserveren-container">
        <h1 className="PageTitleRight">Resereveren</h1>
        <div className="content-description">
          Wil je onze <span className="highlight">zaaltje huren</span>? Vul dan
          zeker onze formulier in voor een <br /> reservatie. Wij zullen u dan
          verder contacteren over de nodige details!
        </div>
      </div>
    </div>
  );
}

export default Reserveren;
