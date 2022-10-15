import "../style/style.scss";
import bier from "../assets/img/bier.jpg";

function Bieren() {
  return (
    <div className="Bieren">
      <img className="image" src={bier} alt="bieren van het vat" />
      <div className="background-color">
        <div className="container-card">
          <h1 className="PageTitleRight">Bieren Van't Vat</h1>
          <div className="content-description">
            <p>
              Een van de kenmerken van café LaPaz zijn de bieren van’t vat zijn.
              <br />
              We hebben{" "}
              <span className="highlight">
                {" "}
                Stelle Artois, Witte Hoegaarden, Leffe Blond, Karmeliet <br />{" "}
                en La Chouffe
              </span>
              . We zijn een van de weinige cafe’s die zo een brede <br />
              selectie bieren hebben die van’t vat zijn. Met deze selectie zal
              je
              <br />
              zeker en vast eentje vinden die bij jouw smaak zal passen!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bieren;
