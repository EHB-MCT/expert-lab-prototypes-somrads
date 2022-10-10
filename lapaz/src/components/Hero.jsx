import '../style/Nav.scss';
import "../style/style.scss";

function Hero() {
  return (
    <div className="Hero">
      <navbar>
      <div className='nav-list'>
        <img src="#" alt="background"/>
        <h3>Lapaz</h3>
        <ul>
          <li className='nav-item'><a href="#">Home</a></li>
          <li className='nav-item'><a href="#">Over Ons</a></li>
          <li className='nav-item'><a href="#">Contact</a></li>
          <li className='nav-item'><a href="#">Reserveren</a></li>
        </ul>
        <h2>Lapaz</h2>
        <p>Since 2004</p>
      </div>
      </navbar>
    </div>
  );
}

export default Hero;