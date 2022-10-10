import "../style/style.scss";
import "../style/form.scss";

function Reserveren() {
  return (
    <div className="Reserveren">
      <h1 className="PageTitle">Resereveren</h1>
      <p>
        Wil je een zaaltje reserveren voor je cantus of feestje? Vul dan zeker
        de formulier in!
      </p>
      <div className="form">
        <form>
          
          <label>
            Naam:
            <input type="text" name="name" />
          </label>

          <label>
            Voornaam:
            <input type="text" name="first-name" />
          </label>

          <label>
            Email:
            <input type="email" name="email" />
          </label>

          <label>
            Boodschap:
            <input type="text" name="message" />
          </label>

          <input type="submit" value="Verstuur" />

        </form>
      </div>
    </div>
  );
}

export default Reserveren;
