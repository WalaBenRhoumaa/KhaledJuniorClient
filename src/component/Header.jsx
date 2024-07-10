import '../assets/css/Header.css';
import '../assets/css/bootstrap.min.css'
import EngImg from '../assets/images/Eng.png';
import FrImg from '../assets/images/Fr.png';
import EspImg from '../assets/images/Esp.png';
import PorImg from '../assets/images/Por.png';
import TunImg from '../assets/images/Tun.png';

function Header() {
  return (
    <header id="home" className="home home-main-content">

      <div className="language-select-container">
        <div className="selected-language">
          <img src={EngImg} alt="Selected Language" />
          <p data-lang-en="English" data-lang-es="Español" data-lang-fr="Français" data-lang-ar="عربي" data-lang-pt="Português">English</p>
        </div>
        <ul className="language-options">
          <li data-value="en">
            <img src={EngImg} alt="English" />
            <p>English</p>
          </li>
          <li data-value="fr">
            <img src={FrImg} alt="French" />
            <p>French</p>
          </li>
          <li data-value="es">
            <img src={EspImg} alt="Spanish" />
            <p>Spanish</p>
          </li>
          <li data-value="pt">
            <img src={PorImg} alt="Portuguese" />
            <p>Portuguese</p>
          </li>
          <li data-value="ar">
            <img src={TunImg} alt="Arabic" />
            <p>Arabic</p>
          </li>
        </ul>
      </div>

      <div className="overlay sections">
        <div className="container text-center">
          <div className="row">
            <div className="home-wrapper">
              <div className="col-md-6 col-md-offset-3 col-sm-12 col-xs-12">
                <div className="home-content">
                  <p>&nbsp; &nbsp;</p>
                </div>
              </div>
            </div>

            <a href="#about" style={{ scrollBehavior: 'smooth' }}>
              <div className="home-arrows">
                <div className="body-arrows">
                  <div className="arrows"></div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
