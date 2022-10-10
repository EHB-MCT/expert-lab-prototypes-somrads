import "../style/style.scss";

function Contact() {
  return (
    <div className="Contact">
      <h1 className="PageTitle">Contact</h1>
      <div className="descriptie">
        <div className="adres">
          <p>Tiensestraat 73 3000 Leuven</p>
        </div>
        <div className="nummer">
          <p>016 20 01 01</p>
        </div>
        <div className="socials">
          <p> Volg ons op Facebook!</p>
          <img src="#" alt="facebook-logo" />
          <p>(google maps)</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
