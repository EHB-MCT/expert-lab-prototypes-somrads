import "../style/style.scss";
import terras from "../assets/img/terras.jpg"

function Terras() {
  return (
    <div className="Terras">
      <div className="terras-container">
        <img  className = "image" src={terras} alt="terras" />
        <div className="container-card">
          <h1 className="PageTitleLeft">Terras</h1>
          <div className="content-description">
            <p>
              Bij café LaPaz is onze terras zeker de uitblinker. Te vinden aan
              het begin van de <br />{" "}
              <span className="highlight">Herbert Hooverplein</span>, gelegen
              naast de prachtige historische fontein. Kom zeker <br /> is langs
              om te genieten van de zon met onze knabbeltjes of van je lunch
              waarbij <br />
              onze drankjes je verder kan helpen.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Terras;
