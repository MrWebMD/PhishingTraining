import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBook, faEnvelopeOpen, faHeartPulse, faPhone, faSms, faSuitcase } from '@fortawesome/free-solid-svg-icons';
import Logo from "./Logo";

const Navigation = () => {
  return <nav className="navigation pageBoundary">
    <div className="navigation__mobileMenu">
      <div className="navigation__hamburgerWrapper">
        <label htmlFor="navigation__checkbox">
          <FontAwesomeIcon icon={faBars} />
        </label>
      </div>
      <div className="navigation__logoWrapper">
        <Logo/>
      </div>
      <div className="navigation__spacer">
      </div>
    </div>
    <div className="navigation__itemsWrapper">
      <input type="checkbox" id="navigation__checkbox" className="navigation__checkbox"/>
      <ul className="navigation__items">
        <li className="navigation__item">
          <FontAwesomeIcon icon={faEnvelopeOpen} />
          <a className="navigation__link">Email</a>
          </li>
        <li className="navigation__item">
          <FontAwesomeIcon icon={faPhone} />
          <a className="navigation__link">Vishing</a>
          </li>
        <li className="navigation__item">
          <FontAwesomeIcon icon={faSms} />
          <a className="navigation__link">Smishing</a>
          </li>
        <li className="navigation__item">
          <FontAwesomeIcon icon={faSuitcase} />
          <a className="navigation__link">Whaling</a>
          </li>
        <li className="navigation__item">
          <FontAwesomeIcon icon={faHeartPulse} />
          <a className="navigation__link">I've been phished</a>
          </li>
        <li className="navigation__item">
          <FontAwesomeIcon icon={faBook} />
          <a className="navigation__link">Skills Test</a>
        </li>
      </ul>
    </div>
  </nav>
}

export default Navigation;